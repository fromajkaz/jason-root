import React from 'react'
import hero from "../assets/hero.png"
import { motion } from 'framer-motion'

const Hero = () => {
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
      <div className='w-full h-full  px-4 lg:px-20 relative' id='home'>
        <img src={hero} alt="" className='rounded-3xl w-full' />
        <div className="absolute inset-0 flex items-center justify-center ">
            <motion.div 
            initial='hidden'
            whileInView='visible'
            viewport={{amount: .2}}
            className="text-center text-white">
              <motion.h1 
              variants={textAnimationDown}
              transition={{duration: 1.2}}
              className="text-3xl md:text-6xl lg:text-9xl uppercase font-Noto mb-4">Wedding <br />
              Photographer</motion.h1>
              <motion.h4 
              variants={textAnimationUp}
              transition={{duration: 1}}              
              className="text-sm mb-4 font-bold">Outdoor / Evernts/ Pre wedding / Studio / Wedding</motion.h4>
              <motion.p 
              variants={textAnimationDown}
              transition={{duration: .8}}  
              className="text-sm mb-4 lg:mb-8 font-light">You must be the change you wish to see in the world.</motion.p>
              <motion.button 
              variants={textAnimationUp}
              transition={{duration: .8}}  
              className="bg-[#252525] hover:bg-black transition-colors duration-500 text-white text-sm font-Noto py-2 px-10 lg:px-16 rounded-lg">
              Book now
              </motion.button>
            </motion.div>
      </div>
      
    </div>
   
  )
}

export default Hero
