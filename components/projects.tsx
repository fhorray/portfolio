import { projects } from "@/constants";
import Link from "next/link";
import React from "react";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="relative w-full h-auto max-w-[1050px] mx-auto text-white text-3xl before:w-full py-20 px-[30px]"
    >
      <div className="">
        <h2 className="font-normal text-3xl md:text-4xl tracking-wide text-mainWhite mb-9">
          <span className="font-normal text-purple text-3xl md:text-4xl tracking-wide">
            const{" "}
          </span>
          meusProjetos{" "}
          <span className="font-bold text-purple text-3xl md:text-4xl tracking-wide">
            {"{"}
          </span>
        </h2>
        <div>
          {/* LIST */}
          <div className="w-full flex flex-wrap gap-4 py-10">
            {projects.map((project, i) => (
              <Link key={i} href={"/#"} className="flex-1">
                <div className="flex items-center justify-center min-w-[200px] h-[300px] bg-purple p5 rounded ">
                  {project.label}
                </div>
              </Link>
            ))}
          </div>
        </div>
        <span className="font-bold text-purple text-3xl md:text-4xl tracking-wide">
          {"};"}
        </span>

        <span className="dt absolute top-0 md:-top-[30px] right-0 opacity-25">
          Projects
        </span>
      </div>
    </section>
  );
};
