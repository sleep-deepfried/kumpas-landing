import Image from "next/image";

const Navbar = () =>{
    return (
        //Navbar Container
        <div className="h-24 bg-yellow flex flex-row items-center text-black justify-around">
            {/* Logo */}
                <div className="flex flex-row items-center ">
                    <Image src="/images/kumpas-logo.png" alt="logo" width={75} height={100} />
                    <div className=" m-1"></div>
                    <div className= "text-4xl font-dosis font-bold">
                        KUMPAS
                    </div>
                </div>

                {/* Links */}
                <div className="flex flex-row justify-around text-lg w-links">
                    <div> Why Now</div>
                    <div> Features </div>
                    <div> Partnerships</div>
                    <div> SGD </div>
                    <div> About Us </div>
                </div>

                {/* Buttons */}
                <div>
                    <button className="bg-gray-950 text-amber-400 rounded-lg p-2 m-2">Schedule a Demo</button>
                    <button className="bg-gray-950 text-amber-400 rounded-lg p-2 m-2">Contact US</button>
                </div>
        </div>
    );
};

export default Navbar;