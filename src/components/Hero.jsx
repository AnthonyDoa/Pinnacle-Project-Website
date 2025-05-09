import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Hero.css'; // Import the CSS file

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-blue-600 to-purple-400 hero-container min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="text-3xl sm:text-5xl lg:text-7xl font-bold text-transparent bg-clip-text bg-white"
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
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 bg-gradient-to-br from-cyan-500/60 to-blue-500/20 rounded-full
                            border-2 border-white/0 shadow-lg flex items-center justify-center relative" // Added relative for absolute positioning
          >
            <div className="w-32 h-32 sm:w-48 sm:h-48 md:w-60 md:h-60 rounded-full bg-white/5 backdrop-blur-md flex items-center justify-center">
              
              <img
                src="your-logo-url.png"   
                alt="Logo"
                className="max-w-60% max-h-60% rounded-full"
              />
            </div>

          </div>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className=" text-xl sm:text-3xl lg:text-3xl font-bold text-transparent bg-clip-text bg-white"
        >
          Making an Impact and Changing Lives through Initiatives and Campaigns in the Mississauga Community
        </motion.h2>

        <motion.div

          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.6 }}
        >

          <Link
            to='/Campaigns'
            className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20
                      text-white border-2 border-white/10
                      backdrop-blur-md shadow-lg
                      hover:from-blue-500/30 hover:to-cyan-500/30
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
