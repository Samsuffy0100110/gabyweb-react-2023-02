import style from "./aboutUs.module.scss";

export function AboutUs() {
    const photos = [
        {
            name: "Alexandre",
            link: "https://this-person-does-not-exist.com/img/avatar-bf7a8424d024f29562d7bf4b18bfea30.jpg",
        },
        {
            name: "Yoann",
            link: "https://this-person-does-not-exist.com/img/avatar-28fc00ab5fd3c1fefffe10aa1754bb6c.jpg",
        },
    ];

    return (
        <div className={style.container}>
            <div className={style.container__title}>
                <h1>Qui sommes-nous ?</h1>
            </div>
                <div className={style.container__content__text}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                        euismod, nisl sit amet aliquam luctus, nunc nisl aliquet mauris,
                        eget aliquam nunc nisl sit amet sapien. Sed condimentum, nisl sit
                        amet aliquam luctus, nunc nisl aliquet mauris, eget aliquam nunc
                        nisl sit amet sapien. Sed condimentum, nisl sit amet aliquam luctus,
                        nunc nisl aliquet mauris, eget aliquam nunc nisl sit amet sapien.
                        Sed condimentum, nisl sit amet aliquam luctus, nunc nisl aliquet
                        mauris, eget aliquam nunc nisl sit amet sapien. Sed condimentum,
                        nisl sit amet aliquam luctus, nunc nisl aliquet mauris, eget aliquam
                        nunc nisl sit amet sapien. Sed condimentum, nisl sit amet aliquam
                        luctus, nunc nisl
                    </p>
                </div>
                <div className={style.container__content__photos}>
                    {photos.map((photo, index) => (
                        <img
                            src={photo.link}
                            alt={photo.name}
                            key={index}
                            className={style.container__content__photos__photo}
                        />
                    ))}
                </div>
                <div className={style.container__content__phone}>
                    <p>
                        <i>☎️</i> 05 56 78 90 12
                    </p>
                </div>
        </div>
    );
}
