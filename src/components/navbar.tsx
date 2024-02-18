import Image from "next/image";
import { useState } from "react";

import { whyNowId } from "@/components/why-now";
import { featuresId } from "@/components/features";
import { partnershipId } from "@/components/partnership";
import { sgdId } from "@/components/sgd";
import { teamId } from "@/components/team";

const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

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

const Navbar = () =>{
    const [showLinks, setShowLinks] = useState(false);

    const toggleLinks = () => {
        setShowLinks(!showLinks);
    };

    return (
        //Navbar Container
        <section className="px-10 h-24 justify-between bg-primary sm: flex sm:px-20 flex-row items-center text-black">
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
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>

            {/* Links and Buttons */}
            <div className={`sm:flex hidden flex-row text-xl ${showLinks ? 'block' : 'hidden'}`}>
                <div className="flex flex-row w-links gap-4 font-georama">
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
                

                <button className="bg-snow text-secondary font-bold rounded-md p-2 m-2 hover:bg-zinc-300">SCHEDULE A DEMO</button>
                <button className="bg-secondary text-white font-bold rounded-md p-2 m-2 hover:bg-indigo-950">CONTACT US</button>
            </div>
        </section>
    );
};

export default Navbar;
