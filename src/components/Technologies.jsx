import React from 'react'
import { motion } from "motion/react"
import ReactPic from "../assets/ReactPic.png"
import ExpressJs from "../assets/ExpressJs.png"
import NodeJs from "../assets/NodeJs.png"
import MongoDb from "../assets/MongoDb.png"
import Tailwind from "../assets/Tailwind.png"
import JavaScript from "../assets/JavaScript.png"



const iconVariants = (duration) => ({
    initial: {y: -10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    }
})

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        
        <motion.h1
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration: 1.5}}
         className='my-20 text-center text-4xl'>Technologies</motion.h1>

        <motion.div   
        whileInView={{opacity: 1, x: 0}}
        initial = {{opacity: 0, x: -100}}
        transition={{duration: 1.5}}
        className='flex flex-wrap items-center justify-center gap-4'>


       <motion.div
       variants={iconVariants(3)}
        initial = "initial"
        animate = "animate"
        className='rounded-2xl border-4 border-neutral-800 p-4'>
           <img src={ReactPic} alt="" className='h-10 rounded'/>
       </motion.div>

       <motion.div 
       variants={iconVariants(2)}
        initial = "initial"
        animate = "animate"
       className='rounded-2xl border-4 border-neutral-800 p-4'>
           <img src={ExpressJs} alt="" className='h-10 rounded'/>
       </motion.div>

       <motion.div
       variants={iconVariants(4)}
        initial = "initial"
        animate = "animate"
        className='rounded-2xl border-4 border-neutral-800 p-4'>
           <img src={NodeJs} alt="" className='h-10 rounded'/>
       </motion.div>

       <motion.div
       variants={iconVariants(6)}
        initial = "initial"
        animate = "animate"
       className='rounded-2xl border-4 border-neutral-800 p-4'>
           <img src={MongoDb} alt="" className='h-10 rounded'/>
       </motion.div>

       <motion.div 
       variants={iconVariants(5)}
        initial = "initial"
        animate = "animate"
       className='rounded-2xl border-4 border-neutral-800 p-4'>
           <img src={Tailwind} alt="" className='h-10 rounded'/>
       </motion.div>

       <motion.div
       variants={iconVariants(3)}
        initial = "initial"
        animate = "animate"
        className='rounded-2xl border-4 border-neutral-800 p-4'>
           <img src={JavaScript} alt="" className='h-10 rounded'/>
       </motion.div>


        </motion.div>
      
    </div>
  )
}

export default Technologies
