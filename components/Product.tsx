import React, { useEffect } from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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
    <section className="flex items-center justify-center py-16 bg-[#000435] px-4">
      <div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto"
      >
        {/* Text Content */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-4">
            The <br /> Product
          </h1>
          <p className="text-lg md:text-xl text-white mb-10 mt-6 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio rerum
            voluptas assumenda repellat, ad sequi vel ex voluptates voluptatibus
            autem tenetur aperiam non facere dolor distinctio quibusdam
            corporis, sed veritatis?
          </p>
          <motion.a
            href="#contact"
            className="inline-block px-12 md:px-16 py-3 md:py-4 transition-colors bg-[#ec7e0f] text-white rounded-full hover:bg-gray-200 hover:text-black"
            initial="hidden"
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

        {/* Image Content */}
        <motion.div
          initial="hidden"
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
            alt="POS"
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
