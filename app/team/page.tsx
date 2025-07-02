'use client'

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Mail, Linkedin } from 'lucide-react';

import Section from '@/components/common/Section';
import { Card } from '@/components/common/Card';


//change image and URL in metadata to valid ones during prod

interface TeamMember {
  name: string;
  role: string;
  image: string;
  email?: string;
  linkedin?: string;
}

const Coordinator: TeamMember = {
  name: 'Dr.Minimol B',
  role: 'Faculty in-charge',
  image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  email: 'rahul.s2023@mec.ac.in',
  linkedin: '#',
}

const studentCoordinators: TeamMember[] = [
  {
    name: 'Angel Elsa George',
    role: 'Chairperson',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
    email: 'aaaaa.k2024@mec.ac.in',
    linkedin: '#',
  },
  {
    name: 'Johann Manuel',
    role: 'Vice-Chairperson',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
    email: 'aaaaa.k2024@mec.ac.in',
    linkedin: '#',
  },
  {
    name: 'Krishna Anand',
    role: 'Alumni Connect Head',
    image: '/teampics/krishna_anand.jpg',
    email: 'aaaaa.k2024@mec.ac.in',
    linkedin: '#',
  },
  {
    name: 'Darsana Rajeev',
    role: 'Database Head',
    image: '/teampics/darsana_rajeev.jpg',
    email: 'aaaaa.k2024@mec.ac.in',
    linkedin: '#',
  },
  {
    name: 'Nevin Joseph',
    role: 'Event Lead',
    image: '/teampics/nevin_joseph.png',
    email: 'aaaaa.k2024@mec.ac.in',
    linkedin: '#',
  },
  {
    name: 'Joe George',
    role: 'Tech Lead',
    image: '/teampics/joe_george2.jpg',
    email: 'aaaaa.k2024@mec.ac.in',
    linkedin: '#',
  },
  {
    name: 'Deva      Sambhu',
    role: 'Publicity Lead',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
    email: 'aaaaa.k2024@mec.ac.in',
    linkedin: '#',
  },
  {
    name: 'Gouri      Mukesh',
    role: 'Finance Lead',
    image: '/teampics/gouri_mukesh.heif',
    email: 'aaaaa.k2024@mec.ac.in',
    linkedin: '#',
  },
  {
    name: 'Mariya Alexander',
    role: 'Design Lead',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
    email: 'aaaaa.k2024@mec.ac.in',
    linkedin: '#',
  },
  {
    name: 'George Thomas',
    role:  'Design Co-Lead',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
    email: 'aaaaa.k2024@mec.ac.in',
    linkedin: '#',
  },
];

const TeamMemberCard: React.FC<{ member: TeamMember; index: number }> = ({ member, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="h-full overflow-hidden group hover:shadow-md transition-shadow bg-white">
        <div className="aspect-square relative">
          <Image 
            src={member.image}
            alt={member.name}
            width={250}
            height={200}
            
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-6 py-2 md:py-6">
          <h3 className="text-[18px] font-semibold mb-1 text-center">{member.name}</h3>
          <p className="text-primary-600 font-medium text-[14px] md:mb-4 mb-2 text-center">{member.role}</p>
          <div className="flex justify-center gap-12">
              <a href={member.linkedin} className="p-2 text-gray-600 hover:text-primary-600 transition-colors">
                <Linkedin size={18} />
              </a>
              <a href={`mailto:${member.email}`} className="p-2 text-gray-600 hover:text-primary-600 transition-colors">
                <Mail size={18} />
              </a>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

const TeamPage: React.FC = () => {
  return (
    <>
      <Section 
        title="OUR TEAM"
        subtitle="Meet the dedicated individuals who work behind the scenes to strengthen our alumni community."
        className="bg-primary-50 text-primary-800 pt-26"
      >
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-6 md:mx-12 md:gap-18 mx-6">
          {studentCoordinators.map((member, index) => (
            <TeamMemberCard key={index} member={member} index={index} />
          ))}
        </div>
      </Section>

      <Section 
        title="FACULTY COORDINATOR"
        subtitle=""
        className="bg-primary-50 text-primary-800 pt-12"
      >
        <div className="flex justify-center">
          <Card className="h-120 w-60 overflow-hidden group hover:shadow-md transition-shadow bg-white">
            <div className="relative aspect-square">
              <Image 
                src={Coordinator.image}
                alt={Coordinator.name}
                width={250}
                height={200}

                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6 pb-2 md:pb-6">
              <h3 className="text-xl font-semibold mb-1 text-center">{Coordinator.name}</h3>
              <p className="text-primary-600 font-medium mb-3 text-center">{Coordinator.role}</p>
              <div className="flex justify-center gap-12">
                <a href={Coordinator.linkedin} className="p-2 text-gray-600 hover:text-primary-600 transition-colors">
                  <Linkedin size={18} />
                </a>
                <a href={`mailto:${Coordinator.email}`} className="p-2 text-gray-600 hover:text-primary-600 transition-colors">
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </Card>
        </div>
      </Section>
    </>
  );
};

export default TeamPage;
