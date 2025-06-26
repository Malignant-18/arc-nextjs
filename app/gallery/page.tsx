'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { motion } from 'framer-motion';



type GalleryItem = {
  id: number;
  title: string;
  category: 'events' | 'campus';
  image: string;
};

const GalleryPage: React.FC = () => {
  const showGallery = false;
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'events' | 'campus'>('all');

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: 'Official Alumni Launch',
      category: 'events',
      image: 'https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg',
    },
    {
      id: 2,
      title: 'Meet the Alumni',
      category: 'events',
      image: 'https://images.pexels.com/photos/1181395/pexels-photo-1181395.jpeg',
    },
    {
      id: 3,
      title: 'Campus View',
      category: 'campus',
      image: 'https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg',
    },
  ];

  const filteredItems =
    selectedCategory === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <motion.div
      className="py-12 max-w-7xl mx-auto mb-0 bg-primary-50 pt-40 min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="text-4xl text-primary-950 text-center mb-4 font-bold">GALLERY</h2>
      <p className="text-center text-primary-800 mb-10">
        A visual journey through our moments and milestones.
      </p>

      {showGallery ? (
        <>
          <div className="flex justify-center gap-4 mb-8">
            {(['all', 'events', 'campus'] as const).map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-black'
                    : 'bg-primary-200 text-primary-900 hover:bg-primary-700'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {filteredItems.length === 0 ? (
            <motion.div
              className="text-center text-gray-500 text-lg py-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              No events available yet. Stay tuned!
            </motion.div>
          ) : (
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="overflow-hidden rounded-lg shadow-lg bg-white"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={300}
                    height={56}
                    className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </>
      ) : (
        <motion.div
          className="text-center py-10 text-gray-600 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/assets/undraw_portfolio_update.svg"
            alt="Gallery Coming Soon"
            width={52}
            height={500}
            className="w-52 md:w-full max-w-md mx-auto mb-12"
          />
          <p className="text-md px-4">
            Stay tuned.<br />This space will soon feature a growing display of our most meaningful moments.
          </p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default GalleryPage;