"use client"
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Calendar, Globe, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import Section from '../components/common/Section'
import Button from '../components/common/Button'



export default function HomePage() {
  const router = useRouter()
  
  return (
    <>
      {/* Hero & Launch CTA */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-primary-800/80" />
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <motion.h1
            className="text-5xl lg:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
          Alumni Relations Cell <br/><span className="text-primary-150">MEC</span>
          </motion.h1>
          <motion.p
            className="text-xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            A student-led body, guided by our faculty, dedicated to connecting alumni with current students and the college community.
          </motion.p>
          <div className="flex justify-center gap-4">
              <motion.button
                className="px-6 py-3 rounded-lg bg-primary-300 text-primary-800 font-medium hover:bg-primary-500 transition-colors flex items-center justify-center"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Official Launch</span>
                <ArrowRight size={16} className="ml-2" />
              </motion.button>
            </div>
        </div>
      </section>
      
      <Section className="bg-white">
        <h2 className="text-4xl text-primary-950 text-center mb-4 font-bold">About Us</h2>
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.p
            className="text-lg text-gray-700 leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            The Alumni Relations Cell at Model Engineering College is more than just a student initiative—it is a commitment to fostering lifelong connections. Initiated in collaboration with faculty mentors, the cell aims to build a vibrant and engaged alumni network that contributes actively to the institution s ongoing growth. Through meaningful programs and purposeful interactions, we aspire to bridge generations of MECians and create a lasting impact on careers, innovation, and community.
          </motion.p>
        </div>
      </Section>

      {/* About: Mission, Vision & Timeline */}
      <Section className="bg-white bg-primary-175">
        <div className="container mx-auto px-4">
          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-semibold text-center  mb-4">Our Mission</h2>
              <p className="text-gray-700">
                To foster meaningful mentorship, career guidance, and collaborative opportunities between MEC alumni and students—building a legacy of shared growth.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-semibold text-center mb-4">Our Vision</h2>
              <p className="text-gray-700">
                To become the premier bridge between past and present MEC cohorts, enriching the academic journey with real-world insights and lifelong connections.
              </p>
            </motion.div>
          </div>

        </div>
      </Section>
      
      <section className="py-16 px-4 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
        <div className="flex flex-col gap-12 max-w-4xl mx-auto">

          {/* Timeline Item 1 */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <Image 
              src="/assets/undraw_ideation.svg" 
              alt="Ideation" 
              width={192} 
              height={192} 
              className="w-32 md:w-48 order-1 md:order-none" 
            />
            <div className="text-left md:ml-8">
              <h3 className="text-xl font-semibold mb-2">Cell Formation</h3>
              <p className="text-gray-600">In this stage, the initial thoughts and motivations behind starting an alumni cell were discussed and laid out.</p>
            </div>
          </div>

          {/* Timeline Item 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-6">
            <Image 
              src="/assets/undraw_launch_event.svg" 
              alt="Launch" 
              width={192} 
              height={192} 
              className="w-32 md:w-48 order-1 md:order-none md:-mt-8" 
            />
            <div className="text-left md:mr-8">
              <h3 className="text-xl font-semibold mb-2">Inaugural Launch</h3>
              <p className="text-gray-600">With the core team and support from faculty, the MEC Alumni Cell was officially launched with an inauguration event.</p>
            </div>
          </div>

          {/* Timeline Item 3 */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <Image 
              src="/assets/undraw_team_spirit.svg" 
              alt="Growth Phase" 
              width={192} 
              height={192} 
              className="w-32 md:w-48 order-1 md:order-none" 
            />
            <div className="text-left md:ml-8">
              <h3 className="text-xl font-semibold mb-2">Talks and Events</h3>
              <p className="text-gray-600">Through continuous seminars, alumni talks, and student interaction programs, the cell grew rapidly in influence and impact.</p>
            </div>
          </div>

        </div>
      </section>

      {/* Official Launch Event */}
      <Section className="bg-gray-50 py-20" id="launch">
        <div className="container mx-auto px-4 max-w-4xl bg-gray-100 md:bg-gray-50 border-[1px] md:border-0 md:border-t-4 md:rounded-sm rounded-md border-primary-900 pt-8 pb-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <motion.div
              className="w-full md:w-1/2 rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="https://images.pexels.com/photos/3184332/pexels-photo-3184332.jpeg"
                alt="Launch Event"
                width={400}
                height={256}
                className="w-full h-64 object-cover"
              />
            </motion.div>
            <motion.div
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-3xl font-semibold mb-4">Official Launch</h3>
              <div className="flex items-center text-gray-600 mb-2">
                <Calendar className="mr-2" size={20} /> May 25, 2025
              </div>
              <div className="flex items-center text-gray-600 mb-4">
                <Globe className="mr-2" size={20} /> MEC Main Auditorium
              </div>
              <p className="text-gray-700 mb-6">
                Join us for our inaugural gathering—an evening of introductions, vision sharing, and networking with faculty, students, and alumni.
              </p>
              <Button 
                className='sm:border-[1px] sm:border-black' 
                variant="outline" 
                onClick={() => router.push('/register')}
              >
                Register Now
              </Button>
            </motion.div>
          </div>
        </div>
      </Section>
    </>
  )
}