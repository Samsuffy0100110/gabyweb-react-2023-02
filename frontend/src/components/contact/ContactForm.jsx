import style from './contact.module.scss';

export function ContactForm() {
    return (
        <div className={style.container}>
            <div>
                <h2>Get in touch</h2>
            </div>
            <div>
                <form>
                    <div>
                        <input type="text" placeholder="Name" />
                    </div>
                    <div>
                        <input type="email" placeholder="Email" />
                    </div>
                    <div>
                        <textarea placeholder="Message" />
                    </div>
                    <div>
                        <button type="submit">Send</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
