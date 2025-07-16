const HeroMenus = () => {
  return (
    <section className="relative py-44 overflow-hidden border-y border-1 border-bourrasque-cream">
      <div className="mx-auto flex flex-col text-center">
        {/* Texte */}
        <h2 className="font-haarlem text-[25vw] lg:text-[150px] text-bourrasque-cream flex flex-col leading-[30vw] lg:leading-[210px] z-10">
          Menus
        </h2>

        <p className="font-poiret text-lg max-w-[500px] mx-auto text-bourrasque-cream">
          Que vous fassiez escale pour un déjeuner express ou que vous
          retrouviez vos proches pour une soirée détendue, nos menus sont conçus
          pour vous surprendre à chaque visite. Chaque semaine, laissez-vous
          séduire par nos suggestions du moment, mêlant plats du jour créatifs,
          assiettes à partager et recettes signatures. Installez-vous dans une
          ambiance conviviale et accompagnez votre repas de nos cocktails maison
          ou d’une bière artisanale soigneusement sélectionnée.
        </p>
      </div>
    </section>
  );
};

export default HeroMenus;
