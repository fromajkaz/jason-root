import React, { useState } from 'react'
import emailjs from "@emailjs/browser"
import toast, { Toaster } from 'react-hot-toast';
import { FiSend } from "react-icons/fi";
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [errors, setErrors] = useState({})
  const [isSending, setIsSending] = useState(false)
  
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]:value,
    })
  }

  const validate = () => {
    let errors = {};
    if(!formData.name) errors.name = "Name is required"
    if(!formData.email) {
      errors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is required"
    }
    if (!formData.message) errors.message = "Message is required"
    return errors;
  }

  const handleSumbit = (e) => {
    e.preventDefault();
    const validationErros = validate();
    if(Object.keys(validationErros).length > 0 ) {
      setErrors(validationErros)
    } else {
      setErrors({});
      setIsSending(true);

      emailjs 
        .send(
          "service_yhx3fpa",
          "template_lacy1j5",
          formData,
          "3Sk5MSMWvKwJZVyo8"
        )
        .then((response) => {
          toast.success("Message sent successfully!");
          setFormData({name: '', email: '', message: ""})
         })
         .catch((error) => {
          console.log("Failed...", error)
          toast.error("Failed to send message.Please try again later.")
         })
         .finally(() => {
          setIsSending(false)
         })
    }
  }

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
    <motion.section 
    initial="hidden"
    whileInView="visible"
    viewport={{amount: 0.2}}
    className='p-6 lg:px-20 lg:py-16 ' id='contact'>
      <Toaster/>
      <motion.h2 
      variants={textAnimationDown}
      transition={{duration: .8}}
      className='mb-20 text-center text-4xl font-Noto'>
      Book an appointment
      </motion.h2>
      <motion.form 
      initial='hidden'
      whileInView='visible'
      viewport={{amount: 0.2}}
      onSubmit={handleSumbit} className='mx-auto mb-20 mt-5 lg:max-w-3xl'>
        <div className='mb-4 flex space-x-4'>
          <motion.div 
          variants={textAnimationLeft}
          transition={{duration: 1}}
          className='lg:w-1/2'>
          <input type="text" id='name' name='name' value={formData.name}
          placeholder='Your Full Name' onChange={handleChange} className='mb-8 w-full appearance-none rounded-lg border-b-2 border-gray-900 bg-transparent px-3 py-2 text-sm focus:border-white focus:outline-none'
          />
          {errors.name && (
            <p className='text-sm text-rose-800'>{errors.name}</p>
          )}
          </motion.div>
          <motion.div 
          variants={textAnimationRight}
          transition={{duration: 1}}
          className='lg:w-1/2'>
          <input 
          type="email" 
          id='email'
          name='email' 
          value={formData.email}
          placeholder='Your Email Address' 
          onChange={handleChange} 
          className='mb-8 w-full appearance-none rounded-lg border-b-2 border-gray-900 bg-transparent px-3 py-2  focus:border-white focus:outline-none'
          />
          {errors.email && (
            <p className='text-sm text-rose-800'>{errors.email}</p>
          )}
          </motion.div>
        </div>
        <motion.div 
        variants={textAnimationUp}
        transition={{duration: 1.2}}
        className='mb-4'>
            <textarea 
            id='message'
            name='message' 
            value={formData.message}
            placeholder='Your Message' 
            onChange={handleChange} 
            className='mb-8 w-full appearance-none rounded-lg border-b-2 border-gray-900  bg-transparent px-3 py-2  focus:border-white focus:outline-none'
            rows={6  }
            />
            {errors.message && (
              <p className='text-sm text-rose-800'>{errors.message}</p>
            )}
          </motion.div>
          <motion.button 

          type='sumbit' className={`mb-8 w-full rounded border bg-[#252525] px-4 py-2 font-semibold text-orange-50 hover:bg-black duration-500 ${
            isSending ? "cursor-not-allowed opacity-50" 
            : ""
          } `}
          disabled={isSending}>
            <div className='flex items-center justify-center gap-2'>
              {isSending ? "Sending..." : "Book a Free Consultation"}
              <FiSend/>
            </div>
          </motion.button>
      </motion.form>
    </motion.section>
  )
}

export default ContactForm
