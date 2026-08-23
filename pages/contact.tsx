import Head from "next/head";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactMethods from "@/components/contact/ContactMethods";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact | Ravindu Kaveesha</title>
        <meta name="description" content="Contact Ravindu Kaveesha for full-stack development, frontend, backend API and UI/UX projects." />
      </Head>
      <main className="contact-page">
        <div className="contact-topbar section-shell">
          <Link href="/" className="contact-back"><ArrowLeft size={16} /> Back home</Link>
          <a href="/documents/Ravindu-Kaveesha-CV.pdf" download className="contact-cv-link">Download CV</a>
        </div>
        <ContactHero />
        <section className="contact-body section-shell">
          <ContactForm />
          <ContactMethods />
        </section>
      </main>
    </>
  );
}
