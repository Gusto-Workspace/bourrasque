import { NavLink } from "react-router-dom";
import {
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Twitter,
} from "lucide-react";
import { useGlobal } from "@/contexts/global.context";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const { restaurant } = useGlobal();
  const { restaurantData, dataLoading } = restaurant;

  return (
    <footer className="text-bourrasque-cream pt-16 pb-6 md:mt-24">
      <div className="max-w-[90%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Column 1 - Logo and Address */}
          <div className="flex justify-center lg:justify-start">
            <div className="font-poiret text-lg font-bold flex flex-col items-center md:items-start">
              <img
                src="/img/logo.png"
                className="max-w-[125px] mb-2"
                alt="logo"
              />
              <address className="not-italic text-center md:text-left">
                21 rue du port blanc
                <br />
                56270 Ploemeur
                <br />
              </address>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="flex justify-center">
            <div className="flex flex-col items-center md:items-start">
              <h3 className="font-haarlem tracking-wider text-2xl text-center w-full font-bold mb-4">
                Liens rapides
              </h3>
              <nav>
                <ul className="text-center flex flex-col items-center lg:flex-row gap-6 md:text-left">
                  <li>
                    <NavLink
                      to="/menus"
                      className="font-poiret text-xl font-bold whitespace-nowrap hover:text-bourrasque-orange transition-colors"
                    >
                      Carte & Menus
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/drinks"
                      className="font-poiret text-xl font-bold whitespace-nowrap hover:text-bourrasque-orange transition-colors"
                    >
                      Boissons
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/news"
                      className="font-poiret text-xl font-bold whitespace-nowrap hover:text-bourrasque-orange transition-colors"
                    >
                      News
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/contact"
                      className="font-poiret text-xl font-bold whitespace-nowrap hover:text-bourrasque-orange transition-colors"
                    >
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          {/* Column 3 - Social Media */}
          <div className="flex justify-center lg:justify-end">
            <div className="flex flex-col items-center md:items-start">
              <h3 className="font-haarlem tracking-wider text-2xl font-bold mb-4">
                Nous suivre
              </h3>
              <div className="grid grid-cols-3 gap-4 justify-items-center">
                <NavLink
                  to="/contact"
                  className="hover:text-bourrasque-orange transition-colors p-2"
                  aria-label="Nous contacter par e-mail"
                >
                  <Mail size={24} />
                </NavLink>
                {restaurantData?.social_media?.facebook && (
                  <a
                    href={restaurantData.social_media.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-bourrasque-orange transition-colors p-2"
                    aria-label="Page Facebook Bourrasque Kerroch"
                  >
                    <Facebook size={24} />
                  </a>
                )}
                {restaurantData?.social_media?.instagram && (
                  <a
                    href={restaurantData.social_media.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-bourrasque-orange transition-colors p-2"
                    aria-label="Page Instagram Bourrasque Kerroch"
                  >
                    <Instagram size={24} />
                  </a>
                )}
                {restaurantData?.social_media?.linkedIn && (
                  <a
                    href={restaurantData.social_media.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-bourrasque-orange transition-colors p-2"
                    aria-label="Page Linkedin Bourrasque Kerroch"
                  >
                    <Linkedin size={24} />
                  </a>
                )}
                {restaurantData?.social_media?.twitter && (
                  <a
                    href={restaurantData.social_media.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-bourrasque-orange transition-colors p-2"
                    aria-label="Page Twitter Bourrasque Kerroch"
                  >
                    <Twitter size={24} />
                  </a>
                )}
                {restaurantData?.social_media?.youtube && (
                  <a
                    href={restaurantData.social_media.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-bourrasque-orange transition-colors p-2"
                    aria-label="Page Youtube Bourrasque Kerroch"
                  >
                    <Youtube size={24} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-6 border-t border-bourrasque-cream/30">
          <p className="font-poiret text-md font-bold text-bourrasque-cream opacity-40">
            &copy; {currentYear} Bourrasque. Tous droits réservés • Propulsé par{" "}
            <a
              className="underline underline-offset-2"
              target="_blank"
              href="https://www.gusto-manager.com"
            >
              Gusto Manager
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
