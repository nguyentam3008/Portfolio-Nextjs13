"use client";
import React, { useEffect, useRef, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>("about");
  const sections = ["about", "experience", "project"]; // Add your section IDs here

  const navRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        const sectionsOffsets = sections.map((section) => {
          const element = document.getElementById(section);
          return { id: section, offset: element?.offsetTop ?? 0 };
        });

        const scrollPosition = window.scrollY + navRef.current.offsetHeight;

        for (let i = sectionsOffsets.length - 1; i >= 0; i--) {
          if (scrollPosition >= sectionsOffsets[i].offset - 50) {
            setActiveSection(sectionsOffsets[i].id);
            break;
          }
        }
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Router>
      <nav ref={navRef} className="hidden lg:block">
        <ul className="flex flex-col gap-4 w-min text-text-secound">
          {sections.map((section) => (
            <li key={section}>
              <ScrollLink
                to={section}
                smooth
                duration={100}
                spy
                isDynamic
                className={`group cursor-pointer uppercase text-xs font-bold tracking-widest hover:text-text-primary transition ease-in-out duration-300  ${
                  activeSection === section
                    ? "text-text-primary  "
                    : "text-text-secound"
                }`}
              >
                <RouterLink
                  className="flex items-center gap-2 "
                  to={`#${section}`}
                >
                  <span
                    className={`mr-4 h-px w-8 bg-text-secound transition-all group-hover:w-16 group-hover:bg-text-primary ${
                      activeSection === section
                        ? "w-16 bg-text-primary"
                        : "bg-text-secound"
                    }`}
                  ></span>
                  {section}
                </RouterLink>
              </ScrollLink>
            </li>
          ))}
        </ul>
      </nav>
    </Router>
  );
};

export default Navbar;
