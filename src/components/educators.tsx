import Image from "next/image";

const Educators = () => {
    return(
        <div className="px-24 py-20 flex flex-col gap-3 sm:flex-row justify-around items-center">
            <div className="-mt-14 ">
                <Image src="/images/educators/educators-image.svg" alt="educators-image" width={756} height={500} />
            </div>
            <div className="flex flex-col space items-center gap-5">
                <p className="font-georama text-snow text-2xl sm:text-4xl">
                    Kumpas for
                </p>

                <p className="font-bold text-5xl sm:text-9xl text-transparent bg-clip-text bg-gradient-to-tr from-black to-secondary font-koulen">
                    EDUCATORS
                </p>

                <p className="text-lg sm:text-xl text-center">
                Kumpas for Educators provides a variety of tools and 
                added features for teachers and FSL instructors to aid 
                them in teaching Filipino Sign Language to young 
                Filipino students.
                </p>

                <button className="m-2 p-2 sm:p-4 bg-snow rounded-xl font-koulen text-secondary text-xl sm:text-3xl hover:bg-zinc-300">
                    WATCH A DEMO
                </button>
            </div>
        </div>
    );
}

export default Educators;