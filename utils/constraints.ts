
export const pricingPlans = [
  {
    name: "Basic",
    price: 10,
    description: "Perfect for occasional use",
    items: [
      "5 PDF summaries per month",
      "Standard processing speed",
      "Email support",
    ],
    id: "basic",
    paymentLink:  "https://buy.stripe.com/test_aFaeVfdow9vSfLdgXF3AY00",
    priceId:  "price_1RA9yVCTlpmJdURCo5eDA5T5",
  },
  {
    name: "Pro",
    price: 20,
    description: "For professionals and teams",
    items: [
      "Unlimited PDF summaries",
      "Priority processing",
      "24/7 priority support",
      "Markdown Export",
    ],
    id: "pro",
    paymentLink: "https://buy.stripe.com/test_fZu5kF0BK4by9mPcHp3AY01",
    priceId:  "price_1RA9yVCTlpmJdURCk8Oi1pwO",
  },
];

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 50,
      duration: 0.8,
    },
  },
};