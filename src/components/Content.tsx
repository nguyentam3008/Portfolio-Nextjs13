import React from "react";
import Infor from "./Infor";
import Experience from "./Experience";
import Projects from "./Projects";
import Footer from "./Footer";
interface HeroProps {}

const Content: React.FC<HeroProps> = () => {
  return (
    <div className="py-24">
      <Infor />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
};

export default Content;
