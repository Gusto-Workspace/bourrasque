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
        <title>Carte &amp; Menus | Bourrasque Lorient</title>

        {/* SEO */}
        <meta
          name="description"
          content="Découvrez la carte d’Bourrasque : poissons frais de la pêche locale, assiettes à partager et menus gourmands, midi et soir, élaborés à partir de produits bretons."
        />

        <link rel="canonical" href="https://embrunslorient.fr/menus" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Carte & Menus | Bourrasque Lorient"
        />
        <meta
          property="og:description"
          content="Explorez nos formules du midi, brunchs du week-end et assiettes à partager le soir, dans un cadre cosy face au port de pêche."
        />
        <meta property="og:url" content="https://embrunslorient.fr/menus" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://embrunslorient.fr/img/og-default.webp"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@embruns_lorient" />
        <meta
          name="twitter:title"
          content="Carte & Menus | Bourrasque Lorient"
        />
        <meta
          name="twitter:description"
          content="Formules déjeuner, brunchs et assiettes à partager : vivez l’expérience gourmande d’Bourrasque à Lorient."
        />
        <meta
          name="twitter:image"
          content="https://embrunslorient.fr/img/og-default.webp"
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
