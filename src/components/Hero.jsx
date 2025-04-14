import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


const Hero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black p-4 flex flex-col items-center justify-center">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="text-3xl sm:text-5xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-300"
        >
         The Pinnacle Project
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.3 }}
          className="flex justify-center"
        >
          {/* Shell image/design with logo */}
          <div
            className="w-8 h-38 sm:w-64 sm:h-64 md:w-70 md:h-70 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full
                       border-2 border-white/10 shadow-lg flex items-center justify-center relative" // Added relative for absolute positioning
          >
            <div className="w-32 h-32 sm:w-48 sm:h-48 md:w-60 md:h-60 rounded-full bg-white/5 backdrop-blur-md flex items-center justify-center">
              {/* Logo added here */}
              <img
                src="your-logo-url.png"  // Replace with your logo URL
                alt="Logo"
                className="max-w-60% max-h-60% rounded-full" //Adjust size as needed
              />
            </div>
            
          </div>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className=" text-xl sm:text-3xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-300"
        >
         Making an Impact and Changing Lives through Initiatives and Campaigns in the Mississauga Community
        </motion.h2>

        <motion.div
        
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.6 }}
        >
          
          <Link
          to='/jobs'
            className="bg-gradient-to-r from-purple-500/20 to-pink-500/20
                text-white border-2 border-white/10
                backdrop-blur-md shadow-lg
                hover:from-purple-500/30 hover:to-pink-500/30
                hover:scale-105 transition-all duration-300
                font-semibold text-lg sm:text-xl
                px-6 sm:px-8 py-2 sm:py-3 rounded-md"
          >
            Learn More
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
