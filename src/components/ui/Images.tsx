"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

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
        type: "tween"
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

export const Images = () => {
  const refreshPage = () => {
    window.location.reload();
  };

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

      {/* <button
        className="p-2 border hover:opacity-85 transition-all rounded capitalize bg-blue-500 text-white fixed bottom-20 right-0"
        onClick={refreshPage}
      >
        Refresh Page
      </button> */}
    </>
  );
};
