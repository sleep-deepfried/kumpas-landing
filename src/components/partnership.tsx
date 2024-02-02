import Image from "next/image";

const Partnership = () => {
    return(
        <div className="my-20 flex flex-col px-24 gap-14">
        
        <div className="flex flex-col">
            <div className="flex flex-row">
                <div className="bg-secondary h-11 w-1 mr-2"></div>
                <p className="font-georama text-4xl">
                    TARGET PARTNERSHIP
                </p>
            </div>

            <p className="font-bold text-7xl">
                    OUR PARTNERS
            </p>

            <p className="font-georama text-xl">
                Kumpas aspires to establish meaningful partnerships with Deaf Organizations across <br />
                the Philippines, fostering collaboration with educational institutions that specialize in <br />
                Special Needs Education (SNED).
            </p>
        </div>

            <div className="grid grid-cols-4 gap-8 text-xl">

                <button className="p-4 flex flex-row gap-4 items-center rounded-2xl transition-shadow ease-in-out duration-500 hover:shadow-nuemorphic">
                    <Image
                        src="/images/partnerships/deped.svg"
                        alt="partnership-1"
                        width={75}
                        height={75}
                    />
                    <p className="font-georama text-xl text-left">
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
                    <p className="font-georama text-xl text-left">
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
                    <p className="font-georama text-xl text-left">
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
                    <p className="font-georama text-xl text-left">
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
                    <p className="font-georama text-xl text-left">
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
                    <p className="font-georama text-xl text-left">
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
                    <p className="font-georama text-xl text-left">
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
                    <p className="font-georama text-xl text-left">
                        PHILIPPINE INSTITUTE FOR THE DEAF
                    </p>
                </button>

            </div>
        </div>
    );
}

export default Partnership;