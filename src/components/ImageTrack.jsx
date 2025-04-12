import React, { useEffect, useRef } from "react";

const images = [
  "https://images.unsplash.com/photo-1524781289445-ddf8f5695861?auto=format&fit=crop&w=1770&q=80",
  "https://images.unsplash.com/photo-1610194352361-4c81a6a8967e?auto=format&fit=crop&w=1674&q=80",
  "https://images.unsplash.com/photo-1618202133208-2907bebba9e1?auto=format&fit=crop&w=1770&q=80",
  "https://images.unsplash.com/photo-1495805442109-bf1cf975750b?auto=format&fit=crop&w=1770&q=80",
  "https://images.unsplash.com/photo-1548021682-1720ed403a5b?auto=format&fit=crop&w=1770&q=80",
  "https://images.unsplash.com/photo-1496753480864-3e588e0269b3?auto=format&fit=crop&w=2134&q=80",
  "https://images.unsplash.com/photo-1524781289445-ddf8f5695861?auto=format&fit=crop&w=1770&q=80",
  "https://images.unsplash.com/photo-1610194352361-4c81a6a8967e?auto=format&fit=crop&w=1674&q=80",
  "https://images.unsplash.com/photo-1618202133208-2907bebba9e1?auto=format&fit=crop&w=1770&q=80",
  "https://images.unsplash.com/photo-1495805442109-bf1cf975750b?auto=format&fit=crop&w=1770&q=80",
  "https://images.unsplash.com/photo-1548021682-1720ed403a5b?auto=format&fit=crop&w=1770&q=80",
  "https://images.unsplash.com/photo-1496753480864-3e588e0269b3?auto=format&fit=crop&w=2134&q=80",
  "https://images.unsplash.com/photo-1524781289445-ddf8f5695861?auto=format&fit=crop&w=1770&q=80",
  "https://images.unsplash.com/photo-1610194352361-4c81a6a8967e?auto=format&fit=crop&w=1674&q=80",
  "https://images.unsplash.com/photo-1618202133208-2907bebba9e1?auto=format&fit=crop&w=1770&q=80",
  "https://images.unsplash.com/photo-1495805442109-bf1cf975750b?auto=format&fit=crop&w=1770&q=80",
  "https://images.unsplash.com/photo-1548021682-1720ed403a5b?auto=format&fit=crop&w=1770&q=80",
  "https://images.unsplash.com/photo-1496753480864-3e588e0269b3?auto=format&fit=crop&w=2134&q=80",
];

const ImageTrack = () => {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    track.dataset.mouseDownAt = "0";
    track.dataset.prevPercentage = "0";
    track.dataset.percentage = "0";

    const handleOnDown = (e) => {
      const clientX = e.clientX || e.touches[0].clientX;
      track.dataset.mouseDownAt = clientX;
    };

    const handleOnUp = () => {
      track.dataset.mouseDownAt = "0";
      track.dataset.prevPercentage = track.dataset.percentage;
    };

    const handleOnMove = (e) => {
      if (track.dataset.mouseDownAt === "0") return;

      const clientX = e.clientX || e.touches[0].clientX;
      const mouseDelta = parseFloat(track.dataset.mouseDownAt) - clientX;

      // Get the total width of the track
      const totalWidth = track.scrollWidth;

      // Calculate the percentage of the total width moved
      const percentage = (mouseDelta / totalWidth) * -100;
      const nextPercentageUnconstrained =
        parseFloat(track.dataset.prevPercentage) + percentage;
      let nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

      track.dataset.percentage = nextPercentage;

      // Loop the images if we reach the end or start
      if (nextPercentage === -100) {
        track.dataset.percentage = 0;
        track.style.transition = "none"; // Disable transition while looping
        track.style.transform = `translate(0%, 0%)`; // Reset position
      }

      track.animate(
        {
          transform: `translate(${nextPercentage}%, 0%)`,
        },
        { duration: 3000, fill: "forwards" }  // Duration for smooth scroll
      );

      for (const image of track.getElementsByClassName("image")) {
        image.animate(
          {
            objectPosition: `${100 + nextPercentage}% center`,
          },
          { duration: 3000, fill: "forwards" }  // Same duration for images
        );
      }
    };

    // Mouse events
    window.addEventListener("mousedown", handleOnDown);
    window.addEventListener("mouseup", handleOnUp);
    window.addEventListener("mousemove", handleOnMove);

    // Touch events
    window.addEventListener("touchstart", handleOnDown);
    window.addEventListener("touchend", handleOnUp);
    window.addEventListener("touchmove", handleOnMove);

    return () => {
      window.removeEventListener("mousedown", handleOnDown);
      window.removeEventListener("mouseup", handleOnUp);
      window.removeEventListener("mousemove", handleOnMove);

      window.removeEventListener("touchstart", handleOnDown);
      window.removeEventListener("touchend", handleOnUp);
      window.removeEventListener("touchmove", handleOnMove);
    };
  }, []);

  return (
    <>
      <style>
        {`
          .image-track-container {
            width: 100%;
            padding: 4rem 0;
            background-color: #111;
            overflow-x: hidden;
          }

          .image-track-title {
            color: white;
            text-align: center;
            font-size: 2rem;
            margin-bottom: 2rem;
          }

          #image-track {
            display: flex;
            gap: 4vmin;
            transition: transform 0.3s ease;
            user-select: none;
            width: max-content;
            margin: 0 auto;
          }

          #image-track > .image {
            width: 40vmin;
            height: 56vmin;
            object-fit: cover;
            object-position: 100% center;
            pointer-events: none;
          }
        `}
      </style>

      <section className="image-track-container">
        <h2 className="image-track-title">Image Track Gallery</h2>
        <div id="image-track" ref={trackRef}>
          {images.map((src, index) => (
            <img key={index} className="image" src={src} draggable="false" alt="" />
          ))}
        </div>
      </section>
    </>
  );
};

export default ImageTrack;
