import Image from 'next/image';

const sgd =() => {
    return(
        <section className="bg-primary">

            <div className="flex flex-row p-14 gap-16 justify-center font-georama ">

                    <div className='flex flex-row gap-4 items-center shadow-nuemorphic-sgd p-14 rounded-lg'>
                        <Image src="/images/sgd/sgd-4.svg" alt="sgd-4" width={220} height={220} />
                        <p className=''>
                        Kumpas places a particular <br />
                        emphasis on promoting quality <br />
                        education for the Deaf community. <br />
                        Aligned with SDG number 4, it <br />
                        address the unique educational <br />
                        needs of individuals with hearing <br />
                        impairments.
                        </p>
                    </div>

                    <div className='flex flex-row gap-4 items-center shadow-nuemorphic-sgd p-10 rounded-lg '>
                        <Image src="/images/sgd/sgd-10.svg" alt="sgd-4" width={220} height={220} />
                        <p className=''>
                        SDG 10 aims to reduce inequalities <br />
                        within and among countries. Kumpas <br />
                        actively works towards fostering a <br />
                        more inclusive society by promoting <br />
                        equal opportunities and addressing <br />
                        disparities experienced by the Deaf <br />
                        community.
                        </p>
                    </div>

            </div>

        </section>
    );
}

export default sgd;