// src/components/Footer.js

import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 pt-15 h-auto text-white px-6 md:px-12 py-6">
      <div className="max-w-7xl mx-auto grid pt-20 grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
        {/* Logo and Description */}
        <div className="md:col-span-2 md:mr-5">
          <div className="mb-4">
            <Image src="/AFSS_logo.png" alt="Logo" width={150} height={40} />
          </div>
          <p className="text-gray-400 text-sm">
            Atlantic Fenders & Support Services is a leading provider of fendering systems and marine support services. We are committed to delivering high-quality products and services to our clients in the maritime industry.
            Our team of experts is dedicated to ensuring the safety and efficiency of marine operations through innovative solutions and exceptional customer service.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaLinkedin size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>

        {/* Links Section */}
        <div className=''>
          <h4 className="text-white font-semibold mb-3">Company</h4>
          <ul className="text-gray-400 space-y-2 text-sm">
            <li><Link href="#">About</Link></li>
            <li><Link href="#">Careers</Link></li>
            <li><Link href="#">Blog</Link></li>
            <li><Link href="#">Partners</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Support</h4>
          <ul className="text-gray-400 space-y-2 text-sm">
            <li><Link href="#">Help Center</Link></li>
            <li><Link href="#">Contact Us</Link></li>
            <li><Link href="#">Status</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Legal</h4>
          <ul className="text-gray-400 space-y-2 text-sm">
            <li><Link href="#">Privacy Policy</Link></li>
            <li><Link href="#">Terms of Use</Link></li>
            <li><Link href="#">Security</Link></li>
            <li><Link href="#">GDPR</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="border-t bg-gray-900 border-gray-800 mt-20 bottom-0 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Atlantic Fenders & Support Services. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
