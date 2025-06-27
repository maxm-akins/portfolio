// app/contact/page.js
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="min-h-screen bg-white text-black py-20 px-6 mt-6">
            <motion.div
                initial={ { opacity: 0, y: 30 } }
                animate={ { opacity: 1, y: 0 } }
                transition={ { duration: 0.8 } }
                className="max-w-2xl mx-auto text-center"
            >
                <h1 className="text-4xl font-bold mb-6">{ "Let's Connect" }</h1>
                <p className="text-gray-400 mb-10">
                    Whether you have a question, project idea, or just want to say hi — my inbox is open.
                </p>

                { submitted ? (
                    <p className="text-green-400 text-xl">{ "Thanks! I'll be in touch soon." }</p>
                ) : (
                    <form onSubmit={ handleSubmit } className="space-y-6">
                        <input
                            type="text"
                            placeholder="Your Name"
                            required
                            className="w-full bg-white text-gray-500 p-4 rounded-xl border border-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            required
                            className="w-full bg-white text-gray-500 p-4 rounded-xl border border-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
                        />
                        <textarea
                            placeholder="Your Message"
                            required
                            rows="5"
                            className="w-full bg-white text-gray-500 p-4 rounded-xl border border-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
                        ></textarea>
                        <button
                            type="submit"
                            className="w-full bg-black text-white font-semibold py-3 rounded-xl hover:opacity-90 transition"
                        >
                            Send Message
                        </button>
                    </form>
                ) }

                <div className="mt-12 flex justify-center space-x-6 text-2xl">
                    <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                        <FaGithub />
                    </a>
                    <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                        <FaLinkedin />
                    </a>
                    <a href="mailto:your@email.com" className="hover:text-gray-400">
                        <FaEnvelope />
                    </a>
                </div>
            </motion.div>
        </div>
    );
}
