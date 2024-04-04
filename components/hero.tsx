"use client";

import Image from "next/image";
import React from "react";
import { useMediaQuery } from "react-responsive";
import { Sora } from "next/font/google";
import Link from "next/link";
import { socials } from "@/constants";

const sora = Sora({ subsets: ["latin"] });

const HeroSection = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <section className="relative w-full">
      <div className="w-full max-w-[1060px] mx-auto">
        {/* DETAILS MOBILE */}
        <div className="md:hidden overflow-x-hidden">
          <span className="dt opacity-15 md:opacity-20 top-[4.8rem]">
            {"<FR"}
          </span>
          <span className="dt opacity-15 md:opacity-10 bottom-[4.6rem] right-[13rem]">
            CSS {"{...}"}
          </span>
        </div>

        {/* DETAILS DESKTOP */}
        <div className="hidden md:block overflow-x-hidden">
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

        {/* CONTENT */}
        <div className="flex self-start  h-screen w-full ">
          <div className="flex items-center">
            {/* INFORMATION */}
            <div className="pl-[30px] z-20 =pt-16 md:pt-0">
              <h2
                className={
                  sora.className +
                  " font-normal text-2xl md:text-5xl tracking-wide text-mainWhite mb-[5px] md:mb-[25px] "
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
              <p className="text-mainWhite text-[15px] max-w-[550px] pl-[33px] md:pl-[53px] mb-[27px]  md:text-lg px-[75px] md:px-0">
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
                <span className="text-purple text-[35px] md:text-5xl">
                  {"}"}
                </span>
                <span className="interm text-white">|</span>
              </h2>
            </div>

            {/* IMAGE */}
            <div className="absolute  -right-[130px] max-w-[500px] md:max-w-[700px]  md:-right-[250px] lg:-right-[170px]  xl:-right-[50px] 2xl:right-[190px] -top-[150px] overflow-x-hidden">
              <Image
                src="/img/hero-img-3_transp.png"
                alt="Francy Santos"
                width={900}
                height={900}
              />
            </div>
          </div>
        </div>

        {/* ARROW DOWN */}
        <div className="flex w-full flex-col items-center justify-center -mt-[180px] py-[45px] ">
          <Link href="#skills">
            <div className="p-5">
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
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
