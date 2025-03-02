'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

export const reactImages = `const Img = (props: { imgSrc: string }) => {
  const { imgSrc } = props;
  return (
    <motion.div
      className="size-[100px] border-[5px] border-white bg-white rounded-lg shadow-lg inline-block -ml-5 first:ml-0 odd:!rotate-3 even:!-rotate-3 hover:-translate-y-4 hover:scale-125 hover:z-[2] transition-all"
      variants={{
        hidden: { opacity: 0, y: 20, scale: 0.2 },
        visible: { opacity: 1, y: 0, scale: 1 },
      }}
      transition={{
        type: 'tween',
      }}
    >
      <Image
        src={imgSrc}
        width={150}
        height={150}
        alt="image"
        className="w-full h-full object-cover rounded-lg"
      />
    </motion.div>
  );
};

const ImageList = () => {
  return (
    <>
      <motion.div
        id="wrapper"
        className="flex justify-center w-full"
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
        }}
      >
        <Img imgSrc="/image-1.png" />
        <Img imgSrc="/image-2.png" />
        <Img imgSrc="/image-6.png" />
        <Img imgSrc="/image-3.png" />
        <Img imgSrc="/image.png" />
        <Img imgSrc="/image-4.png" />
        <Img imgSrc="/image-5.png" />
      </motion.div>
    </>
  );
};

export const Images = () => {
  return (
    <motion.div
      className="w-full h-full flex justify-between items-center"
      variants={{
        hidden: { opacity: 0, x: -150, scale: 0.2 },
        visible: { opacity: 1, x: 0, scale: 1 },
      }}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <ImageList />
    </motion.div>
  );
};
`;

const Img = (props: { imgSrc: string }) => {
  const { imgSrc } = props;
  return (
    <motion.div
      className="size-[100px] border-[5px] border-white bg-white rounded-lg shadow-lg inline-block -ml-5 first:ml-0 odd:!rotate-3 even:!-rotate-3 hover:-translate-y-4 hover:scale-125 hover:z-[2] transition-all"
      variants={{
        hidden: { opacity: 0, y: 20, scale: 0.2 },
        visible: { opacity: 1, y: 0, scale: 1 },
      }}
      transition={{
        type: 'tween',
      }}
    >
      <Image
        src={imgSrc}
        width={150}
        height={150}
        alt="image"
        className="w-full h-full object-cover rounded-lg"
      />
    </motion.div>
  );
};

const ImageList = () => {
  return (
    <>
      <motion.div
        id="wrapper"
        className="flex justify-center w-full"
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
        }}
      >
        <Img imgSrc="/image-1.png" />
        <Img imgSrc="/image-2.png" />
        <Img imgSrc="/image-6.png" />
        <Img imgSrc="/image-3.png" />
        <Img imgSrc="/image.png" />
        <Img imgSrc="/image-4.png" />
        <Img imgSrc="/image-5.png" />
      </motion.div>
    </>
  );
};

export const Images = () => {
  return (
    <div className='my-10'>
      <motion.div
        className="w-full h-full flex justify-between items-center"
        variants={{
          hidden: { opacity: 0, x: -150, scale: 0.2 },
          visible: { opacity: 1, x: 0, scale: 1 },
        }}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <ImageList />
      </motion.div>
    </div>
  );
};
