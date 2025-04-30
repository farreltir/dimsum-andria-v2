"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FEATURED_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { MenuItem } from "@/lib/types";

export default function FeaturedItems() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Our Signature Dishes
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Experience the authentic flavors of our most popular dimsum
            creations, handcrafted with care using traditional techniques.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {FEATURED_ITEMS.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl border border-gray-100 dark:border-gray-700"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={500}
                  height={400}
                  className={cn(
                    "object-cover w-full h-full transition-transform duration-700",
                    hoveredItem === item.id ? "scale-110" : "scale-100"
                  )}
                  unoptimized
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {item.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {item.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-red-600 dark:text-red-400 font-bold">
                    ${item.price.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/menu"
            className="inline-flex items-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-md transition-all duration-300 group"
          >
            <span>View Full Menu</span>
            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
