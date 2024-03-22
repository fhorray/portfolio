"use client";

import Image from "next/image";
import React from "react";
import { useMediaQuery } from "react-responsive";
import { Sora } from "next/font/google";

const sora = Sora({ subsets: ["latin"] });

// SOCIAL MEDIA
const socials = [
  { href: "https://github.com/fhorray", icon: "/img/icons/github-i.svg" },
  {
    href: "https://www.linkedin.com/in/francysantos/",
    icon: "/img/icons/linkedin-i.svg",
  },
  {
    href: "https://www.instagram.com/fhorray/",
    icon: "/img/icons/instagram-i.svg",
  },
  { href: "https://www.behance.net/fhorray", icon: "/img/icons/behance-i.svg" },
];

const HeroSection = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <>
      <div className="flex max-w-[1050px] left-0 right-0 relative h-screen w-full ">
        {/* DETAILS */}
        <div>
          <span className="dt opacity-15 md:opacity-20 top-[4.8rem]">
            {"<FRONT-END />"}
          </span>
          <span className="dt opacity-15 md:opacity-20 z-20 top-[22rem] left-[14rem]">
            {"<HTML />"}
          </span>
          <span className="dt opacity-15 md:opacity-10 bottom-[4.6rem] right-[13rem]">
            CSS {"{...}"}
          </span>
        </div>

        {/* IMAGE */}
        <div className="w-full max-w-[1050px] relative">
          <div className="absolute -right-[200px] md:-right-[250px] lg:-right-[350px] xl:-right-[450px] 2xl:-right-[1000px] -top-[190px]">
            <Image
              src="/img/hero-img-3_transp.png"
              alt=""
              width={900}
              height={900}
            />
          </div>
        </div>

        {/* INFORMATION */}
        <div className="z-50 absolute top-[270px] left-[30px] md:top-[270px] md:left-[20px] lg:top-[270px] lg:left-[120px] 2xl:left-[500px]">
          <div>
            <h2
              className={
                sora.className +
                " font-normal text-[25px] md:text-5xl tracking-wide text-mainWhite mb-[5px] md:mb-[25px]"
              }
            >
              Olá, eu sou <span className="text-purple">{"{"}</span>
            </h2>
            <h1
              className={
                sora.className +
                " text-purple font-semibold tracking-wide text-[35px] md:text-5xl pl-[33px] md:pl-[53px] mb-[10px] md:mb-[25px]"
              }
            >
              Francy Santos
            </h1>
            <p className="text-mainWhite text-sm max-w-[550px] pl-[33px] md:pl-[53px] mb-[27px]  md:text-lg px-[75px] md:px-0">
              <strong>UI Designer</strong> e
              <strong> Desenvolvedor Front-End </strong>
              com habilidades em <strong>React.js, Next.js </strong>
              <strong>CSS/SASS</strong> e <strong>TypeScript </strong>
              experiente em criar interfaces atraentes e funcionais.
            </p>

            {/* Social Medias */}
            <ul className="flex gap-5 pl-[33px] md:pl-[53px]">
              {socials.map((social) => (
                <li key={social.href}>
                  <a href={social.href}>
                    <Image
                      src={social.icon}
                      alt="Behance Icon"
                      width={isTabletOrMobile ? 27 : 37}
                      height={isTabletOrMobile ? 27 : 37}
                      className="hover:opacity-85 transition ease-in-out duration-100"
                    />
                  </a>
                </li>
              ))}
            </ul>

            <h2 className="font-normal tracking-wide text-mainWhite">
              <span className="text-purple text-[35px] md:text-5xl">{"}"}</span>
              <span className="interm text-white">|</span>
            </h2>
          </div>
        </div>
      </div>
      {/* ARROW DOWN */}
      <div className="hidden md:flex w-full flex-col items-center justify-center absolute md:-mt-[100px] py-[15px]">
        <div>
          {[1, 2].map((arrow) => (
            <Image
              key={arrow}
              src="/img/icons/arrow-down-i.svg"
              alt=""
              width={isTabletOrMobile ? 20 : 25}
              height={isTabletOrMobile ? 20 : 25}
              className="mb-[3px] animate-[arrow-down_1s_infinite_100ms] opacity-45"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default HeroSection;
