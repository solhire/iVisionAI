"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

const PhoneSlider = () => {
  return (
    <div className="relative w-full max-w-sm mx-auto h-[600px] flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="relative flex items-center justify-center" style={{ width: '280px', height: '570px' }}>
          <Image
            src="/images/phone2.png"
            alt="iVision AI Phone View"
            fill
            sizes="(max-width: 768px) 100vw, 300px"
            style={{ 
              objectFit: 'contain',
              filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.15))'
            }}
            priority={true}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default PhoneSlider; 