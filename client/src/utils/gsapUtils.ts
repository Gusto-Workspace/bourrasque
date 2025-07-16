import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Initialize GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Animation for elements appearing on scroll
export const initRevealAnimations = () => {
  // Reveal from bottom
  gsap.utils.toArray(".reveal-from-bottom").forEach((element: any) => {
    gsap.fromTo(
      element,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 95%",
          toggleActions: "play none none none",
        },
      }
    );
  });

  // Reveal from left
  gsap.utils.toArray(".reveal-from-left").forEach((element: any) => {
    gsap.fromTo(
      element,
      {
        x: -270,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: "back.out(1.3)",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  });

  // Reveal from right
  gsap.utils.toArray(".reveal-from-right").forEach((element: any) => {
    gsap.fromTo(
      element,
      {
        x: 270,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: "back.out(1.3)",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  });

  // Scale reveal
  gsap.utils.toArray(".reveal-scale").forEach((element: any) => {
    gsap.fromTo(
      element,
      {
        scale: 0.9,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 95%",
          toggleActions: "play none none none",
        },
      }
    );
  });

  // Staggered items
  gsap.utils.toArray(".stagger-items").forEach((container: any) => {
    const items = container.querySelectorAll(".stagger-item");
    gsap.fromTo(
      items,
      {
        y: 30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  });

  // Simple fade in
  gsap.utils.toArray(".fade-in").forEach((element: any) => {
    gsap.fromTo(
      element,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  });

  // Image grid
  gsap.utils
    .toArray(".image-grid-item")
    .forEach((element: any, index: number) => {
      gsap.fromTo(
        element,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          delay: index * 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    });

  // Menu preview items appearing with scale
  gsap.utils
    .toArray(".menu-preview-item")
    .forEach((element: any, index: number) => {
      gsap.fromTo(
        element,
        {
          scale: 0,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          delay: index * 0.15,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });
};

// Add hover animations
export const initHoverAnimations = () => {
  // Scale hover for images
  gsap.utils.toArray(".hover-scale").forEach((element: any) => {
    element.addEventListener("mouseenter", () => {
      gsap.to(element, { scale: 1.01, duration: 0.3, ease: "power1.out" });
    });

    element.addEventListener("mouseleave", () => {
      gsap.to(element, { scale: 1, duration: 0.3, ease: "power1.out" });
    });
  });
};

// Animation for hero section
export const animateHeroSection = (selector: string) => {
  const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });

  timeline.fromTo(
    `${selector} .hero-logo`,
    { scale: 0.8, opacity: 0 },
    { scale: 1, opacity: 1, duration: 1.2 }
  );

  return timeline;
};


// Initialize all animations
export const initAllAnimations = () => {
  initRevealAnimations();
  initHoverAnimations();
};