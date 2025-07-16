import { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLogo, setShowLogo] = useState(!isHome);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Ref et state pour la hauteur du menu mobile
  const menuRef = useRef(null);
  const [menuMaxHeight, setMenuMaxHeight] = useState(0);

  const toggleMenu = () => setIsMenuOpen((o) => !o);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Reset du logo à chaque changement de route
  useEffect(() => {
    setShowLogo(!isHome);
  }, [isHome]);

  // Gestion du scroll pour le background et l'affichage du logo
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
      if (isHome) setShowLogo(scrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  // Quand on ouvre/ferme le menu, on recalcule sa hauteur réelle
  useEffect(() => {
    if (menuRef.current) {
      setMenuMaxHeight(menuRef.current.scrollHeight);
    }
  }, [isMenuOpen]);

  const navBgClass =
    !isHome || isScrolled || isMenuOpen ? "bg-bourrasque-cream shadow-xl" : "bg-transparent";

  return (
    <>
      <div
        className={`
      fixed inset-0 bg-black transition-opacity duration-300
      ${
        isMenuOpen
          ? "opacity-50 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }
      z-40
    `}
        onClick={toggleMenu}
      />
      <nav
        className={`
        fixed top-4 left-[5%] right-[5%] rounded-full z-50
        transition-all duration-300
        ${navBgClass}
      `}
      >
        <div className="max-w-[90%] lg:max-w-[80%] mx-auto flex items-center justify-between py-4">
          {/* Logo */}
          <NavLink to="/">
            <img
              src="/img/logo-dark.png"
              className={`
              h-5 w-auto md:h-8
              ${isHome ? "transition-opacity duration-300 ease-in-out" : ""}
              ${showLogo || isMenuOpen ? "opacity-100" : "opacity-0"}
            `}
              alt="Logo"
            />
          </NavLink>

          {/* Menu desktop */}
          <div
            className={`
            ${showLogo ? "opacity-100" : "opacity-0"}
            hidden lg:flex items-center space-x-8
          `}
          >
            <ul className="flex space-x-6">
              <li>
                <NavLink
                  to="/menus"
                  className={`
                  ${isScrolled || !isHome ? "text-bourrasque-darkBlue" : ""}
                  uppercase font-haarlem tracking-wider text-lg font-bold
                  hover:text-bourrasque-orange transition-colors
                `}
                >
                  Carte & Menus
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/drinks"
                  className={`
                  ${isScrolled || !isHome ? "text-bourrasque-darkBlue" : ""}
                  uppercase font-haarlem tracking-wider text-lg font-bold
                  hover:text-bourrasque-orange transition-colors
                `}
                >
                  Boissons
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/news"
                  className={`
                  ${isScrolled || !isHome ? "text-bourrasque-darkBlue" : ""}
                  uppercase font-haarlem tracking-wider text-lg font-bold
                  hover:text-bourrasque-orange transition-colors
                `}
                >
                  News
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={`
                  ${isScrolled || !isHome ? "text-bourrasque-darkBlue" : ""}
                  uppercase font-haarlem tracking-wider text-lg font-bold
                  hover:text-bourrasque-orange transition-colors
                `}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Bouton mobile */}
          <button
            className={`lg:hidden ${isScrolled || isMenuOpen || !isHome ? "" : "text-bourrasque-cream"}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Menu mobile (toujours présent pour l'animation) */}
          <div
            ref={menuRef}
            className="
            absolute top-full mt-3 left-0 w-full rounded-[20px]
            bg-bourrasque-cream lg:hidden
            overflow-hidden transition-all duration-300 ease-in-out
          "
            style={{ maxHeight: isMenuOpen ? `${menuMaxHeight}px` : "0" }}
          >
            <ul className="flex flex-col p-4 space-y-6 text-center">
              <li>
                <NavLink
                  to="/menus"
                  className="text-black font-semibold uppercase font-haarlem text-lg hover:text-bourrasque-orange transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Carte & Menus
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/drinks"
                  className="text-black font-semibold uppercase font-haarlem text-lg hover:text-bourrasque-orange transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Boissons
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/news"
                  className="text-black font-semibold uppercase font-haarlem text-lg hover:text-bourrasque-orange transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  News
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="text-black font-semibold uppercase font-haarlem text-lg hover:text-bourrasque-orange transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
