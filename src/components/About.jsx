import React from 'react'
import { motion } from "motion/react"
import about from "../assets/about.jpg"


const About = () => {
  return (
    <div className='my-20 border-b border-neutral-900 pb-4'>
      <h1 className='my-20 text-center text-4xl'>About <span className='text-neutral-500'>Me</span></h1>

      <div className='flex flex-wrap'>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className='w-full lg:w-1/2 lg:p-8'>
          <div className='flex items-center justify-center'>
            <img className='rounded-2xl' src={about} alt="" />

          </div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className='w-full lg:w-1/2'>
          <div className='flex justify-center lg:justify-start'>
            <p className='my-15 max-w-xl py-6 font-light tracking-tighter'> Hey there! I’m a Full Stack Developer who loves turning ideas into real, working web applications.
              I recently completed a 3-month internship at Precursor Info Solution, where I learned how to build full-stack projects in real-world environments and collaborate with a team.

              One of my favorite projects is RentHive, a platform I built to simplify property renting and management — combining a powerful backend with an intuitive front-end experience.

              I work mostly with the MERN stack (MongoDB, Express.js, React.js, Node.js) and also have hands-on experience with TypeScript, which helps me write clean and reliable code.

              I enjoy exploring new technologies, improving my skills every day, and building apps that make life a little easier</p>

          </div>

        </motion.div>
      </div>

    </div>


  )
}

export default About
