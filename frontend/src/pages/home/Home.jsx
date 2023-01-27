import { FormAndAbout } from "@components/sections/Form&About";
import { Services } from "@components/services/Services";
import { Projects } from "@components/projects/Projects";
import { Reviews } from "@components/reviews/Reviews";
import { Banner } from "@components/banner/Banner";
import style from "./home.module.scss";

export function Home() {
  return (
    <main>
      <Banner />
      <Services />
      <Projects />
      <FormAndAbout />
      <Reviews />
    </main>
  );
}
