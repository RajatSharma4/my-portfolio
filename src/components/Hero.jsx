import React from 'react'
import { motion } from "motion/react"
import RajatPic from "../assets/RajatPic.jpg"
import ResumePDF from "../assets/Rajat_Mern_Resume.pdf";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } }
})

const Hero = () => {
  return (

    <>
      <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">
              <motion.h1
                variants={container(0)}
                initial="hidden"
                animate="visible"
                className="  pb-16 text-4xl font-thin tracking-tight lg:mt-16 lg:text-6xl">Rajat Sharma</motion.h1>
              <motion.span
                variants={container(0.5)}
                initial="hidden"
                animate="visible"
                className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'>
                Full stack developer
              </motion.span>
              <motion.p
                variants={container(1)}
                initial="hidden"
                animate="visible"
                className='my-2 max-w-xl py-6 font-light tracking-tighter'>
                As a Full Stack Developer, I specialize in developing complete web solutions — from designing interactive user interfaces to building robust server-side systems. I work with technologies like React.js, Node.js, Express.js, and MongoDB to bring ideas to life in a seamless and efficient way. My goal is to create applications that not only look great but also perform smoothly and solve real-world problems with practical, maintainable code.
              </motion.p>


              <motion.a
                variants={container(1.5)}
                initial="hidden"
                animate="visible"
                href={ResumePDF} download className='bg-purple-800 rounded-2xl p-2 text-white mb-10 lg:mb-0'>Download Resume</motion.a>
            </div>
          </div>


          <div className='w-full lg:w-1/2 lg:p-8'>
            <div className='flex justify-center'>
              <motion.img
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1.7 }}
                className=' mt-10 w-70 h-70 md:h-80 md:w-80 md:ml-50 rounded-2xl' src={RajatPic} alt="Rajat Sharma" height={100} width={350} />

            </div>

          </div>

        </div>
      </div>
    </>
  )
}

export default Hero
