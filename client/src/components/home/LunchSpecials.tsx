import React from "react";
import { Button } from "../ui/button";
import { NavLink } from "react-router-dom";

const LunchSpecials = () => {
  const images = [
    "/img/brunch-1.webp", // left tall image
    "/img/brunch-2.webp", // right top image
    "/img/brunch-3.webp", // right bottom image
  ];

  return (
    <section className="lg:py-20 mb-12 bg-bourrasque-darkBlue">
      <div className="text-center md:text-start max-w-[90%] lg:max-w-[80%] mx-auto flex flex-col md:flex-row md:gap-12 bg-bourrasque-blue p-6 md:p-12 rounded-[40px]">
        {/* ——————— Bloc TEXTE ——————— */}
        <div className="md:w-1/3 rounded-xl text-bourrasque-cream">
          <h2 className="font-haarlem text-4xl mb-4">
            Pizzas Napolitaines du Soir
          </h2>

          <p className="font-poiret font-bold text-xl mb-4">
            Offrez-vous une parenthèse gourmande chaque soir à partir de 18h,
            autour de nos pizzas authentiques cuites au feu de bois. Une pâte
            moelleuse, une mozzarella filante et des ingrédients importés
            d’Italie pour un voyage direct à Naples.
          </p>

          <div className="font-poiret font-bold text-lg space-y-1 mb-8 list-disc list-inside stagger-items">
            {[
              "Les Classiques",
              "Les Gourmandes",
              "Les Végétariennes",
              "Les Signature",
              "Les Prestiges"
            ].map((item, index) => (
              <div key={index} className="stagger-item">
                {item}
              </div>
            ))}
          </div>

          <div className="fade-in mb-12">
            <NavLink to="/menus">
              <Button
                variant="default"
                size="lg"
                className="font-poiret text-lg bg-bourrasque-orange hover:bg-bourrasque-orange/90 text-bourrasque-darkBlue rounded-full px-6 py-3"
              >
                Voir la carte
              </Button>
            </NavLink>
          </div>
        </div>

        {/* ——————— Bloc IMAGES ——————— */}
        <div className="md:w-2/3 grid grid-cols-2 gap-4 auto-rows-fr h-[360px] my-auto">
          {/* Left : span sur 2 lignes */}
          <div className="row-span-2 h-full overflow-hidden rounded-lg reveal-scale">
            <img
              src={images[0]}
              alt="Lunch special large"
              className="w-full h-full object-cover hover-scale"
            />
          </div>

          {/* Top right */}
          <div className="h-full overflow-hidden rounded-lg reveal-scale">
            <img
              src={images[1]}
              alt="Lunch special top small"
              className="w-full h-full object-cover hover-scale"
            />
          </div>

          {/* Bottom right */}
          <div className="h-full overflow-hidden rounded-lg reveal-scale">
            <img
              src={images[2]}
              alt="Lunch special bottom small"
              className="w-full h-full object-cover hover-scale"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LunchSpecials;
