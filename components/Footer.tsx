import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="h-screen bg-[#d0e2f7] flex flex-col justify-between">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6 md:px-12 w-full h-full">
        {/* Left Section */}
        <div className="flex flex-col justify-around space-y-6">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <img
              src="/assets/logo.png"
              alt="PaymentShopLogo"
              width={70}
              height={70}
              className="rounded-full"
            />
            <h1 className="text-4xl md:text-5xl text-[#050a30] font-bold">
              Payment<span className="text-2xl md:text-3xl">Shop</span>
            </h1>
          </div>

          <div className="space-y-4 md:space-y-6">
            <h3 className="font-bold text-2xl md:text-3xl text-[#050a30]">
              GET IN TOUCH
            </h3>
            <p className="text-gray-700 text-lg md:text-2xl leading-relaxed">
              13, Hughes Avenue, Alagomeji, Yaba, Lagos
            </p>
            <p className="text-gray-700 text-lg md:text-2xl">
              +234 800 000 0000
            </p>
          </div>

          {/* Social Media */}
          <div className="flex space-x-2 md:space-x-2">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-800 border-2 border-black rounded-full p-2"
            >
              <FaFacebookF className="text-lg md:text-2xl" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-800 border-2 border-black rounded-full p-2"
            >
              <FaTwitter className="text-lg md:text-2xl" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-800 border-2 border-black rounded-full p-2"
            >
              <FaInstagram className="text-lg md:text-2xl" />
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col justify-around space-y-10">
          <div>
            <h3 className="text-3xl md:text-5xl font-bold text-[#050a30] mb-4 md:mb-6">
              NEWSLETTER
            </h3>
            <p className="text-gray-700 text-lg md:text-2xl leading-relaxed mb-4 md:mb-6">
              Subscribe to our product newsletter to get notified when we launch
              the product or when we complete a milestone.
            </p>
            <div className="flex w-full">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="flex-grow py-3 md:py-4 px-4 md:px-6 border border-gray-300 rounded-l-md text-lg md:text-2xl focus:outline-none"
              />
              <button className="bg-orange-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-r-md text-lg md:text-2xl">
                &gt;
              </button>
            </div>
          </div>

          {/* WhatsApp & Email CTA */}
          <div className="flex items-center justify-between mt-8 md:mt-0">
            <div>
              <p className="font-bold text-[#050a30] text-lg md:text-2xl leading-relaxed mb-4 md:mb-20">
                SEND US AN EMAIL TO START MAKING FAST & SECURED PAYMENT ?
              </p>
              <a
                href="mailto:sales@paymentshop.io"
                className="text-black font-semibold text-lg md:text-2xl underline"
              >
                sales@paymentshop.io
              </a>
            </div>
            <div>
              <img
                src="/assets/whatsapp.svg"
                alt="WhatsApp"
                className="h-16 w-16 md:h-20 md:w-20"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full py-2 md:py-4 bg-[#cbd8e6] text-center text-sm md:text-lg text-gray-500">
        &copy; 2024 PaymentShop.io
      </div>
    </footer>
  );
};

export default Footer;
