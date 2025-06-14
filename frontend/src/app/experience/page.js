// app/experience/page.js
'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';


export default function Experience() {
    const [workExperience, setWorkExperience] = useState([]);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/workExperience`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then((data) => {
                setWorkExperience(data);
                console.log('Fetched work experience data:', data);
            })
            .catch((error) => {
                console.error('Error fetching work experience data:', error);
            });
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/project`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then((data) => {
                setProjects(data);
                console.log('Fetched work experience data:', data);
            })
            .catch((error) => {
                console.error('Error fetching work experience data:', error);
            });
    }, []);




    return (
        <div className="min-h-screen bg-white text-black pt-24 px-6">
            <motion.div
                initial={ { opacity: 0, y: 20 } }
                animate={ { opacity: 1, y: 0 } }
                transition={ { duration: 0.7 } }
                className="max-w-4xl mx-auto"
            >

                <section className="mb-16">
                    <h2 className="text-2xl font-semibold mb-6">Work Experience</h2>
                    <div className="space-y-8">
                        { workExperience.map((job, index) => (
                            <div key={ index } className="bg-white/5 border border-white/10 p-4 rounded-xl hover:shadow-lg ">
                                <div className="flex justify-between items-center mb-3">
                                    <div className="flex items-center space-x-3">
                                        <img src={ `/logos/${job.logo}` } alt={ job.company } className="w-10 h-10  object-contain" />
                                        <h3 className="text-md font-semibold">{ job.role } @ { job.company }</h3>
                                    </div>
                                    <span className="text-sm text-gray-500">{ job.time }</span>
                                </div>
                                <ul className="list-disc list-inside text-gray-500 text-sm">
                                    { job.details.map((item, idx) => (
                                        <li key={ idx }>{ item }</li>
                                    )) }
                                </ul>
                            </div>
                        )) }
                    </div>
                </section>

                <section className="mb-16">
                    <h2 className="text-2xl font-semibold mb-6">Projects</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        { projects.map((project) => (
                            <div
                                key={ project.name }
                                className="flex flex-col justify-between h-full rounded-xl border border-black/10 bg-white/5 p-6 hover:shadow-lg transition-all"
                            >
                                <div>
                                    <h3 className="text-md font-semibold mb-2">{ project.name }</h3>
                                    <p className="text-sm text-gray-500 mb-4">{ project.description }</p>
                                </div>

                                <div className="flex justify-between space-x-2 pt-4 mt-auto">
                                    { project.githubLink && (
                                        <a
                                            href={ project.githubLink }
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-4 py-1 text-sm rounded-full bg-blue-500 text-white hover:bg-blue-600 transition"
                                        >
                                            🧠 Source
                                        </a>
                                    ) }
                                    { project.publicLink && (
                                        <a
                                            href={ project.publicLink }
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-4 py-1 text-sm rounded-full bg-green-500 text-white hover:bg-green-600 transition"
                                        >
                                            🚀 Live
                                        </a>
                                    ) }
                                </div>
                            </div>
                        )) }
                    </div>
                </section>



            </motion.div>
        </div>
    );
}
