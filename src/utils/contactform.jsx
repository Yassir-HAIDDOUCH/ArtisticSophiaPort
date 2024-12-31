import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [errors, setErrors] = useState({});
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showErrorAlert, setShowErrorAlert] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let validationErrors = {};

        if (!form.name) validationErrors.name = 'Name is required';
        if (!form.email) validationErrors.email = 'Email is required';
        if (!form.message) validationErrors.message = 'Message is required';

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            emailjs
                .sendForm('service_v8giyru', 'template_57xmqt8', e.target, '6OmkkMv5hSTbrD0ot')
                .then(
                    () => {
                        setShowSuccessMessage(true);
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                        setShowErrorAlert(true); // Show error alert
                    }
                );
        }
    };

    const handleOutsideClick = (e) => {
        if (!e.target.closest('.success-message')) {
            setShowSuccessMessage(false);
        }
    };

    const closeErrorAlert = () => {
        setShowErrorAlert(false);
    };

    useEffect(() => {
        if (showSuccessMessage) {
            document.addEventListener('click', handleOutsideClick);
        }
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [showSuccessMessage]);

    return (
        <>
            {showSuccessMessage && (
                <div className="fixed inset-x-0 top-12 flex items-end justify-right px-4 py-6 justify-end z-50">
                    <div className="max-w-sm w-full shadow-lg rounded px-4 py-3  relative bg-green-400 border-l-4 border-green-700 text-white success-message">
                        <div className="p-2">
                            <div className="flex items-center">
                                <div className="ml-3 w-0 flex-1 pt-0.5">
                                    <p className="text-sm leading-5 font-medium">Thank you for your message!</p>
                                    <p className="text-sm leading-5 text-white">
                                        I'll get back to you as soon as possible.
                                    </p>
                                </div>
                                <div className="ml-4 flex-shrink-0 flex">
                                    <button
                                        className="inline-flex text-white transition ease-in-out duration-150"
                                        onClick={() => setShowSuccessMessage(false)}
                                    >
                                        <svg
                                            className="h-5 w-5"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                clip-rule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {showErrorAlert && (
                <div className="fixed inset-x-0 top-12 flex items-end justify-right px-4 py-6 justify-end z-50">
                    <div className="max-w-sm w-full shadow-lg rounded px-4 py-3  relative bg-red-400 border-l-4 border-red-700 text-white">
                        <div className="p-2">
                            <div className="flex items-center">
                                <div className="ml-3 w-0 flex-1 pt-0.5">
                                    <p className="text-sm leading-5 font-medium">Error</p>
                                    <p className="text-sm leading-5 text-white">
                                        There was an error sending your message. Please try again.
                                    </p>
                                </div>
                                <div className="ml-4 flex-shrink-0 flex">
                                    <button
                                        className="inline-flex text-white transition ease-in-out duration-150"
                                        onClick={closeErrorAlert}
                                    >
                                        <svg
                                            className="h-5 w-5"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                clip-rule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <div
                id="section2"
                className="py-16 px-4 sm:px-6 lg:px-8 lg:py-16 2xl:py-36"
            >
                <div className="relative mx-auto max-w-xl">
                    <svg
                        className="absolute left-full translate-x-1/2 transform animate-pulse"
                        width="404"
                        height="404"
                        fill="none"
                        viewBox="0 0 404 404"
                        aria-hidden="true"
                    >
                        <defs>
                            <pattern
                                id="85737c0e-0916-41d7-917f-596dc7edfa27"
                                x="0"
                                y="0"
                                width="20"
                                height="20"
                                patternUnits="userSpaceOnUse"
                            >
                                <rect
                                    x="0"
                                    y="0"
                                    width="4"
                                    height="4"
                                    className="text-gray-200 dark:text-slate-600"
                                    fill="currentColor"
                                ></rect>
                            </pattern>
                        </defs>
                        <rect
                            width="404"
                            height="404"
                            fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
                        ></rect>
                    </svg>
                    <svg
                        className="absolute right-full bottom-0 -translate-x-1/2 transform animate-pulse"
                        width="404"
                        height="404"
                        fill="none"
                        viewBox="0 0 404 404"
                        aria-hidden="true"
                    >
                        <defs>
                            <pattern
                                id="85737c0e-0916-41d7-917f-596dc7edfa27"
                                x="0"
                                y="0"
                                width="20"
                                height="20"
                                patternUnits="userSpaceOnUse"
                            >
                                <rect
                                    x="0"
                                    y="0"
                                    width="4"
                                    height="4"
                                    className="text-gray-200 dark:text-slate-800"
                                    fill="currentColor"
                                ></rect>
                            </pattern>
                        </defs>
                        <rect
                            width="404"
                            height="404"
                            fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
                        ></rect>
                    </svg>
                    <div className="text-center">
                        <p className="my-4 text-lg font-medium leading-6 text-secondary">
                            Get in touch or shoot me an email directly on
                            <br />
                            example@gmail.com.
                            <br />
                            Thank you!
                        </p>
                    </div>
                    <div className="mt-5">
                        <form
                            onSubmit={handleSubmit}
                            className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                        >
                            <div className="sm:col-span-2">
                                <label htmlFor="name" className="block text-sm font-medium text-secondary">
                                    Name
                                </label>
                                <div className="mt-1">
                                    <input
                                        name="name"
                                        type="text"
                                        id="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        className={`block w-full text-secondary rounded-md py-3 px-4 shadow-sm ring-1 ${errors.name ? 'ring-red-500' : 'ring-secondary'
                                            }`}
                                    />
                                    {errors.name && <span className="text-sm text-red-500">{errors.name}</span>}
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="email" className="block text-sm font-medium text-secondary">
                                    Email
                                </label>
                                <div className="mt-1">
                                    <input
                                        name="email"
                                        id="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        className={`block w-full text-secondary rounded-md py-3 px-4 shadow-sm ring-1 ${errors.email ? 'ring-red-500' : 'ring-secondary'
                                            }`}
                                    />
                                    {errors.email && <span className="text-sm text-red-500">{errors.email}</span>}
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="block text-sm font-medium text-secondary">
                                    Message
                                </label>
                                <div className="mt-1">
                                    <textarea
                                        name="message"
                                        id="message"
                                        rows="4"
                                        value={form.message}
                                        onChange={handleChange}
                                        className={`block w-full text-secondary rounded-md py-3 px-4 shadow-sm ring-1 ${errors.message ? 'ring-red-500' : 'ring-secondary'
                                            }`}
                                    ></textarea>
                                    {errors.message && <span className="text-sm text-red-500">{errors.message}</span>}
                                </div>
                            </div>
                            <div className="flex justify-end sm:col-span-2">
                                <button
                                    type="submit"
                                    className="border-2 border-secondary bg-white text-secondary duration-300 relative group cursor-pointer overflow-hidden h-14 w-52 shadow-lg rounded-md bg-nav p-2 font-extrabold hover:bg-nav/80"
                                >
                                    <div
                                        className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150 duration-700 right-12 top-12 bg-primary-light"
                                    ></div>
                                    <div
                                        className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-12 h-12 rounded-full group-hover:scale-150 duration-700 right-20 -top-6 bg-primary"
                                    ></div>
                                    <div
                                        className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-8 h-8 rounded-full group-hover:scale-150 duration-700 right-2 top-12 bg-secondary-light"
                                    ></div>
                                    <p className="z-10 absolute bottom-2 left-2">Send Message</p>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactForm;
