import Image from "next/image";

import Navbar from "../components/navbar";
import Hero from "../components/hero";
import WhyNow from "../components/why-now";

export default function Home() {
  return (
    <div className="bg-no-repeat text-black  " style={{backgroundImage: `url('/images/background.png')`,}}>
      <Navbar />
      <Hero />
      <WhyNow />
    </div>
  );
}
