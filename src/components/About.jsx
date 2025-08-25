import React from 'react'
import { motion } from "motion/react"
import about from "../assets/about.jpg"


const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <h1 className='my-20 text-center text-4xl'>About <span className='text-neutral-500'>Me</span></h1>

        <div className='flex flex-wrap'>
            <motion.div
            whileInView={{opacity: 1, x:0}}
            initial={{opacity: 0, x: -100}}
            transition={{duration: 0.5}}
            className='w-full lg:w-1/2 lg:p-8'>
            <div className='flex items-center justify-center'>
                <img className='rounded-2xl' src={about} alt="" />

            </div>
            </motion.div>

            <motion.div
            whileInView={{opacity: 1, x: 0}}
            initial={{opacity: 0, x: 100}}
            transition={{duration: 0.5}}
            className='w-full lg:w-1/2'>
              <div className='flex justify-center lg:justify-start'>
                <p className='my-15 max-w-xl py-6 font-light tracking-tighter'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic vitae, dicta optio sed eius debitis? Quod voluptatibus eum veniam, officiis, repudiandae fugit ducimus provident laudantium, officia dolores magnam consequatur vero ab quas ipsa ad. Quidem explicabo minus fugit repudiandae delectus fuga atque quibusdam blanditiis perferendis, nostrum, molestias tenetur sint nihil?</p>

              </div>

            </motion.div>
            </div>

        </div>
      
    
  )
}

export default About
