import { initAllAnimations } from "@/utils/gsapUtils";
import { useLayoutEffect } from "react";

const HeroCarte = () => {
  useLayoutEffect(() => {
    initAllAnimations();
  }, []);

  return (
    <section className="relative py-44 overflow-hidden border-b border-1 border-bourrasque-cream">
      <div className="mx-auto flex flex-col text-center">
        {/* Texte */}
        <h2 className="reveal-scale font-haarlem text-[25vw] lg:text-[150px] text-bourrasque-cream flex flex-col leading-[30vw] lg:leading-[210px] z-10">
          Carte
        </h2>

        <p className="reveal-from-bottom font-poiret text-lg max-w-[500px] mx-auto text-bourrasque-cream">
          Explorez notre carte inventive, où légumes de saison, viandes
          d’exception et inspirations italiennes se mêlent dans des recettes
          simples et raffinées. Le midi, partagez assiettes gourmandes, burgers
          ou pokébowl revisité, et le soir laissez-vous tenter par nos pizzas
          napolitaines cuites au feu de bois. En dessert, succombez à nos glaces
          et sorbets artisanaux, le tout accompagné d’une sélection pointue de
          vins, bières et cocktails maison.
        </p>
      </div>
    </section>
  );
};

export default HeroCarte;
