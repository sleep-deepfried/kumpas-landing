import Image from "next/image";

const Footer = () => {
    return(
        <section className="px-10 sm:px-24 py-4 flex flex-col gap-5 sm:gap-10">
            
            <div className="flex flex-row">

                <div className="flex flex-row gap-52 sm:flex-col sm:gap-2">
                    <p className="font-bold text-lg sm:text-3xl">
                        KUMPAS
                    </p>

                    <div className="flex flex-row gap-2 items-center">
                        <a href="" target="blank">
                            <Image src="/images/footer/fb.svg" alt="fb" width={10} height={20}/>
                        </a>

                        <a href="" target="blank">
                            <Image src="/images/footer/ig.svg" alt="ig" width={20} height={20}/>
                        </a>
                        <a href="" target="blank">
                            <Image src="/images/footer/linkedin.svg" alt="linkedin" width={22} height={20}/>
                        </a>

                    </div>
                </div>

            </div>

            <div className="flex flex-col">
                <div className="h-px bg-black"></div>

                <div className="flex flex-row gap-2 items-center text-[7px] sm:text-sm">

                    <a href="" target="blank" className="font-georama text-center">
                        TERMS OF SERVICE
                    </a>

                    <div className="h-2 sm:h-4 w-px bg-black items-center"></div>
                
                    <a href="" target="blank" className="font-georama text-center">
                        PRIVACY POLICY
                    </a>
                    
                    <div className="h-2 sm:h-4 w-px bg-black items-center"></div>

                    <a href="" target="blank" className="font-georama ">
                        REFUND POLICY
                    </a>
                    
                    <div className="h-2 sm:h-4 w-px bg-black items-center"></div>

                    <a href="" target="blank" className="font-georama">
                        ACCESSIBILITY POLICY
                    </a>

                </div>
                
                <p className="font-georama text-[7px] sm:text-sm">
                    @2024 Manila.Inc. All Rights Reserved.
                </p>

            </div>

        </section>
    );

}

export default Footer;