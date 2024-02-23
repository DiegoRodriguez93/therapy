import Head from "next/head";
import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServiceBanner from "../components/Services/ServiceBanner";
import Therapists from "../components/Services/Therapists";


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
        <ServiceBanner />
        <Therapists />
        <Footer />
      </main>
    </>
  );
}
