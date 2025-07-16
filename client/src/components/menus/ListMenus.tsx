import React, { useState, useLayoutEffect } from "react";
import { initAllAnimations } from "@/utils/gsapUtils";
import { Card, CardContent } from "@/components/ui/card";
import { removeAccents } from "@/utils/removeAccents";

function groupDishesByCategory(dishes: any[]): Record<string, any[]> {
  return dishes.reduce((acc, dish) => {
    if (!acc[dish.category]) acc[dish.category] = [];
    acc[dish.category].push(dish);
    return acc;
  }, {} as Record<string, any[]>);
}

export default function SimpleMenus(props: any) {
  const { restaurantData, dataLoading } = props;
  const menus: any[] =
    restaurantData?.menus?.filter((m: any) => m.visible) || [];

  const [active, setActive] = useState<string>("");

  useLayoutEffect(() => {
    initAllAnimations();
    if (!active && menus.length) {
      setActive(menus[0]._id);
    } else if (active && !menus.find((m) => m._id === active) && menus.length) {
      setActive(menus[0]._id);
    }
  }, [menus, active]);

  const activeMenu = menus.find((m) => m._id === active);

  if (dataLoading) return <div>Chargement des menus...</div>;
  if (!activeMenu) return <div>Aucun menu disponible.</div>;

  const dishes: any[] =
    Array.isArray(activeMenu.dishes) ? activeMenu.dishes : [];
  const combinations: any[] =
    Array.isArray(activeMenu.combinations) ? activeMenu.combinations : [];
  const grouped = groupDishesByCategory(dishes);

  return (
    <div className="max-w-[90%] lg:max-w-[80%] mx-auto lg:pb-12 lg:pt-24">
      {/* Tabs */}
      <div className="flex justify-cente flex-wrap justify-center mb-12 stagger-items">
        {menus.map((menu) => (
          <button
            key={menu._id}
            onClick={() => setActive(menu._id)}
            className={`font-haarlem relative px-4 mb:px-8 py-3 tracking-wider text-3xl font-medium transition-all duration-300 ${
              active === menu._id
                ? "text-bourrasque-cream"
                : "text-bourrasque-cream/40 hover:text-bourrasque-green"
            }`}
          >
            {removeAccents(menu.name)}
            {active === menu._id && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-bourrasque-blue rounded-full" />
            )}
          </button>
        ))}
      </div>

      {/* Menu Details */}
      <div className="flex flex-col gap-12 desktop:gap-24 desktop:max-w-[80%] mx-auto">
        <div className="w-full flex flex-col items-center text-center">
          {activeMenu.price && (
            <p className="text-bourrasque-cream font-poiret text-2xl mb-4">
              {activeMenu.price} €
            </p>
          )}
          {activeMenu.description && (
            <p className="font-poiret text-bourrasque-cream text-lg text-balance max-w-prose">
              {activeMenu.description}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
          {dishes.length > 0
            ? Object.entries(grouped).map(([category, items]) => (
                <div key={category} className="space-y-4">
                  <h3 className="text-3xl font-medium text-bourrasque-green font-poiret">
                    {category}
                  </h3>
                  {items.map((dish) => (
                    <Card
                      key={dish._id}
                      className="border-none shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group"
                    >
                      <CardContent className="p-6 bg-bourrasque-blue">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-grow">
                            <h4 className="font-haarlem text-2xl font-light text-bourrasque-cream group-hover:text-bourrasque-orange transition-colors duration-300">
                              {removeAccents(dish.name)}
                            </h4>
                            {dish.description && (
                              <p className="font-poiret text-lg mt-2 text-bourrasque-cream/40">
                                {dish.description}
                              </p>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ))
            : combinations.map((combo: any, idx: number) => (
                <Card
                  key={idx}
                  className="border-none shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group"
                >
                  <CardContent className="p-6 bg-bourrasque-blue">
                    <div className="flex items-start justify-between gap-4">
                      <p className="font-haarlem text-2xl text-bourrasque-cream">
                        {removeAccents(combo.categories.join(" - "))}
                      </p>
                      <span className="font-poiret font-medium text-2xl text-bourrasque-orange whitespace-nowrap">
                        {combo.price} €
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
        </div>
      </div>
    </div>
  );
}