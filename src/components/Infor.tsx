import React from "react";

interface InforProps {}

const Infor: React.FC<InforProps> = () => {
  return (
    <section className="flex flex-col gap-5 p-4">
      <p className="text-base font-medium tracking-tight text-text-secound ">
        My name is Son truong. I started learning how to code in January 2022
        and spent most of my day experimenting with HTML, CSS, TailwindCss and
        JavaScript, React. I enjoy coding and the challenge of learning
        something new everyday. My goal is to pursue a career in the field of
        front-end development.
      </p>
      <p className="text-base font-medium tracking-tight text-text-secound">
        When I’m not at the computer, I’m usually rock climbing, hanging out
        with my wife and two cats, or running around Hyrule searching for
      </p>
    </section>
  );
};

export default Infor;
