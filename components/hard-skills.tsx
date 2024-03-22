"use client";

import Image from "next/image";
import React from "react";

import { Sora } from "next/font/google";
import { useMediaQuery } from "react-responsive";

const sora = Sora({ subsets: ["latin"] });

const hardSkills = [
  { icon: "/img/icons/html5-i.svg", label: "HTML 5" },
  { icon: "/img/icons/js-i.svg", label: "JavaScript" },
  { icon: "/img/icons/sass-i.svg", label: "Sass" },
  { icon: "/img/icons/figma-small-i.svg", label: "Figma" },
  { icon: "/img/icons/react-i.svg", label: "React" },
  { icon: "/img/icons/photoshop-i.svg", label: "Photoshop" },
  { icon: "/img/icons/illustrator-i.svg", label: "Illustrator" },
];

const HardSkills = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <div className="h-[400px] text-3xl w-full flex flex-col items-center justify-center">
      <h2
        className={
          sora.className +
          " text-mainWhite text-3xl before:content-['<'] after:content-['/>'] after:ml-2 before:mr-2 after:text-purple before:text-purple after:font-bold before:font-bold mb-10"
        }
      >
        Hard Skills
      </h2>
      <ul className="flex gap-10 flex-wrap items-center justify-center px-[30px]">
        {hardSkills.map((skill) => (
          <li key={skill.label}>
            <Image
              className="baladAnimation"
              src={skill.icon}
              alt={skill.label}
              width={isTabletOrMobile ? 40 : 50}
              height={isTabletOrMobile ? 40 : 50}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HardSkills;
