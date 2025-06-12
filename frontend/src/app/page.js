"use client";

import Image from "next/image";
import { motion } from 'framer-motion';
import Head from "next/head";
// import Button from "@/components/ui/button";

export default function Home() {
  return (

    <>
      <Head>
        <title>Maxm Akins | Portfolio</title>
        <meta name="description" content="Personal website of Max Akins" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white text-black min-h-screen flex flex-col">
        <section className="flex-1 flex flex-col items-center justify-center px-6 text-center mt-10">
          <motion.h1
            className="text-7xl md:text-9xl font-bold max-w-4xl"
            initial={ { opacity: 0, y: 30 } }
            animate={ { opacity: 1, y: 0 } }
            transition={ { duration: 1 } }>
            Welcome
          </motion.h1>
          <p className="mt-6 text-lg md:text-xl max-w-xl text-gray-500">
            to the personal portfolio of Maxm Akins, a full-stack developer with a passion for building tomorrow's software.
          </p>
          {/* <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button className="px-6 py-3 text-lg rounded-2xl">Explore Projects</button>
            <button variant="outline" className="px-6 py-3 text-lg rounded-2xl border-white text-white hover:bg-white hover:text-black transition">
              Contact Me
            </button>
          </div> */}
        </section>



        <section className="bg-white text-black pb-20 px-6 pt-">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-semibold">Featured Skills</h2>


            <div className="mt-20">
              <div className="grid grid-cols-3 gap-6 md:grid-cols-6 justify-center">
                { ['Java', 'Python', 'JavaScript', 'C', 'React', 'Next.js', "AngularJS", "Spring", "FASTApi", 'Node.js', "Express", 'MongoDB', 'Mongoose.js', 'Git', 'GitHub', 'GitLab', "AWS", 'Google Cloud', 'Digital Ocean', 'Docker', 'Linux', 'NGINX', 'NPM', 'Pandas'].map((tech) => (
                  <div
                    key={ tech }
                    className="bg-white/10 hover:bg-white/20 p-4 rounded-xl transition duration-300 flex items-center justify-center"
                  >
                    <Image
                      src={ `/tech/${tech}.svg` }
                      alt={ tech }
                      width={ 60 }
                      height={ 60 }
                      className="object-contain"
                    />
                  </div>
                )) }
              </div>
            </div>

          </div>
        </section>


      </main>
    </>

  );
}
