import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import useIsVisible from "../app/use-visible";
import { useRef } from "react";

import { whyNowId } from "@/components/why-now";
import { featuresId } from "@/components/features";
import { partnershipId } from "@/components/partnership";
import { sgdId } from "@/components/sgd";
import { teamId } from "@/components/team";

const isBrowser = () => typeof window !== 'undefined'; 

function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

const scrollToWhyNow = () => {
    const featuresElement = document.getElementById(whyNowId);
    if (featuresElement) {
        // Do something with the element, e.g., scroll to it
        featuresElement.scrollIntoView({ behavior: 'smooth' });
    }
};

const scrollToFeatures = () => {
    const howItWorksElement = document.getElementById(featuresId);
    if (howItWorksElement) {
        // Do something with the element, e.g., scroll to it
        howItWorksElement.scrollIntoView({ behavior: 'smooth' });
    }
}

const scrollToPartenrship = () => {
    const howItWorksElement = document.getElementById(partnershipId);
    if (howItWorksElement) {
        // Do something with the element, e.g., scroll to it
        howItWorksElement.scrollIntoView({ behavior: 'smooth' });
    }
}

const scrollToSGD = () => {
    const meetTheTeamElement = document.getElementById(sgdId);
    if (meetTheTeamElement) {
        // Do something with the element, e.g., scroll to it
        meetTheTeamElement.scrollIntoView({ behavior: 'smooth' });
    }
}

const scrollToAboutUs = () => {
    const meetTheTeamElement = document.getElementById(teamId);
    if (meetTheTeamElement) {
        // Do something with the element, e.g., scroll to it
        meetTheTeamElement.scrollIntoView({ behavior: 'smooth' });
    }
}

const Navbar: React.FC = () =>{
    const [showLinks, setShowLinks] = useState(false);

    const toggleLinks = () => {
        setShowLinks(!showLinks);
    };

    const ref1 = useRef<HTMLDivElement>(null);
    const isVisible1 = useIsVisible(ref1);

    return (
        //Navbar Container
        <section className="px-5 h-24 justify-between bg-primary flex sm:px-20 flex-row items-center text-black">
            {/* Logo */}
            <button className="flex flex-row items-center" onClick={scrollToTop}>
                <Image src="/images/kumpas-logo.png" alt="logo" width={75} height={75} />
                <div className="m-1"></div>
                <div className= "text-3xl font-bold sm:text-6xl ">
                    KUMPAS
                </div>
            </button>

            {/* Hamburger Button */}
            <div className="sm:hidden">
                <button className="text-white" onClick={toggleLinks}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="black">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6.00092H21M3 12.0009H21M3 18.0009H21" />
                    </svg>
                </button>
            </div>

            {/*Hamburger Links */}
            <div ref={ref1} className={`font-bold sm:hidden ${showLinks ? "flex" : "hidden"} flex-col gap-4 text-xl absolute left-0 top-[100%] w-full min-h-[6vh] bg-primary pb-5 
            transition-opacity duration-500 ease-in-out ${isVisible1 ? "opacity-100" : "opacity-0"}`}>
                <button className="no-underline hover:underline underline-offset-8" onClick={() => {scrollToWhyNow(); toggleLinks();}}>  
                    Why Now
                </button>

                <button className="no-underline hover:underline underline-offset-8" onClick={() => {scrollToFeatures(); toggleLinks();}}>   
                    Features 
                </button>

                <button className="no-underline hover:underline underline-offset-8" onClick={() => {scrollToPartenrship(); toggleLinks();}}>  
                    Partnerships
                </button>

                <button className="no-underline hover:underline underline-offset-8" onClick={() => {scrollToSGD(); toggleLinks();}}>  
                    SGD 
                </button>

                <button className="no-underline hover:underline underline-offset-8" onClick={() => {scrollToAboutUs(); toggleLinks();}}>  
                    About Us 
                </button>

                <button className="bg-snow text-secondary font-bold rounded-md p-2 mx-24 hover:bg-zinc-300">
                    <Link href="https://calendly.com/d/32f-cjy-573/kumpas-demo" target="blank">
                        SCHEDULE A DEMO
                    </Link>
                </button>

                <button className="bg-secondary text-white font-bold rounded-md p-2 mx-28 hover:bg-indigo-950">
                    <Link href="mailto:inquirytechtitans@gmail.com" target="blank">
                        CONTACT US
                    </Link>
                </button>
            </div>

            {/* Links and Buttons */}
            <div className={`sm:flex hidden flex-row text-xl gap-32`}>
                <div className="flex flex-row gap-4 font-georama">
                    <button className="no-underline hover:underline underline-offset-8" onClick={scrollToWhyNow}> 
                        Why Now
                    </button>

                    <button className="no-underline hover:underline underline-offset-8" onClick={scrollToFeatures}> 
                        Features 
                    </button>

                    <button className="no-underline hover:underline underline-offset-8" onClick={scrollToPartenrship}> 
                        Partnerships
                    </button>

                    <button className="no-underline hover:underline underline-offset-8" onClick={scrollToSGD}> 
                        SGD 
                    </button>

                    <button className="no-underline hover:underline underline-offset-8" onClick={scrollToAboutUs}> 
                        About Us 
                    </button>

                    
                </div>
                
                <div className="flex flex-row">
                    <button className="bg-snow text-secondary font-bold rounded-md p-2 m-2 hover:bg-zinc-300">
                        <Link href="https://calendly.com/d/32f-cjy-573/kumpas-demo" target="blank">
                            SCHEDULE A DEMO
                        </Link>
                    </button>
                    <button className="bg-secondary text-white font-bold rounded-md p-2 m-2 hover:bg-indigo-950">
                        <Link href="mailto:inquirytechtitans@gmail.com" target="blank">
                            CONTACT US
                        </Link>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Navbar;
