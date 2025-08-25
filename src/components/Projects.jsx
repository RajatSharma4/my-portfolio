import React from 'react'
import { motion } from "motion/react"


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
            <img className='rounded' src="/Renthive.png" alt="" height={180} width={180} />
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className='text-center lg:text-left mt-5  w-full max-w-xl lg:3/4'>
            <h6 className='mb-2 font-semibold'>RentHive</h6>
            <p className='mb-4 text-neutral-400'>  dolore et quis temporibus deleniti ea aliquam natus quidem reprehenderit, porro facere nulla magnam repellendus rerum voluptates tenetur perferendis repudiandae cumque omnis placeat perspiciatis ratione possimus similique! Et, debitis dolores beatae provident laboriosam, voluptatum facere animi commodi recusandae accusamus fugiat non consectetur harum necessitatibus nihil tempore iure officiis omnis reiciendis maiores ducimus.</p>
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
            <img className='rounded' src="/Simon_Says_Game.png" alt="" height={180} width={180} />
          </motion.div>
          <motion.div 
           whileInView={{opacity: 1, x: 0}}
                    initial={{opacity:0, x: 100}}
                    transition={{duration:1}}
          className='text-center lg:mt-[50px] lg:text-left mt-5  w-full max-w-xl lg:3/4'>
            <h6 className='mb-2 font-semibold'>Simon Says Game</h6>
            <p className='mb-4 text-neutral-400'>  dolore et quis temporibus deleniti ea aliquam natus quidem reprehenderit, porro facere nulla magnam repellendus rerum voluptates tenetur perferendis repudiandae cumque omnis placeat perspiciatis ratione possimus similique! Et, debitis dolores beatae provident laboriosam, voluptatum facere animi commodi recusandae accusamus fugiat non consectetur harum necessitatibus nihil tempore iure officiis omnis reiciendis maiores ducimus.</p>
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
            <img className='rounded' src="/Buuble_Game.png" alt="" height={180} width={180} />
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className='text-center lg:mt-[50px] lg:text-left mt-5  w-full max-w-xl lg:3/4'>
            <h6 className='mb-2 font-semibold'>Bubble Game</h6>
            <p className='mb-4 text-neutral-400'>  dolore et quis temporibus deleniti ea aliquam natus quidem reprehenderit, porro facere nulla magnam repellendus rerum voluptates tenetur perferendis repudiandae cumque omnis placeat perspiciatis ratione possimus similique! Et, debitis dolores beatae provident laboriosam, voluptatum facere animi commodi recusandae accusamus fugiat non consectetur harum necessitatibus nihil tempore iure officiis omnis reiciendis maiores ducimus.</p>
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
            <img className='rounded' src="/Spotify.png" alt="" height={180} width={180} />
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className='text-center lg:mt-[50px] lg:text-left mt-5  w-full max-w-xl lg:3/4'>
            <h6 className='mb-2 font-semibold'>Spotify Clone</h6>
            <p className='mb-4 text-neutral-400'>  dolore et quis temporibus deleniti ea aliquam natus quidem reprehenderit, porro facere nulla magnam repellendus rerum voluptates tenetur perferendis repudiandae cumque omnis placeat perspiciatis ratione possimus similique! Et, debitis dolores beatae provident laboriosam, voluptatum facere animi commodi recusandae accusamus fugiat non consectetur harum necessitatibus nihil tempore iure officiis omnis reiciendis maiores ducimus.</p>
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
