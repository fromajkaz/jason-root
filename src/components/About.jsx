import React from 'react'
import { useEffect, useState } from 'react'
import intro1 from "../assets/intro1.png"
import intro2 from "../assets/intro2.png"
import intro3 from "../assets/intro3.png"
import intro4 from "../assets/intro4.png"
import { delay, motion } from 'framer-motion'

const About = () => {
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
    <section className='p-6 lg:px-20 lg:py-16'>
       <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2}}
       className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6 " id='about'>
          <motion.div
          variants={textAnimationDown}
          transition={{duration: 1}}
          className="flex items-center justify-center  cursor-pointer ">
            <img src={intro1} alt="Image 1" className="object-cover w-full h-full rounded-3xl" />
          </motion.div>
          <motion.div
          variants={textAnimationUp}
          transition={{duration: 1}}
          className="flex items-center justify-center  cursor-pointer ">
            <img src={intro2} alt="Image 2" className="object-cover w-full h-full rounded-3xl" />
          </motion.div>
          <motion.div 
          variants={textAnimationDown}
          transition={{duration: 1}}
          className="flex items-center justify-center  cursor-pointer ">
            <img src={intro3} alt="Image 3" className="object-cover w-full h-full rounded-3xl" />
          </motion.div>
          <motion.div 
          variants={textAnimationUp}
          transition={{duration: 1}}
          className="flex justify-center rounded-3xl cursor-pointer bg-[#2B2B2B] ">
                  <div className='rounded-3xl  p-12 '>
                    <p className='mb-8 tracking-widest leading-7 font-extralight text-sm   '>Life's journey is an ongoing process, and our subscription ensures you have a reliable partner every step of the way. Regular sessions keep you accountable and motivated for sustained progress.,
                    </p>
                    <p className='mb-2 font-Noto italic text-3xl'>Emma Olsen</p>
                    <p>Health and Wellness Coach</p>
                  </div>
          </motion.div>
       </motion.div>

       <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{amount: 0.2}}
        className='bg-[#2B2B2B] rounded-3xl p-12 mb-6 text-center lg:px-80   '>
        <motion.h2
        variants={textAnimationDown}
        transition={{duration: 1}}
        className='mb-5 tracking-widest leading-7 font-Noto text-sm '>It is ideal for health professionals to establish an online presence and connect with their audience effectively. Whether you’re a seasoned health coach or just starting, it offers a hassle-free solution to create a compelling online presence and elevate your coaching business.
        </motion.h2>
        <motion.button 
        variants={textAnimationUp}
        transition={{duration: 1}}
        className="bg-black hover:bg-[#252525] transition-colors duration-500 text-white text-sm font-Noto py-2 px-10 lg:px-16 rounded-lg">
              Book now
        </motion.button>
       </motion.div>

       <div className='grid grid-cols-1 md:grid-cols-2 items-center '>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{amount: 0.2}}
            className='items-center justify-center lg:w-2/3'>
            <motion.h1
            variants={textAnimationLeft}
            transition={{duration: 0.8}} 
            className='font-Noto text-6xl mb-6'>Keep Going!
            </motion.h1>
            <motion.p 
            variants={textAnimationLeft}
            transition={{duration: 1.2}}
            className=' mb-8 tracking-widest leading-7 font-regular text-sm '>Life's journey is an ongoing process, and our subscription ensures you have a reliable partner every step of the way. Regular sessions keep you accountable and motivated for sustained progress.
            </motion.p>
          </motion.div>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{amount: 0.2}}
            className='flex items-center justify-end'>
            <motion.img 
            variants={textAnimationRight}
            transition={{duration: 1}}
            src={intro4} alt="" className='rounded-3xl ' />
          </motion.div>
       </div>

    </section>
  )
}

export default About
