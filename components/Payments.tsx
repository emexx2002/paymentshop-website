// components/Payments.tsx
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

const benefits = [
  {
    id: 1,
    title: 'FAST & SECURE',
    description: '',
    icon: '/assets/secure.svg', 
  },
  {
    id: 2,
    title: 'FREE SIGNUP',
    description: '',
    icon: '/assets/signup.svg', // Replace with your icon path
  },
  {
    id: 3,
    title: 'SCALE YOUR BUSINESS',
    description: 'Our support team is available around the clock to assist you.',
    icon: '/assets/scale.svg', // Replace with your icon path
  },
  {
    id: 4,
    title: 'QUICK & EASY SETUP',
    description: '',
    icon: '/assets/quick.svg', 
  },
  {
    id: 5,
    title: 'RECCURRING PAYMENT',
    description: '',
    icon: '/assets/recurring.svg', 
  },
];

const Payments: React.FC = () => {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={fadeInUp}
                  transition={{ duration: 0.5 }}
                  className="container mx-auto px-4 text-center"
                >
        <h2 className="text-7xl font-bold text-gray-800 mb-8">Why Choose PaymentShop?</h2>
        </motion.div>
        <p className="text-lg text-gray-600 ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit consectetur amet accusantium omnis.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-10 pt-5">
          {benefits.map((benefit) => (
            <div key={benefit.id} className="flex flex-col items-center">
              <div className="flex items-center mb-2">
                <div className="relative w-8 h-8 mr-2">
                  <Image
                    src={benefit.icon}
                    alt={benefit.title}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{benefit.title}</h3>
              </div>
              <p className="text-gray-600 text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus, accusantium quisquam corrupti aliquid inventore autem quasi iste vel asperiores nihil?</p>
            </div>
          ))}
        </div>
      </div>
    </section>  
  );
};

export default Payments;


