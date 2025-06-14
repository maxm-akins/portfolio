"use client";

import Image from "next/image";
import { motion } from 'framer-motion';


export default function Home() {
  return (
    <>
      <main className="bg-white text-black min-h-screen flex flex-col pt-10">
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

        </section>

        <section className="bg-white text-black pb-20 px-6 pt-0">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-semibold p-5">Featured Skills</h2>
            <div className="mt-10">
              <div >
                <motion.div
                  className="grid grid-cols-3 gap-6 md:grid-cols-6 justify-center"
                  initial={ { opacity: 0 } }
                  animate={ { opacity: 1 } }
                  transition={ { duration: 3 } } // 2 seconds fade-in
                >
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
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>

  );
}
