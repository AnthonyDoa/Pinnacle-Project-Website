import React from "react";

const HomeCards = () => {
  return (
    <div className="flex flex-col md:flex-row items-center p-10 bg-indigo-600 text-white">
      <img
        src="/assets/banner.jpeg"
        alt="Who we are"
        className="w-96 h-auto object-cover rounded-lg shadow-lg md:mr-10"
      />
      <div className="text-left max-w-xl">
        <h1 className="text-3xl font-bold">WHO WE ARE</h1>
        <p className="mt-4 text-lg">
        The Pinnacle Project is a community charity based in the Municipality of Missisauga, ON, dedicated to making a positive impact in our community. Our mission is to provide support and resources to those in need, and to create a better future for all. Through our various programs, initiatives, and camapigns, we strive to bring hope and relief to those facing adversity.

With a passionate team of high school students from John Fraser Secondary School and a strong network of partners, we are committed to driving meaningful change and fostering a culture of compassion and generosity. Join us in our mission to build a brighter, more inclusive society for everyone.
        </p>
        <div className="flex flex-row justify-between w-full mt-6">
          <div className="text-left">
            <h2 className="font-semibold">Co-president</h2>
            <p className="text-white">Meesam Ali </p>
          </div>
          <div className="text-left">
            <h2 className="font-semibold">Co-president</h2>
            <p className="text-white">Cody Doan</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCards;
