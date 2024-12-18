"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  { id: 1, image: "/banner4.jpg", alt: "Promotion 1" },
  { id: 2, image: "/banner5.jpg", alt: "Promotion 2" },
  { id: 3, image: "/banner4.jpg", alt: "Promotion 3" },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-transition every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <main className="flex flex-col items-center justify-center">
      <div className="relative w-full h-[400px] sm:h-[100vh] overflow-hidden">
        {/* Slides */}
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="min-w-full h-[50vh]">
              <Image
                src={slide.image}
                alt={slide.alt}
                width={1600}
                height={500}
                priority
              />
            </div>
          ))}
        </div>

        {/* Previous Button */}
        <button
          onClick={goToPrevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
        >
          &#10094;
        </button>

        {/* Next Button */}
        <button
          onClick={goToNextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
        >
          &#10095;
        </button>

        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ? "bg-white" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default HeroCarousel;
