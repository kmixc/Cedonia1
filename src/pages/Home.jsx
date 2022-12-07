import React from 'react'
import { FaCogs, FaUserAlt, FaCertificate, FaTools, FaRocket, FaHandshake, } from "react-icons/fa"
import Video from "../img/Landscape.mp4"
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="isolate bg-white ">
            <main>
                <div className="relative h-screen myImg">
                    <div className='hidden sm:flex absolute z-[-60] overflow-hidden'>
                        <video autoPlay muted loop id='myVideo'>
                            <source src={Video}></source>
                        </video>
                    </div>
                    <div className="mx-auto max-w-3xl pb-32 pt-60 sm:pb-40 drop">
                        <div>
                            <div className="hidden sm:mb-4 sm:flex sm:justify-center">
                                <div className="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 text-white ring-1 ring-white hover:ring-red-500 hover:text-white transition">
                                    <span className="text-white">
                                        Learn more about us here. {' '}
                                        <a href="/about" className="font-semibold text-red-500">
                                            <span className="absolute inset-0" aria-hidden="true" />
                                            Read more <span aria-hidden="true">&rarr;</span>
                                        </a>
                                    </span>
                                </div>
                            </div>
                            <div>
                                <h1 className="text-white text-5xl font-bold tracking-tight text-center sm:text-7xl">
                                    Welcome to Cedonia
                                </h1>
                                <h2 className="text-2xl font-bold tracking-tight text-center sm:text-2xl p-2 text-red-600">Experts in Custom Project Management and CNC Machining. </h2>
                                <p className=" text-lg leading-8 text-white p-2 text-center">
                                    Based in Ontario, Canada, Cedonia has been in the business of custom machining and project management since 1996.
                                    We have been serving a large base of multi-industry clients, including several players in the automotive, aerospace, nuclear, military, pharmaceutical, mining and construction space.
                                </p>
                                <div className="mt-8 flex gap-x-4 justify-center">
                                    <a
                                        href="/services"
                                        className="inline-block rounded-lg bg-red-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-red-600 hover:bg-red-700 hover:ring-red-700"
                                    >
                                        Services
                                        <span aria-hidden="true">
                                            &rarr;
                                        </span>
                                    </a>
                                    <a
                                        href="/quote"
                                        className="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-white ring-1 ring-white hover:ring-red-500 hover:text-white transition"
                                    >
                                        Get a Quote
                                        <span aria-hidden="true">
                                            &rarr;
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main >

            <div class="p-16 px-6 mx-auto bg-zinc-100">
                <div class="mb-16 text-center">
                    <h2 class="text-base font-semibold tracking-wide text-red-600 uppercase">
                        Cedonia
                    </h2>
                    <p class="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-zinc-900 sm:text-4xl">
                        Our Services
                    </p>
                </div>
                <div class="flex flex-wrap my-12">
                    <div class="w-full p-8 border-b md:w-1/2 md:border-r lg:w-1/3">
                        <div class="flex items-center mb-6">
                            <FaCogs size={"2em"} className="text-red-500" />
                            <div class="ml-4 font-semibold text-zinc-900 text-xl">
                                Diverse Machining
                            </div>
                        </div>
                        <p class="leading-loose text-zinc-500 text-md">
                            Cedonia has been in the business of custom machining since 1996. We have the capabilities.
                        </p>
                    </div>
                    <div class="w-full p-8 border-b md:w-1/2 lg:w-1/3 lg:border-r">
                        <div class="flex items-center mb-6">
                            <FaUserAlt size={"2em"} className="text-red-500" />

                            <div class="ml-4 font-semibold text-zinc-900 text-xl">
                                Core Capabilities
                            </div>
                        </div>
                        <p class="leading-loose text-zinc-500 text-md">
                            With the latest, future-ready machines and over 240 years of collective experience and technical expertise.
                        </p>
                    </div>
                    <div class="w-full p-8 border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0">
                        <div class="flex items-center mb-6">
                            <FaTools size={"2em"} className="text-red-500" />

                            <div class="ml-4 font-semibold text-zinc-900 text-xl">
                                Materials
                            </div>
                        </div>
                        <p class="leading-loose text-zinc-500 text-md">
                            We have successfully worked with a variety of materials.
                        </p>
                    </div>
                    <div class="w-full p-8 border-b md:w-1/2 lg:w-1/3 lg:border-r lg:border-b-0">
                        <div class="flex items-center mb-6">
                            <FaCertificate size={"2em"} className="text-red-500" />

                            <div class="ml-4 font-semibold text-zinc-900 text-xl">
                                Quality Control
                            </div>
                        </div>
                        <p class="leading-loose text-zinc-500 text-md">
                            When it comes to machining and fabrication, both, quality and precision are paramount.
                        </p>
                    </div>
                    <div class="w-full p-8 border-b md:w-1/2 md:border-r md:border-b-0 lg:w-1/3 lg:border-b-0">
                        <div class="flex items-center mb-6">
                            <FaRocket size={"2em"} className="text-red-500" />

                            <div class="ml-4 font-semibold text-zinc-900 text-xl">
                                Lead Times
                            </div>
                        </div>
                        <p class="leading-loose text-zinc-500 text-md">
                            While we deliver standard requirements in 1 to 4 weeks based on the nature of the project.
                        </p>
                    </div>
                    <div class="w-full p-8 md:w-1/2 lg:w-1/3">
                        <div class="flex items-center mb-6">
                            <FaHandshake size={"2em"} className="text-red-500" />

                            <div class="ml-4 font-semibold text-zinc-900 text-xl">
                                Ancillary Services
                            </div>
                        </div>
                        <p class="leading-loose text-zinc-500 text-md">
                            Over the years, our clients have become a part of the extended family at Cedonia.
                        </p>
                    </div>
                </div>
            </div>



            <div className="bg-zinc-200">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                        <h2 className="text-2xl font-bold text-zinc-900">Our Clients</h2>

                        <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                            <div className="group relative">
                                <div className="relative flex items-center justify-center h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/en/5/5b/Candu_logo.png"
                                        alt="Candu"
                                        className="h-fit w-80 object-contain object-center"
                                    />
                                </div>
                                <h3 className="mt-6 text-sm text-zinc-500">
                                    <a>
                                        <span className="absolute inset-0" />
                                        Nuclear power
                                    </a>
                                </h3>
                                <p className="text-base font-semibold text-zinc-900">Candu Energy Inc</p>
                            </div>
                            <div className="group relative">
                                <div className="relative flex items-center justify-center h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                                    <img
                                        src="data:image/png;base64,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"
                                        alt="Field Aviation"
                                        className="h-fit w-72 object-contain object-center"
                                    />
                                </div>
                                <h3 className="mt-6 text-sm text-zinc-500">
                                    <a>
                                        <span className="absolute inset-0" />
                                        Aircraft modifiers to the world
                                    </a>
                                </h3>
                                <p className="text-base font-semibold text-zinc-900">Field Aviation</p>
                            </div>
                            <div className="group relative">
                                <div className="relative flex items-center justify-center h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                                    <img
                                        src="https://www.global-aero.com/wp-content/themes/global/style/img/logo.png"
                                        alt="Global Aerospace"
                                        className="h-fit w-fit object-contain object-center"
                                    />
                                </div>
                                <h3 className="mt-6 text-sm text-zinc-500">
                                    <a>
                                        <span className="absolute inset-0" />
                                        Leading provider of aircraft insurance
                                    </a>
                                </h3>
                                <p className="text-base font-semibold text-zinc-900">Global Aerospace</p>
                            </div>
                        </div>

                        <div className="mt-6 space-y-12 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
                            <div className="group relative">
                                <div className="relative flex items-center justify-center h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                                    <img
                                        src="https://www.georgiancollege.ca/wp-content/uploads/employers-and-partmers-magna-international-logo-georgian-college-2021-11-05-1024x576.jpg"
                                        alt="Field Aviation"
                                        className="h-fit w-80 object-contain object-center"
                                    />
                                </div>
                                <h3 className="mt-6 text-sm text-zinc-500">
                                    <a>
                                        <span className="absolute inset-0" />
                                        Canadian parts manufacturer for automakers
                                    </a>
                                </h3>
                                <p className="text-base font-semibold text-zinc-900">Magna International Inc</p>
                            </div>
                            <div className="group relative">
                                <div className="relative flex items-center justify-center h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                                    <img
                                        src="https://pbs.twimg.com/profile_images/699730225513439232/58D1Tlye_400x400.jpg"
                                        alt="Global Aerospace"
                                        className="h-fit w-80 object-contain object-center"
                                    />
                                </div>
                                <h3 className="mt-6 text-sm text-zinc-500">
                                    <a>
                                        <span className="absolute inset-0" />
                                        International space mission partner and robotics, satellite systems & geointelligence
                                    </a>
                                </h3>
                                <p className="text-base font-semibold text-zinc-900">MDA Corporation</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <section>
                <div class="p-4 bg-zinc-300 max-w-screen sm:p-6 lg:p-8">
                    <div class="flex flex-wrap ">
                        <div class="w-full px-8 lg:w-1/2 flex items-center">
                            <div class="pb-12 mb-6 lg:mb-0 lg:pb-0">
                                <h2 class="mb-4 text-6xl font-bold lg:text-6xl text-zinc-900 font-heading">
                                    Why Choose Us?
                                </h2>
                                <p class="mb-8 text-xl leading-loose text-zinc-500">
                                    Under the leadership of our owners, Aurel Nistor and Valentin Dinoiu, Cedonia has been growing from strength to strength. What makes us the ideal partners for your custom machining projects?
                                </p>
                                <div class="w-full md:w-1/3">
                                    <Link to="/contact" class=" py-4 px-6 bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg ">
                                        See more
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div class="w-full px-8 lg:w-1/2">
                            <ul class="space-y-4">
                                <li class="flex -mx-4">
                                    <div class="px-4 flex items-center">
                                        <span class="flex items-center justify-center w-16 h-16 mx-auto text-2xl font-bold text-red-600 rounded-full font-heading bg-white">
                                            1
                                        </span>
                                    </div>
                                    <div class="px-4">
                                        <h3 class="mt-4 text-xl text-zinc-900 font-semibold">
                                            Our Staff
                                        </h3>
                                        <p class="leading-loose text-zinc-500">
                                            With solid technical backgrounds and deep experience spanning multiple continents, our team of expert technicians can offer solutions to help you stay ahead of the curve.
                                        </p>
                                    </div>
                                </li>
                                <li class="flex -mx-4">
                                    <div class="px-4 flex items-center">
                                        <span class="flex items-center justify-center w-16 h-16 mx-auto text-2xl font-bold text-red-600 rounded-full font-heading bg-white">
                                            2
                                        </span>
                                    </div>
                                    <div class="px-4">
                                        <h3 class="mt-4 text-xl text-zinc-900 font-semibold">
                                            Our Technological Capabilities
                                        </h3>
                                        <p class="leading-loose text-zinc-500">
                                            In addition to regular maintenance and upgrade of our existing capabilities, we invest in future-ready machines, ancillary equipment and technology that aim for quick payoffs and excellent production efficiencies.
                                        </p>
                                    </div>
                                </li>
                                <li class="flex -mx-4">
                                    <div class="px-4 flex items-center">
                                        <span class="flex items-center justify-center w-16 h-16 mx-auto text-2xl font-bold text-red-600 rounded-full font-heading bg-white">
                                            3
                                        </span>
                                    </div>
                                    <div class="px-4">
                                        <h3 class="mt-4 text-xl text-zinc-900 font-semibold">
                                            Our Quality Promise
                                        </h3>
                                        <p class="leading-loose text-zinc-500">
                                            We continually aim to exceed your expectations in terms of quality. Our system is certified as IS0 9001:2015 and CSA Z299.3 compliant.
                                        </p>
                                    </div>
                                </li>
                                <li class="flex -mx-4">
                                    <div class="px-4 flex items-center">
                                        <span class="flex items-center justify-center w-16 h-16 mx-auto text-2xl font-bold text-red-600 rounded-full font-heading bg-white">
                                            4
                                        </span>
                                    </div>
                                    <div class="px-4">
                                        <h3 class="mt-4 text-xl text-zinc-900 font-semibold">
                                            Our Customer Focus
                                        </h3>
                                        <p class="leading-loose text-zinc-500">
                                            We pride ourselves on our responsiveness. Our machines and staff are available to you 24/7. While our standard delivery times are 1 to 4 weeks, we do offer to take on rush jobs when possible.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>



        </div >
    )
}
