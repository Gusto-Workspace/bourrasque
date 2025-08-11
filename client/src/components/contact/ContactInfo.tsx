import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const ContactInfo = (props: any) => {
  const { t } = useTranslation("common");

  const { restaurantData, dataLoading } = props;

  return (
    <motion.div
      className="bg-bourrasque-blue p-8 rounded-[40px] shadow-lg h-fit mx-auto max-w-[800px]"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      viewport={{ once: true }}
    >
      <h2 className="font-haarlem text-3xl mb-6 text-bourrasque-cream">
        Informations
      </h2>

      <div className="space-y-8 text-bourrasque-cream">
        <div className="flex items-start">
          <div className="bg-bourrasque-darkBlue rounded-full p-3 mr-4">
            <Phone className="text-white" size={24} />
          </div>
          <div>
            <h3 className="font-bold text-lg mb-1">Téléphone</h3>
            <p className="text-bourrasque-cream/40">{restaurantData?.phone}</p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="bg-bourrasque-darkBlue rounded-full p-3 mr-4">
            <Mail className="text-white" size={24} />
          </div>
          <div>
            <h3 className="font-bold text-lg mb-1">Email</h3>
            <p className="text-bourrasque-cream/40">{restaurantData?.email}</p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="bg-bourrasque-darkBlue rounded-full p-3 mr-4">
            <MapPin className="text-white" size={24} />
          </div>
          <div>
            <h3 className="font-bold text-lg mb-1">Adresse</h3>
            <p className="text-bourrasque-cream/40">
              {restaurantData?.address?.line1}
              <br />
              {restaurantData?.address?.zipCode} {restaurantData?.address?.city}
              , {restaurantData?.address?.country}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 items-start">
          <div className="flex items-center">
            <div className="bg-bourrasque-darkBlue rounded-full p-3 mr-4">
              <Clock className="text-white" size={24} />
            </div>
            <h3 className="font-bold text-lg mb-1">Horaires d'ouverture</h3>
          </div>

          <div className="w-full">
            <div className="flex flex-col gap-2">
              {restaurantData?.opening_hours?.map((day: any, index: number) => (
                <div
                  key={index}
                  className="flex justify-between items-center stagger-item text-bourrasque-cream/40"
                >
                  {/* Nom du jour */}
                  <span className="whitespace-nowrap">{t(day.day)}:</span>
                  {/* Trait horizontal */}
                  <span className="block h-px w-full bg-bourrasque-cream/40 mx-1 sm:mx-2" />
                  {/* Horaire(s) */}
                  <span className="whitespace-nowrap text-right">
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
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactInfo;
