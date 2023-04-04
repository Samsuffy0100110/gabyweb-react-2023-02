import style from "./banner.module.scss";

export function Banner() {
  const siteName = import.meta.env.VITE_SITE_NAME;
  return (
    <div className={style.banner}>
      <div className={style.banner__content}>
        <h1 className={style.title}>
          {siteName}
          <br />
          <span className={style.title__span}>Solution</span>
        </h1>
        <p className={style.banner__description}>
          Votre agence web en Charente Maritime et finistère, spécialisée dans
          la création de sites internet et le marketing digital. Nous vous
          accompagnons dans la création de votre site internet, la gestion de
          votre référencement naturel.
        </p>
        <h2 className={style.subtitle}>
          Agence Web &
          <br />
          <span className={style.subtitle__span}>Marketing Digital</span>
        </h2>
      </div>
    </div>
  );
}
