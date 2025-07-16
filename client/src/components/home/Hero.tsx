import React, { useEffect } from "react";
import { LogoSvg } from "../_svgs/logo.svg";
import { animateHeroSection } from "../../utils/gsapUtils";

const Hero = () => {
  useEffect(() => {
    // Only animate hero when component mounts
    const timeline = animateHeroSection("#hero-section");

    // Cleanup
    return () => {
      timeline.kill();
    };
  }, []);

  return (
    <section
      id="hero-section"
      className="overflow-hidden relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/img/hero-bg.webp')" }}
    >
      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-black opacity-20" />

      {/* Logo */}
      <div className="z-10 hero-logo">
        <img
          src="/img/hero-logo.webp"
          className="w-[350px] md:w-[700px] lg:w-auto"
        />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white select-none">
        <span className="mb-2 uppercase text-sm tracking-widest">Scroll</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 animate-bounce"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
