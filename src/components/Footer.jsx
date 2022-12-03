import React from 'react'
import { Link } from "react-router-dom";
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { RiInstagramFill, RiTwitterFill, RiYoutubeFill } from 'react-icons/ri'

export default function Footer() {
    return (
        <div>
            <nav class="bg-black text-white px-10 pt-10 pb-5 tracking-tight ">
                <div class="container flex justify-between mx-auto">
                    <div className='flex flex-col items-start'>
                        <span class="text-3xl tracking-tight font-bold">Cedonia</span>
                        <span class="text-m tracking-tight">Custom machining and project management since 1996</span>
                    </div>
                    <div className='font-bold'>
                        <div className='flex items-center sm:flex-row flex-col justify-center'>
                            <a className='m-1 rounded hover:bg-red-500' target="social" href="#"><RiInstagramFill size={"2em"} /></a>
                            <a className='m-1 rounded hover:bg-red-500' target="social" href="#"><RiTwitterFill size={"2em"} /></a>
                            <a className='m-1 rounded hover:bg-red-500' target="social" href="#"><RiYoutubeFill size={"2em"} /></a>
                        </div>
                    </div>
                </div>
                <p className='text-center text-sm mt-16 text-gray-400 rounded font-bold'>© Copyright Cedonia INC All rights reserved.</p>
            </nav>
        </div>
    )
}