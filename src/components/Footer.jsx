import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from 'framer-motion';

const Footer = () => {
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
    <footer className='p-6 lg:px-20 lg:py-3 overflow-y-hidden  '>
      <motion.div 
      initial='hidden'
      whileInView="visible"
      viewport={{amount: 0.2}}
      className='bg-[#252525] py-6 px-6 rounded-3xl'>
        <motion.h1 
        variants={textAnimationDown}
        transition={{duration: .6}}
        className='font-Noto  text-center italic text-3xl lg:text-6xl'>Emma Olsen
        </motion.h1>
        <div className='my-8 flex items-center justify-center space-x-4'>
          <button href="#"
          variants={textAnimationDown}
          transition={{duration: .8}}>
            <FaFacebookF size={20}/> 
          </button>
          <motion.button
          variants={textAnimationUp}
          transition={{duration: 1}}
          href="#">
            <FaInstagram size={20}/> 
          </motion.button>
          <motion.button
          variants={textAnimationDown}
          transition={{duration: 1.2}}
          href="#">
            <FaTwitter size={20}/>
          </motion.button>
          <motion.button
          variants={textAnimationUp}
          transition={{duration: 1.4}}
          href="#">
            <FaLinkedin size={20}/>
          </motion.button>
          <motion.button 
          variants={textAnimationDown}
          transition={{duration: 1.6}}
          href="#">
            <FaSkype size={20}/>
          </motion.button>
          <motion.button 
          variants={textAnimationUp}
          transition={{duration: 1.8}}
          href="#">
            <FaTelegramPlane size={20}/>
          </motion.button>
          <motion.button 
          variants={textAnimationDown}
          transition={{duration: 2}}
          href="#">
            <FaWhatsapp size={20}/>
          </motion.button>
        </div>
          <motion.div 
          variants={textAnimationUp}
          transition={{duration: 1.4}}
          className='flex items-center justify-center space-x-4'><small>© compileTab. All rights reserved</small>
          </motion.div>
      </motion.div>
    </footer>
  )
}

export default Footer
