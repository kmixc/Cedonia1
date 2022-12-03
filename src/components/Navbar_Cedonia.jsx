import React from 'react'
import { Fragment } from 'react'
import { Link } from "react-router-dom";
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { FaBars } from 'react-icons/fa'
import { TfiClose } from 'react-icons/tfi'

export default function Navbar_Cedonia() {
    return (
        <Disclosure as="nav" className="bg-white">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-around">
                            <div className="flex flex-0 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex flex-shrink-0 items-center">
                                    <Link to='/'>
                                        <h1 className='text-4xl font-bold text-gray-900 hover:text-red-600'>Cedonia</h1>
                                    </Link>
                                </div>
                            </div>
                            <div className="hidden sm:flex items-center">
                                <div className="flex min-w-0 sm:justify-end md:justify-end lg:justify-center gap-x-12">
                                    <Link to="/" className="font-semibold text-gray-900 hover:text-red-600">
                                        Home
                                    </Link>
                                    <Link to="/about" className="font-semibold text-gray-900 hover:text-red-600">
                                        About
                                    </Link>
                                    <Link to="/quality" className="font-semibold text-gray-900 hover:text-red-600">
                                        Quality
                                    </Link>
                                    <Link to="/services" className="font-semibold text-gray-900 hover:text-red-600">
                                        Services
                                    </Link>
                                    <Link to="/contact" className="font-semibold text-gray-900 hover:text-red-600">
                                        Contact
                                    </Link>
                                </div>
                            </div>
                            <div className="hidden lg:flex">
                                <Link
                                    to="/Quote"
                                    className="inline-block hover:text-red-600 rounded-lg px-3 py-1.5 text-xl font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20"
                                >
                                    Get a Quote Now
                                </Link>
                            </div>

                            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <TfiClose className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <FaBars className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>

                        </div>
                    </div>
                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pt-2 pb-3 flex flex-col items-center">
                            <Link to="/" className="font-semibold text-2xl p-2 text-gray-900 hover:text-red-600 rounded-full">
                                Home
                            </Link>
                            <Link to="/about" className="font-semibold text-2xl p-2 text-gray-900 hover:text-red-600">
                                About
                            </Link>
                            <Link to="/quality" className="font-semibold text-2xl p-2 text-gray-900 hover:text-red-600">
                                Quality
                            </Link>
                            <Link to="/services" className="font-semibold text-2xl p-2 text-gray-900 hover:text-red-600">
                                Services
                            </Link>
                            <Link to="/contact" className="font-semibold text-2xl p-2 text-gray-900 hover:text-red-600">
                                Contact
                            </Link>
                        </div>
                    </Disclosure.Panel>

                </>
            )}
        </Disclosure>)
}
