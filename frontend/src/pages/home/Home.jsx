import { FormAndAbout } from "@components/sections/Form&About";
import { Footer } from "@components/layouts/footer/Footer";
import { Services } from "@components/services/Services";
import { Projects } from "@components/projects/Projects";
import { Reviews } from "@components/reviews/Reviews";
import { Banner } from "@components/banner/Banner";
import { Nav } from "@components/layouts/nav/Nav";
import style from "./home.module.scss";

export function Home() {
  return (
    <main>
      <Nav />
      <Banner />
      <Services />
      <Projects />
      <FormAndAbout />
      <Reviews />
      <Footer />
    </main>
  );
}
