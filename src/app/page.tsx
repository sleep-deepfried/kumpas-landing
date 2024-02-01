"use client"

import Image from "next/image";
import { useRef } from "react";
import useIsVisible from "./use-visible";

import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import WhyNow from "@/components/why-now";
import Features from "@/components/features";
import Educators from "@/components/educators";
import Partnership from "@/components/partnership";

const Home: React.FC = () => {

  const ref1 = useRef<HTMLDivElement>(null);
  const isVisible1 = useIsVisible(ref1);

  const ref2 = useRef<HTMLDivElement>(null);
  const isVisible2 = useIsVisible(ref2);

  const ref3 = useRef<HTMLDivElement>(null);
  const isVisible3 = useIsVisible(ref3);

  const ref4 = useRef<HTMLDivElement>(null);
  const isVisible4 = useIsVisible(ref4);

  const ref5 = useRef<HTMLDivElement>(null);
  const isVisible5 = useIsVisible(ref5);


  return (
    <div className="bg-no-repeat text-black  " style={{backgroundImage: `url('/images/background.png')`,}}>
      <div>
        <Navbar />
      </div>
      
      <div ref={ref1} className={`transition-opacity ease-in duration-1000 ${isVisible1 ? "opacity-100" : "opacity-0"}`}>
        <Hero />
      </div>
      
      <div ref={ref2} className={`transition-opacity ease-in duration-1000 ${isVisible2 ? "opacity-100" : "opacity-0"}`}>
        <WhyNow />
      </div>
      
      <div ref={ref3} className={`transition-opacity ease-in duration-1000 ${isVisible3 ? "opacity-100" : "opacity-0"}`}>
        <Features />
      </div>
      
      <div className="bg-educators h-educators bg-no-repeat">
        <div ref={ref4} className={`transition-opacity ease-in duration-1000 ${isVisible4 ? "opacity-100" : "opacity-0"}`}>
          <Educators />
        </div>
      </div>

      <div ref={ref5} className={`transition-opacity ease-in duration-1000 ${isVisible5 ? "opacity-100" : "opacity-0"}`}>
        <Partnership />
      </div>
      
    </div>
  );
}

export default Home;
