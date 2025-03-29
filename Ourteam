import React from "react";
import { Link } from "react-router-dom";

const teamMembers = [
  {
    name: "Aleena Ali",
    position: "Co-president",
    image: "https://via.placeholder.com/300x400", // Replace with actual image URL
  },
  {
    name: "Cody Doan",
    position: "Co-president",
    image: "https://via.placeholder.com/300x400", // Replace with actual image URL
  },
];

const OurTeam = () => {
  return (
    <div className="p-10">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Meet Our Team</h1>
        <Link
          to = "/OurteamFull"
          className="bg-blue-600 text-white px-4 py-2 rounded-xl shadow hover:bg-blue-700 transition"
        >
          View Full Team
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-2xl shadow-md overflow-hidden relative"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-[450px] object-cover" // Sets a fixed height for portrait look
            />
            <div className="absolute bottom-0 w-full bg-gradient-to-t from-black to-transparent p-4">
              <h2 className="text-white font-semibold">{member.name}</h2>
              <p className="text-white text-sm">{member.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
