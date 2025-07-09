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
  image: '/teampics/minimol.jpeg',
  email: 'mini@mec.ac.in',
  linkedin: 'https://www.linkedin.com/in/minimol-balakrishnan-77950346',
}
const studentCoordinators: TeamMember[] = [
  {
    name: 'Angel Elsa George',
    role: 'Chairperson',
    image: '/teampics/angel_elsa_george.jpg',
    email: 'angelgeorge704@gmail.com',
    linkedin: 'https://www.linkedin.com/in/angel-george-36816b256',
  },
  {
    name: 'Johann Manuel',
    role: 'Vice-Chairperson',
    image: '/teampics/johann_manuel.jpg',
    email: 'johannmanuel321@gmail.com',
    linkedin: 'https://www.linkedin.com/in/johann-manuel-2882a3255',
  },
  {
    name: 'Krishna Anand',
    role: 'Alumni Connect Head',
    image: '/teampics/krishna_anand.jpg',
    email: 'drkrishnaanand@gmail.com',
    linkedin: 'https://www.linkedin.com/in/krishna-anand-616622302',
  },
  {
    name: 'Darsana Rajeev',
    role: 'Database Head',
    image: '/teampics/darsana_rajeev.jpg',
    email: 'darsanarajeev8486@gmail.com',
    linkedin: 'https://www.linkedin.com/in/darsana-rajeev-4741b4255',
  },
  {
    name: 'Nevin Joseph',
    role: 'Event Lead',
    image: '/teampics/nevin_joseph.png',
    email: 'nevinj981@gmail.com',
    linkedin: 'https://www.linkedin.com/in/nevin-joseph-antony',
  },
  {
    name: 'Joe George',
    role: 'Tech Lead',
    image: '/teampics/joe_george2.jpg',
    email: 'joegeorge215@gmail.com',
    linkedin: 'https://www.linkedin.com/in/joe-george-348111291',
  },
  {
    name: 'Deva Sambhu',
    role: 'Publicity Lead',
    image: '/teampics/deva_sambhu_p1.png',
    email: 'devasambhuprasannakumar@gmail.com',
    linkedin: 'https://www.linkedin.com/in/deva-sambhu-p-55a231291',
  },
  {
    name: 'Gouri Mukesh',
    role: 'Finance Lead',
    image: '/teampics/gouri_mukesh.jpg',
    email: 'gourimchandra@gmail.com',
    linkedin: 'http://linkedin.com/in/gouri-mukesh-980720292',
  },
  {
    name: 'Mariya Alexander',
    role: 'Design Lead',
    image: '/teampics/mariya_alexander1.jpg',
    email: 'mariyaad.d2012@gmail.com',
    linkedin: 'https://www.linkedin.com/in/mariya-alexander',
  },
  {
    name: 'George Thomas',
    role: 'Design Co-Lead',
    image: '/teampics/george_thomas.png',
    email: 'georgethomas@ieee.org',
    linkedin: 'https://www.linkedin.com/in/george--thomas-',
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
          <a
    href={member.linkedin}
    className="p-2 text-gray-600 hover:text-primary-600 transition-colors"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Linkedin size={18} />
  </a>
  <a
    href={`mailto:${member.email}`}
    className="p-2 text-gray-600 hover:text-primary-600 transition-colors"
    target="_blank"
    rel="noopener noreferrer"
  >  <Mail size={18} />
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
          <Card className="h-96 w-60 overflow-hidden group hover:shadow-md transition-shadow bg-white">
            <div className="relative aspect-square">
              <Image 
                src={Coordinator.image}
                alt={Coordinator.name}
                width={250}
                height={200}

                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-4 pb-2 pt-2 md:pb-6">
              <h3 className="text-xl font-semibold pb-1 text-center">{Coordinator.name}</h3>
              <p className="text-primary-600 font-medium text-center">{Coordinator.role}</p>
              <div className="flex justify-center gap-12 pt-4">
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
