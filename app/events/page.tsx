'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { Calendar, MapPin, Clock} from 'lucide-react';



type EventItem = {
  id: number;
  title: string;
  date: string;
  location: string;
  time: string;
  category: 'alumni' | 'college' | 'workshop';
  image: string;
};

const EventsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'alumni' | 'college'>('all');

  const eventItems: EventItem[] = [
    {
      id: 1,
      title: 'Alumni Networking Session',
      date: 'June 15',
      location: 'Main Auditorium',
      time: '10 AM',
      category: 'alumni',
      image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg',
    }
  ];

  const filteredItems =
    selectedCategory === 'all'
      ? eventItems
      : eventItems.filter((item) => item.category === selectedCategory);

  return (<>
 
      {/* Header Section with SVG Illustration */}
    < section className=" px-4 bg-primary-100  md:flex  md:flex-row items-center justify-center md:h-screen md:min-h-[480px] min-h-[580px]"> 
    <div className="absolute md:top-98 md:-left-32 top-72 -left-40 md:w-48 md:h-48  rounded-full bg-primary-175  md:opacity-60 opacity-0"></div>
      <div className="absolute md:top-120 md:right-14  top-96 -right-16 md:w-32 md:h-32 rounded-full bg-primary-200 md:opacity-60 opacity-0"></div>
      <div className="absolute md:top-52 md:right-120 top-40 right-8 md:w-16 md:h-16 rounded-full bg-primary-175 md:opacity-70 opacity-0 overflow-hidden"></div>
        <div className=" text-center mb-8 pt-30 md:-pt-16">
          <h2 className="text-3xl md:text-5xl text-primary-950 font-bold mb-4 mt-2">UPCOMING EVENTS</h2>
          <p className="text-lg text-gray-700 ">
          Connect and grow with our diverse range of events designed for students, alumni, and faculty members
          </p>
        </div>
        <div className="md:w-1/2 mt-12 md:mt-2 flex justify-center">
          <Image 
            src="/assets/undraw_conference.svg" 
            alt="Events illustration" 
            width={320} 
            height={240} 
            className="md:w-80 max-w-md w-52"
          />
        </div>
      </section>

      {/* Category Filter */}
      <section className="flex flex-wrap justify-center gap-2 md:gap-8  mt-16 mb-12">
        {(['all', 'alumni', 'college'] as const).map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full transition ${
              selectedCategory === category
                ? 'bg-primary-600 text-white'
                : 'bg-primary-100 text-primary-800 hover:bg-primary-200'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </section>

      {/* Events Grid */}
      {filteredItems.length === 0 ? (
        <div className="text-center text-gray-500 text-lg py-10">
          <div className="flex justify-center mb-4">
            {/* This would be replaced with your empty state SVG from unDraw */}
            <Image 
              src="/assets/undraw_no_data.svg" 
              alt="No events" 
              height={144}
                width={144} 
              className="md:w-36 w-20"
            />
          </div>
          <p>No events available in this category yet. <br/>Stay tuned!</p>
        </div>
      ) : (
        <div className="flex flex-wrap justify-center gap-6 md:my-8">
  {filteredItems.map((item) => (
    <div
      key={item.id}
      className="w-full max-w-[570px] bg-primary-100  md:rounded-md  p-6 z-10"
    >

      <div className="flex justify-between items-center mb-4 w-full">
        <h3 className="font-bold text-lg text-primary-900">Featured Event</h3>
        <div className="bg-primary-100 p-2 rounded-full ">
          <Clock size={16} className="text-primary-900" />
        </div>
      </div>
      <div className="w-full h-60 rounded-lg mb-9 md:mb-3 md:flex items-center justify-start gap-12">
        <Image
        src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
        alt="Events illustration" 
        width={500}
        height={300}
        className="max-w-full max-h-full rounded-lg object-cover"
        />
        <div className ="flex md:flex-col flex-row mt-4 md:-mt-2 gap-4">
          <div className="flex items-center">
            <Calendar size={16} className="text-primary-900" />
            <p className="text-sm text-gray-600 ml-2">{item.date}</p>
          </div>
          <div className="flex items-center">
            <Clock size={16} className="text-primary-900" />
            <p className="text-sm text-gray-600 ml-2">{item.time}</p>
          </div>
        </div>
      </div>
      <p className="text-3xl font-semibold text-primary-900">Official Launch</p>
      <div className="mt-2 font-medium flex items-center">
            <MapPin size={16} className="text-primary-900" />
            <p className="text-sm text-gray-600 ml-2">{item.location}</p>
          </div>
  </div>
  ))}
</div>

      )}
      
     
    </>
  );
};

export default EventsPage;
