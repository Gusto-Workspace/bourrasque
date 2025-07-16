
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };
  
  return (
    <section className="py-32 my-24 relative">
      {/* Fond avec dégradé + image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/img/bande-1.webp')",
        }}
      />
      
      {/* Card blanche */}
      <motion.div 
        className="relative z-10 max-w-md mx-auto px-4 text-pretty"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.div 
          className="bg-bourrasque-cream rounded-2xl shadow-xl p-6 md:p-8 text-center"
          whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
          transition={{ duration: 0.3 }}
        >
          {/* Titre */}
          <h2 className="font-haarlem text-bourrasque-darkBlue text-2xl md:text-3xl mb-4">
            Contactez-nous
          </h2>
          
          {/* Description */}
          <p className="font-poiret text-lg font-bold text-bourrasque-darkBlue mb-6">
            Vous avez des questions ou besoin d'informations ? Notre équipe est à votre écoute.
          </p>
          
          {/* Bouton */}
          <button
            onClick={handleContactClick}
            className="font-poiret text-lg font-bold inline-block w-full bg-bourrasque-darkBlue text-bourrasque-cream py-3 rounded-full hover:bg-bourrasque-mint-green/90 transition-colors"
          >
            Nous contacter
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
