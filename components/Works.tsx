// components/Works.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Works: React.FC = () => {
  return (
    <section className="bg-[#D3D3D3] py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">How It Works</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* First Step */}
          <div className=" rounded-lg p-6 flex flex-col items-center">
            <div className="relative mb-4">
              <Image
                src="/assets/login.png" 
                alt="Login"
                width={300} 
                height={300}
              />
            </div>
        
            <p className="text-gray-600 mb-4">Sign up with a username & password.</p>
            
          </div>

          <button className=" rounded-full text-gray-400 hover:bg-gray-200 ">
            &#8250;
          </button>

          {/* Second Step */}
          <div>
          <div className="bg-white shadow-lg rounded-2xl p-20 flex flex-col items-center">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Add Payment</h3>
            <div className="relative w-16 h-16 mb-5"> 
              <Image
                src="/assets/payment.svg" 
                alt="Add Payment"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
          <p>Add Your Card</p>
          </div>
          <button className=" rounded-full text-gray-400 hover:bg-gray-200 ">
            &#8250;
          </button>

              {/* third Step */}
              <div>
          <div className="bg-white shadow-lg rounded-2xl p-20 flex flex-col items-center">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Check Out</h3>
            <div className="relative w-16 h-16 mb-4"> 
              <Image
                src="/assets/checkout.svg"
                alt="Add Payment"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
          <p>Use the paymentShop <br />button to check out <br /> with just an email <br /> address and password</p>
          </div>
      
        </div>

        {/* Contact Sales Button */}
        <div className="mt-20">
        <Link href="/contact" className=" text-white  px-16 bg-[#ec7e0f] py-4 rounded-full hover:bg-gray-200">CONTACT SALES</Link>
        </div>
      </div>
    </section>
  );
};

export default Works;
