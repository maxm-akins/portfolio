// app/contact/page.js
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function NavBar() {
    return (
        <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/10 border-b border-black/10">
            <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center text-black">
                <a href="/" className="text-2xl font-bold tracking-tight">Maxm Akins</a>
                <nav className="space-x-6 text-sm font-medium">
                    <a href="/experience" className="hover:text-gray-500">Experience</a>
                    <a href="/projects" className="hover:text-gray-500">Projects</a>
                    <a href="/Education" className="hover:text-gray-500">Education</a>
                    <a href="/contact" className="hover:text-gray-500">Contact</a>
                    <a href="/About" className="hover:text-gray-500">About</a>
                </nav>
            </div>
        </header>
    );
}
