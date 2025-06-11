import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <section className="flex items-center justify-center h-screen">
      <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SignUp />
      </div>
    </section>
  );
}
