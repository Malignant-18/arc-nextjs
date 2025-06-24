'use client'

import React from 'react'
import { cn } from '@/utils/cn'
import { motion } from 'framer-motion'

interface SectionProps {
  children: React.ReactNode
  className?: string
  title?: string
  subtitle?: string
  centered?: boolean
  id?: string
}

const Section: React.FC<SectionProps> = ({
  children,
  className,
  title,
  subtitle,
  id,
}) => {
  return (
    <section
      id={id}
      className={cn('py-16 md:py-20 ', className)}
    >
      <div className="container mx-auto pt-12 px-4">
        {(title || subtitle) && (
          <div className={cn('mb-12 text-center')}>
            {title && (
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                {title}
              </motion.h2>
            )}
            {subtitle && (
              <motion.p 
                className="text-lg text-gray-600 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {subtitle}
              </motion.p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}

export default Section