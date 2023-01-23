import Banner from "@components/sections/Banner";
import Services from "@components/sections/Services";
import Projects from "@components/sections/Projects";
import Advisor from "@components/sections/Advisor";
import FormAndAbout from "@components/sections/Form&About";

export default function Home() {
  return (
    <header>
      <Banner />
      <Services />
      <Projects />
      <FormAndAbout />
      <Advisor />
    </header>
  );
}
