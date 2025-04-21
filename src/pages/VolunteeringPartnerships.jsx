import React from 'react';
import FQASection from '../components/FQASection';
import VolunteerForm from '../components/VolunteerForm';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import bannerImage from "../assets/images/Banner.jpeg";

const VolunteeringPartnerships = () => {
  return (
    <div className= "bg-black">
      <div
  className="hero-container flex flex-col items-left  pt-20"
  style={{
    backgroundImage: 'url("https://images.unsplash.com/photo-1744762561513-6691932920fb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D")',
    backgroundSize: 'cover',
    backgroundPosition: 'left',
    minHeight: '60vh', /* Adjust this value as needed */
  }}
>
  <div className=" mx-auto text-left space-y-8">
    <div className="inline-block">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        className="text-3xl sm:text-5xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"
      >
        Volunteering and Partnerships
        
      </motion.h1>
    </div>

    <div className="inline-block">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        className=" text-xl sm:text-3xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"
      >
       Work with our organization and explore ways you can get involved in your community, while making a difference.
      </motion.h2>
    </div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.6 }}
    ></motion.div>
  </div>
</div>


<div className="flex flex-col md:flex-row items-center p-10 bg-gradient-to-br from-black to-gray-500 text-white">
      <img
        src="/assets/images/Banner.jpeg"
        alt="Who we are"
        className="w-96 h-auto object-cover rounded-lg shadow-lg md:mr-10"
      />
      <div className="text-left max-w-xl">
        <h1 className="text-4xl ">Getting Involved  </h1>
        <p className="mt-4 text-lg">
        Join The Pinnacle Project as a volunteer and make a direct impact. Opportunities in community outreach, environment, and education await you. Your involvement sparks positive change and creates a lasting difference. Be part of a community-driven initiative, contribute your skills, and witness the meaningful impact of your efforts. Make a choice that matters. Volunteer with The Pinnacle Project and be a catalyst for positive transformation in your community and beyond.
        </p> </div></div>

        <VolunteerForm/>
      <FQASection />

      <div className="flex flex-col md:flex-row items-center p-10  bg-gradient-to-br from-black to-gray-500 text-white">
                  {/* Text Section - Now on the Left */}
                  <div className="text-left max-w-xl md:mr-10">
                    <h1 className="text-3xl font-bold">Partnerships</h1>
                    <p className="mt-4 text-lg">
                    We're actively seeking partnerships with clubs and organizations to amplify the impact of our project. Collaborating with like-minded groups enhances our collective ability to achieve shared goals. If your club or organization aligns with our mission, let's explore the possibilities of collaboration, forging a path towards positive change and a brighter future for all. Contact our community outreach for more information!
                    </p>
            
                   
            
                    {/* Link Button */}
                    <Link
                     to = "/Voluteer&Parthership"
                      
                      className="mt-6 inline-block bg-white text-black font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-gray-200 transition"
                    >
                      

Contact Community Outreach
                    </Link>
                  </div>
            
                  {/* Image Section - Now on the Right */}
                  <img
                    src={bannerImage}
                    alt="Who we are"
                    className="w-96 h-auto object-cover rounded-lg shadow-lg md:ml-10"
                  />
                </div>
                
      
      </div>
      

      
  );
};


export default VolunteeringPartnerships;
