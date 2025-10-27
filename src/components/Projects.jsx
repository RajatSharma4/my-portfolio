import React from 'react'
import { motion } from "motion/react"
import Renthive from '../assets/RentHive.png'
import Simon_Game from "../assets/Simon_Says_Game.png"
import Bubble_Game from "../assets/Buuble_Game.png"
import Spotify from "../assets/Spotify.png"
import MyDietPlanner from "../assets/MyDietPlanner.png"
import OnlineStore from "../assets/OnlineStore.png"

const Projects = () => {
  return (
    <>
      <div className='border-b border-neutral-900 pb-4'>
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className='my-20 text-center text-4xl'>Projects</motion.h1>

        <div className='flex flex-wrap lg:flex-nowrap justify-center'>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className='mx-[24vw] lg:mx-[0] w-full lg:1/4 lg:my-[15vh]'>
            <img className='rounded' src={Renthive} alt="" height={250} width={250} />
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className='text-center lg:text-left mt-5  w-full max-w-xl lg:3/4'>
            <h6 className='mb-2 font-semibold'>RentHive</h6>
            <p className='mb-4 text-neutral-400'>  RentHive is a full-stack web application built using the MERN stack that simplifies the process of renting and managing properties online. It allows property owners to post listings and tenants to explore available rentals with detailed information. The platform includes features like user authentication, property management, and dynamic data handling with a responsive UI. Designed with a focus on clean design and smooth user experience, RentHive reflects my ability to build scalable, end-to-end web applications.</p>
            <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'> MONGO-DB</span>
            <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'> REACT-JS</span>
            <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'> EXPRESS-JS</span>
            <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'> NODE-JS</span>
          </motion.div>
        </div>

        <div className='flex flex-wrap lg:flex-nowrap justify-center'>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className='mx-[24vw] lg:mx-[0] w-full lg:1/4 mt-[10vh] lg:my-[15vh]'>
            <img className='  className="rounded w-full max-w-[250px] h-auto"' src={OnlineStore} alt="" />
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className='text-center lg:mt-[50px] lg:text-left mt-5  w-full max-w-xl lg:3/4'>
            <h6 className='mb-2 font-semibold'>Online Store</h6>
            <p className='mb-4 text-neutral-400'> Online Store is a front-end web application built using React.js, designed to provide users with a seamless shopping experience. It allows users to browse products, view details, add items to the cart, and manage their selections easily. The interface is fully responsive and optimized for smooth performance. This project highlights my skills in React components, state management, and API integration</p>
            <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'> HTML</span>
            <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'> CSS</span>
            <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'> JAVASCRIPT</span>
          </motion.div>
        </div>
        <div className='flex flex-wrap lg:flex-nowrap justify-center'>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className='mx-[24vw] lg:mx-[0] w-full lg:1/4 mt-[10vh] lg:my-[15vh]'>
            <img className='rounded' src={MyDietPlanner} alt="" height={250} width={250} />
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className='text-center lg:mt-[50px] lg:text-left mt-5  w-full max-w-xl lg:3/4'>
            <h6 className='mb-2 font-semibold'>MyDietPlanner</h6>
            <p className='mb-4 text-neutral-400'>MyDietPlanner is a full-stack web application built with the MERN stack, designed to help users plan and manage their daily diet and nutrition. Users can set goals, track meals, and receive personalized diet recommendations. The platform includes user authentication, CRUD operations for meal plans, and a responsive UI for seamless experience. This project showcases my ability to build end-to-end web applications with dynamic data handling and a focus on user experience.</p>
            <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'> HTML</span>
            <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'> CSS</span>
            <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'> JAVASCRIPT</span>
          </motion.div>
        </div>
        <div className='flex flex-wrap lg:flex-nowrap justify-center'>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className='mx-[24vw] lg:mx-[0] w-full lg:1/4 mt-[10vh] lg:my-[15vh]'>
            <img className='rounded' src={Simon_Game} alt="" height={250} width={250} />
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className='text-center lg:mt-[50px] lg:text-left mt-5  w-full max-w-xl lg:3/4'>
            <h6 className='mb-2 font-semibold'>Simon Says Game</h6>
            <p className='mb-4 text-neutral-400'>  Simon Says Game is a classic memory challenge recreated using HTML, CSS, and JavaScript. Users follow color and sound patterns, testing memory and focus while the game tracks progress. This project showcases my skills in JavaScript logic, timing functions, and interactive UI design, while delivering a fun and user-friendly gaming experience.</p>
            <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'> HTML</span>
            <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'> CSS</span>
            <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'> JAVASCRIPT</span>
          </motion.div>
        </div>

        <div className='flex flex-wrap lg:flex-nowrap justify-center'>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className='mx-[24vw] lg:mx-[0] w-full lg:1/4 mt-[10vh] lg:my-[15vh]'>
            <img className='rounded' src={Bubble_Game} alt="" height={250} width={250} />
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className='text-center lg:mt-[50px] lg:text-left mt-5  w-full max-w-xl lg:3/4'>
            <h6 className='mb-2 font-semibold'>Bubble Game</h6>
            <p className='mb-4 text-neutral-400'>  Bubble Game is an interactive front-end game developed using HTML, CSS, and JavaScript. Users can pop bubbles appearing on the screen to score points, making it engaging and fun. The project demonstrates my skills in DOM manipulation, event handling, and animations. It highlights my ability to create interactive and responsive web-based games with smooth performance.</p>
            <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'> HTML</span>
            <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'> CSS</span>
            <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'> JAVASCRIPT</span>
          </motion.div>
        </div>

        <div className='flex flex-wrap lg:flex-nowrap justify-center'>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className='mx-[24vw] lg:mx-[0] w-full lg:1/4 mt-[10vh] lg:my-[15vh]'>
            <img className='rounded' src={Spotify} alt="" height={250} width={250} />
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className='text-center lg:mt-[50px] lg:text-left mt-5  w-full max-w-xl lg:3/4'>
            <h6 className='mb-2 font-semibold'>Spotify Clone</h6>
            <p className='mb-4 text-neutral-400'>Spotify Clone is a front-end web application mimicking the popular music streaming platform, built with HTML, CSS, and JavaScript. Users can browse songs, play audio, and interact with the interface seamlessly. This project highlights my expertise in DOM manipulation, responsive design, and working with media elements, creating a smooth and modern user experience similar to real-world applications.</p>
            <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'> HTML</span>
            <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'> CSS</span>
            <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'> JAVASCRIPT</span>
          </motion.div>
        </div>



      </div>


    </>
  )
}

export default Projects
