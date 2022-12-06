import React from 'react'
import { Link } from "react-router-dom";

export default function About() {
    return (
        <div>
            <div className="bg-white">
                <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8 ">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        <span className="block text-5xl">About Cedonia</span>
                        <span className="block text-red-600">Get your quote today.</span>
                    </h2>
                    <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                        <div className="inline-flex rounded-md shadow">
                            <Link
                                to="/quote"
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

                <div className='flex justify-center items-center'>
                    <img className='w-full h-96 bg-black' />
                </div>
                <div>
                    <div className='bg-gray-100'>
                        <div className="mx-auto py-8 px-4 sm:px-6 lg:px-8 max-w-screen-2xl">
                            <div className="mx-auto max-w-2xl py-8 sm:py-8 lg:max-w-none lg:py-8">
                                <h2 className="text-4xl mb-8 font-bold text-gray-900 text-center">World-Class Custom Machining and Project Management Services</h2>
                                <div className="mt-2 space-y-8 lg:grid lg:grid-cols-3 lg:gap-x-3 lg:space-y-0">
                                    <div className="group relative px-3">
                                        <div>
                                            <h3 className="mt-2 text-lg font-semibold text-justify text-gray-900">
                                                • Established in 1996 by owners Aurel Nistor and Valentin Dinoiu as a small, traditional machine shop, Cedonia is now a
                                                lead player in the custom machining and project management business. Over the years, we have adapted to changing times,
                                                expanded our capabilities, and invested in superior technology to serve the current and future needs of our customers.
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="group relative px-3">
                                        <div>
                                            <h3 className="mt-2 text-lg font-semibold text-justify text-gray-900">
                                                • We are a preferred partner for a large, multi-industry client base, including automotive, aerospace, nuclear, military,
                                                pharmaceutical, mining and construction businesses. We have the machine capabilities and technical expertise to design and
                                                manufacture complex prototypes, parts and sub-assemblies, also:
                                            </h3>
                                            <p className="text-md font-bold text-red-500">✓ Meeting precision requirements</p>
                                            <p className="text-md font-bold text-red-500">✓ Exceeding quality benchmarks and turnaround</p>
                                            <p className="text-md font-bold text-red-500">✓ Remaining price competitive</p>
                                        </div>
                                    </div>
                                    <div className="group relative px-3">
                                        <div>
                                            <h3 className="mt-2 text-lg font-semibold text-justify text-gray-900">
                                                • Our goal is to continually hone our skill sets and technological capabilities and be future-ready
                                                in order to surpass our customer’s evolving requirements and expectations.
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='bg-gray-200'>
                        <div className='mx-auto py-8 px-4 sm:px-6 lg:px-8 max-w-7xl'>
                            <div className='mx-auto max-w-2xl py-8 sm:py-8 lg:max-w-none lg:py-8'>
                                <h2 className='text-4xl font-bold text-gray-900 text-center'>Our Team - Knowledge, Skill, Experience, and a Desire to Help You Succeed</h2>
                                <div className="mt-2 space-y-8 lg:grid lg:grid-cols-2 lg:gap-x-3 lg:space-y-0">
                                    <div className="group relative px-3">
                                        <h3 className="mt-2 text-lg font-semibold text-gray-900 text-justify">• Over the years, our leaders Aurel & Valentin have built a small team of talented individuals with:</h3>
                                        <p className="text-md font-bold text-red-500">✓ Extremely strong technical backgrounds</p>
                                        <p className="text-md font-bold text-red-500">✓ A desire to continually upskill and stay ahead of the pack</p>
                                        <p className="text-md font-bold text-red-500">✓ Passion to partner with clients and help them be successful</p>
                                        <p className="text-md font-bold text-red-500">✓ Over 240 years of combined experience stretching over three continents</p>
                                    </div>
                                    <div className="group relative px-3">
                                        <h3 className="mt-2 text-lg font-semibold text-gray-900 text-justify">• At Cedonia, our team is not just skilled and knowledgeable, but also friendly and customer-focussed.
                                            Whether you need advice on optimal design selection, or guidance on technical specifications, our expert professionals
                                            will be happy to offer their input and simplify your requirements.
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='bg-gray-300'>
                        <div className='mx-auto py-8 px-4 sm:px-6 lg:px-8 max-w-7xl'>
                            <div className='mx-auto max-w-2xl py-8 sm:py-8 lg:max-w-none lg:py-8'>
                                <h2 className='text-4xl font-bold text-gray-900 text-center'>CNC Machining Capabilities and Project Management for Your Business</h2>
                                <div className="mt-2 space-y-8 lg:grid lg:grid-cols-2 lg:gap-x-3 lg:space-y-0">
                                    <h3 className="text-lg font-semibold text-gray-900 text-justify px-3">• In addition to our technical expertise, our machine capabilities and quality control mechanisms are the fundamental pillars that help us fulfill
                                        diverse, machining, tooling and custom project requirements. When it comes to made-to-order tools and components, we remain the vendor of choice
                                        for our core clients, while expanding our horizons to serve new industries.
                                    </h3>
                                    <h3 className="text-lg font-semibold text-gray-900 text-justify px-3">• Here at Cedonia, we are all about high precision, high quality products, superior technical skills,
                                        professional service, compressed delivery times, and competitive prices.
                                    </h3>
                                </div>
                            </div>
                            <h3 className="text-3xl pt-12 text-center font-semibold text-gray-900">
                                <Link to="/contact" className='hover:text-red-500 transition underline'>Contact us</Link> to know how we can serve your company.
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
