import Image from "next/image";

const Hero = () =>{
    return(
        //Hero Container
        <section className="flex flex-col px-[21%] py-10 sm:py-20 sm:mb-20">

        <div className="flex flex-row gap-4 justify-between">

            <div className="flex flex-col">
                <p className="font-georama text-snow text-2xl sm:text-4xl sm:leading-tight">
                    INTRODUCING
                </p>
                <p className="text-snow font-bold text-6xl sm:text-title leading-tight sm:-mt-10 sm:-ml-2">
                    Kumpas
                </p>
                <p className="text-snow text-small-text sm:text-xl w-44 sm:w-hero">
                Enhancing Filipino Sign Language (FSL) 
                Communication through Adaptive Translation 
                with Natural Language Processing (NLP) 
                and Long Short-Term Memory (LSTM)
                </p>
            </div>

            <div className="flex items-center">
                <Image src="/images/hero/kumpas-mockup.png" alt="hero-image" width={550} height={500} />
            </div>

        </div>

        <p className="hidden xl:flex text-snow text-small-text sm:text-xl w-44 sm:w-hero sm:-mt-24 ">
                Succors in breaking down communication gap,
                empower deaf individualsand help learn and 
                communicate through Filipino Sign Language (FSL)
        </p>

            <div className="self-center sm:self-start mt-7 sm:mt-5">
                <button className="bg-snow text-secondary rounded-md sm:rounded-md text-lg p-1.5 sm:p-2 sm:text-3xl font-bold hover:bg-zinc-300">
                    TRY IT OUT! 
                </button>
            </div>
        </section>
    );
};

export default Hero;

