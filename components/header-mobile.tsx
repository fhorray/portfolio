import Image from "next/image";
import Link from "next/link";
import React from "react";

export const links = [
  { label: "Sobre", href: "/sobre" },
  { label: "Projetos", href: "/sobre" },
  { label: "Baixar CV", href: "/cv-download" },
];

export const HeaderMobile = () => {
  return (
    <nav className=" md:flex gap-6 w-full">
      <ul className="flex flex-col w-full">
        {links.map((link) => (
          <Link key={link.label} href={link.href}>
            <li className="py-6 text-center text-mainBlack font-medium text-md hover:text-purple transition-all duration-500 odd:border-b">
              {link.label}
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};
