// components/Product.tsx
import React, { useEffect } from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

const Product: React.FC = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <section
      className="flex items-center justify-center  py-16 bg-[#000435] px-4"
    >
      <div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={controls}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl text-white font-bold mb-4">
            The <br /> Product
          </h1>
          <p className="text-lg text-white mb-20 mt-10">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio rerum voluptas assumenda repellat, ad sequi vel ex voluptates voluptatibus autem tenetur aperiam non facere dolor distinctio quibusdam corporis, sed veritatis?
          </p>
          <motion.a
            href="#contact"
            className="inline-block px-16  transition-colors  bg-[#ec7e0f] py-4 rounded-full hover:bg-gray-200"
            initial={{ opacity: 0, x: -50 }}
            animate={controls}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            CONTACT SALES
          </motion.a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-64 md:h-96"
        >
          <Image
            src="/assets/pos.png" 
            alt="Pos"
            layout="fill"
            objectFit="cover"
            className="bg-white rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Product;
