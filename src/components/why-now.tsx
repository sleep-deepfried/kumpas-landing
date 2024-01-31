"use client"

import Image from "next/image";
import React, { useState } from "react";

// ... (previous code)

const WhyNow: React.FC = () => {
    const [expandedCards, setExpandedCards] = useState<number | null>(1);

    const toggleExpansion = (cardIndex: number) => {
        setExpandedCards((prevExpandedCards) => {
            // If the clicked card is already expanded, keep it expanded
            if (prevExpandedCards === cardIndex) {
                return prevExpandedCards;
            } else {
                // If a different card is clicked, expand it
                return cardIndex;
            }
        });
    };


    return (
        <div className="bg-snow flex flex-row my-20 px-24 justify-between ">
            <div className="flex flex-col">
                <div className="flex flex-row">
                    <div className="bg-secondary h-9.5 w-0.5 mr-2"></div>
                    <p className="text-black font-georama text-4xl leading-tight">
                        WHY NOW?
                    </p>
                </div>

                <p className="font-bold text-6xl text-secondary">
                    COMMUNICATION <br />
                    BARRIERS EXIST!
                </p>

                {/* Why Now Card 1 */}
                <div
                    className={`p-2 w-1/2 ${
                        expandedCards === 1 ? 'border-l-4 border-secondary' : ''
                    } `}
                    onClick={() => {toggleExpansion(1); }}
                >
                    <button className="flex flex-row">
                        <Image
                            src="/images/why-now/why-now-1.svg"
                            alt="why-now-1"
                            width={75}
                            height={75}
                        />
                        <div className="flex flex-col">
                            <p className="flex text-left font-bold text-lg">
                                Lack of identity due to the exclusion in multilingual classrooms
                            </p>
                            <p
                                className={`text-justify transition-max-height duration-700 overflow-hidden ${
                                    expandedCards === 1 ? 'max-h-20' : 'max-h-0' 
                                }`}
                            >
                                Deaf students excluded in a multilingual classroom 
                                due to the lack of awareness to Filipino Sign 
                                Language
                            </p>
                        </div>
                    </button>
                </div>

                {/* Why Now Card 2 */}
                <div
                    
                    className={`p-2 w-80 ${
                        expandedCards === 2 ? 'border-l-4 border-secondary' : ''
                    } `}
                    onClick={() => toggleExpansion(2)}
                >
                <button className="flex flex-row">
                        <Image
                            src="/images/why-now/why-now-2.svg"
                            alt="why-now-2"
                            width={75}
                            height={75}
                        />
                        <div className="flex flex-col">
                            <p className="flex text-left font-bold text-lg">
                                Treat deaf children as disabled and
                                linguistic deprivation at a young age
                            </p>
                            <p
                                className={`text-justify transition-max-height duration-700 overflow-hidden ${
                                    expandedCards === 2 ? 'max-h-20' : 'max-h-0'
                                }`}
                            >
                                This is the expanded description that will be shown when clicked.
                            </p>
                        </div>
                    </button>
                </div>

                {/* Why Now Card 3 */}
                <div
                    className={`p-2 w-80 ${
                        expandedCards === 3 ? 'border-l-4 border-secondary' : ''
                    } `}
                    onClick={() => toggleExpansion(3)}
                >
                    <button className="flex flex-row">
                    <Image
                        src="/images/why-now/why-now-3.svg"
                        alt="why-now-3"
                        width={75}
                        height={75}
                    />
                    <div className="flex flex-col">
                        <p className="flex text-left font-bold text-lg">
                            Exact messages only get across using 
                            mouthing
                        </p>
                        <p
                                className={`text-justify transition-max-height duration-700 overflow-hidden ${
                                    expandedCards  === 3 ? 'max-h-20' : 'max-h-0'
                                }`}
                            >
                                This is the expanded description that will be shown when clicked.
                            </p>
                    </div>
                    </button>
                </div>

                {/* Why Now Card 4 */}
                <div
                    className={`p-2 w-80 ${
                        expandedCards  === 4 ? 'border-l-4 border-secondary' : ''
                    } `}
                    onClick={() => toggleExpansion(4)}
                >
                    <button className="flex flex-row">
                    <Image
                        src="/images/why-now/why-now-4.svg"
                        alt="why-now-4"
                        width={75}
                        height={75}
                    />
                    <div className="flex flex-col">
                        <p className="flex text-left font-bold text-lg">
                            No implementation plan of Filipino Sign 
                            Language in the present K-12 curriculum
                        </p>
                        <p className={`text-justify transition-max-height duration-700 overflow-hidden ${
                                    expandedCards === 4 ? 'max-h-20' : 'max-h-0'
                                }`}
                            >
                                This is the expanded description that will be shown when clicked.
                            </p>
                    </div>
                    </button>
                </div>

            </div>
            
            <div>
               {/* Why Now Image 1 */}
                {expandedCards !== null && (
                    <div className={`transition-opacity duration-700 ease-in-out opacity-${expandedCards === 1 ? '100' : '0'}`}>
                        {expandedCards === 1 && (
                        <Image
                            src={`/images/why-now/why-now-${expandedCards}-image.png`}
                            alt={`why-now-image-${expandedCards}`}
                            width={600}
                            height={600}
                        />
                        )}
                    </div>
                )}

                 {/* Why Now Image 2 */}
                {expandedCards !== null && (
                    <div className={`transition-opacity duration-700 ease-in-out opacity-${expandedCards === 2 ? '100' : '0'}`}>
                        {expandedCards === 2 && (
                        <Image
                            src={`/images/why-now/why-now-${expandedCards}.svg`}
                            alt={`why-now-image-${expandedCards}`}
                            width={600}
                            height={600}
                        />
                        )}
                    </div>
                )}

                 {/* Why Now Image 3 */}
                {expandedCards !== null && (
                    <div className={`transition-opacity duration-700 ease-in-out opacity-${expandedCards === 3 ? '100' : '0'}`}>
                        {expandedCards === 3 && (
                        <Image
                            src={`/images/why-now/why-now-${expandedCards}.svg`}
                            alt={`why-now-image-${expandedCards}`}
                            width={600}
                            height={600}
                        />
                        )}
                    </div>
                )}

                 {/* Why Now Image 4 */}
                {expandedCards !== null && (
                    <div className={`transition-opacity duration-700 ease-in-out opacity-${expandedCards === 4 ? '100' : '0'}`}>
                        {expandedCards === 4 && (
                        <Image
                            src={`/images/why-now/why-now-${expandedCards}-image.png`}
                            alt={`why-now-image-${expandedCards}`}
                            width={600}
                            height={600}
                        />
                        )}
                    </div>
                )}
                </div>
        </div>
    );
};

export default WhyNow;
