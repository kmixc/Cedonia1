import React from 'react'
import { RiInstagramFill, RiTwitterFill, RiYoutubeFill } from 'react-icons/ri'
import { AiOutlineMail, AiOutlineHome, AiOutlinePhone } from 'react-icons/ai'
import Logo from "../img/Cedonia_white.png"

export default function Footer() {
    return (
        <div>
            <nav class="bg-black text-white px-2 pt-10 pb-5 tracking-tight ">
                <div class="container flex justify-between mx-auto">
                    <div className='flex flex-col items-start'>
                        <span class="text-3xl tracking-tight font-bold">Cedonia</span>
                        <span class="text-m tracking-tight text-sm">Custom machining and project management since 1996</span>
                        <img src={Logo} alt="Logo" width="200px" className='my-4' />
                    </div>
                    <div>
                        <div className='flex items-start flex-col justify-center'>
                            <div className='flex items-center text-sm'>
                                <AiOutlineMail size={"2em"} />
                                <p className='m-1' target="social" href="#">
                                    Meet Us:
                                    2405 Lucknow Drive,
                                    Mississauga, On, L5S 1H9
                                </p>
                            </div>
                            <div className='flex items-center text-sm'>
                                <AiOutlineHome size={"2em"} />
                                <p className='m-1' target="social" href="#">
                                    Call Us:
                                </p>
                                <a href="tel:905-564-2033" className='text-red-500 underline hover:text-red-700'>
                                    905-564-2033
                                </a>
                            </div>
                            <div className='flex items-center text-sm'>
                                <AiOutlinePhone size={"2em"} />
                                <p className='m-1' target="social" href="#">
                                    Mail Us:
                                </p>
                                <a href="mailto:" className='text-red-500 underline '>
                                    inquiries@cedonia.ca
                                </a>
                            </div>
                        </div>
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