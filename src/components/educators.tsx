import Image from "next/image";

const Educators = () => {
    return(
        <div className="bg-educators h-educators px-24 my-20 flex flex-row justify-around bg-no-repeat items-center">
            <div className="-mt-14">
                <Image src="/images/educators/educators-image.svg" alt="educators-image" width={756} height={500} />
            </div>
            <div className="flex flex-col space items-center gap-5">
                <p className="font-georama text-4xl text-snow ">
                    Kumpas for
                </p>

                <p className="font-bold text-9xl text-transparent bg-clip-text bg-gradient-to-tr from-black to-secondary font-koulen">
                    EDUCATORS
                </p>

                <p className="text-xl text-center">
                Kumpas for Educators provides a variety of tools and <br />
                added features for teachers and FSL instructors to aid <br />
                them in teaching Filipino Sign Language to young <br />
                Filipino students.
                </p>

                <button className="m-2 p-4 bg-snow rounded-xl font-koulen text-secondary text-3xl hover:bg-zinc-300">
                    WATCH A DEMO
                </button>
            </div>
        </div>
    );
}

export default Educators;