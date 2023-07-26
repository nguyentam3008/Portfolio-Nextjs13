import React from "react";
import Infor from "./Infor";
import Experience from "./Experience";
import Projects from "./Projects";
import Footer from "./Footer";
interface HeroProps {}

const Content: React.FC<HeroProps> = () => {
  return (
    <div className="py-0 lg:py-24 lg:pr-5 xl:pr-0">
      <Infor />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
};

export default Content;
