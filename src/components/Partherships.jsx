import React from "react";
import bannerImage from "../assets/images/Banner.jpeg";
import { Link } from "react-router-dom";
const Partherships = () => {
  return (
    <div className="flex flex-col md:flex-row items-center p-10 bg-gradient-to-br from-blue-600 to-green-100 text-white">
      <img
        src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hhcml0eXxlbnwwfHwwfHx8MA%3D%3D"
        alt="Who we are"
        className="w-96 h-auto object-cover rounded-lg shadow-lg md:mr-10"
      />
      <div className="text-left max-w-xl">
        <h1 className="text-3xl font-bold">Community Partnerships</h1>
        <p className="mt-4 text-lg">
        The Pinnacle Project is on a mission to create a thriving community, and we're seeking passionate community partners to join us in achieving our goals. If you're a community leader, liaison of an organization, or part of a club committed to making a difference, we invite you to collaborate with us. By forging partnerships, we can amplify our impact and address community needs more effectively. Together, we can create lasting change and build a stronger, more connected community. Join The Pinnacle Project in this collaborative effort to make a meaningful impact and enhance the well-being of our shared community.
        </p>
  
            <Link
             to = "/VoluteerPartnerships"
              
              className="mt-6 inline-block bg-white text-indigo-600 font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-gray-200 transition"
            >
              Learn More
            </Link>
          
        </div>
     
    </div>



  );
};

export default Partherships;
