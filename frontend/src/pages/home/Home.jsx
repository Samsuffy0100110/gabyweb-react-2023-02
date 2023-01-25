import Banner from "@components/banner/Banner";
import Services from "@components/services/Services";
import Projects from "@components/projects/Projects";
import Advisor from "@components/advisor/Advisor";
import FormAndAbout from "@components/sections/Form&About";
import style from "./home.module.scss";

export default function Home() {
  return (
    <main>
      <Banner />
      <Services />
      <Projects />
      <FormAndAbout />
      <Advisor />
    </main>
  );
}
