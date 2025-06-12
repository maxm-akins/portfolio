// app/contact/page.js
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="py-10 px-6 text-center text-gray-400 bg-black border-t border-gray-800">
            © { new Date().getFullYear() } Maxm Akins. All rights reserved.
        </footer>
    );
}
