import React from 'react'
import intro5 from '../assets/intro5.jpg'
import intro6 from '../assets/intro6.png'
import { motion } from 'framer-motion'

const Reviews = () => {
  const textAnimationDown = {
    hidden: {
      y: -100,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
    }
  }
  const textAnimationUp = {
    hidden: {
      y: 100,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
    }
  }
  const textAnimationLeft = {
    hidden: {
      x: -100,
      opacity: 0
    },
    visible: {
      x: 0,
      opacity: 1,
    }
  }
  const textAnimationRight = {
    hidden: {
      x: 100,
      opacity: 0
    },
    visible: {
      x: 0,
      opacity: 1,
    }
  }

  return (
    <section id='reviews'>
          <div className='w-full h-full  px-4 lg:px-20 relative overflow-y-hidden'>
          <img src={intro5} alt="" className='rounded-3xl w-full' />
          <div className="absolute inset-0 flex items-center justify-center ">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{amount: 0.2}}
                className="text-center text-white backdrop-blur-sm p-2 lg:p-8 ">
                <motion.h2 
                variants={textAnimationDown}
                transition={{duration: 1}}
                className="text-3xl md:text-4xl lg:text-5xl uppercase mb-4 font-Noto">
                Reviews</motion.h2>
                <motion.p 
                variants={textAnimationUp}
                transition={{duration: 1.2}}
                className="max-w-96 text-sm mb-4 lg:mb-8 font-Noto font-bold">
                Condimentum vel viverra morbi quisque lobortis eu leo. A nulla pulvinaunc sapien egestas at cursus. 
                </motion.p> 
                <motion.div 
                className=''>
                  <motion.p 
                  variants={textAnimationDown}
                  transition={{duration: 1.4}}
                  className='font-bold'>Elizabeth Murray</motion.p>
                  <motion.p 
                  variants={textAnimationUp}
                  transition={{duration: 1.6}}
                  className='font-light text-gray-200' >Member</motion.p>
                </motion.div>
              </motion.div>
        </div>
      </div>
      <div className='p-6 lg:px-20 lg:py-16 overflow-x-hidden'>
        <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{amount: 0.2}}
        className='grid grid-cols-1 md:grid-cols-2 items-center '>
          <motion.div
          variants={textAnimationLeft}
          transition={{duration: .8}}>
            <img src={intro6} alt="" className='rounded-3xl w-full'/>
          </motion.div>
          <motion.div
          className='max-w-96 ml-0 mt-5 md:ml-20 lg:ml-40'>
            <motion.p 
            variants={textAnimationRight}
            transition={{duration: 1}}
            className='mb-16'>Life's journey is an ongoing process, and our subscription ensures you have a reliable partner every step of the way. Regular sessions keep you accountable and motivated for sustained progress.
            </motion.p>
            <motion.button 
            variants={textAnimationRight}
            transition={{duration: 0.8}}
            href="#" className='font-light'>Learn More</motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>

  )
}

export default Reviews
