import Head from "next/head";
import Image from "next/image";

import Navbar from "./components/Navbar";
import VideoBackground from "./components/VideoBackground";
import Topbar from "./components/Topbar";
import LogoCarousel from "./components/LogoCarousel";
import VideoPromo from "./components/VideoPromo";
import Footer from "./components/Footer";
import PromoBanner from "./components/PromoBanner";
import Recognition from "./components/Recognition";
import Therapists from "./components/Therapists";
import Blog from "./components/Blog";

export default function Home() {
  return (
    <>
      <Head>
        <title>Clinic Services</title>
        <meta name="description" content="Clinic Services" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Topbar />
        <Navbar />
        <VideoBackground />
        <LogoCarousel />
        <VideoPromo />
        <PromoBanner />
        <Recognition />
        <Therapists />
        <PromoBanner />
        <Blog />
        <Footer />
      </main>
    </>
  );
}
