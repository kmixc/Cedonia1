import React from 'react'
import { FiUpload } from "react-icons/fi"



export default function Quote() {
    return (
        <div>

            <div class="bg-white ">
                <div class="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                    <h2 class="text-5xl flex flex-wrap justify-center text-zinc-900 font-extrabold sm:text-6xl">
                        <span class="block">
                            Get a
                        </span>
                        <span class="block text-red-500">
                            &nbsp;Quote
                        </span>
                        <span class="block">
                            &nbsp;Now
                        </span>
                    </h2>
                </div>
            </div>

            <div className="md:col-span-2 md:mt-0">
                <form action="#" method="POST">
                    <div className="shadow sm:overflow-hidden">
                        <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                            <div>
                                <label className="block text-sm font-medium text-zinc-700"></label>
                                <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-zinc-300 px-6 pt-32 pb-32">
                                    <div className="space-y-1 text-center">
                                        <FiUpload className='mx-auto h-12 w-12 text-zinc-400' size={"2em"} />
                                        <div className="flex justify-center items-center text-sm text-zinc-600">
                                            <label
                                                htmlFor="file-upload"
                                                className="relative cursor-pointer rounded-md bg-white font-medium text-red-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-red-500 focus-within:ring-offset-2 hover:text-red-500"
                                            >
                                                <span>Upload a 3D model to see instant pricing, lead time, and DFM feedback.</span>
                                                <input id="file-upload" accept='.step, .stp, .sldprt, .stl, .3dxml, .prt, .sat' name="file-upload" type="file" className="sr-only" />
                                            </label>
                                        </div>
                                        <p className="text-xs text-zinc-500">STEP | STP | SLDPRT | STL | IPT | 3DXML | PRT | SAT files</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-zinc-50 px-4 py-3 text-right sm:px-6">
                            <button
                                type="submit"
                                className="inline-flex justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                            >
                                Send
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
