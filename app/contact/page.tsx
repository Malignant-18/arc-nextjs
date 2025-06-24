'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, Linkedin, Instagram } from 'lucide-react';
import Button from '@/components/common/Button';



const ContactPage: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formState);
    setFormSubmitted(true);
    setFormState({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setFormSubmitted(false), 10000);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-primary-100 text-white text-center">
        <motion.div
          className="container mx-auto max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl text-primary-800 md:pt-12 pt-10 md:text-4xl font-bold mb-4">CONTACT US</h1>
          <p className="text-lg text-gray-600 pt-4">
            Were just getting started and would love to hear from you — whether its questions, feedback, or ideas.
          </p>
        </motion.div>
      </section>

      {/* Contact Info & Form */}
      <section className="bg-primary-50">
        <div className="bg-gray-100 flex flex-col justify-center item-center">
          {/* Contact Info */}
          <div className="text-center pb-8">
            <div>
              <h2 className="text-3xl text-primary-700 font-bold mb-6 pt-12">Get in Touch</h2>
            </div>

            <div className="flex flex-col md:flex-row justify-center gap-8 mt-12 px-4">
              {/* Contact Info */}
              <div className="bg-gray-100 rounded-xl w-full max-w-sm space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-primary-900 mb-1">Visit Us</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Govt. Model Engineering College,<br />
                    Thrikkakara, Kochi - 682021
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary-900 mb-1">Email</h3>
                  <p className="text-gray-700 text-sm">
                    <a href="mailto:alumni@mec.ac.in" className="text-secondary-600 hover:underline">
                      alumni@mec.ac.in
                    </a>
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary-900 mb-1">Phone</h3>
                  <p className="text-gray-700 text-sm">
                    <a href="tel:+91-484-2575370" className="text-secondary-600 hover:underline">
                      +91-484-2575370
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="md:h-100 md:w-[1px] md:bg-gray-400"></div>
              
              {/* Social Media */}
              <div className="bg-gray-100 rounded-xl text-center justify-center w-full max-w-sm space-y-6 transition p-4">
                <h3 className="text-xl font-bold text-primary-900 mb-4">Follow Us</h3>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/company/dummy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 hover:bg-gray-50 px-4 py-3 justify-center rounded transition"
                >
                  <Linkedin className="text-secondary-600" size={30} />
                  <div className="flex flex-col items-start min-w-0">
                    <h4 className="text-md font-semibold text-gray-800">LinkedIn</h4>
                    <p className="text-gray-700 text-sm truncate w-full">alumnirelatio</p>
                  </div>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com/dummy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 hover:bg-gray-50 px-4 py-3 justify-center rounded transition"
                >
                  <Instagram className="text-secondary-600" size={30} />
                  <div className="flex flex-col items-start min-w-0">
                    <h4 className="text-md font-semibold text-gray-800">Instagram</h4>
                    <p className="text-gray-700 text-sm truncate w-full">@mec.alumni</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="text-center self-center md:w-1/2 w-full mb-4 md:mb-12">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="p-6 rounded-xl md:shadow-sm">
                <h2 className="text-3xl text-primary-700 font-bold mb-9 pt-8">Send a Message</h2>

                {formSubmitted ? (
                  <motion.div
                    className="bg-green-50 border border-green-200 text-green-700 rounded-lg p-4 flex items-start gap-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CheckCircle className="text-green-500 mt-1" />
                    <div>
                      <h3 className="font-semibold">Message Sent</h3>
                      <p>Thank you for reaching out. Well respond soon.</p>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="md:flex gap-8 md:items-center text-start">
                      <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                      <input
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary-400"
                      />
                    </div>

                    <div className="md:flex gap-8 md:items-center text-start">
                      <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary-400"
                      />
                    </div>

                    <div className="md:flex gap-4 md:items-center text-start">
                      <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
                      <input
                        id="subject"
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary-400"
                      />
                    </div>

                    <div className="md:flex gap-2 md:items-center text-start">
                      <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formState.message}
                        onChange={handleChange}
                        required
                        className="w-full h-28 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-900"
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="secondary"
                      size="lg"
                      className="md:w-1/3 bg-primary-800 hover:bg-primary-200 hover:text-primary-900"
                    >
                      <Send size={18} className="mr-2" />
                      Send Message
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;