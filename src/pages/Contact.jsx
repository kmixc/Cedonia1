import React from 'react';
import { ContactForm } from '../components/ContactForm';


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
                <iframe width="100%" height="551" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=967&amp;height=551&amp;hl=en&amp;q=2405%20Lucknow%20Dr%20Mississauga+(Cedonia)&amp;t=&amp;z=18&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href='https://maps-generator.com/'></a>
                <div className='bg-zinc-200'>
                    <ContactForm></ContactForm>
                </div>

                <div className='bg-zinc-300 text-zinc-900'>
                    <div className='flex justify-center py-16'>
                        <h3 className='px-4'>meet us</h3>
                        <h3 className='px-4'>call us</h3>
                        <h3 className='px-4'>mail us</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
