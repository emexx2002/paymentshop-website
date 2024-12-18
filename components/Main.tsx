import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Main = () => {
  return (
    <div className="bg-[#d0e2f7]">
      {/* Header */}
      <header className="py-6 md:py-10 px-4 md:px-8 lg:px-20">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Image
              src="/assets/logo.png"
              alt="PaymentShopLogo"
              width={50}
              height={50}
              className="rounded-full"
            />
            <h1 className="text-2xl md:text-3xl text-[#050a30] font-semibold">
              Payment<span className="text-xl md:text-2xl">Shop</span>
            </h1>
          </div>

          <nav className="flex flex-wrap items-center justify-center md:justify-end space-x-4">
            {/* Social Icons */}
            <div className="flex items-center text-[#050a30] space-x-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-800 border-2 border-black rounded-full p-2"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-800 border-2 border-black rounded-full p-2"
              >
                <FaInstagram />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-800 border-2 border-black rounded-full p-2"
              >
                <FaTwitter />
              </a>
            </div>
            {/* Links */}
            <Link
              href="/login"
              className="px-6 md:px-8 py-2 text-black rounded-full border-[#ec7e0f] border-2 hover:bg-gray-200"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="px-6 md:px-8 py-2 bg-[#ec7e0f] text-white rounded-full hover:bg-gray-200"
            >
              SIGN UP
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 px-4 md:px-8 lg:px-20 text-center">
        {/* Title */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
            Make Your Payment <br /> Move Faster & <br /> Secured
          </h2>
        </motion.div>
        {/* Description */}
        <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto mb-6">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit consectetur amet accusantium omnis.
        </p>
        {/* Image */}
        <div className="relative w-full max-w-md md:max-w-lg lg:max-w-2xl mx-auto my-6">
          <Image
            src="/assets/protected.png"
            alt="Protected"
            width={800}
            height={500}
            className="w-full h-auto"
          />
        </div>
        {/* Call to Action */}
        <Link
          href="/contact"
          className="text-white px-8 md:px-12 bg-[#ec7e0f] py-3 md:py-4 rounded-full hover:bg-gray-200"
        >
          CONTACT SALES
        </Link>
      </section>
    </div>
  );
};

export default Main;
