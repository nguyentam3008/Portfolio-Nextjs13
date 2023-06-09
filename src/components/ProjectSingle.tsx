import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface IProjectSignProps {
  id?: number;
  mouth?: number;
  year?: string;
  namePr?: string;
  descriptions: string;
  tech?: { label: string }[];
  path: string;
  image?: string;
}

const ProjectSingle: React.FC<IProjectSignProps> = ({
  id,
  mouth,
  year,
  namePr,
  descriptions,
  tech,
  path,
  image,
}) => {
  return (
    <div>
      <Link
        href={path}
        key={`experience-product ${id}`}
        className="flex items-start gap-3 p-4 transition-all duration-200 rounded-md cursor-pointer group backdrop-filter hover:bg-white/5 hover:backdrop-blur-sm hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)]"
      >
        <div className="flex flex-col w-[30%]">
          {year && mouth ? (
            <span className="z-10 flex items-center mt-1 mb-2 text-xs font-semibold tracking-wide uppercase lg:text-sm text-text-secound ">
              {mouth} - {year}
            </span>
          ) : (
            ""
          )}
          {image && (
            <Image
              src={image}
              alt="Picture of the author"
              width={300}
              height={300}
              className=" w-[190px] h-24 transition border-2 rounded  border-gray-800 group-hover:border-gray-500 sm:order-1 sm:col-span-2 sm:translate-y-1"
            />
          )}
        </div>
        <div className="w-[70%]">
          <div className="">
            <div>
              <h3 className="inline-flex items-baseline text-base font-medium leading-tight text-text-primary group-hover:text-gr-5a focus-visible:text-gr-5a ">
                {namePr}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="inline-block w-4 h-4 ml-1 transition-transform translate-y-px shrink-0 group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </h3>
            </div>
            <p className="mt-3">{descriptions}</p>
          </div>
          {tech && (
            <ul className="flex flex-wrap items-center gap-2 mt-5">
              {tech?.map((item, index) => (
                <li
                  className="flex items-center px-3 py-1 text-xs font-medium leading-5 capitalize rounded-full text-gr-5a bg-gr-12"
                  key={index}
                >
                  <div>{item.label}</div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </Link>
    </div>
  );
};

export default ProjectSingle;
