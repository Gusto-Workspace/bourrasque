import React from "react";
import { Helmet } from "react-helmet-async";
import NavBar from "@/components/_shared/NavBar";
import JoinUsNow from "@/components/home/JoinUsNow";
import Footer from "@/components/_shared/Footer";
import ListDrinks from "@/components/drinks/ListDrinks";
import Contact from "@/components/_shared/Contact";
import HeroDrinks from "@/components/drinks/HeroDrinks";
import { useGlobal } from "@/contexts/global.context";

const Drinks = () => {
  const { restaurant } = useGlobal();
  const { restaurantData, dataLoading } = restaurant;

  return (
    <>
      <Helmet>
        {/* Title */}
        <title>Boissons | Bourrasque Kerroch</title>

        {/* SEO */}
        <meta
          name="description"
          content="Découvrez notre sélection de boissons chez Bourrasque à Kerroch : cocktails maison, bières artisanales bretonnes et vins de petits producteurs pour des instants conviviaux."
        />

        <link rel="canonical" href="https://bourrasquekerroch.fr/drinks" />

        {/* Open Graph */}
        <meta property="og:title" content="Boissons | Bourrasque Kerroch" />
        <meta
          property="og:description"
          content="Savourez nos cocktails créatifs, bières locales et vins de petits domaines chez Bourrasque, bar-restaurant au cœur de Kerroch."
        />
        <meta property="og:url" content="https://bourrasquekerroch.fr/drinks" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://bourrasquekerroch.fr/img/og-default.webp" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@embruns_Kerroch" />
        <meta name="twitter:title" content="Boissons | Bourrasque Kerroch" />
        <meta
          name="twitter:description"
          content="Cocktails maison, bières artisanales et vins de petits producteurs : plongez dans l’univers des boissons de Bourrasque, à Kerroch."
        />
        <meta name="twitter:image" content="https://bourrasquekerroch.fr/img/og-default.webp" />
      </Helmet>

      <div className="min-h-screen bg-bourrasque-darkBlue">
        <NavBar />
        <HeroDrinks />
        <ListDrinks restaurantData={restaurantData} dataLoading={dataLoading} />
        <Contact />
        <JoinUsNow
          restaurantData={restaurantData}
          dataLoading={dataLoading}
          bgColor="bg-bourrasque-blue"
        />
        <Footer />
      </div>
    </>
  );
};

export default Drinks;
