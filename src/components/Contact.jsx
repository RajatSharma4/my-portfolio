// import React from 'react'
import { motion } from "motion/react"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';



const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

   Swal.fire({
  title: "Your response have successfully submitted",
  showClass: {
    popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `
  },
  hideClass: {
    popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `
  }
});


    emailjs
      .sendForm('service_8rudfot', 'template_vcyl38b', form.current, {
        publicKey: 'VYz6gE-oUupAOoVWK',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);

          Swal.fire({
            title: "Something went wrong!",
            text: error.text,
            icon: "error",
          });
        },
      );
  };


  return (
    <>
      <div className='border-b border-neutral-900 pb-20'>
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className='my-10 text-center text-4xl'>Get In Touch</motion.h1>

        <form ref={form} className="flex-1 bg-grey-500 shadow-lg rounded-xl p-6 space-y-4" onSubmit={sendEmail}>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
          >
            <label className="block text-gray-200 font-medium">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              name='from_name'
              required
            />
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
          >
            <label className="block text-gray-200 font-medium">Email</label>
            <input
              type="email"
              placeholder="Your email"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              name='from_email'
              required
            />
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
          >
            <label className="block text-gray-200 font-medium">Message</label>
            <textarea
              placeholder="Write your message..."
              rows="4"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              name='message'
              required
            ></textarea>
          </motion.div>

          <motion.button
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition duration-300"
            value="send"
          >
            Send Message
          </motion.button>
        </form>


      </div>
    </>
  )
}



export default Contact
