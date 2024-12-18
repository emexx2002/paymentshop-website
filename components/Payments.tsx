import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const benefits = [
  {
    id: 1,
    title: 'FAST & SECURE',
    description:
      'Lorem ipsum dolor sit amet, consectetur de elit, sed do tempor incididunt ut labore eta rehendit in voluptate velit.',
    icon: '/assets/secure.svg',
  },
  {
    id: 2,
    title: 'FREE SIGN UP',
    description:
      'Lorem ipsum dolor sit amet, consectetur de elit, sed do tempor incididunt ut labore eta rehendit in voluptate velit.',
    icon: '/assets/signup.svg',
  },
  {
    id: 3,
    title: 'SCALE YOUR BUSINESS',
    description:
      'Lorem ipsum dolor sit amet, consectetur de elit, sed do tempor incididunt ut labore eta rehendit in voluptate velit.',
    icon: '/assets/scale.svg',
  },
  {
    id: 4,
    title: 'QUICK & EASY SETUP',
    description:
      'Lorem ipsum dolor sit amet, consectetur de elit, sed do tempor incididunt ut labore eta rehendit in voluptate velit.',
    icon: '/assets/quick.svg',
  },
  {
    id: 5,
    title: 'RECURRING PAYMENTS',
    description:
      'Lorem ipsum dolor sit amet, consectetur de elit, sed do tempor incididunt ut labore eta rehendit in voluptate velit.',
    icon: '/assets/recurring.svg',
  },
];

const Payments: React.FC = () => {
  return (
    <section className="bg-white py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto w-full">
        {/* Title */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Why Choose PaymentShop?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur de elit, sed do tempor
            incididunt ut labore eta rehendit in voluptate velit.
          </p>
        </motion.div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mt-12">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="flex items-start space-x-4 text-left"
            >
              {/* Icon */}
              <div className="w-12 h-12 relative flex-shrink-0">
                <Image
                  src={benefit.icon}
                  alt={benefit.title}
                  layout="fill"
                  objectFit="contain"
                />
              </div>

              {/* Title and Description */}
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Payments;
