import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const PhoneVisualization = () => {
  return (
    <div style={{ 
      position: 'relative',
      width: '280px',
      height: '560px',
      margin: '2rem 0 4rem 0',
      display: 'flex',
      justifyContent: 'center',
    }}>
      {/* Decorative elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        style={{ 
          position: 'absolute',
          zIndex: -1,
          top: '-2rem',
          left: '-3rem',
          width: '16rem',
          height: '16rem',
          background: 'radial-gradient(circle, rgba(57, 73, 171, 0.15) 0%, rgba(57, 73, 171, 0) 70%)',
          borderRadius: '50%',
          filter: 'blur(30px)'
        }}
      />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        style={{ 
          position: 'absolute',
          zIndex: -1,
          bottom: '-2.5rem',
          right: '-3.5rem',
          width: '20rem',
          height: '20rem',
          background: 'radial-gradient(circle, rgba(57, 73, 171, 0.2) 0%, rgba(57, 73, 171, 0) 70%)',
          borderRadius: '50%',
          filter: 'blur(30px)'
        }}
      />
      
      {/* Grid pattern behind phone */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        style={{
          position: 'absolute',
          zIndex: -1,
          width: '220px',
          height: '520px',
          top: '20px',
          left: '30px',
          backgroundImage: `
            linear-gradient(to right, rgba(57, 73, 171, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(57, 73, 171, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '10px 10px',
          borderRadius: '30px',
        }}
      />
      
      {/* Phone frame */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          type: "spring",
          stiffness: 100,
          damping: 15,
          delay: 0.3
        }}
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'black',
          borderRadius: '40px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.2), 0 10px 15px rgba(0,0,0,0.1)',
          border: '1px solid rgba(255,255,255,0.2)'
        }}
      >
        {/* Screen */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          style={{
            position: 'absolute',
            top: '12px',
            bottom: '12px',
            left: '12px',
            right: '12px',
            background: 'linear-gradient(to bottom right, #F0F4FF, #E8EAF6)',
            borderRadius: '30px',
            overflow: 'hidden'
          }}
        >
          {/* Background grid pattern */}
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `
              linear-gradient(to right, rgba(57, 73, 171, 0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(57, 73, 171, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '16px 16px',
            opacity: 0.8
          }}></div>
          
          {/* Camera visualization elements */}
          <div style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            {/* Camera frame visualization */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              style={{
                position: 'relative',
                width: '70%',
                height: '40%',
                marginBottom: '1.5rem',
                border: '4px solid #3949AB',
                borderRadius: '0.5rem',
                boxShadow: '0 4px 12px rgba(57, 73, 171, 0.2)'
              }}
            >
              {/* Camera view content */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(135deg, #E5E7EB, #D1D5DB)',
                opacity: 0.5
              }}></div>
              
              {/* Distance indicators */}
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.5 }}
                style={{
                  position: 'absolute',
                  top: '8px',
                  right: '8px',
                  backgroundColor: 'rgba(57, 73, 171, 0.9)',
                  color: 'white',
                  fontSize: '0.625rem',
                  fontWeight: 'bold',
                  padding: '0.25rem 0.5rem',
                  borderRadius: '0.25rem'
                }}
              >
                2.4m
              </motion.div>
              
              {/* Object recognition visualization */}
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.7 }}
                style={{
                  position: 'absolute',
                  top: '40px',
                  left: '24px',
                  width: '80px',
                  height: '40px',
                  border: '2px solid #3949AB',
                  borderRadius: '0.375rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(255, 255, 255, 0.5)'
                }}
              >
                <div style={{
                  fontSize: '0.75rem',
                  fontWeight: '500',
                  color: '#3949AB'
                }}>Chair</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.9 }}
                style={{
                  position: 'absolute',
                  bottom: '32px',
                  right: '32px',
                  width: '56px',
                  height: '56px',
                  border: '2px solid #3949AB',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(255, 255, 255, 0.5)'
                }}
              >
                <div style={{
                  fontSize: '0.75rem',
                  fontWeight: '500',
                  color: '#3949AB'
                }}>Person</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.5 }}
                style={{
                  position: 'absolute',
                  bottom: '12px',
                  left: '12px',
                  backgroundColor: 'rgba(57, 73, 171, 0.9)',
                  color: 'white',
                  fontSize: '0.625rem',
                  fontWeight: 'bold',
                  padding: '0.25rem 0.5rem',
                  borderRadius: '0.25rem'
                }}
              >
                1.2m
              </motion.div>
            </motion.div>
            
            {/* Text-to-speech visualization */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 2.1 }}
              style={{
                width: '80%',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                borderRadius: '0.75rem',
                padding: '1rem',
                boxShadow: '0 8px 16px rgba(0,0,0,0.1)'
              }}
            >
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.7, delay: 2.3 }}
                style={{
                  height: '16px',
                  backgroundColor: '#E5E7EB',
                  borderRadius: '9999px',
                  marginBottom: '0.75rem'
                }}
              />
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '75%' }}
                transition={{ duration: 0.5, delay: 2.5 }}
                style={{
                  height: '16px',
                  backgroundColor: '#E5E7EB',
                  borderRadius: '9999px',
                  marginBottom: '0.75rem'
                }}
              />
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '50%' }}
                transition={{ duration: 0.3, delay: 2.7 }}
                style={{
                  height: '16px',
                  backgroundColor: '#E5E7EB',
                  borderRadius: '9999px'
                }}
              />
            </motion.div>
            
            {/* Controls visualization */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 2.9 }}
              style={{
                position: 'absolute',
                bottom: '24px',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                gap: '1.5rem'
              }}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  width: '56px',
                  height: '56px',
                  backgroundColor: '#3949AB',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 6px 12px rgba(57, 73, 171, 0.3)',
                  cursor: 'pointer'
                }}
              >
                <div style={{
                  width: '24px',
                  height: '24px',
                  backgroundColor: 'white',
                  borderRadius: '50%'
                }}></div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                  cursor: 'pointer'
                }}
              >
                <div style={{
                  width: '20px',
                  height: '20px',
                  backgroundColor: 'rgba(57, 73, 171, 0.8)',
                  borderRadius: '50%'
                }}></div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Notch */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '33%',
          height: '24px',
          backgroundColor: 'black',
          borderBottomLeftRadius: '0.75rem',
          borderBottomRightRadius: '0.75rem'
        }}></div>
      </motion.div>
    </div>
  );
};

export default PhoneVisualization; 