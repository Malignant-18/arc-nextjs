"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

const LaunchPage = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-r from-primary-600 via-primary-900 to-primary-400 text-white px-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center p-10 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 shadow-2xl max-w-2xl"
      >
        {/* 1. College Name */}
        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-50 mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          MODEL ENGINEERING COLLEGE
        </motion.h1>

        {/* 2. Logo */}
        <motion.div
          className="mb-6 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25 }}
        >
          <div className="bg-white p-3 rounded-full shadow-lg">
            <Image
              src="/common/logo_arc.png"
              alt="MEC Logo"
              width={120}
              height={120}
            />
          </div>
        </motion.div>

        {/* 3. Cell Name */}
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-300 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Alumni Relations Cell
        </motion.h2>

        {/* 4. Inauguration Line */}
        <motion.h3
          className="text-xl sm:text-2xl font-medium text-primary-100"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
        >
          has been officially inaugurated !!
        </motion.h3>
      </motion.div>
    </main>
  )
}

export default LaunchPage
