import { div } from "framer-motion/client";
import React from "react";

const teamMembers = [
  {
    name: "Meesam Ali",
    role: "President",
    image: "path-to-aleena-image.jpg",
    description: "President",
  },
  {
    name: "Cody Doan",
    role: "President",
    image: "path-to-cody-image.jpg",
    description: "President",
      
  },
  {
    name: "Anthony Doan",
    role: "Director of Voluteers",
    image: "path-to-shashvati-image.jpg",
    description: "",
  },

];

const OurteamFull = () => {
  return (
    
    <div className=" text-center">
      <main className="container  bg-gradient-to-br from-blue-600 to-cyan-500 mx-auto py-12 px-6">
    <section className="text-center mb-8">
      <h1 className="text-4xl font-bold text-white mb-4">Meet Our Team</h1>
      <p className="text-lg text-white">
       Pinnacle Project is an open club, free for anyone to join. Learn more about our current Executive Team!
      </p>
    </section>

    <section className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src="https://plus.unsplash.com/premium_photo-1745048722723-c9752dd87662?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D" alt="Our Team" className="w-full h-auto" style={{ maxHeight: '300px', objectFit: 'cover' }} />
    </section>
  </main>
      <h2 className="text-3xl font-bold mb-6">Meet the...</h2>
      <h1 className="text-4xl font-extrabold mb-10">Executive Team</h1>
      <div className="flex justify-center flex-wrap gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="relative w-64 text-center">
            <img
              src={member.image}
              alt={member.name}
              className="w-40 h-40 rounded-full mx-auto object-cover"
            />
            <h3 className="text-xl font-semibold mt-4">{member.name}</h3>
            <p className="text-gray-600">{member.role}</p>
            <div className="absolute inset-0 bg-black bg-opacity-80 text-white flex flex-col justify-center p-4 rounded-lg opacity-0 hover:opacity-100 transition-opacity">
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-sm mt-2">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurteamFull;
