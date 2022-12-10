import React from 'react';
import { ContactForm } from '../components/ContactForm';
import { AiOutlineMail, AiOutlineHome, AiOutlinePhone } from 'react-icons/ai'

export default function Contact() {
    return (
        <div>
            <div>

                <div class="bg-white">
                    <div class="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-8 lg:px-8 z-20">
                        <h2 class="text-5xl flex flex-wrap justify-center font-extrabold text-black sm:text-7xl">
                            <span class="block">
                                Contact Us
                            </span>
                        </h2>
                    </div>
                </div>
                <iframe width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=967&amp;height=551&amp;hl=en&amp;q=2405%20Lucknow%20Dr%20Mississauga+(Cedonia)&amp;t=&amp;z=18&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href='https://maps-generator.com/'></a>
                <div className='bg-zinc-200 p-4'>
                    <div class="text-center w-full mx-auto pt-12 px-4 sm:px-6 lg:pt-8 lg:px-8 z-20">
                        <h2 class="text-3xl flex flex-wrap justify-center font-extrabold text-black sm:text-4xl">
                            <span class="block">
                                Email Us Now
                            </span>
                        </h2>
                    </div>
                    <ContactForm></ContactForm>
                </div>

                <div className='bg-zinc-300 text-zinc-900'>
                    <div className='flex flex-col lg:flex-row text-sm lg:text-lg justify-center py-16'>
                        <div className='flex px-4 items-center justify-center'>
                            <AiOutlineMail size={"2em"} />
                            <p className='m-1' target="social" href="#">
                                Meet Us:
                                2405 Lucknow Drive,
                                Mississauga, On, L5S 1H9
                            </p>
                        </div>
                        <div className='flex px-4 items-center justify-center'>
                            <AiOutlineHome size={"2em"} />
                            <p className='m-1' target="social" href="#">
                                Call Us:
                            </p>
                            <a href="tel:905-564-2033" className='text-red-500 underline hover:text-red-700'>
                                905-564-2033
                            </a>
                        </div>
                        <div className='flex px-4 items-center justify-center'>
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
            </div>
        </div>
    )
}
