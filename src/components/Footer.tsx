import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="max-w-md pb-16 mt-20 text-sm text-text-secound sm:pb-0">
      <p>
        Loosely designed in{" "}
        <Link className="text-text-primary" href="https://www.figma.com">
          Figma
        </Link>{" "}
        and coded in
        <Link
          className="text-text-primary"
          href="https://code.visualstudio.com"
        >
          {" "}
          Visual Studio Code
        </Link>
        by yours truly. Built with Next.js and
        <Link className="text-text-primary" href="https://tailwindcss.com">
          {" "}
          Tailwind CSS
        </Link>
        , deployed with
        <Link className="text-text-primary" href="https://tailwindcss.com">
          {" "}
          Vercel
        </Link>
        . All text is set in the{" "}
        <Link className="text-text-primary" href="https://rsms.me/inter">
          Inter
        </Link>{" "}
        typeface.
      </p>
    </div>
  );
};

export default Footer;
