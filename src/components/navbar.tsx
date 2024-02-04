"use client"

import Image from "next/image";

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
    return (
        //Navbar Container
        <section className="h-24 bg-primary flex flex-row items-center text-black justify-around">
            {/* Logo */}
                <button className="flex flex-row items-center" onClick={scrollToTop}>
                    <Image src="/images/kumpas-logo.png" alt="logo" width={75} height={75} />
                    <div className=" m-1"></div>
                    <div className= "text-6xl font-bold">
                        KUMPAS
                    </div>
                </button>

                {/* Links */}
                <div className="flex flex-row justify-around w-links font-georama text-xl">

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

                {/* Buttons */}
                <div className="text-xl font-bold">
                    <button className="bg-snow text-secondary rounded-md p-2 m-2 hover:bg-zinc-300">SCHEDULE A DEMO</button>
                    <button className="bg-secondary text-white rounded-md p-2 m-2 hover:bg-indigo-950">CONTACT US</button>
                </div>
        </section>
    );
};

export default Navbar;