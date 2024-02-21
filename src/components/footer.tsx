import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return(
        <section className="px-10 sm:px-24 py-4 flex flex-col gap-3 sm:gap-5">
            
            <div className="flex flex-row">

                <div className="flex flex-row items justify-between sm:flex-col sm:gap-2 w-screen">
                    <p className="font-bold text-xl sm:text-3xl">
                        KUMPAS
                    </p>

                    <div className="flex flex-row gap-2 items-center">
                        <Link href="/" >
                            <Image src="/images/footer/fb.svg" alt="fb" width={10} height={20}/>
                        </Link>

                        <Link href="/" >
                            <Image src="/images/footer/ig.svg" alt="ig" width={20} height={20}/>
                        </Link>
                        <Link href="/" >
                            <Image src="/images/footer/linkedin.svg" alt="linkedin" width={24} height={20}/>
                        </Link>

                    </div>
                </div>

            </div>

            <div className="flex flex-col">
                <div className="h-px bg-black"></div>

                <div className="flex flex-row gap-2 items-center text-[7px] sm:text-sm">

                    <Link href="" target="blank" className="font-georama text-center">
                        TERMS OF SERVICE
                    </Link>

                    <div className="h-2 sm:h-4 w-px bg-black items-center"></div>
                
                    <Link href="" target="blank" className="font-georama text-center">
                        PRIVACY POLICY
                    </Link>
                    
                    <div className="h-2 sm:h-4 w-px bg-black items-center"></div>

                    <Link href="" target="blank" className="font-georama ">
                        REFUND POLICY
                    </Link>
                    
                    <div className="h-2 sm:h-4 w-px bg-black items-center"></div>

                    <Link href="" target="blank" className="font-georama">
                        ACCESSIBILITY POLICY
                    </Link>

                </div>
                
                <p className="font-georama text-[7px] sm:text-sm">
                    @2024 Manila.Inc. All Rights Reserved.
                </p>

            </div>

        </section>
    );

}

export default Footer;