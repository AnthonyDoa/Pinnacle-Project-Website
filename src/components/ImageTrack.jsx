import React, { useState } from "react";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1739911013984-8b3bf696a182?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
     // Replace with your actual paths
    alt: "Packed bags on table",
  },
  {
    src: "https://images.unsplash.com/photo-1741606552241-fbd67e574f7f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
    alt: "Boxes filled with supply bags",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1722169898897-b887c5548223?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8",
    alt: "Close-up of supply bag with logo",
  },
];

const ImageTrack = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + photos.length) % photos.length;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % photos.length;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-10 text-white">
      <h2 className="text-3xl font-semibold mb-6 text-center">Photos | March Campaign</h2>
      <div className="relative flex items-center justify-center">
        <button
          className="absolute left-0 p-3 z-10 bg-black bg-opacity-30 hover:bg-opacity-50 rounded-full"
          onClick={prevSlide}
        >
          ❮
        </button>
        <div className="w-[90%] rounded-xl overflow-hidden">
          <img
            src={photos[currentIndex].src}
            alt={photos[currentIndex].alt}
            className="object-cover w-full h-[400px] rounded-xl transition duration-500"
          />
        </div>
        <button
          className="absolute right-0 p-3 z-10 bg-black bg-opacity-30 hover:bg-opacity-50 rounded-full"
          onClick={nextSlide}
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default ImageTrack;
