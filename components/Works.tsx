import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Works: React.FC = () => {
  return (
    <section className="bg-[#D3D3D3] py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          How It Works
        </h2>

        {/* Main Steps Container */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="flex flex-col items-center">
            <div className="w-full h-[250px] bg-white shadow-lg rounded-lg flex flex-col items-center justify-center p-6">
              <Image
                src="/assets/login.png"
                alt="Login"
                width={80}
                height={80}
              />
              <h3 className="text-lg font-semibold text-gray-800 mt-4">
                Login
              </h3>
            </div>
            <p className="text-gray-600 mt-4">Sign up with a username & password.</p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center">
            <div className="w-full h-[250px] bg-white shadow-lg rounded-lg flex flex-col items-center justify-center p-6">
              <Image
                src="/assets/payment.svg"
                alt="Add Payment"
                width={80}
                height={80}
              />
              <h3 className="text-lg font-semibold text-gray-800 mt-4">
                Add Payment
              </h3>
            </div>
            <p className="text-gray-600 mt-4">Add your card.</p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center">
            <div className="w-full h-[250px] bg-white shadow-lg rounded-lg flex flex-col items-center justify-center p-6">
              <Image
                src="/assets/checkout.svg"
                alt="Check Out"
                width={80}
                height={80}
              />
              <h3 className="text-lg font-semibold text-gray-800 mt-4">
                Check Out
              </h3>
            </div>
            <p className="text-gray-600 mt-4">
              Use the paymentShop button <br />
              to check out with just an email <br />
              address and password.
            </p>
          </div>
        </div>

        {/* Contact Sales Button */}
        <div className="mt-16">
          <Link
            href="/contact"
            className="inline-block text-white px-12 py-3 md:px-16 md:py-4 bg-[#ec7e0f] rounded-full hover:bg-gray-200 hover:text-black transition duration-300"
          >
            CONTACT SALES
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Works;
