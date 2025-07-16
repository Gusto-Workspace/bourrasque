import { Button } from "../ui/button";
import { useGlobal } from "@/contexts/global.context";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const JoinUsNow = (props: any) => {
  const { t } = useTranslation("common");

  const { restaurant } = useGlobal();
  const { restaurantData, dataLoading } = restaurant;

  if (dataLoading || !restaurantData) {
    return null;
  }

  return (
    <section className="relative py-12 overflow-hidden text-bourrasque-cream">
      <div
        className={`absolute left-0 top-1/2 -translate-y-1/2 w-[45%] h-full max-h-[600px] ${
          props.bgColor ?? "bg-bourrasque-orange"
        } rounded-r-[40px] z-0`}
      />

      <div className="max-w-[90%] lg:max-w-[80%] relative mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        {/* Image */}
        <div
          className="relative w-full md:w-[50%] h-[440px] z-30 rounded-[40px] shadow-lg bg-cover reveal-from-left hover-scale"
          style={{
            backgroundImage: "url('/img/resto-3.jpeg')",
            backgroundPosition: "center 50%",
          }}
        />

        {/* Texte + horaires */}
        <div className="text-center lg:text-start min-w-[320px] max-w-[520px] md:w-[45%] z-10 relative reveal-from-right">
          <h2 className="font-haarlem text-5xl mb-6 inline-block border-b-2 border-bourrasque-green">
            Venez nous voir !
          </h2>

          {/* → Titre Horaires */}
          <h3 className="font-poiret text-2xl font-bold mb-4 fade-in">
            Horaires d'ouverture
          </h3>

          {/* → Liste des jours/horaires */}
          <div className="space-y-2 mb-8 stagger-items">
            {restaurantData.opening_hours.map((day: any, index: number) => (
              <div
                key={index}
                className="grid grid-cols-[auto,1fr,auto] items-center stagger-item"
              >
                {/* Nom du jour */}
                <span className="font-poiret text-lg whitespace-nowrap">
                  {t(day.day)}
                </span>
                {/* Trait horizontal */}
                <span className="block h-px bg-gray-300 mx-2" />
                {/* Horaire(s) */}
                <span className="font-poiret text-lg whitespace-nowrap text-right">
                  {day.isClosed
                    ? t("closed")
                    : day.hours.length > 0
                    ? day.hours
                        .map((h: any) => `${h.open} - ${h.close}`)
                        .join(" • ")
                    : "-"}
                </span>
              </div>
            ))}
          </div>

          {/* Bouton */}
          <div className="fade-in">
            <NavLink to="/contact">
              <Button
                variant="default"
                size="lg"
                className="font-poiret text-lg bg-bourrasque-orange hover:bg-bourrasque-orange/90 text-bourrasque-darkBlue rounded-full px-6 py-3"
              >
                Nous contacter
              </Button>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUsNow;
