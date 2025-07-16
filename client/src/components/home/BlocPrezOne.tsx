import React from "react";
import { Button } from "../ui/button";
import { NavLink } from "react-router-dom";

const BlocPrezOne = () => {
  return (
    <section className="relative py-12 lg:my-32 text-bourrasque-cream">
      <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[45%] h-full max-h-[600px] bg-bourrasque-orange rounded-l-[40px] z-0" />

      <div className="max-w-[90%] lg:max-w-[80%] relative mx-auto flex flex-col-reverse md:flex-row justify-between items-center gap-12">
        {/* Texte */}
        <div className="text-center lg:text-start min-w-[320px] max-w-[520px] md:w-[45%] z-10 relative reveal-from-left">
          <h2 className="font-haarlem text-5xl mb-6 inline-block">
            Bienvenue chez Bourrasque
          </h2>
          <p className="font-poiret leading-8 mb-8 text-2xl">
            Votre nouveau restaurant Bourrasque, situé au 21 rue du port blanc à Ploemeur
            vous souhaite la bienvenue ! Notre carte, pensée pour évoluer au fil
            des saisons, s’articule autour d’entrées iodées, de savoureux plats
            terre & mer, de pizzas napolitaines, de glaces et sorbets
            artisanaux, le tout accompagné d’une sélection pointue de vins,
            bières artisanales et cocktails maison.
          </p>
          <NavLink to="/menus">
            <Button
              variant="default"
              size="lg"
              className="font-poiret text-lg font-bold bg-bourrasque-orange hover:bg-bourrasque-orange/90 text-bourrasque-darkBlue rounded-full px-6 py-3"
            >
              Voir la carte
            </Button>
          </NavLink>
        </div>

        {/* Image */}
        <div
          className="relative w-full md:w-[50%] h-[440px] z-10 rounded-[40px] shadow-lg bg-cover reveal-from-right hover-scale"
          style={{
            backgroundImage: "url('/img/resto-1.webp')",
            backgroundPosition: "center 80%",
          }}
        ></div>
      </div>
    </section>
  );
};

export default BlocPrezOne;
