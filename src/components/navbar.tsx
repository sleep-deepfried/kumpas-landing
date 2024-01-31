import Image from "next/image";

const Navbar = () =>{
    return (
        //Navbar Container
        <div className="h-24 bg-primary flex flex-row items-center text-black justify-around">
            {/* Logo */}
                <button className="flex flex-row items-center ">
                    <Image src="/images/kumpas-logo.png" alt="logo" width={75} height={75} />
                    <div className=" m-1"></div>
                    <div className= "text-6xl font-bold">
                        KUMPAS
                    </div>
                </button>

                {/* Links */}
                <div className="flex flex-row justify-around w-links font-georama text-xl">

                    <button className="no-underline hover:underline underline-offset-8"> 
                        Why Now
                    </button>

                    <button className="no-underline hover:underline underline-offset-8"> 
                        Features 
                    </button>

                    <button className="no-underline hover:underline underline-offset-8"> 
                        Partnerships
                    </button>

                    <button className="no-underline hover:underline underline-offset-8"> 
                        SGD 
                    </button>

                    <button className="no-underline hover:underline underline-offset-8"> 
                        About Us 
                    </button>
                </div>

                {/* Buttons */}
                <div className="text-xl font-bold">
                    <button className="bg-snow text-secondary rounded-md p-2 m-2 hover:bg-zinc-300">SCHEDULE A DEMO</button>
                    <button className="bg-secondary text-white rounded-md p-2 m-2 hover:bg-indigo-950">CONTACT US</button>
                </div>
        </div>
    );
};

export default Navbar;