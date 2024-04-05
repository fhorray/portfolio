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
    <nav className=" md:flex gap-6">
      <ul className="flex flex-col w-full">
        {links.map((link) => (
          <Link key={link.label} href={link.href}>
            <li className="py-6 text-center text-mainBlack font-medium text-md hover:text-purple transition-all duration-500 border-b">
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
  );
};
