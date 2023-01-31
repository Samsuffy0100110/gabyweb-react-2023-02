import style from './aboutUs.module.scss';

export function AboutUs() {
    return (
        <div className={style.container}>
            <div>
                <h2 className={style.title}>A propos de nous</h2>
            </div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
                nisl nec aliquam tincidunt, nunc elit fermentum massa, eget aliquam nisl
                nunc vel mauris. Suspendisse potenti. Donec auctor, nisl eget
                consectetur lacinia, lacus nisl aliquam mauris, et ultricies nisl nunc
                eget nunc. Nullam eget nisl condimentum, ultricies nisl eget, aliquam
                nisl. Donec auctor, nisl eget consectetur lacinia, lacus nisl aliquam
                mauris, et ultricies nisl nunc eget nunc.
            </p>
        </div>
    );
}
