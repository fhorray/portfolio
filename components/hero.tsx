import Image from "next/image";
import React from "react";
import { useMediaQuery } from "react-responsive";

const HeroSection = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div>
        <span className="dt dt1">{"<FRONT-END />"}</span>
        <span className="dt dt2">{"<HTML />"}</span>
        <span className="dt dt3">CSS {"{...}"}</span>
      </div>
      <div className="w-full max-w-[1050px] relative">
        <div className="absolute -right-[200px] md:-right-[150px] lg:-right-[250px] xl:-right-[450px] 2xl:-right-[1000px] -top-[160px]">
          <Image src="/img/hero-img-3.png" alt="" width={900} height={900} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
