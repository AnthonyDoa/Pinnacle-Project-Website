import React from 'react';
import { motion } from 'framer-motion';

const HomeCards = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-black p-4 flex flex-col items-center justify-center">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.3 }}
          className="flex flex-col sm:flex-row items-left justify-center gap-12"
        >
          
          <div
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-gradient-to-br from-pink-500/20 to-purple-500/20
                       border-2 border-white/10 shadow-lg flex items-center justify-center relative"
          >
            <div className="w-32 h-32 sm:w-48 sm:h-48 md:w-60 md:h-60 bg-white/5 backdrop-blur-md flex items-center justify-center rounded-md"> {/* Changed to rounded-md */}
              {/* Logo added here */}
              <img
                src="your-logo-url.png"
                alt="Logo"
                className="max-w-80% max-h-80%"
              />
            </div>
          </div>
            {/* Title and Text Content */}
            <div className="text-left space-y-6 sm:space-y-4 max-w-sm">
                <h2 className="text-2xl sm:text-4xl font-semibold text-white">Oakley Project 2075</h2>
                <p className="text-gray-300 text-base sm:text-lg">
                A conceptual project exploring the future of Oakley.  This project showcases a futuristic aesthetic and innovative design concepts.
                </p>
                <button
                    className="bg-gradient-to-r from-purple-500/20 to-pink-500/20
                        text-white border-2 border-white/10
                        backdrop-blur-md shadow-lg
                        hover:from-purple-500/30 hover:to-pink-500/30
                        hover:scale-105 transition-all duration-300
                        font-semibold text-lg sm:text-xl
                        px-6 sm:px-8 py-2 sm:py-3 rounded-md"
                >
                Visit Resource
                </button>
            </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HomeCards;



