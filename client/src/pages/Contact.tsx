import React from "react";
import { Helmet } from "react-helmet-async";
import NavBar from "@/components/_shared/NavBar";
import Footer from "@/components/_shared/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import { useGlobal } from "@/contexts/global.context";

const Contact = () => {
  const { restaurant } = useGlobal();
  const { restaurantData, dataLoading } = restaurant;

  return (
    <>
      <Helmet>
        {/* Title */}
        <title>Contact | Bourrasque Lorient</title>

        {/* SEO */}
        <meta
          name="description"
          content="Contactez Bourrasque à Lorient pour toute réservation, question ou événement."
        />

        <link rel="canonical" href="https://embrunslorient.fr/contact" />


        {/* Open Graph */}
        <meta property="og:title" content="Contact | Bourrasque Lorient" />
        <meta
          property="og:description"
          content="Réservez votre table ou demandez des informations : contactez Bourrasque, bar-restaurant au cœur de Lorient."
        />
        <meta property="og:url" content="https://embrunslorient.fr/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://embrunslorient.fr/img/og-default.webp" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@embruns_lorient" />
        <meta name="twitter:title" content="Contact | Bourrasque Lorient" />
        <meta
          name="twitter:description"
          content="Contactez Bourrasque à Lorient pour réserver, poser vos questions ou organiser un événement dans notre bar-restaurant convivial."
        />
        <meta name="twitter:image" content="https://embrunslorient.fr/img/og-default.webp" />
      </Helmet>

      <div className="min-h-screen bg-bourrasque-darkBlue overflow-hidden">
        <NavBar />
        <ContactHero />
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo
              restaurantData={restaurantData}
              dataLoading={dataLoading}
            />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
