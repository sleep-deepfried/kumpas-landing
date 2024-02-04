import Image from "next/image";

const Features = () =>{
    return(
        <div  className="flex flex-col items-center px-24 mx-15">
            <div id="features" className="h-24"></div>
            <div className="">
                <div className="font-georama text-4xl h-16 w- bg-secondary text-snow flex justify-center items-center">
                    FEATURES
                </div>
                <div className="font-bold text-7xl">
                    OUR FEATURES & SERVICES
                </div>
            </div>

            <div className="flex flex-row my-10">

                <button className={featuresCardContainer}>
                    <div className="flex flex-col justify-around">
                        <p className={featuresCardTitle}>
                            For the Deaf
                        </p>
                        <p className={featuresCardDescription}>
                        The sign-to-text translator uses computer vision and machine learning to identify and convert sign language
                        </p>
                    </div>
                    <Image src="/images/features/deaf.svg" alt="deaf-features" width={144} height={144} />
                </button>

                <button className={featuresCardContainer}>
                    <div className="flex-col">
                        <p className={featuresCardTitle}>
                            For Non Deaf
                        </p>
                        <p className={featuresCardDescription}>
                        The text-to-sign translator uses 3D animation to display sign language expressions for text
                        </p>
                    </div>
                    <Image src="/images/features/non-deaf.svg" alt="deaf-features" width={144} height={144} />
                </button>

                <button className={featuresCardContainer}>
                    <div className="flex-col">
                        <p className={featuresCardTitle}>
                        For Learners
                        </p>
                        <p className={featuresCardDescription}>
                        A Duo Lingo-inspired course for Filipino Sign Language (FSL) teaches basic introductions, phrases, and daily life sentences
                        </p>
                    </div>
                    <Image src="/images/features/learners.svg" alt="deaf-features" width={144} height={144} />
                </button>

                <button className={featuresCardContainer}>
                    <div className="flex-col">
                        <p className={featuresCardTitle}>
                            For Educators
                        </p>
                        <p className={featuresCardDescription}>
                        Enables teachers to create exercises, post announcements, and manage Filipino Sign Language class members
                        </p>
                    </div>
                    <Image src="/images/features/educators.svg" alt="deaf-features" width={144} height={144} />
                </button>

            </div>

            <div className="flex flex-col items-center font-bold my-10">
                <p className="text-8xl">
                    BREAKING THE SILENCE.
                </p>
                <p className="text-7xl">
                    BRIDGING THE GAP.
                </p>
            </div>
        
        </div>
    );
};

export default Features;
export const featuresId = "features";

const featuresCardContainer = "flex flex-row p-4 m-2 shadow-nuemorphic rounded-3xl transition-colors ease-in-out duration-700 hover:bg-secondary hover:text-snow text-left"
const featuresCardTitle = "text-3xl font-bold";
const featuresCardDescription = "text-base font-geroama";