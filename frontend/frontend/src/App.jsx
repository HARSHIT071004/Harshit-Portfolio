import AboutMeMain from "./components/aboutMeSection/AboutMeMain";
import ContactMeMain from "./components/contactmeSection/ContactMeMain";
import HeroGradient from "./components/heroSection/HeroGradient";
import HeroMain from "./components/heroSection/HeroMain";
import NavbarMain from "./components/navbar/NavbarMain";
import ProjectsMain from "./components/projectsSection/ProjectsMain";
import SkillsMain from "./components/SkillsMain";
// import SubSkills from "./components/skillsSection/SubSkills";
import SubHeroMain from "./components/SubHeroMain";
import FooterMain from "./footer/FooterMain";
import React from "react";

const App = () => {
  return (
    <main className="font-body bg-[#A09EBB] text-[#000000] relative overflow-hidden">
      <NavbarMain />
      <HeroMain />
      <HeroGradient />
      <SubHeroMain />
      <AboutMeMain />
      <SkillsMain/>
      {/* <SubSkills /> */}
      <ProjectsMain />
      <ContactMeMain />
      <FooterMain />
    </main>
  );
}

export default App;