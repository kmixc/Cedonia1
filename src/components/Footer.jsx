import React from 'react'
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div className="bg-white p-6 lg:px-8">
            <div>
                <nav className="flex h-9 items-center justify-between" aria-label="Global">
                    <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
                        <a href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Cedonia</span>
                            <img className="hidden h-8" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
                            <h1 className='text-2xl font-bold '>Cedonia</h1>
                        </a>
                    </div>
                    <div className="flex min-w-0 flex-1 sm:justify-end md:justify-end lg:justify-center gap-x-12">
                        <Link to="/" className="font-semibold  hover:text-red-600">
                            Home
                        </Link>
                        <Link to="/about" className="font-semibold  hover:text-red-600">
                            About
                        </Link>
                        <Link to="/quality" className="font-semibold  hover:text-red-600">
                            Quality
                        </Link>
                        <Link to="/services" className="font-semibold  hover:text-red-600">
                            Services
                        </Link>
                        <Link to="/contact" className="font-semibold  hover:text-red-600">
                            Contact
                        </Link>
                    </div>
                    <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
                        © Copyright Cedonia INC All rights reserved.
                    </div>
                </nav>
            </div>
        </div>
    )
}