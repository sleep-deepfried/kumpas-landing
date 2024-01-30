import Image from "next/image";

import Navbar from "../components/navbar";
import Hero from "../components/hero";

export default function Home() {
  return (
    <div className="bg-repeat-x bg-fixed w-screen " style={{backgroundImage: `url('/images/background.png')`,}}>
      <Navbar />
      <Hero />
    </div>
  );
}
