"use client";

import { link } from "fs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { HeaderMobile } from "./header-mobile";

const links = [
  { label: "Sobre", href: "#sobre" },
  { label: "Projetos", href: "/projects" },
  { label: "Baixar CV", href: "#cv-download" },
];

export const Header = () => {
  const [scrollY, setScrollY] = React.useState(0);
  const [headerBackground, setHeaderBackground] = React.useState("transparent");

  React.useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // Limpar o evento de scroll ao desmontar o componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Determinar a cor de fundo do cabeçalho com base no valor de scrollY
  React.useEffect(() => {
    if (scrollY > 100) {
      // Por exemplo, se o scroll ultrapassar 100 pixels, definir o fundo como azul
      setHeaderBackground(
        "bg-mainBackground/70 md:bg-gradient-to-r from-transparent from-0% via-black via-50% to-transparent to-90%"
      );
    } else {
      // Caso contrário, manter o fundo transparente
      setHeaderBackground("transparent");
    }
  }, [scrollY]);

  return (
    <header
      className={`line w-full max-w-[1050px] md:mx-auto px-[30px] items-center justify-between flex ${headerBackground} from-mainBackground h-[75px] md:h-[95px] fixed top-0 z-50 left-0 right-0`}
    >
      <Link href={"/"} className="py-5">
        <Image
          src={"img/brand/fsantos-logo.svg"}
          alt="Logo"
          width={103}
          height={200}
        />
      </Link>

      {/* Menu */}
      <nav className="hidden md:flex gap-6">
        <ul className="flex gap-3 w-full">
          {links.map((link) => (
            <Link key={link.label} href={link.href}>
              <li className="w-[140px] py-3 text-center text-white font-medium text-md hover:text-purple  hover:after:content-['/>'] after:pl-[5px] hover:before:content-['<'] before:pl-[5px] transition-all duration-500">
                {link.label}
              </li>
            </Link>
          ))}
        </ul>
        <div className="flex gap-5">
          <Image
            src={"img/icons/globe-i.svg"}
            alt="Language"
            width={25}
            height={25}
          />
          <Image
            src={"img/icons/moon-on-i.svg"}
            alt="Language"
            width={25}
            height={25}
          />
        </div>
      </nav>

      {/* Menu Mobile */}
      <div className="md:hidden flex">
        <Sheet>
          <SheetTrigger className="py-4">
            {/* <MenuIcon className="text-white" /> */}
            <Image
              src={"img/icons/menu-mobile-i.svg"}
              alt="Open menu"
              width={25}
              height={25}
            />
          </SheetTrigger>
          <SheetContent className="sm:w-[540px]">
            <SheetHeader>
              <SheetTitle className="pt-8 flex flex-col items-center justify-center">
                <Link href={"/"} className="py-5">
                  <Image
                    src={"img/brand/fsantos-logo.svg"}
                    alt="Logo"
                    width={103}
                    height={200}
                    color="black"
                  />
                </Link>
              </SheetTitle>
            </SheetHeader>
            {/* HEADER MOBILE */}
            <HeaderMobile />
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
