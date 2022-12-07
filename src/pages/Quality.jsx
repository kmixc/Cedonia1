import React from 'react'
import { Link } from "react-router-dom";
import File from "../img/3602-7_ENG_Cedonia-Inc.jpg"

export default function Quality() {
    return (
        <div>
            <div class="bg-white">
                <div class="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                    <h2 class="text-3xl flex justify-center font-extrabold text-black sm:text-4xl">
                        <span class="block">
                            Committed to
                        </span>
                        <span class="block text-red-500">
                            &nbsp;Quality
                        </span>
                        <span class="block">
                            &nbsp;&
                        </span>
                        <span class="block text-red-500">
                            &nbsp;Customer Service
                        </span>
                    </h2>
                    <p class="text-xl mt-4 max-w-3xl mx-auto text-gray-400">
                        our philosophy is simple. We deliver high-precision, high-quality custom machining requirements, in the lowest possible time, at the most competitive prices. Not only do we have the technical competence and machine capabilities to meet and exceed our client’s expectations, but we also aim for the highest standards of quality and customer service.
                    </p>
                    <div class="lg:mt-0 lg:flex-shrink-0">
                        <div class="mt-12 inline-flex rounded-md shadow">
                            <Link to="/contact" class="py-4 px-6  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                Contact Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-gray-100 flex justify-between lg:flex-row flex-col">
                <div class="text-start lg:w-1/2 py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                    <h2 class="text-3xl font-extrabold text-black sm:text-4xl">
                        <span class="block">
                            Inspections are a Way of Life at Cedonia
                        </span>
                        <span class="block text-indigo-500">
                            It&#x27;s today or never.
                        </span>
                    </h2>
                    <p class="text-xl mt-4 text-gray-400">
                        I had noticed that both in the very poor and very rich extremes of society the mad were often allowed to mingle freely
                    </p>
                </div>
                <img src={File} class="lg:mx-none md:mx-auto sm:mx-auto h-2/6 sm:w-3/4 md:w-3/5 lg:w-1/3 w-fit lg:block" />
            </div>


        </div>
    )
}
