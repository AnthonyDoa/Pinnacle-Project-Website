import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake, faHeart, faMapMarkerAlt, faUsers } from '@fortawesome/free-solid-svg-icons'; // Example icons
import './OurMission.css';

// Import your image files


const OurMission = () => {
  const missionText = `The Pinnacle Project is a community charity based in the Municipality of Mississauga, ON, dedicated to making a positive impact in our community. Our mission is to provide support and resources to those in need, and to create a better future for all. Through our various programs, initiatives, and campaigns, we strive to bring hope and relief to those facing adversity.`;
  const teamText = `With a passionate team of high school students from John Fraser Secondary School and a strong network of partners, we are committed to driving meaningful change and fostering a culture of compassion and generosity.`;
  const joinText = `Join us in our mission to build a brighter, more inclusive society for everyone.`;

  return (
    <div className="bg-black py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12 relative">
        {/* Subtle background graphic (optional) */}
        <div className="absolute top-0 left-0 w-full h-full bg-blue-50 opacity-10 rounded-lg transform rotate-3"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl lg:text-4xl font-semibold text-blue-700 mb-4">
            <FontAwesomeIcon icon={faHeart} className="mr-2 text-blue-500" /> Our Mission
          </h2>
          <div className="w-24 h-1 bg-green-400 rounded-full mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.2 }}
            className="rounded-lg shadow-md p-8 mission-box" // Added mission-box class
          >
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-green-300 text-2xl mb-4" />
            <p className="text-lg text-white leading-relaxed">
              {missionText}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.4 }}
            className="rounded-lg shadow-md p-8 team-box" // Added team-box class
          >
            <FontAwesomeIcon icon={faUsers} className="text-blue-300 text-2xl mb-4" />
            <p className="text-lg text-white leading-relaxed">
              {teamText}
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="bg-green-50 rounded-lg p-8 shadow-inner">
            <FontAwesomeIcon icon={faHandshake} className="text-blue-600 text-3xl mb-4" />
            <p className="text-xl font-semibold text-blue-700">{joinText}</p>
            
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OurMission;
