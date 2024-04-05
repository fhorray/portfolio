"use client";

import React from "react";
import Image from "next/image";

import { useMediaQuery } from "react-responsive";

export const Certificates = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 624px)" });

  /* TODO: OPEN MODAL WITH CERTIFICATE */
  const handleOpenModal = (certificate: number) => {
    console.log("clicado", certificate);
  };

  return (
    <section className="w-full h-auto px-[30px] py-24 relative">
      <div className="w-full mx-auto max-w-[1060px]">
        <span className="detail dt-certificates">Certificados</span>

        <h2 className="font-normal text-3xl md:text-4xl tracking-wide text-mainWhite mb-9">
          <span className="font-normal text-purple text-3xl md:text-4xl tracking-wide">
            const{" "}
          </span>
          meusCertificados{" "}
          <span className="font-bold text-purple text-3xl md:text-4xl tracking-wide">
            {"{"}
          </span>
        </h2>

        <ul className="flex flex-col md:flex-row items-center justify-center gap-11 py-14">
          <li>
            <Image
              src={"/img/certificates/ebac-logo.svg"}
              alt="Origamid"
              width={!isMobile ? 250 : 190}
              height={!isMobile ? 250 : 190}
              className="hover:scale-105 transition cursor-pointer"
              onClick={() => handleOpenModal(1)}
            />
          </li>
          <li>
            <Image
              src={"/img/certificates/origamid-logo.svg"}
              alt="Origamid"
              width={!isMobile ? 250 : 190}
              height={!isMobile ? 250 : 190}
              className="hover:scale-105 transition cursor-pointer"
              onClick={() => handleOpenModal(2)}
            />
          </li>
          <li>
            <Image
              src={"/img/certificates/udemy-logo.svg"}
              alt="Origamid"
              width={!isMobile ? 250 : 190}
              height={!isMobile ? 250 : 190}
              className="hover:scale-105 transition cursor-pointer"
              onClick={() => handleOpenModal(3)}
            />
          </li>
        </ul>

        <span className="font-bold text-purple text-3xl md:text-4xl tracking-wide">
          {"};"}
        </span>
      </div>
      <span className="dt absolute top-0 right-0 opacity-25 !text-10xl ">
        Certificados
      </span>
    </section>
  );
};
