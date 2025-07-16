import React from "react";

const Gallery = () => {
  const dishes = [
    "/img/insta-1.webp", // Column 1 top
    "/img/insta-2.webp", // Column 1 bottom
    "/img/insta-6.webp", // Column 2 top
    "/img/insta-4.webp", // Column 2 bottom
    "/img/insta-5.webp", // Column 3 top
    "/img/insta-3.webp", // Column 3 bottom
  ];

  const columns = [0, 1, 2];

  return (
    <section className="pb-20">
      <div className="max-w-[90%] lg:max-w-[80%] mx-auto">
        <div className="flex justify-between items-center mb-10 reveal-from-bottom">
          <h2 className="text-bourrasque-cream font-haarlem text-5xl mb-6 inline-block border-b-2 border-bourrasque-green">
            Galerie
          </h2>
        </div>

        {/* === MOBILE: une image par ligne, carrées === */}
        <div className="grid grid-cols-1 gap-4 md:hidden">
          {dishes.map((src, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-xl aspect-square"
            >
              <img
                src={src}
                alt={`Dish ${idx + 1}`}
                className="w-full h-full object-cover hover-scale"
              />
            </div>
          ))}
        </div>

        {/* === DESKTOP: 3 colonnes top/bottom à tailles différentes === */}
        <div className="hidden md:grid grid-cols-3 gap-4">
          {columns.map((colIdx) => {
            const topSrc = dishes[colIdx * 2];
            const bottomSrc = dishes[colIdx * 2 + 1];
            const isOddColumn = colIdx % 2 === 1;

            // Col 2 inversée
            const topBasis = isOddColumn ? "basis-2/3" : "basis-1/3";
            const bottomBasis = isOddColumn ? "basis-1/3" : "basis-2/3";

            return (
              <div
                key={colIdx}
                className="flex flex-col h-[730px] gap-4"
              >
                <div
                  className={`${topBasis} flex-none overflow-hidden rounded-xl`}
                >
                  <img
                    src={topSrc}
                    alt={`Dish ${colIdx * 2 + 1}`}
                    className="w-full h-full object-cover hover-scale"
                  />
                </div>
                <div
                  className={`${bottomBasis} flex-none overflow-hidden rounded-xl`}
                >
                  <img
                    src={bottomSrc}
                    alt={`Dish ${colIdx * 2 + 2}`}
                    className="w-full h-full object-cover hover-scale"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
