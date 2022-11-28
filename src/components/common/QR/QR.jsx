import './QR.scss'
import React from 'react'
import { motion } from 'framer-motion'

function QR({ img, title, description }) {
  return <motion.section
  initial={{
    opacity: 0
  }}
  animate={{
    opacity: 1
  }}
  className='qr'
  >
    <motion.img
    whileHover={{
      y: 80,
      scale: 1.5
    }}
    src={img} alt="" />

    <div className='qr-text'>
        <motion.h1
        initial={{
          opacity: 0,
          y: -100,
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        >{title}</motion.h1>
        <motion.p
        initial={{
          opacity: 0,
          y: -200,
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        >{description}</motion.p>
    </div>
  </motion.section>
}

export default QR