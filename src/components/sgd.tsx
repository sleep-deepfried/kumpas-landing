import Image from 'next/image';

const sgd =() => {
    return(
        <section id="sgd" className="bg-primary">

            <div className="flex flex-col sm:flex-row p-14 gap-16 justify-center font-georama font-semibold">

                    <div className='flex flex-col sm:flex-row gap-4 items-center shadow-nuemorphic-sgd p-10 sm:p-10 rounded-lg' >
                        <Image src="/images/sgd/sgd-4.svg" alt="sgd-4" width={220} height={220} />
                        <p className='text-sm text-center sm:text-base sm:text-left'>
                        Kumpas prioritizes quality education for the Deaf, 
                        focusing on meeting the unique needs of those with 
                        hearing impairments in line with SDG 4.
                        </p>
                    </div>

                    <div className='flex flex-col sm:flex-row gap-4 items-center shadow-nuemorphic-sgd p-10 sm:p-10 rounded-lg '>
                        <Image src="/images/sgd/sgd-10.svg" alt="sgd-4" width={220} height={220} />
                        <p className='text-sm text-center sm:text-base sm:text-left'>
                        Kumpas actively supports SDG 10 by working to reduce 
                        inequalities, promoting equal opportunities, and 
                        addressing disparities faced by the Deaf community.
                        </p>
                    </div>

            </div>

        </section>
    );
}

export default sgd;
export const sgdId = "sgd";