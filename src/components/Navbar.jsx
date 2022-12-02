import React from 'react'
import { Link } from "react-router-dom";


export default function Navbar() {
    return (
        <div className="bg-white p-6 lg:px-8">

            <div>
                <nav className="flex h-9 items-center justify-between" aria-label="Global">
                    <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
                        <a href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Cedonia</span>
                            <img className="hidden h-8" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
                            <h1 className='text-2xl font-bold text-gray-900'>Cedonia</h1>
                        </a>
                    </div>
                    <div className="flex min-w-0 flex-1 sm:justify-end md:justify-end lg:justify-center gap-x-12">
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
                    <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
                        <a
                            href="/Quote"
                            className="inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20"
                        >
                            Get a Quote Now
                        </a>
                    </div>
                </nav>
            </div>
        </div>
    )
}



//<Link to="/" className='block py-2 pr-4 pl-3 text-white rounded hover:text-lime-500 md:hover:bg-transparent md:border-0 md:hover:text-lime-500 md:p-0'>Home</Link>
//<Link to="/about" className='block py-2 pr-4 pl-3 text-white rounded hover:text-lime-500 md:hover:bg-transparent md:border-0 md:hover:text-lime-500 md:p-0'>About</Link>
//<Link to="/quality" className='block py-2 pr-4 pl-3 text-white rounded hover:text-lime-500 md:hover:bg-transparent md:border-0 md:hover:text-lime-500 md:p-0'>Quality</Link>
//<Link to="/services" className='block py-2 pr-4 pl-3 text-white rounded hover:text-lime-500 md:hover:bg-transparent md:border-0 md:hover:text-lime-500 md:p-0'>Services</Link>
//<Link to="/contact" className='block py-2 pr-4 pl-3 text-white rounded hover:text-lime-500 md:hover:bg-transparent md:border-0 md:hover:text-lime-500 md:p-0'>Contact</Link>
