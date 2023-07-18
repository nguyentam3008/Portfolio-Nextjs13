import React from "react";
import Link from "next/link";
import { displayNav } from "../constants/dataNav";

const Navbar: React.FC = () => {
  return (
    <ul className="flex-col hidden gap-5 disabled: lg:flex">
      {displayNav.map((item) => (
        <li
          className="flex items-center gap-3 cursor-pointer group"
          key={item.id}
        >
          <span
            className="
            mr-4
            h-px
            w-8
            bg-text-secound
            group-hover:w-[4rem] group-hover:bg-text-primary
            transition-all"
          ></span>
          <Link
            className="text-xs font-bold tracking-widest uppercase text-text-secound group-hover:text-text-primary "
            href={item.routes}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
