import React from 'react';
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Mail,
  Phone,
} from 'lucide-react';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-900 text-gray-400">
      <div className="container px-8 py-8 md:py-12 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* 1. Cell Name & Logo */}
          <div className="flex items-start px-12 md:px-8 gap-3">
          <Image
            src="/common/logo_arc.png"
            alt="Alumni Relations Cell Logo"
            width={50}
            height={50}
            className="w-12 h-12 rounded-full object-cover bg-primary-50 ring-2 ring-primary"
            />
            <h3 className="text-lg font-bold text-white leading-snug">
              ALUMNI<br /> RELATIONS <br />CELL
            </h3>
          </div>

          {/* 2. Location + Contact Details */}
          <div className="space-y-4">
            {/* Phone & Email */}
            <div className="flex flex-col gap-3 px-12 md:px-8">
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-primary-400 flex-shrink-0" />
                <a href="tel:+91-484-2575370" className="hover:text-primary-400 transition-colors">
                  +91-484-2575370
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-primary-400 flex-shrink-0" />
                <a href="mailto:arc@mec.ac.in" className="hover:text-primary-400 transition-colors">
                  arc@mec.ac.in
                </a>
              </div>
            </div>
          </div>

          {/* 3. Social Profiles */}
          <div className="flex justify-center items-start space-x-4">
            <a href="#" className="hover:text-primary-400 transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-primary-400 transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-primary-400 transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="hover:text-primary-400 transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;