import Stripe from "stripe";
import { getDbConnection } from "./db";

export async function handleSubscriptionDeleted({
    subscriptionId,
    stripe,
}: {
    subscriptionId: string;
    stripe: Stripe;
}) {
        console.log("Handling subscription deleted:", subscriptionId);
        try {
            const subscription = await stripe.subscriptions.retrieve(subscriptionId);

            const sql = await getDbConnection();

            await sql`UPDATE users SET status = 'canceled' WHERE customer_id = ${subscription.customer}`;
             
        } catch (error) {
            console.error("Error handling subscription deletion:", error);
            throw error;
        }
    }

export async function handleCheckoutSessionCompleted({
  session,
  stripe,
}: {
  session: Stripe.Checkout.Session;
  stripe: Stripe;
}) {
  console.log("Handling checkout session completed:", session);

  const customerId = session.customer as string;
  const customer = await stripe.customers.retrieve(customerId) as Stripe.Customer;

  // Make sure line_items are expanded before this
  const lineItems = (session as any).line_items?.data;
  const priceId = lineItems?.[0]?.price?.id;

  if ("email" in customer && priceId) {
    const email = customer.email as string;
    const name = customer.name as string;
    const sql = await getDbConnection();

    await createOrUpdateUser({
      sql,
      email,
      fullName: name,
      customerId,
      priceId,
      status: "active",
    });

    await createPayment({
      sql,
      session,
      priceId,
      userEmail: email,
    });
  }
}

async function createOrUpdateUser({
  sql,
  email,
  fullName,
  customerId,
  priceId,
  status,
}: {
  sql: any;
  email: string;
  fullName: string;
  customerId: string;
  priceId: string;
  status: string;
}) {
  try {
    const user = await sql`SELECT * FROM users WHERE email = ${email}`;

    if (user.length === 0) {
      // INSERT new user
      await sql`
        INSERT INTO users (email, full_name, customer_id, price_id, status)
        VALUES (${email}, ${fullName}, ${customerId}, ${priceId}, ${status})
      `;
    } else {
      // ✅ UPDATE existing user
      await sql`
        UPDATE users 
        SET full_name = ${fullName},
            customer_id = ${customerId},
            price_id = ${priceId},
            status = ${status}
        WHERE email = ${email}
      `;
    }
  } catch (error) {
    console.error("Error creating or updating user:", error);
  }
}

async function createPayment({
  sql,
  session,
  priceId,
  userEmail,
}: {
  sql: any;
  session: Stripe.Checkout.Session;
  priceId: string;
  userEmail: string;
}) {
  try {
    const { amount_total, id, status } = session;

    await sql`
      INSERT INTO payments (amount, status, stripe_payment_id, price_id, user_email)
      VALUES (${amount_total}, ${status}, ${id}, ${priceId}, ${userEmail})
    `;
  } catch (error) {
    console.error("Error inserting payment record:", error);
  }
}
