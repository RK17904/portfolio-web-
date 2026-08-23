import Head from "next/head";
import Navbar from "@/components/home/Navbar";
import Hero from "@/components/home/Hero";
import ClientStrip from "@/components/home/ClientStrip";
import Projects from "@/components/home/Projects";
import QuoteBreak from "@/components/home/QuoteBreak";
import Services from "@/components/home/Services";
import About from "@/components/home/About";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import FinalCTA from "@/components/home/FinalCTA";
import FloatingContact from "@/components/home/FloatingContact";

/**
 * Main Home page composition.
 * Keep this file focused on section order. Each page section lives as a
 * separate component inside components/home/.
 */
export default function Home() {
  return (
    <>
      <Head>
        <title>Ravindu Kaveesha — Full-Stack & UI/UX Developer</title>
        <meta
          name="description"
          content="Portfolio of Ravindu Kaveesha — full-stack development, frontend engineering, backend APIs and UI/UX design."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main>
        <Navbar />
        <Hero />
        <ClientStrip />
        <Projects />
        <QuoteBreak />
        <Services />
        <About />
        <Testimonials />
        <FAQ />
        <FinalCTA />
        <FloatingContact />
      </main>
    </>
  );
}
