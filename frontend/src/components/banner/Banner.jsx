import style from "./banner.module.scss";

export function Banner() {
  return (
    <section className={style.container}>
      <div className={style.banner}>
        <div className={style.banner__content}>
          <div className={style.title__content}>
            <h1 className={style.title}>
              GabyWeb
              <br />
              <span className={style.title__span}>Solution</span>
            </h1>
          </div>
          <div className={style.subtitle__content}>
            <h2 className={style.subtitle}>
              Agence Web &
              <br />
              <span className={style.subtitle__span}>Marketing Digital</span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
