import Image from "next/image";

const Partnership = () => {
    return(
        <section id="partnership" className="mb-10 sm:my-20 flex flex-col px-10 sm:px-24 gap:7 sm:gap-14">
        
        <div className="flex flex-col">
            <div className="flex flex-row">
                <div className="bg-secondary h-8 sm:h-11 w-1 mr-2"></div>
                <p className="font-georama text-2xl sm:text-4xl">
                    TARGET PARTNERSHIP
                </p>
            </div>

            <p className="font-bold text-4xl sm:text-7xl">
                    OUR PARTNERS
            </p>

            <p className="font-georama text-xs sm:text-xl">
                Kumpas aspires to establish meaningful partnerships with Deaf Organizations across 
                the Philippines, fostering collaboration with educational institutions that specialize in
                Special Needs Education.
            </p>
        </div>

            <div className="flex-col sm:grid grid-cols-4 gap-8 sm:text-xl">

                <button className="p-4 flex flex-row gap-4 items-center rounded-2xl transition-shadow ease-in-out duration-500 hover:shadow-nuemorphic">
                    <Image
                        src="/images/partnerships/deped.svg"
                        alt="partnership-1"
                        width={75}
                        height={75}
                    />
                    <p className="font-georama text-left">
                        DEPARTMENT OF EDUCATION
                    </p>
                </button>

                <button className="p-4 flex flex-row gap-4 items-center rounded-2xl transition-shadow ease-in-out duration-500 hover:shadow-nuemorphic">
                    <Image
                        src="/images/partnerships/save-the-children.svg"
                        alt="partnership-1"
                        width={75}
                        height={75}
                    />
                    <p className="font-georama text-left">
                        SAVE THE CHILDREN
                    </p>
                </button>

                <button className="p-4 flex flex-row gap-4 items-center rounded-2xl transition-shadow ease-in-out duration-500 hover:shadow-nuemorphic">
                    <Image
                        src="/images/partnerships/kakamay.svg"
                        alt="partnership-1"
                        width={75}
                        height={75}
                    />
                    <p className="font-georama text-left">
                        KAKAMAY MOVEMENT
                    </p>
                </button>

                <button className="p-4 flex flex-row gap-4 items-center rounded-2xl transition-shadow ease-in-out duration-500 hover:shadow-nuemorphic">
                    <Image
                        src="/images/partnerships/fsl-for-the-filipino-deaf.svg"
                        alt="partnership-1"
                        width={75}
                        height={75}
                    />
                    <p className="font-georama text-left">
                        FILIPINO SIGN LANGUAGE FOR THE FILIPINO DEAF
                    </p>
                </button>

                <button className="p-4 flex flex-row gap-4 items-center rounded-2xl transition-shadow ease-in-out duration-500 hover:shadow-nuemorphic">
                    <Image
                        src="/images/partnerships/mccid.svg"
                        alt="partnership-1"
                        width={75}
                        height={75}
                    />
                    <p className="font-georama text-left">
                        MCID COLLEGE OF TECHNOLOGY
                    </p>
                </button>

                <button className="p-4 flex flex-row gap-4 items-center rounded-2xl transition-shadow ease-in-out duration-500 hover:shadow-nuemorphic">
                    <Image
                        src="/images/partnerships/fsl-for-the-filipino-deaf.svg"
                        alt="partnership-1"
                        width={75}
                        height={75}
                    />
                    <p className="font-georama text-left">
                        PHILIPPINE SCHOOL FOR THE DEAF
                    </p>
                </button>

                <button className="p-4 flex flex-row gap-4 items-center rounded-2xl transition-shadow ease-in-out duration-500 hover:shadow-nuemorphic">
                    <Image
                        src="/images/partnerships/dlscsb.svg"
                        alt="partnership-1"
                        width={75}
                        height={75}
                    />
                    <p className="font-georama text-left">
                        DE LA SALLE COLLEGE OF SAINT BENILDE
                    </p>
                </button>

                <button className="p-4 flex flex-row gap-4 items-center rounded-2xl transition-shadow ease-in-out duration-500 hover:shadow-nuemorphic">
                    <Image
                        src="/images/partnerships/philippine-institute-for-the-deaf.svg"
                        alt="partnership-1"
                        width={75}
                        height={75}
                    />
                    <p className="font-georama text-left">
                        PHILIPPINE INSTITUTE FOR THE DEAF
                    </p>
                </button>

            </div>
        </section>
    );
}

export default Partnership;
export const partnershipId = "partnership";