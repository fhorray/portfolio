"use client";

import Image from "next/image";

import { socials } from "@/constants";

import { useMediaQuery } from "react-responsive";

import { Sora } from "next/font/google";

const sora = Sora({ subsets: ["latin"] });

export const Footer = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <footer className={sora.className + " py-24 pb-28 px-[15px]"}>
      <div className="flex flex-col gap-7 items-center text-white">
        <h2 className="text-2xl md:text-4xl mb-9">
          <span className="text-purple font-bold">{"< "}</span>
          Eai, vamos trabalhar juntos?
          <span className="text-purple font-bold">{" />"}</span>
        </h2>

        <span className="text-[#525252] text-2xl">São Paulo, SP, Brasil</span>

        <a
          className="text-3xl md:text-4xl text-purple font-bold"
          href="mailto:francy.horray@gmail.com"
        >
          oi@francy.dev
        </a>
        <a
          className="text-2xl md:text-2xl"
          href="https://api.whatsapp.com/send?phone=5511989358196"
        >
          (+55) 11 98935-8196
        </a>

        {/* Social Medias */}
        <ul className="flex gap-5">
          {socials.map((social) => (
            <li key={social.href} className="py-4 cursor-pointer">
              <a href={social.href} target="_blank">
                <Image
                  src={social.icon}
                  alt="Behance Icon"
                  width={isTabletOrMobile ? 27 : 37}
                  height={isTabletOrMobile ? 27 : 37}
                  className="hover:opacity-85 transition ease-in-out duration-100 hover:scale-110"
                />
              </a>
            </li>
          ))}
        </ul>

        <p className="text-center max-w-[340px]">
          &copy; 2023 Todos os direitos reservados por
          <a
            className="text-purple"
            href="https://www.linkedin.com/in/francysantos/"
          >
            {" "}
            Francy Santos
          </a>
        </p>
      </div>
    </footer>
  );
};
