import Image from "next/image";
import React from "react";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative h-auto max-w-[1050px] mx-auto text-white text-3xl before:w-full py-20 px-[30px]"
    >
      <div className="text">
        <h2 className="font-normal text-3xl md:text-4xl tracking-wide text-mainWhite mb-9">
          sobre-mim{" "}
          <span className="font-bold text-purple text-3xl md:text-4xl tracking-wide">
            {"{"}
          </span>
        </h2>
        <div className="text-[16px] md:text-[22px] leading-6 md:leading-7 max-w-[580px] flex flex-col gap-5 pl-10">
          <p>
            Eu me chamo <span>Francyelton</span> <i>(Francy rsrs)</i>, um
            desenvolvedor web freelancer com experiência em{" "}
            <strong>UI Design</strong> e
            <strong> Desenvolvimento Front-End</strong>.
          </p>

          <p>
            Adoro criar interfaces responsivas e escrever códigos limpos e
            eficientes. Além disso, sou apaixonado por tecnologia, games e
            música.
          </p>
          <p className="mb-8">
            Entre em contato comigo pelo
            <a href="https://www.linkedin.com/in/francysantos/"> LinkedIn</a> ou
            por <a href="mailto:francy.horray@gmail.com"> e-mail</a> para saber
            mais sobre meu trabalho.
          </p>
        </div>
        <span className="font-bold text-purple text-3xl md:text-4xl tracking-wide">
          {"}"}
        </span>
      </div>
      <span className="dt absolute top-0 md:top-[130px] right-0 opacity-15">
        Sobre
      </span>
    </section>
  );
};

export default AboutSection;
