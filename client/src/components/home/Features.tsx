import React, { useEffect, useRef } from "react";
import { CookingPot, UtensilsCrossed, House } from "lucide-react";

const Features = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      className="font-poiret max-w-[90%] lg:max-w-[80%] rounded-3xl py-16 my-16 px-[5%] mx-auto bg-bourrasque-blue text-pretty"
      ref={sectionRef}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-items">
        {/* Feature 1 */}
        <div className="feature-card bg-bourrasque-cream p-6 rounded-lg shadow-sm stagger-item">
          <CookingPot className="text-bourrasque-cream w-12 h-12 mb-4 bg-bourrasque-orange p-3 rounded-full" />
          <h3 className="text-2xl font-extrabold mb-2">Pizzas Napolitaines</h3>
          <p className="text-bourrasque-darkBlue font-bold text-md">
            Laissez-vous tenter par nos pizzas napolitaines cuites au feu de
            bois : Reine, Végétarienne, 4 Fromages, Burrata ou Truffe, pour une
            pâte moelleuse et des ingrédients d’exception.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="feature-card bg-bourrasque-cream p-6 rounded-lg shadow-sm stagger-item">
          <UtensilsCrossed className="text-bourrasque-cream w-12 h-12 mb-4 bg-bourrasque-yellow p-3 rounded-full" />
          <h3 className="text-2xl font-extrabold mb-2">Cocktails Maison</h3>
          <p className="text-bourrasque-darkBlue font-bold text-md">
            Plongez dans l’ambiance de notre bar cosy et savourez nos cocktails
            classiques et nos créations signature, ainsi que des mocktails
            rafraîchissants.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="feature-card bg-bourrasque-cream p-6 rounded-lg shadow-sm stagger-item">
          <House className="text-bourrasque-cream w-12 h-12 mb-4 bg-bourrasque-blue p-3 rounded-full" />
          <h3 className="text-2xl font-extrabold mb-2">Glaces & Sorbets</h3>
          <p className="text-bourrasque-darkBlue font-bold text-md">
            Offrez-vous une pause fraîcheur avec nos glaces artisanales et
            sorbets plein fruit signés Glaces des Alpes : coupes gourmandes ou
            formules “à la boule” personnalisables
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
