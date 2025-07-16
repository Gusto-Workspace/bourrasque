import { useState, useEffect } from "react";
import { removeAccents } from "@/utils/removeAccents";

const ListDrinks = (props: any) => {
  const [activeCat, setActiveCat] = useState(null);
  const { restaurantData, dataLoading } = props;

  const categories =
    dataLoading || !restaurantData
      ? []
      : restaurantData.drink_categories
          .filter((cat: any) => cat.visible)
          .map((cat: any) => ({
            id: cat._id,
            label: cat.name,
            subs: (cat.subCategories || [])
              .filter((sc: any) => sc.drinks.some((d: any) => d.showOnWebsite))
              .map((sc: any) => ({
                id: sc._id,
                label: sc.name,
                drinks: sc.drinks.filter((d: any) => d.showOnWebsite),
              })),
            drinks: (cat.drinks || []).filter((d: any) => d.showOnWebsite),
          }));

  // Scroll spy pour la catégorie active
  useEffect(() => {
    const handleScroll = () => {
      categories.forEach((cat) => {
        const section = document.getElementById(cat.id);
        if (section) {
          const top = section.getBoundingClientRect().top;
          if (top <= 350 && top > -section.offsetHeight + 350) {
            setActiveCat(cat.id);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [categories]);

  // Animation des <hr> via IntersectionObserver
  useEffect(() => {
    const hrs = document.querySelectorAll(".hr-anim");
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.replace("w-0", "w-full");
            obs.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -1% 0px", threshold: 0.1 }
    );
    hrs.forEach((hr) => observer.observe(hr));
    return () => hrs.forEach((hr) => observer.unobserve(hr));
  }, [categories]);

  // Si données non prêtes, ne rien afficher
  if (dataLoading || !restaurantData) {
    return null;
  }

  // Clique sur un lien de catégorie
  const handleClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      const y = target.getBoundingClientRect().top + window.pageYOffset - 125;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section className="flex container mx-auto gap-12 pt-24 text-bourrasque-cream">
      {/* Categories nav */}
      <nav className="w-1/3 min-w-[430px] hidden lg:block">
        <ul className="sticky top-[96px]">
          <div className="space-y-3 border border-yellow-100 p-12">
            <h2 className="font-haarlem text-6xl font-medium text-bourrasque-orange">
              Categories
            </h2>
            {categories.map((cat) => (
              <li key={cat.id} className={`nav-${cat.id}`}>
                <a
                  href={`#${cat.id}`}
                  onClick={(e) => handleClick(e, cat.id)}
                  className={`font-haarlem w-fit category-link relative flex items-center text-[43px] font-semibold uppercase ml-4 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-bourrasque-blue after:w-0 after:transition-all after:duration-300 ${
                    activeCat === cat.id ? "after:w-full" : ""
                  }`}
                >
                  {removeAccents(cat.label)}
                </a>
              </li>
            ))}
          </div>
        </ul>
      </nav>

      {/* drinks content */}
      <div className="w-full lg:w-2/3 space-y-24">
        {categories.map((cat) => (
          <section id={cat.id} key={cat.id}>
            <h2 className="font-haarlem flex items-center text-5xl mb-6">
              {removeAccents(cat.label)}
            </h2>
            {/* Sous-catégories */}
            {cat.subs.length > 0 && (
              <div className="mb-12">
                {cat.subs.map((sub) => (
                  <div key={sub.id} className="mb-8">
                    <h3 className="font-haarlem text-3xl font-light mb-4">
                      {removeAccents(sub.label)}
                    </h3>
                    {sub.drinks.map((drink) => (
                      <div key={drink._id} className="group">
                        <div className="flex justify-between items-start py-6">
                          <div>
                            <h4 className="font-poiret text-2xl font-bold transition-colors">
                              {removeAccents(drink.name)}
                            </h4>
                            {drink.description && (
                              <p className="font-poiret text-lg text-bourrasque-cream/40 mt-1">
                                {drink.description}
                              </p>
                            )}
                          </div>
                          <span className="font-poiret font-medium text-2xl text-bourrasque-orange whitespace-nowrap">
                            {drink.price} €
                          </span>
                        </div>
                        <hr className="hr-anim border-0 w-0 opacity-20 bg-bourrasque-cream h-[2px] rounded-full transition-width duration-1000 ease-out block" />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            )}
            {/* Boissons directes */}
            {cat.drinks.length > 0 && (
              <div>
                {cat.drinks.map((drink) => (
                  <div key={drink._id} className="group">
                    <div className="flex justify-between items-start py-6">
                      <div>
                        <h3 className="font-haarlem text-3xl font-bold transition-colors">
                          {removeAccents(drink.name)}
                        </h3>
                        {drink.description && (
                          <p className="font-poiret text-lg text-bourrasque-cream/40 mt-1">
                            {drink.description}
                          </p>
                        )}
                      </div>
                      <span className="font-poiret font-medium text-2xl text-bourrasque-orange whitespace-nowrap">
                        {drink.price} €
                      </span>
                    </div>
                    <hr className="hr-anim border-0 w-0 opacity-20 bg-bourrasque-cream h-[2px] rounded-full transition-width duration-1000 ease-out block" />
                  </div>
                ))}
              </div>
            )}
          </section>
        ))}
      </div>
    </section>
  );
};

export default ListDrinks;
