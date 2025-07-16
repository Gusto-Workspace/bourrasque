import { initAllAnimations } from "@/utils/gsapUtils";
import { useLayoutEffect } from "react";

const HeroDrinks = () => {
  useLayoutEffect(() => {
    initAllAnimations();
  }, []);

  return (
    <section className="relative py-44 overflow-hidden border-b border-1 border-bourrasque-cream">
      <div className="mx-auto flex flex-col text-center">
        {/* Texte */}
        <h2 className="reveal-scale font-haarlem text-[25vw] lg:text-[150px] text-bourrasque-cream flex flex-col leading-[30vw] lg:leading-[210px] z-10">
          Boissons
        </h2>

        <p className="reveal-from-bottom font-poiret text-lg max-w-[500px] mx-auto text-bourrasque-cream text-balance">
          Restez informés de toutes nos nouveautés : soirées à thème, lancements
          de menus de saison, pop-ups gourmands et événements exclusifs au
          restaurant !
        </p>
      </div>
    </section>
  );
};

export default HeroDrinks;
