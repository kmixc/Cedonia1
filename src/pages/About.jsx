import React from 'react'
import { Link } from "react-router-dom";

export default function About() {
    return (
        <div>
            <div className="bg-white">
                <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-32 lg:px-8 ">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        <span className="block text-5xl">About Cedonia</span>
                        <span className="block text-red-600">Get your quote today.</span>
                    </h2>
                    <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                        <div className="inline-flex rounded-md shadow">
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center rounded-md border border-transparent bg-red-600 px-5 py-3 text-base font-medium text-white hover:bg-red-700"
                            >
                                Quote
                            </Link>
                        </div>
                        <div className="ml-3 inline-flex rounded-md shadow">
                            <Link
                                to="/quality"
                                className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-red-600 hover:bg-red-50"
                            >
                                Quality
                            </Link>
                        </div>
                    </div>
                </div>

                <div>
                    <div className='bg-gray-100'>
                        <div className="mx-auto py-8 px-4 sm:px-6 lg:px-8 max-w-7xl">
                            <div className="mx-auto max-w-2xl py-8 sm:py-8 lg:max-w-none lg:py-8">
                                <h2 className="text-4xl mb-8 font-bold text-gray-900 text-center">World-Class Custom Machining and Project Management Services</h2>
                                <div className="mt-2 space-y-8 lg:grid lg:grid-cols-1 lg:gap-x-3 lg:space-y-0">
                                    <div className="group relative px-3">
                                        <div>
                                            <h3 className="mt-2 text-lg text-justify text-gray-900">
                                                Established in 1996 by owners Aurel Nistor and Valentin Dinoiu as a small, traditional machine shop, Cedonia is now a
                                                lead player in the custom machining and project management business. Over the years, we have adapted to changing times,
                                                expanded our capabilities, and invested in superior technology to serve the current and future needs of our customers.
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="group relative px-3">
                                        <div>
                                            <h3 className="mt-2 text-lg text-justify text-gray-900">
                                                We are a preferred partner for a large, multi-industry client base, including automotive, aerospace, nuclear, military,
                                                pharmaceutical, mining and construction businesses. We have the machine capabilities and technical expertise to design and
                                                manufacture complex prototypes, parts and sub-assemblies, also:
                                            </h3>
                                            <p className="text-md text-red-500">✓ Meeting precision requirements</p>
                                            <p className="text-md text-red-500">✓ Exceeding quality benchmarks and turnaround</p>
                                            <p className="text-md text-red-500">✓ Remaining price competitive</p>
                                        </div>
                                    </div>
                                    <div className="group relative px-3">
                                        <div>
                                            <h3 className="mt-2 text-lg text-justify text-gray-900">
                                                Our goal is to continually hone our skill sets and technological capabilities and be future-ready
                                                in order to surpass our customer’s evolving requirements and expectations.
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <section class="bg-zinc-900">
                        <div class="container grid grid-cols-2 gap-8 py-16 mx-auto text-center md:grid-cols-4">
                            <div>
                                <h5 class="text-5xl font-bold text-white">
                                    <span class="inline text-white">
                                        89856
                                    </span>
                                    <span class="text-gray-200">
                                        +
                                    </span>
                                </h5>
                                <p class="text-xs font-medium tracking-wide text-red-500 uppercase">
                                    Working Hours
                                </p>
                            </div>
                            <div>
                                <h5 class="text-5xl font-bold text-white">
                                    <span class="inline text-white">
                                        31
                                    </span>
                                    <span class="text-gray-200">
                                        +
                                    </span>
                                </h5>
                                <p class="text-xs font-medium tracking-wide text-red-500 uppercase">
                                    Ongoing contracts
                                </p>
                            </div>
                            <div>
                                <h5 class="text-5xl font-bold text-white">
                                    <span class="inline text-white">
                                        10000
                                    </span>
                                    <span class="text-gray-200">
                                        +
                                    </span>
                                </h5>
                                <p class="text-xs font-medium tracking-wide text-red-500 uppercase">
                                    Finished projects
                                </p>
                            </div>
                            <div>
                                <h5 class="text-5xl font-bold text-white">
                                    <span class="inline text-white">
                                        26
                                    </span>
                                    <span class="text-gray-200">
                                        +
                                    </span>
                                </h5>
                                <p class="text-xs font-medium tracking-wide text-red-500 uppercase">
                                    Years in business
                                </p>
                            </div>
                        </div>
                    </section>

                    <div className='bg-gray-200'>
                        <div className='mx-auto py-8 px-4 sm:px-6 lg:px-8 max-w-7xl'>
                            <div className='mx-auto max-w-2xl py-8 sm:py-8 lg:max-w-none lg:py-8'>
                                <h2 className='text-4xl font-bold text-gray-900 text-center'>Our Team - Knowledge, Skill, Experience, and a Desire to Help You Succeed</h2>
                                <div className="mt-2 space-y-8 lg:grid lg:grid-cols-1 lg:gap-x-3 lg:space-y-0">
                                    <div className="group relative px-3">
                                        <h3 className="mt-2 text-lg text-gray-900 text-justify">At Cedonia, our team is not just skilled and knowledgeable, but also friendly and customer-focussed.
                                            Whether you need advice on optimal design selection, or guidance on technical specifications, our expert professionals
                                            will be happy to offer their input and simplify your requirements.
                                        </h3>
                                    </div>
                                    <div className="group relative px-3">
                                        <h3 className="mt-2 text-lg text-gray-900 text-justify">Over the years, our leaders Aurel & Valentin have built a small team of talented individuals with:</h3>
                                        <p className="text-md text-red-500">✓ Extremely strong technical backgrounds</p>
                                        <p className="text-md text-red-500">✓ A desire to continually upskill and stay ahead of the pack</p>
                                        <p className="text-md text-red-500">✓ Passion to partner with clients and help them be successful</p>
                                        <p className="text-md text-red-500">✓ Over 240 years of combined experience stretching over three continents</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='bg-gray-300'>
                        <div className='mx-auto py-8 px-4 sm:px-6 lg:px-8 max-w-7xl'>
                            <div className='mx-auto max-w-2xl py-8 sm:py-8 lg:max-w-none lg:py-8'>
                                <h2 className='text-4xl font-bold text-gray-900 text-center'>CNC Machining Capabilities and Project Management for Your Business</h2>
                                <div className="mt-2 space-y-8 lg:grid lg:grid-cols-1 lg:gap-x-3 lg:space-y-0">
                                    <div className="group relative px-3">
                                        <h3 className="mt-2 text-lg text-gray-900 text-justify">In addition to our technical expertise, our machine capabilities and quality control mechanisms are the fundamental pillars that help us fulfill
                                            diverse, machining, tooling and custom project requirements. When it comes to made-to-order tools and components, we remain the vendor of choice
                                            for our core clients, while expanding our horizons to serve new industries.
                                        </h3>
                                    </div>
                                    <div className="group relative px-3">
                                        <h3 className="mt-2 text-lg text-gray-900 text-justify">Here at Cedonia, we are all about high precision, high quality products, superior technical skills,
                                            professional service, compressed delivery times, and competitive prices.
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-3xl pt-12 text-center text-gray-900">
                                <Link to="/contact" className='hover:text-red-500 transition underline'>Contact us</Link> to know how we can serve your company.
                            </h3>
                        </div>
                    </div>
                </div>

                <div class="px-6 py-6 bg-zinc-900 md:py-12 md:px-12 lg:py-16 lg:px-16 xl:flex xl:items-center">
                    <div class="xl:w-0 xl:flex-1">
                        <h2 class="text-2xl font-extrabold leading-8 tracking-tight text-white sm:text-3xl sm:leading-9">
                            See our services and contact us for any furtur inquiries.
                        </h2>
                        <p class="max-w-3xl mt-3 text-lg leading-6 text-gray-200">
                            If you are confused about anything on the website feel free to contact us!
                        </p>
                    </div>
                    <div class="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
                        <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                            <Link to="/services" class="flex items-center justify-center w-full px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-red-500 border border-transparent rounded-md hover:bg-red-400 focus:outline-none focus:bg-red-400">
                                Services
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    )
}
