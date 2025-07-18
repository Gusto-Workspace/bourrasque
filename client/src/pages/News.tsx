import React from "react";
import { Helmet } from "react-helmet-async";
import NavBar from "@/components/_shared/NavBar";
import JoinUsNow from "@/components/home/JoinUsNow";
import Footer from "@/components/_shared/Footer";
import NewsHero from "@/components/news/NewsHero";
import NewsList from "@/components/news/NewsList";
import Contact from "@/components/_shared/Contact";
import { useGlobal } from "@/contexts/global.context";

const News = () => {
  const { restaurant } = useGlobal();
  const { restaurantData, dataLoading } = restaurant;

  return (
    <>
      <Helmet>
        {/* Title */}
        <title>News | Bourrasque Kerroch</title>

        {/* SEO */}
        <meta
          name="description"
          content="Restez informés des dernières actualités d’Bourrasque : soirées spéciales, nouveautés de la carte, événements et offres exclusives à Kerroch."
        />

        <link rel="canonical" href="https://embrunsKerroch.fr/news" />

        {/* Open Graph */}
        <meta property="og:title" content="News | Bourrasque Kerroch" />
        <meta
          property="og:description"
          content="Découvrez les news d’Bourrasque: brunchs étendus, soirées cocktails, pop-up gourmands et toutes nos nouveautés face au port de Kerroch."
        />
        <meta property="og:url" content="https://embrunsKerroch.fr/news" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://embrunsKerroch.fr/img/og-default.webp"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@embruns_Kerroch" />
        <meta name="twitter:title" content="Actualités | Bourrasque Kerroch" />
        <meta
          name="twitter:description"
          content="Soyez au courant des dernières news d’Bourrasque : événements, offres et nouveautés gourmandes à Kerroch."
        />
        <meta
          name="twitter:image"
          content="https://embrunsKerroch.fr/img/og-default.webp"
        />
      </Helmet>

      <div className="min-h-screen bg-bourrasque-darkBlue">
        <NavBar />
        <NewsHero />
        <NewsList restaurantData={restaurantData} dataLoading={dataLoading} />
        <Contact />
        <JoinUsNow bgColor="bg-bourrasque-blue" />
        <Footer />
      </div>
    </>
  );
};

export default News;
