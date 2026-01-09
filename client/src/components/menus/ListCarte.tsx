import { useLayoutEffect } from "react";
import { initAllAnimations } from "@/utils/gsapUtils";
import { removeAccents } from "@/utils/removeAccents";

const ListCarte = (props: any) => {
  const { restaurantData, dataLoading } = props;

  useLayoutEffect(() => {
    initAllAnimations();
  }, []);

  return (
    <section className="text-bourrasque-cream max-w-[90%] lg:max-w-[80%] mx-auto space-y-24 py-12 lg:py-32">
      {restaurantData?.dish_categories
        ?.filter(
          (category) =>
            category.visible &&
            category.dishes.some((dish) => dish.showOnWebsite)
        )
        .map((category, i) => (
          <div key={i} className="reveal-scale">
            <div className="mt-2 mb-16 flex flex-col gap-4">
              <h2 className="font-haarlem text-5xl font-bold uppercase text-center mx-auto">
                {removeAccents(category.name)}
              </h2>

              <p className="max-w-[620px] mx-auto font-poiret opacity-70 text-lg text-center">
                {category.description}
              </p>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 stagger-items">
              {category?.dishes
                .filter((dish) => dish.showOnWebsite)
                .map((dish, j) => (
                  <li key={j} className="stagger-item">
                    <div className="flex items-center">
                      <span className="font-poiret text-2xl font-bold">
                        {dish.name}
                      </span>

                      <span className="flex-grow border-b border-dotted border-gray-300 mx-4 min-w-[50px]" />
                      {dish.price && (
                        <span className="font-poiret font-medium text-2xl text-bourrasque-orange whitespace-nowrap">
                          {dish.price} {dish.price && "€"}
                        </span>
                      )}
                    </div>

                    <p className="mt-1 font-poiret text-lg text-bourrasque-cream/40">
                      {dish.description.length > 50
                        ? dish.description.slice(0, 50) + "..."
                        : dish.description}
                    </p>
                  </li>
                ))}
            </ul>
          </div>
        ))}
    </section>
  );
};

export default ListCarte;
