import Form from "../contact/ContactForm"
import AboutUs from "../aboutUs/AboutUs"
import style from "./form&About.module.scss"

export default function FormAndAbout () {
    return (
        <div className={style.form_about}>
            <Form />
            <AboutUs />
        </div>
    )
}