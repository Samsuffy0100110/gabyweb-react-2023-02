import { ContactForm } from "../contact/ContactForm";
import { AboutUs } from "../aboutUs/AboutUs";
import style from "./form&About.module.scss";

export function FormAndAbout() {
  return (
    <div className={style.form_about}>
      <ContactForm />
      <AboutUs />
    </div>
  );
}
