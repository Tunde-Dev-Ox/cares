import type { Metadata } from "next";
import ContactForm from "./contact-form";

export const metadata: Metadata = {
  title: "Contact APC CARES | Secretariat & Public Inquiries",
  description:
    "Get in touch with the APC CARES Secretariat for community needs, media enquiries, partnership opportunities, and general public support requests.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return <ContactForm />;
}
