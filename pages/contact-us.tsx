import Head from "next/head";

import Navbar from "./components/Navbar";
import Topbar from "./components/Topbar";
import Footer from "./components/Footer";
import PromoBanner from "./components/PromoBanner";
import ContactForm from "./components/ContactForm";
import BigBanner from "./components/BigBanner";

export default function ContactUs() {
  return (
    <>
      <Head>
        <title>Contact Us - Clinic Services</title>
        <meta name="description" content="Clinic Services" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Topbar />
        <Navbar />
        <BigBanner />
        <PromoBanner />
        <ContactForm />
        <Footer />
      </main>
    </>
  );
}
