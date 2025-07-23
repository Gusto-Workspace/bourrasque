import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import NavBar from "@/components/_shared/NavBar";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import BlocPrezOne from "@/components/home/BlocPrezOne";
import BlocPrezTwo from "@/components/home/BlocPrezTwo";
import Contact from "@/components/_shared/Contact";
import Gallery from "@/components/home/Gallery";
import LunchSpecials from "@/components/home/LunchSpecials";
import JoinUsNow from "@/components/home/JoinUsNow";
import Footer from "@/components/_shared/Footer";
import { initAllAnimations } from "@/utils/gsapUtils";

const Index = () => {
  useEffect(() => {
    initAllAnimations();
  }, []);

  return (
    <>
      <Helmet>
        {/* Title */}
        <title>Bourrasque - Restaurant à Kerroch</title>

        {/* SEO */}
        <meta
          name="description"
          content="Bourrasque, bar & restaurant à Kerroch, célèbre la pêche locale et les produits bretons : brunch gourmand, plats de saison, cocktails et bières artisanales."
        />
        <meta name="author" content="Bourrasque Kerroch" />

        <link rel="canonical" href="https://bourrasquekerroch.fr/" />

        {/* Open Graph */}
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:site_name" content="Bourrasque" />
        <meta property="og:title" content="Bourrasque - Restaurant à Kerroch" />
        <meta
          property="og:description"
          content="Venez découvrir Bourrasque à Kerroch : pizzas le soir, glaces, cocktails maison et bières artisanales dans une ambiance cosy."
        />
        <meta property="og:url" content="https://bourrasque-ploemeur.fr" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://bourrasquekerroch.fr/img/og-default.webp"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@embruns_Kerroch" />
        <meta
          name="twitter:title"
          content="Bourrasque – Restaurant à Kerroch"
        />
        <meta
          name="twitter:description"
          content="Venez découvrir Bourrasque à Kerroch : pizzas le soir, glaces, cocktails maison et bières artisanales dans une ambiance cosy."
        />
        <meta
          name="twitter:image"
          content="https://bourrasquekerroch.fr/img/og-default.webp"
        />
      </Helmet>

      <div className="min-h-screen overflow-hidden bg-bourrasque-darkBlue">
        <NavBar />
        <Hero />
        <Features />
        <BlocPrezOne />
        <BlocPrezTwo />
        <Contact />
        <Gallery />
        <LunchSpecials />
        <JoinUsNow bgColor="bg-bourrasque-blue" />
        <Footer />
      </div>
    </>
  );
};

export default Index;
