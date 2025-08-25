import React from 'react'
import { motion } from "motion/react"


const Experience = () => {
    return (
        <>
            <div className='border-b border-neutral-900 pb-4'>
                <motion.h1
                whileInView={{opacity: 1, y: 0}}
                initial={{opacity: 0, y: -100}}
                transition={{duration: 0.5}}
                 className='my-20 text-center text-4xl'>Experience</motion.h1>

                <div className='flex flex-col items-center justify-between lg:gap-[30vw] lg:flex-row'>
                 <motion.span
                  whileInView={{opacity: 1, x: 0}}
                    initial={{opacity:0, x: -100}}
                    transition={{duration:1}}
                  className="whitespace-nowrap">2025 June-August</motion.span>

                    <motion.div 
                    whileInView={{opacity: 1, x: 0}}
                    initial={{opacity:0, x: 100}}
                    transition={{duration:1}}
                     >
                        <h6 className='mb-2  font-semibold'>MERN Stack Developer - <span className='text-sm text-purple-300 inline'> Precursor Info Solution</span></h6>

                        <p className='mb-1 text-neutral-400'>Completed a 4-month full-stack internship focused on the MERN
                            stack (MongoDB, Express.js, React.js, Node.js).
                            Developed RentHive, a full-stack rental listing web application with
                            features like user registration, property listings, and search filters.
                            Built dynamic frontend using React.js and managed backend APIs
                            with Node.js and Express.</p>
                            <div className='mb-8'>
                             <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>React.Js</span>
                            <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>Node.Js</span>
                            <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>Express.Js</span>
                            <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>MongoDb</span>
                            </div>
                    </motion.div>

                </div>
                <div className='flex flex-col items-center justify-between lg:gap-[30vw] lg:flex-row'>
                    <motion.p
                    whileInView={{opacity: 1, x: 0}}
                    initial={{opacity:0, x: -100}}
                    transition={{duration:1}}
                     className="whitespace-nowrap">2024 July-August</motion.p>

                    <motion.div
                      whileInView={{opacity: 1, x: 0}}
                    initial={{opacity:0, x: 100}}
                    transition={{duration:1}}
                    >
                        <h6 className='mb-2  font-semibold'>Web Development - <span className='text-sm text-purple-300 inline'> Codsoft</span></h6>

                        <p className='mb-1 text-neutral-400'>Built and deployed Calculator App, Portfolio Website, and a modern
                            Landing Page using HTML, CSS, and JavaScript.
                            Gained practical experience in responsive layout design, UI styling,
                            and JavaScript logic through real-time web development tasks</p>

                             <div className='mb-8'>
                             <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>HTML</span>
                            <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>CSS</span>
                            <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>JavaScript</span>
                            <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>Bootstrap</span>
                            </div>
                    </motion.div>

                </div>
                <div className='flex flex-col items-center justify-between lg:gap-[30vw] lg:flex-row'>
                    <motion.p
                    whileInView={{opacity: 1, x: 0}}
                    initial={{opacity:0, x: -100}}
                    transition={{duration:1}}
                     className="whitespace-nowrap">2024 April-May</motion.p>

                    <motion.div
                      whileInView={{opacity: 1, x: 0}}
                    initial={{opacity:0, x: 100}}
                    transition={{duration:1}}
                     className='lg:mx-5'>
                        <h6 className='mb-2  font-semibold'>Java - <span className='text-sm text-purple-300 inline'> Shree Balaji Infotech</span></h6>

                        <p className='text-neutral-400'> Learned core Java concepts like OOP, control statements, and
                            exception handling through hands-on training and practice
                            programs.
                            Improved logical thinking, debugging skills, and Java syntax
                            understanding while working on small Java-based assignments.</p>

                             <div className='mt-2'>
                             <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>Java</span>
                            
                            </div>
                    </motion.div>

                </div>

            </div>
        </>
    )
}

export default Experience
