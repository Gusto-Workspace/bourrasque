import React from "react";
import { Button } from "../ui/button";
import { NavLink } from "react-router-dom";

const BlocPrezTwo = () => {
  return (
    <section className="relative py-12 lg:my-32 text-bourrasque-cream">
      <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-[45%] h-full max-h-[600px] bg-bourrasque-yellow rounded-r-[40px] z-0" />

      <div className="max-w-[90%] lg:max-w-[80%] relative mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        {/* Image */}
        <div
          className="relative w-full md:w-[50%] h-[440px] z-10 rounded-[40px] shadow-lg bg-cover reveal-from-left hover-scale"
          style={{
            backgroundImage: "url('/img/resto-2.webp')",
            backgroundPosition: "center 60%",
          }}
        ></div>

        {/* Texte */}
        <div className="text-center lg:text-start min-w-[320px] max-w-[520px] md:w-[45%] z-10 relative reveal-from-right">
          <h2 className="font-haarlem text-5xl mb-6 inline-block">
            Une Pause Glacee
          </h2>
          <p className="leading-8 mb-8 text-2xl font-poiret">
            Profitez d’une pause fraîcheur avec nos glaces artisanales et
            sorbets plein fruit signés Glaces des Alpes. Composez votre coupe
            signature, personnalisez votre formule à la boule ou craquez pour
            nos verrines gourmandes. Toppings, coulis et liqueurs sont là pour
            sublimer chaque bouchée.
          </p>

          <NavLink to="/contact">
            <Button
              variant="default"
              size="lg"
              className="font-poiret text-lg font-bold bg-bourrasque-yellow hover:bg-bourrasque-yellow/90 text-bourrasque-darkBlue rounded-full px-6 py-3"
            >
              Réserver maintenant
            </Button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default BlocPrezTwo;
