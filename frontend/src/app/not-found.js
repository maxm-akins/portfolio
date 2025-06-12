// app/not-found.js
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function NotFoundPage() {
    return (
        <div className="min-h-screen bg-whites text-black flex flex-col items-center justify-center text-center px-6">
            <motion.h1
                className="text-7xl font-bold mb-4"
                initial={ { opacity: 0, y: -20 } }
                animate={ { opacity: 1, y: 0 } }
                transition={ { duration: 0.6 } }
            >
                404
            </motion.h1>
            <motion.p
                className="text-xl text-gray-400 mb-8"
                initial={ { opacity: 0 } }
                animate={ { opacity: 1 } }
                transition={ { delay: 0.2, duration: 0.6 } }
            >
                This page doesn’t exist — yet.
            </motion.p>
            <motion.div
                initial={ { opacity: 0 } }
                animate={ { opacity: 1 } }
                transition={ { delay: 0.4, duration: 0.6 } }
            >
                <Link
                    href="/"
                    className="px-6 py-3 bg-black text-white rounded-xl font-medium hover:opacity-80 transition"
                >
                    Back to Home
                </Link>
            </motion.div>
        </div>
    );
}
