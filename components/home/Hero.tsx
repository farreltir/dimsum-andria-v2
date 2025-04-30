"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { RESTAURANT_NAME, RESTAURANT_DESCRIPTION } from "@/lib/constants";
import { cn } from "@/lib/utils";

const HERO_IMAGES = [
  "https://images.pexels.com/photos/955137/pexels-photo-955137.jpeg",
  "https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg",
  "https://images.pexels.com/photos/6941001/pexels-photo-6941001.jpeg",
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex(
          (prevIndex) => (prevIndex + 1) % HERO_IMAGES.length
        );
        setIsTransitioning(false);
      }, 500);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Images */}
      {HERO_IMAGES.map((image, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000",
            currentImageIndex === index && !isTransitioning
              ? "opacity-100"
              : "opacity-0"
          )}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60" />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 md:px-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
          <span className="block transform transition-transform duration-700 hover:scale-105">
            Hi! {RESTAURANT_NAME}
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mb-8">
          {RESTAURANT_DESCRIPTION}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <Link
            href="/menu"
            className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            View Our Menu
          </Link>
          <Link
            href="/about"
            className="px-8 py-3 bg-transparent border-2 border-white text-white font-medium rounded-md hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
          >
            Our Story
          </Link>
        </div>
      </div>
    </section>
  );
}
