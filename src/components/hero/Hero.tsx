import styledHero from "./Hero.module.css";
export const Hero = () => {
  return (
    <>
      <div className={`${styledHero.heroContainer}`}>
        <picture className={`${styledHero.image}`}>
          <img src="/src/img/hero-img/heroImg.avif" alt="" />
        </picture>
        <div className={`${styledHero.heroInfo}`}>
          <div>
            <h2 className="">Model Y</h2>
            <p>Starting at $37,490</p>
          </div>

          <div className={`${styledHero.heroBtn}`}>
            <button className={`${styledHero.btnOrder}`}>Ordenar</button>
            <button className={`${styledHero.btnInfo}`}>Más información</button>
          </div>
        </div>
      </div>
    </>
  );
};
