import React, { useEffect } from 'react'
import { useState } from 'react'
import { FaHamburger } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion"

export const LINKS = [
  { name: "HOME", id: "home" },
  { name: "ABOUT", id: "about" },
  { name: "REVIEWS", id: "reviews" },
  { name: "CONTACT", id: "contact" },
];



const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen])

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
  const containerVariants = {
    hidden: {opacity: 0, y: "-100%"},
    visible: {opacity: 1, y: 0},
      transition: {
        staggerChildren: 0.1,
      }
  }
  
  const linkVariants = {
    hidden: {opacity: 0, y: -50},
    visible: {opacity: 1, y: 0},

  }

  return (
    <>
      <div className='px-28 py-6 '>
      <div className=' hidden lg:block  '>
        <motion.div 
        initial="hidden"
        whileInView='visible'
        viewport={{amount: .2}}
        className='flex items-center justify-between px-28 py-6 fixed bg-black w-full z-30 top-0 left-0 '>
        <nav className=''>
          <ul className='flex gap-10'>
              {LINKS.map((link) => (
                <motion.li
                variants={textAnimationDown}
                transition={{duration: .6}}
                key={link.id}>
                  <a href={`#${link.id}`}className='hover:text-gray-400 transition-colors duration-500'>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </nav>
          <motion.p 
          variants={textAnimationDown}
          transition={{duration: 1}}
          className='font-Noto tracking-tighter uppercase text-5xl '>The Bouqiet</motion.p>
          <motion.nav
          >
          <ul className='flex gap-10'>
              {LINKS.map((link) => (
                <motion.li
                variants={textAnimationDown}
                transition={{duration: 0.6}}
                key={link.id}>
                  <a href={`#${link.id}`} className='hover:text-gray-400 transition-colors duration-500'>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        </motion.div>
       
      </div>
      <motion.nav 
      className='fixed right-0 top-0 z-30 p-2 lg:hidden'>
            <button onClick={toggleMenu} className='rounded-md p-2'>
              {isOpen ? (
                <IoCloseSharp className='w-6 h-6' />
              ) : (
                <FaHamburger className='w-6 h-6' />
              )}
            </button>
        </motion.nav>
      </div>
    
     
        
        <AnimatePresence>
        {isOpen && (
          <motion.div 
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={containerVariants}
          className='fixed inset-0 z-20 flex flex-col items-center justify-center bg-black text-white'>
            <ul className='space-y-6 text-3xl'>
              {LINKS.map((link) => (
                <motion.li
                variants={linkVariants}
                key={link.id}>
                  <a href={`#${link.id}`}onClick={toggleMenu} className='text-5xl font-semibold uppercase tracking-wide hover:text-gray-400 transition-colors duration-500 lg:text-9xl'>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default NavBar
