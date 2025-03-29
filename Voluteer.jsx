import React from "react";
import bannerImage from "../assets/images/Banner.jpeg";
import { Link } from "react-router-dom";

const Volunteer = () => {
  return (
    <div className="flex flex-col md:flex-row items-center p-10 bg-indigo-600 text-white">
      {/* Text Section - Now on the Left */}
      <div className="text-left max-w-xl md:mr-10">
        <h1 className="text-3xl font-bold">Getting Involved & Volunteering</h1>
        <p className="mt-4 text-lg">
        Unlock meaningful experiences by volunteering with The Pinnacle Project! High school students can contribute their time to make a positive impact on our community. Gain valuable volunteer hours while making a difference in the lives of others. As a token of appreciation, participants receive a reference letter highlighting their dedication and contributions. Join us in fostering positive change and building a better future together. Enrich your high school journey with purposeful volunteering at The Pinnacle Project.
        </p>

       

        {/* Link Button */}
        <Link
         to = "/Voluteer&Parthership"
          
          className="mt-6 inline-block bg-white text-indigo-600 font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-gray-200 transition"
        >
          Learn More
        </Link>
      </div>

      {/* Image Section - Now on the Right */}
      <img
        src={bannerImage}
        alt="Who we are"
        className="w-96 h-auto object-cover rounded-lg shadow-lg md:ml-10"
      />
    </div>
  );
};

export default Volunteer;
