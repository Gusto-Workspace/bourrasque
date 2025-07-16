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
        <title>News | Bourrasque Lorient</title>

        {/* SEO */}
        <meta
          name="description"
          content="Restez informés des dernières actualités d’Bourrasque : soirées spéciales, nouveautés de la carte, événements et offres exclusives à Lorient."
        />

        <link rel="canonical" href="https://embrunslorient.fr/news" />

        {/* Open Graph */}
        <meta property="og:title" content="News | Bourrasque Lorient" />
        <meta
          property="og:description"
          content="Découvrez les news d’Bourrasque: brunchs étendus, soirées cocktails, pop-up gourmands et toutes nos nouveautés face au port de Lorient."
        />
        <meta property="og:url" content="https://embrunslorient.fr/news" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://embrunslorient.fr/img/og-default.webp"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@embruns_lorient" />
        <meta name="twitter:title" content="Actualités | Bourrasque Lorient" />
        <meta
          name="twitter:description"
          content="Soyez au courant des dernières news d’Bourrasque : événements, offres et nouveautés gourmandes à Lorient."
        />
        <meta
          name="twitter:image"
          content="https://embrunslorient.fr/img/og-default.webp"
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
