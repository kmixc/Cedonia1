import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Modal from 'react-modal';
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from "react-router-dom";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

export const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_qpoki0m', 'template_tqep1yw', form.current, 'Ek8m9YMYYi0hXmU-p')
            .then((result) => {
                console.log(result.text);
                openModal();
            }, (error) => {
                console.log(error.text);
                errorOpenModal();
            });
    };

    Modal.setAppElement('#root');

    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    const [errorModalIsOpen, errorSetIsOpen] = React.useState(false);

    function errorOpenModal() {
        errorSetIsOpen(true);
    }

    function errorCloseModal() {
        errorSetIsOpen(false);
    }

    return (
        <div className='bg-zinc-200 lg:flex justify-center'>
            <form className='py-4 flex flex-col sm:w-full lg:w-2/4' ref={form} onSubmit={sendEmail}>
                <label className='text-zinc-900'>Name</label>
                <input placeholder='John Smith' className='mt-1 text-zinc-900 p-2 block w-full rounded-md border-zinc-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-lg' type="text" required name="from_name" />
                <label className='text-zinc-900'>Email</label>
                <input placeholder='johnsmith@email.com' className='mt-1 text-zinc-900 p-2 block w-full rounded-md border-zinc-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-lg' type="email" required name="email_id" />
                <label className='text-zinc-900'>Message</label>
                <textarea placeholder='Type your message to Cedonia here!' rows="5" className='mt-1 text-zinc-900 p-2 block w-full rounded-md border-zinc-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-lg' name="message" required />
                <input className='cursor-pointer text-white my-3 p-2 text-xl bg-red-500 rounded hover:bg-zinc-700 transition duration-150' type="submit" value="Send" />
            </form>

            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className='flex flex-col'>
                    <h2 className='text-red-500 text-xl' ref={(_subtitle) => (subtitle = _subtitle)}>Email Sent</h2>
                    <button className='absolute top-0 right-0 p-2' onClick={closeModal}><AiOutlineClose className='text-zinc-900' size={"2em"} /></button>
                    <div className='p-20'>
                        <h2 className='text-zinc-900 text-xl'>Cedonia will send you an email back in the next few business days.</h2>
                    </div>
                    <div className='flex justify-around'>
                        <Link className='transition hover:text-red-500' to="/">Home</Link>
                        <Link className='transition hover:text-red-500' to="/about">About</Link>
                        <Link className='transition hover:text-red-500' to="/quality">Quality</Link>
                        <Link className='transition hover:text-red-500' to="/services">Services</Link>
                    </div>
                </div>
            </Modal>
            <Modal
                isOpen={errorModalIsOpen}
                onRequestClose={errorCloseModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className='flex flex-col'>
                    <h2 className='text-red-500 text-xl' ref={(_subtitle) => (subtitle = _subtitle)}>Email Was Not Sent</h2>
                    <button className='absolute top-0 right-0 p-2' onClick={closeModal}><AiOutlineClose className='text-zinc-900' size={"2em"} /></button>
                    <div className='p-20'>
                        <h2 className='text-zinc-900 text-xl'>Please try again or feel free to give us a phone call.</h2>
                    </div>
                    <div className='flex justify-around'>
                        <Link className='transition hover:text-red-500' to="/">Home</Link>
                        <Link className='transition hover:text-red-500' to="/about">About</Link>
                        <Link className='transition hover:text-red-500' to="/quality">Quality</Link>
                        <Link className='transition hover:text-red-500' to="/services">Services</Link>
                    </div>
                </div>
            </Modal>
        </div >
    );
};