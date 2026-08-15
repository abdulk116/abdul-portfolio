import type { Metadata } from "next";

import ContactHero from "@/components/contact/ContactHero";
import ContactDetails from "@/components/contact/ContactDetails";
import ContactForm from "@/components/contact/ContactForm";
import ContactCTA from "@/components/contact/ContactCTA";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Abdul Kareem for frontend development opportunities, software projects, freelance work, and professional collaborations.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main>
      <ContactHero />

      <ContactDetails />

      <ContactForm />

      <ContactCTA />
    </main>
  );
}