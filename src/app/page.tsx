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
import SGD from "@/components/sgd";
import Team from "@/components/team";
import Footer from "@/components/footer";
  

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

  const ref6 = useRef<HTMLDivElement>(null);
  const isVisible6 = useIsVisible(ref6);

  const ref7 = useRef<HTMLDivElement>(null);
  const isVisible7 = useIsVisible(ref7);

  const ref8 = useRef<HTMLDivElement>(null);
  const isVisible8 = useIsVisible(ref8);


  return (
    <div className="text-black overflow-x-hidden">
      <div className="w-full fixed">
        <Navbar />
      </div>

      <div className="h-[400px] sm:h-[750px] w-[150%] ml bg-secondary rounded-b-[50%] sm:rounded-b-[100%] ml-[-25%] ">
        <div className="h-24"></div>
          <div ref={ref1} className={`transition-opacity ease-in duration-1000 ${isVisible1 ? "opacity-100" : "opacity-0"}`}>
            <Hero />
        </div>
      </div>
      
      <div ref={ref2} className={`transition-opacity ease-in duration-1000 ${isVisible2 ? "opacity-100" : "opacity-0"}`}>
        <WhyNow />
      </div>
      
      <div ref={ref3} className={`transition-opacity ease-in duration-1000 ${isVisible3 ? "opacity-100" : "opacity-0"}`}>
        <Features />
      </div>
      
      <div className="bg-educators sm:h-educators w-full bg-cover bg-no-repeat">
        <div ref={ref4} className={`transition-opacity ease-in duration-1000 ${isVisible4 ? "opacity-100" : "opacity-0"}`}>
          <Educators />
        </div>
      </div>

      <div ref={ref5} className={`transition-opacity ease-in duration-1000 ${isVisible5 ? "opacity-100" : "opacity-0"}`}>
        <Partnership />
      </div>

      <div className="bg-primary">
        <div ref={ref6} className={`transition-opacity ease-in duration-1000 ${isVisible6 ? "opacity-100" : "opacity-0"}`}>
          <SGD />
        </div>
      </div>

      <div ref={ref7} className={`transition-opacity ease-in duration-1000 ${isVisible7 ? "opacity-100" : "opacity-0"}`}>
        <Team />
      </div>

      <div className="bg-primary">
        <div ref={ref8} className={`transition-opacity ease-in duration-1000 ${isVisible8 ? "opacity-100" : "opacity-0"}`}>
          <Footer />
        </div>
      </div>
      
    </div>
  );
}

export default Home;
