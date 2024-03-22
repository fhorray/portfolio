"use client";

import Image from "next/image";
import React from "react";
import { useMediaQuery } from "react-responsive";
import { Sora } from "next/font/google";

const sora = Sora({ subsets: ["latin"] });

const HeroSection = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <div className=" max-w-[1050px] left-0 right-0 relative h-screen w-full ">
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
        <div className="absolute -right-[200px] md:-right-[250px] lg:-right-[350px] xl:-right-[450px] 2xl:-right-[1000px] -top-[160px]">
          <Image
            src="/img/hero-img-3_transp.png"
            alt=""
            width={900}
            height={900}
          />
        </div>
      </div>

      {/* INFORMATION */}
      <div
        className={
          "text-image z-50 absolute top-[360px] left-[15px] md:top-[270px] md:left-[20px] lg:top-[270px] lg:left-[120px] 2xl:left-[500px]"
        }
      >
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
          <p className="text-mainWhite max-w-[550px] pl-[33px] md:pl-[53px] mb-[27px] text-sm md:text-lg px-[75px] md:px-0">
            <strong>UI Designer</strong> e
            <strong> Desenvolvedor Front-End </strong>
            com habilidades em <strong>React.js, Next.js </strong>
            <strong>CSS/SASS</strong> e <strong>TypeScript </strong>
            experiente em criar interfaces atraentes e funcionais.
          </p>

          {/* Social Medias */}
          <ul className="flex gap-5 pl-[33px] md:pl-[53px]">
            <li>
              <a href="https://github.com/fhorray" target="_blank">
                <Image
                  src="/img/icons/github-i.svg"
                  alt="Github Icon"
                  width={isTabletOrMobile ? 30 : 37}
                  height={isTabletOrMobile ? 30 : 37}
                />
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/francysantos/"
                target="_blank"
              >
                <Image
                  src="/img/icons/linkedin-i.svg"
                  alt="Linekdin Icon"
                  width={isTabletOrMobile ? 30 : 37}
                  height={isTabletOrMobile ? 30 : 37}
                />
              </a>
            </li>

            <li>
              <a href="https://www.instagram.com/fhorray/" target="_blank">
                <Image
                  src="/img/icons/instagram-i.svg"
                  alt="Instagram Icon"
                  width={isTabletOrMobile ? 30 : 37}
                  height={isTabletOrMobile ? 30 : 37}
                />
              </a>
            </li>

            <li>
              <a href="https://www.behance.net/fhorray" target="_blank">
                <Image
                  src="/img/icons/behance-i.svg"
                  alt="Behance Icon"
                  width={isTabletOrMobile ? 30 : 37}
                  height={isTabletOrMobile ? 30 : 37}
                />
              </a>
            </li>
          </ul>

          <h2 className="font-normal tracking-wide text-mainWhite">
            <span className="text-purple text-[35px] md:text-5xl">{"}"}</span>
            <span className="interm text-white">|</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
