// app/contact/page.js
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/10 border-b border-black/10">
            <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center text-black">
                <Link href="/" className="text-2xl font-bold tracking-tight">Maxm Akins</Link>

                <div className="md:hidden">
                    <button onClick={ () => setIsOpen(!isOpen) } className="text-xl">
                        { isOpen ? <FaTimes /> : <FaBars /> }
                    </button>
                </div>

                <nav className="hidden md:flex space-x-6 text-sm font-medium">
                    <Link href="/experience" className="hover:text-gray-500">Experience</Link>
                    <Link href="/education" className="hover:text-gray-500">Education</Link>
                    <Link href="/contact" className="hover:text-gray-500">Contact</Link>
                    <Link href="/about" className="hover:text-gray-500">About</Link>
                </nav>
            </div>

            { isOpen && (
                <div className="md:hidden px-4 pb-4">
                    <nav className="flex flex-col space-y-3 text-sm font-medium">
                        <Link href="/experience" className="hover:text-gray-500" onClick={ () => setIsOpen(false) }>Experience</Link>
                        <Link href="/education" className="hover:text-gray-500" onClick={ () => setIsOpen(false) }>Education</Link>
                        <Link href="/contact" className="hover:text-gray-500" onClick={ () => setIsOpen(false) }>Contact</Link>
                        <Link href="/about" className="hover:text-gray-500" onClick={ () => setIsOpen(false) }>About</Link>
                    </nav>
                </div>
            ) }
        </header>
    );
}
