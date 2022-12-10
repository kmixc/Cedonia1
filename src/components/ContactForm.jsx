import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_qpoki0m', 'template_tqep1yw', form.current, 'Ek8m9YMYYi0hXmU-p')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='p-4 lg:flex justify-center'>
            <form className='py-24 flex flex-col sm:w-full lg:w-2/4' ref={form} onSubmit={sendEmail}>
                <label className='text-zinc-900'>Name</label>
                <input placeholder='John Smith' className='mt-1 p-2 block w-full rounded-md border-zinc-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-lg' type="text" required name="from_name" />
                <label className='text-zinc-900'>Email</label>
                <input placeholder='johnsmith@email.com' className='mt-1 p-2 block w-full rounded-md border-zinc-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-lg' type="email" required name="email_id" />
                <label className='text-zinc-900'>Message</label>
                <textarea placeholder='Type your message to Cedonia here!' rows="5" className='mt-1 p-2 block w-full rounded-md border-zinc-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-lg' name="message" required />
                <input className='text-white my-3 p-2 text-xl bg-red-500 rounded hover:bg-zinc-700 transition duration-150' type="submit" value="Send" />
            </form>
        </div>
    );
};