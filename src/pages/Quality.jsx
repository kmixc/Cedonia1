import React from 'react'
import { Link } from "react-router-dom";
import File from "../img/3602-7_ENG_Cedonia-Inc.jpg"
import { FaCoins, FaCheckDouble, FaHandsHelping } from 'react-icons/fa'


export default function Quality() {
    return (
        <div>
            <div class="bg-white">
                <div class="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                    <h2 class="text-4xl flex flex-wrap justify-center font-extrabold text-black sm:text-4xl">
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
                    <p class="text-xl mt-4 max-w-3xl mx-auto text-zinc-400">
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

            <div class="bg-zinc-100 flex justify-between lg:flex-row flex-col">
                <div class="lg:w-1/2 flex justify-center items-center flex-wrap py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                    <div className='px-5 flex flex-wrap'>
                        <h2 class="text-4xl text-black sm:text-6xl">
                            <span class="block font-extrabold">
                                Inspections are a Way of Life at Cedonia
                            </span>
                        </h2>
                        <p class="text-xl mt-4 text-zinc-400">
                            We will never supply parts or products that we are not willing to buy ourselves. This is evident in our 28,000 square foot facility in Mississauga, Ontario,
                            where every order passes through exacting standards of quality control.
                        </p>
                        <p class="text-xl mt-2 text-zinc-400">
                            As an ISO-9001:2015 certified company, we take our quality checks very seriously.
                        </p>
                    </div>
                </div>
                <img src={File} class="p-4 lg:mx-none md:mx-auto sm:mx-auto h-2/6 sm:w-3/4 md:w-3/5 lg:w-2/6 w-fit lg:block" />
            </div>

            <div className='py-16 bg-zinc-100'>
                <div class="flex-wrap items-start justify-center gap-8 text-center sm:flex">
                    <div class="w-full px-4 py-4 mt-6 bg-white rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4">
                        <div class="flex-shrink-0">
                            <div class="flex items-center justify-center w-12 h-12 mx-auto text-white bg-red-500 rounded-md">
                                <FaHandsHelping size={"2em"} />
                            </div>
                        </div>
                        <h3 class="py-4 text-2xl font-semibold text-zinc-900 sm:text-2xl">
                            Order Inspection at Multiple Stages
                        </h3>
                        <p class="py-4 text-zinc-500 text-md">
                            Every component that we design or manufacture at Cedonia, goes through a formal quality inspection at various stages of the production process, including
                            incoming order stage, in-process, and post-production.
                        </p>
                    </div>
                    <div class="w-full px-4 py-4 mt-6 bg-white rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4 sm:mt-16 md:mt-20 lg:mt-24">
                        <div class="flex-shrink-0">
                            <div class="flex items-center justify-center w-12 h-12 mx-auto text-white bg-red-500 rounded-md">
                                <FaCoins size={"2em"} />
                            </div>
                        </div>
                        <h3 class="py-4 text-2xl font-semibold text-zinc-900 sm:text-2xl">
                            Investment in Testing and Measurement Tools
                        </h3>
                        <p class="py-4 text-zinc-500 text-md">
                            We have made substantial investments in acquiring advanced tools and programs that help us with the quality control and inspection process. Our latest equipment,
                            ZEISS CONTURA AND DURAMAX CMM enables precise checks and measurements while we test and inspect all the finished parts and products.
                        </p>
                    </div>
                    <div class="w-full px-4 py-4 mt-6 bg-white rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4">
                        <div class="flex-shrink-0">
                            <div class="flex items-center justify-center w-12 h-12 mx-auto text-white bg-red-500 rounded-md">
                                <FaCheckDouble size={"2em"} />
                            </div>
                        </div>
                        <h3 class="py-4 text-2xl font-semibold text-zinc-900 sm:text-2xl">
                            Upkeep of Machines and Equipment
                        </h3>
                        <p class="py-4 text-zinc-500 text-md">
                            We have put in place a best-in-class maintenance and calibration program that checks whether our machines and equipment are performing as per the specified
                            standards. We make sure that our facility runs effectively and efficiently, and is in top shape at all times.
                        </p>
                    </div>
                </div>
            </div>

            <div className='py-8 bg-zinc-200'>
                <div className="mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="mx-auto max-w-2xl py-8 sm:py-8 lg:max-w-none lg:py-8">
                        <h2 className="text-4xl mb-8 font-bold text-zinc-900 text-center">Your Preferred Partner for Custom Machining and Project Management</h2>
                        <div className="mt-2 space-y-8 lg:grid lg:grid-cols-1 lg:gap-x-3 lg:space-y-0">
                            <div className="group relative px-3">
                                <div>
                                    <h3 className="mt-2 text-lg text-center text-zinc-900">
                                        At Cedonia, we are proud of our ability to deliver precise, defect-free parts and products across diverse, custom machining requirements, for complex, super-specialized businesses.
                                    </h3>
                                </div>
                            </div>
                            <div className="group relative px-3">
                                <div>
                                    <h3 className="mt-2 text-lg text-center text-zinc-900">
                                        Below are a few client testimonials that will throw light on our dedication to quality and customer service.
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-zinc-300 pb-16 pt-8'>
                <h3 className='text-red-500 text-center text-4xl p-4 capitalize font-bold'>testimonials</h3>
                <div class="w-full mx-auto p-4">
                    <div class="flex flex-col items-center justify-center md:items-center md:flex-row">
                        <p class="relative block">
                            <img alt="profil" src="https://enginuityinc.ca/wp-content/uploads/2021/09/Enginuity-Headshot-Slaven-BW-2.jpg" class="mx-auto drop-shadow-md mb-12 object-cover rounded-full h-52 w-52 " />
                        </p>
                        <div class="w-full md:w-2/3">
                            <p class="text-zinc-900 w-full md:w-2/3 m-auto text-left text-lg text-justify md:text-2xl">
                                <span class="font-bold text-red-500">
                                    “
                                </span>
                                Work with this company quite a bit, always fantastic to deal with. Open, friendly, and most of all, extremely high quality.
                                A machine shop that you can hand jobs off to and not have to worry about them coming in off spec. I’ve used their 5-axis CNC services,
                                plunge and wire EDM cutting, turning, and everything is always spot-on. Could recommend anytime.
                                <span class="font-bold text-red-500">
                                    ”
                                </span>
                            </p>
                            <div class="flex items-center justify-center mt-4">
                                <span class="mr-2 text-lg font-semibold text-red-500">
                                    Slaven Prostran
                                </span>
                                <span class="text-xl font-light text-zinc-400">
                                    /
                                </span>
                                <span class="ml-2 text-zinc-600 text-md">
                                    InvoDane Engineering, Toronto
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="w-full mx-auto p-4">
                    <div class="flex flex-col-reverse items-center justify-center md:items-center md:flex-row-reverse">
                        <p class="relative block drop-shadow-lg">
                            <img alt="profil" src="https://i1.rgstatic.net/ii/profile.image/299319002451970-1448374619467_Q512/Slobodan-Rancic.jpg" class="mx-auto grayscale mb-12 object-cover rounded-full h-52 w-52 " />
                        </p>
                        <div class="w-full md:w-2/3">
                            <p class="text-zinc-900 w-full md:w-2/3 m-auto text-left text-lg text-justify md:text-2xl">
                                <span class="font-bold text-red-500">
                                    “
                                </span>
                                We have been working with Cedonia for almost 20 years in the production of our various complex prototypes, parts and sub-assemblies. They produce parts of
                                excellent quality in the shortest time. Cedonia’s technicians are true professionals, friendly and always ready to give their input in choosing the optimal
                                design to simplify the manufacturing of our prototypes.
                                <span class="font-bold text-red-500">
                                    ”
                                </span>
                            </p>
                            <div class="flex items-center justify-center m-4">
                                <span class="mr-2 text-lg font-semibold text-red-500">
                                    Slobodan Rancic
                                </span>
                                <span class="text-xl font-light text-zinc-400">
                                    /
                                </span>
                                <span class="ml-2 text-zinc-600 text-md">
                                    CFD Engineer, Fluid Pressure and Controls Group
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
