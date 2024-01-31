import Image from "next/image";

const Hero = () =>{
    return(
        //Hero Container
        <div className="flex flex-row px-24 py-20 justify-around mb-20">

            <div className="flex flex-col">
                <p className="font-georama text-snow text-4xl leading-tight">
                    INTRODUCING
                </p>
                <p className="text-snow font-bold text-title leading-tight -mt-10 -ml-2">
                    Kumpas
                </p>
                <p className="text-snow text-xl">
                Enhancing Filipino Sign Language (FSL) Communication through <br /> 
                Adaptive Translation with Natural Language Processing (NLP) <br /> 
                and Long Short-Term Memory (LSTM)<br /> 
                <br /> 
                Succors in breaking down communication gap, empower deaf individuals <br /> 
                and help learn and communicate through Filipino Sign Language (FSL)<br /> 
                </p>
                
                <div className="">
                <button className="bg-snow text-blue rounded-md p-2 mt-4 text-3xl font-bold">TRY IT OUT!</button>
                </div>
            </div>

            <div>
                <Image src="/images/hero/kumpas-mockup.png" alt="hero-image" width={500} height={500} />
            </div>
        </div>
    );
};

export default Hero;

