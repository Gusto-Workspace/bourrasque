import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import NavBar from "@/components/_shared/NavBar";
import JoinUsNow from "@/components/home/JoinUsNow";
import Footer from "@/components/_shared/Footer";
import HeroCarte from "@/components/menus/HeroCarte";
import HeroMenus from "@/components/menus/HeroMenus";
import ListCarte from "@/components/menus/ListCarte";
import ListMenus from "@/components/menus/ListMenus";
import Contact from "@/components/_shared/Contact";
import { initAllAnimations } from "@/utils/gsapUtils";
import { useGlobal } from "@/contexts/global.context";

const Menus = () => {
  useEffect(() => {
    initAllAnimations();
  }, []);

  const { restaurant } = useGlobal();
  const { restaurantData, dataLoading } = restaurant;

  return (
    <>
      <Helmet>
        {/* Title */}
        <title>Carte &amp; Menus | Bourrasque Kerroch</title>

        {/* SEO */}
        <meta
          name="description"
          content="Découvrez la carte de Bourrasque : pizzas, assiettes à partager et menus gourmands, midi et soir, élaborés à partir de produits bretons."
        />

        <link rel="canonical" href="https://bourrasquekerroch.fr/"menus" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Carte & Menus | Bourrasque Kerroch"
        />
        <meta
          property="og:description"
          content="Découvrez la carte de Bourrasque : pizzas, assiettes à partager et menus gourmands, midi et soir, élaborés à partir de produits bretons."
        />
        <meta
          property="og:url"
          content="https://bourrasquekerroch.fr/"menus"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://bourrasquekerroch.fr/"img/og-default.webp"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@embruns_Kerroch" />
        <meta
          name="twitter:title"
          content="Carte & Menus | Bourrasque Kerroch"
        />
        <meta
          name="twitter:description"
          content="Découvrez la carte de Bourrasque : pizzas, assiettes à partager et menus gourmands, midi et soir, élaborés à partir de produits bretons."
        />
        <meta
          name="twitter:image"
          content="https://bourrasquekerroch.fr/"img/og-default.webp"
        />
      </Helmet>

      <div className="min-h-screen bg-bourrasque-darkBlue">
        <NavBar />
        <HeroCarte />
        <ListCarte restaurantData={restaurantData} dataLoading={dataLoading} />
        <HeroMenus />
        <ListMenus restaurantData={restaurantData} dataLoading={dataLoading} />
        <Contact />
        <JoinUsNow bgColor="bg-bourrasque-blue" />
        <Footer />
      </div>
    </>
  );
};

export default Menus;
