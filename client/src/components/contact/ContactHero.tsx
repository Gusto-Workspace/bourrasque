import { initAllAnimations } from "@/utils/gsapUtils";
import { useLayoutEffect } from "react";

const ContactHero = () => {
  useLayoutEffect(() => {
    initAllAnimations();
  }, []);

  return (
    <section className="relative py-44 overflow-hidden border-b border-1 border-bourrasque-cream">
      <div className="mx-auto flex flex-col text-center">
        {/* Texte */}
        <h2 className="reveal-scale font-haarlem text-[25vw] lg:text-[150px] text-bourrasque-cream flex flex-col leading-[30vw] lg:leading-[210px] z-10">
          Contact
        </h2>

        <p className="reveal-from-bottom font-poiret text-lg max-w-[500px] mx-auto text-bourrasque-cream">
          Vous avez une question, une demande de réservation ou un événement à fêter ?  
          Écrivez-nous via le formulaire ci-dessous ou appelez-nous directement.  
          Notre équipe se tient à disposition pour répondre à toutes vos questions !
        </p>
      </div>
    </section>
  );
};

export default ContactHero;
