import Link from "next/link";
import React from "react";
import AllProjects from "../../components/AllProjects";

const Archive = () => {
  return (
    <div className="w-full max-w-[1130px] mx-auto px-3 py-28">
      <h2>
        <Link
          className="inline-flex items-center mb-2 font-semibold leading-tight text-gr-5a group"
          href="/"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-4 h-4 mr-1 transition-transform rotate-180 group-hover:-translate-x-2"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
              clip-rule="evenodd"
            ></path>
          </svg>
          HungSon
        </Link>
      </h2>
      <AllProjects />
    </div>
  );
};

export default Archive;
