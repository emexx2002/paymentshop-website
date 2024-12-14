import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
};

const Main = () => {
  return (
    <div className='bg-[#d0e2f7]'>
      <header className="text-white py-10 px-6 md:px-10 lg:px-40">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-1">
            <Image
              src="/assets/logo.png"
              alt="PaymentShopLogo"
              width={50} 
              height={50} 
              className="rounded-full"
            />
            <h1 className="text-2xl md:text-3xl text-[#050a30] font-semibold">Payment<span className='text-xl md:text-2xl'>Shop</span></h1>
          </div>
          <nav className="flex flex-wrap items-center justify-center md:justify-end space-x-4">
            <div className="flex items-center text-[#050a30] space-x-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 border-2 border-black rounded-full p-2">
                <FaFacebookF />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 border-2 border-black rounded-full p-2">
                <FaInstagram />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 border-2 border-black rounded-full p-2">
                <FaTwitter />
              </a>
            </div>
            <Link href="/login" className="px-6 md:px-10 py-2 text-black rounded-full border-[#ec7e0f] border-2 hover:bg-gray-200">Login</Link>
            <Link href="/signup" className="px-6 md:px-10 bg-[#ec7e0f] py-2 rounded-full hover:bg-gray-200">SIGN UP</Link>
          </nav>
        </div>
      </header>
  
      {/* Hero Section */}
      <section className="py-12 px-6">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4 text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4">Make Your Payment <br />Move Faster & <br />Secured</h2>  
        </motion.div>
        <div className='mx-auto px-4 text-center'>
          <p className="text-base md:text-lg text-gray-600 mb-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit consectetur amet accusantium omnis.</p>
          <div className="relative w-full max-w-md md:max-w-lg lg:max-w-xl mx-auto my-7">  
            <Image
              src="/assets/protected.png"
              alt="Protected"
              width={800} 
              height={500} 
              className="w-full h-auto"
            />
          </div>
          <Link href="/contact" className="text-white px-12 md:px-16 bg-[#ec7e0f] py-3 md:py-4 rounded-full hover:bg-gray-200">CONTACT SALES</Link>
        </div>
      </section>
    </div>
  );
};

export default Main;
