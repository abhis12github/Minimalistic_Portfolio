"use client";

import { DATA } from "@/app/data";
import {
  AboutMe,
  Experience,
  Footer,
  Header,
  Navbar,
  Projects,

} from "@/components/sections";
import ContactSection from "@/components/sections/get-in-touch";
import SkillsSection from "@/components/sections/skills";

export default function Page() {
  return (
    <div className="bg-background text-foreground mx-auto px-4 w-full max-lg:px-3 lg:w-2/3 xl:w-3/5 pt-6 sm:pt-12">
      <Navbar />

      <main className="min-h-lvh px-4 max-lg:px-1">
        <Header data={DATA.HEADER} />
        <AboutMe data={DATA.ABOUT_ME} />
        
        <Experience data={DATA.EXPERIENCE} />
        <SkillsSection/>
        <Projects data={DATA.PROJECTS} all={DATA.ALL_PROJECTS} />
        {/* <Skills data={DATA.SKILLS} /> */}
       
        <ContactSection/>
        <Footer />
      </main>
    </div>
  );
}
