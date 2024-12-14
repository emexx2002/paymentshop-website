import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F8F9FA] py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <div className="flex items-center space-x-1">
          <img
              src="/assets/logo.png"
              alt="PaymentShopLogo"
              width={50} 
              height={50} 
              className="rounded-full"
          />
                    <h1 className="text-3xl text-[#050a30] font-semibold">Payment<span className='text-2xl'>Shop</span></h1></div>
          <h3 className="font-bold text-lg mt-20 mb-10">GET IN TOUCH</h3>
          <address className="not-italic mb-4">
            13, Hughes Avenue, Alagomeji, Yaba, Lagos
          </address>
          <p className="mb-6">+234 800 000 0000</p>
          <div className="flex space-x-2">
             <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 border-2 border-black rounded-full p-2">
                         <FaFacebookF />
                       </a>
             <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 border-2 border-black rounded-full p-2">
                          <FaTwitter />
                        </a>
           <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 border-2 border-black rounded-full p-2">
                         <FaInstagram />
                       </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="space-y-6">
          <h3 className="font-bold text-lg">NEWSLETTER</h3>
          <p className="text-sm text-gray-600">
            Subscribe to our product newsletter to get notified when we launch
            the product or when we complete a milestone.
          </p>
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="flex-grow py-2 px-4 border border-gray-300 rounded-l-md"
            />
            <button className="bg-orange-500 text-white px-6 py-2 rounded-r-md">
              &gt;
            </button>
          </div>
          <div className="space-y-4">
            <p className="font-bold">
              SEND US AN EMAIL TO START MAKING FAST & SECURED PAYMENT ?
            </p>
            <a href="#" className="flex items-center space-x-2 ml-40">
              <img
                src="/assets/whatsapp.svg"
                alt="WhatsApp"
                className="h-10 w-10"
              />
            </a>
            <a
              href="mailto:sales@paymentshop.io"
              className="text-blue-500 underline block"
            >
              sales@paymentshop.io
            </a>
          
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 text-center text-sm text-gray-500">
        <p>&copy; 2024 PaymentShop.io</p>
      </div>
    </footer>
  );
};

export default Footer;
