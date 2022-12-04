import React from 'react'
import { FaCogs, FaUserAlt, FaCertificate, FaTools, FaRocket, FaHandshake, } from "react-icons/fa"
import Video from "../img/Landscape.mp4"

export default function Home() {
    return (
        <div className="isolate bg-white ">
            <main>
                <div className="relative h-screen">
                    <div className='absolute z-[-99] overflow-hidden'>
                        <video autoPlay muted loop id='myVideo'>
                            <source src={Video}></source>
                        </video>
                    </div>
                    <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40 drop">
                        <div>
                            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
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
                                <h1 className="text-white text-4xl font-bold tracking-tight sm:text-center sm:text-7xl">
                                    Welcome to Cedonia
                                </h1>
                                <h2 className="text-2xl font-bold tracking-tight sm:text-center sm:text-2xl text-red-600">Experts in Custom Project Management and CNC Machining. </h2>
                                <p className="mt-6 text-lg leading-8 text-white sm:text-center">
                                    Based in Ontario, Canada, Cedonia has been in the business of custom machining and project management since 1996.
                                    We have been serving a large base of multi-industry clients, including several players in the automotive, aerospace, nuclear, military, pharmaceutical, mining and construction space.
                                </p>
                                <div className="mt-8 flex gap-x-4 sm:justify-center">
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

            <div className="bg-gray-100 py-24 sm:py-32 lg:py-40">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="sm:text-center">
                        <h2 className="text-lg font-semibold leading-8 text-red-600">Cedonia</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Services</p>
                        <p className="mx-auto mt-6 max-w-6xl text-lg leading-8 text-gray-600">
                            As specialists in the design and manufacturing of high precision, high-quality, complex parts and products, we are confident of
                            meeting diverse, custom machining needs for an extensive range of projects. From milling, turning and grinding, to welding, drilling and CAD/ CAM, we have
                            the technical expertise and in-house capabilities to provide best-in-class services, at competitive prices, in the shortest possible time.
                        </p>
                    </div>

                    <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
                        <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
                            <div className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-red-500 text-white sm:shrink-0">
                                    <FaCogs size={"2em"} />
                                </div>
                                <div className="sm:min-w-0 sm:flex-1">
                                    <p className="text-3xl font-semibold leading-8 text-gray-900">Diverse Machining</p>
                                    <p className="mt-2 text-base leading-7 text-gray-600">Cedonia has been in the business of custom machining since 1996. We have the capabilities.</p>
                                </div>
                            </div>

                            <div className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-red-500 text-white sm:shrink-0">
                                    <FaUserAlt size={"2em"} />
                                </div>
                                <div className="sm:min-w-0 sm:flex-1">
                                    <p className="text-3xl font-semibold leading-8 text-gray-900">Core Capabilities</p>
                                    <p className="mt-2 text-base leading-7 text-gray-600">With the latest, future-ready machines and over 240 years of collective experience and technical expertise.</p>
                                </div>
                            </div>

                            <div className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-red-500 text-white sm:shrink-0">
                                    <FaTools size={"2em"} />
                                </div>
                                <div className="sm:min-w-0 sm:flex-1">
                                    <p className="text-3xl font-semibold leading-8 text-gray-900">Materials</p>
                                    <p className="mt-2 text-base leading-7 text-gray-600">We have successfully worked with a variety of materials, including: · Carbon Steel</p>
                                </div>
                            </div>

                            <div className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-red-500 text-white sm:shrink-0">
                                    <FaCertificate size={"2em"} />
                                </div>
                                <div className="sm:min-w-0 sm:flex-1">
                                    <p className="text-3xl font-semibold leading-8 text-gray-900">Quality Control</p>
                                    <p className="mt-2 text-base leading-7 text-gray-600">When it comes to machining and fabrication, both, quality and precision are paramount.</p>
                                </div>
                            </div>

                            <div className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-red-500 text-white sm:shrink-0">
                                    <FaRocket size={"2em"} />
                                </div>
                                <div className="sm:min-w-0 sm:flex-1">
                                    <p className="text-3xl font-semibold leading-8 text-gray-900">Lead Times</p>
                                    <p className="mt-2 text-base leading-7 text-gray-600">While we deliver standard requirements in 1 to 4 weeks based on the nature of the project.</p>
                                </div>
                            </div>

                            <div className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-red-500 text-white sm:shrink-0">
                                    <FaHandshake size={"2em"} />
                                </div>
                                <div className="sm:min-w-0 sm:flex-1">
                                    <p className="text-3xl font-semibold leading-8 text-gray-900">Ancillary Services</p>
                                    <p className="mt-2 text-base leading-7 text-gray-600">Over the years, our clients have become a part of the extended family at Cedonia.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gray-200">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                        <h2 className="text-2xl font-bold text-gray-900">Our Clients</h2>

                        <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                            <div className="group relative">
                                <div className="relative flex items-center justify-center h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/en/5/5b/Candu_logo.png"
                                        alt="Candu"
                                        className="h-fit w-80 object-contain object-center"
                                    />
                                </div>
                                <h3 className="mt-6 text-sm text-gray-500">
                                    <a>
                                        <span className="absolute inset-0" />
                                        Nuclear power
                                    </a>
                                </h3>
                                <p className="text-base font-semibold text-gray-900">Candu Energy Inc</p>
                            </div>
                            <div className="group relative">
                                <div className="relative flex items-center justify-center h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                                    <img
                                        src="data:image/png;base64,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"
                                        alt="Field Aviation"
                                        className="h-fit w-72 object-contain object-center"
                                    />
                                </div>
                                <h3 className="mt-6 text-sm text-gray-500">
                                    <a>
                                        <span className="absolute inset-0" />
                                        Aircraft modifiers to the world
                                    </a>
                                </h3>
                                <p className="text-base font-semibold text-gray-900">Field Aviation</p>
                            </div>
                            <div className="group relative">
                                <div className="relative flex items-center justify-center h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                                    <img
                                        src="https://www.global-aero.com/wp-content/themes/global/style/img/logo.png"
                                        alt="Global Aerospace"
                                        className="h-fit w-fit object-contain object-center"
                                    />
                                </div>
                                <h3 className="mt-6 text-sm text-gray-500">
                                    <a>
                                        <span className="absolute inset-0" />
                                        Leading provider of aircraft insurance
                                    </a>
                                </h3>
                                <p className="text-base font-semibold text-gray-900">Global Aerospace</p>
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
                                <h3 className="mt-6 text-sm text-gray-500">
                                    <a>
                                        <span className="absolute inset-0" />
                                        Canadian parts manufacturer for automakers
                                    </a>
                                </h3>
                                <p className="text-base font-semibold text-gray-900">Magna International Inc</p>
                            </div>
                            <div className="group relative">
                                <div className="relative flex items-center justify-center h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                                    <img
                                        src="https://pbs.twimg.com/profile_images/699730225513439232/58D1Tlye_400x400.jpg"
                                        alt="Global Aerospace"
                                        className="h-fit w-80 object-contain object-center"
                                    />
                                </div>
                                <h3 className="mt-6 text-sm text-gray-500">
                                    <a>
                                        <span className="absolute inset-0" />
                                        International space mission partner and robotics, satellite systems & geointelligence
                                    </a>
                                </h3>
                                <p className="text-base font-semibold text-gray-900">MDA Corporation</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
