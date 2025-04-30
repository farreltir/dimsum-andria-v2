"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";
import { MenuItem as MenuItemType } from "@/lib/types";
import MenuItemComponent from "./MenuItem";
import { cn } from "@/lib/utils";

interface MenuCategoryProps {
  id: string;
  name: string;
  description: string;
  image: string;
  items: MenuItemType[];
}

export default function MenuCategory({
  id,
  name,
  description,
  image,
  items,
}: MenuCategoryProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      id={id}
      className="mb-12 bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700"
    >
      <div className="relative h-64 md:h-80 overflow-hidden">
        <Image
          src={image}
          alt={name}
          width={1200}
          height={600}
          className="object-cover w-full h-full"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            {name}
          </h2>
          <p className="text-gray-200 text-lg">{description}</p>
        </div>
      </div>

      <div className="p-6">
        <button
          onClick={toggleExpand}
          className="flex items-center justify-between w-full py-2 text-lg font-medium text-gray-900 dark:text-white"
          aria-expanded={isExpanded}
          aria-controls={`content-${id}`}
        >
          <span>View {isExpanded ? "Less" : "All"} Items</span>
          {isExpanded ? (
            <ChevronUp className="h-5 w-5 text-gray-500 dark:text-gray-400" />
          ) : (
            <ChevronDown className="h-5 w-5 text-gray-500 dark:text-gray-400" />
          )}
        </button>

        <div
          id={`content-${id}`}
          className={cn(
            "grid gap-6 transition-all duration-500 ease-in-out",
            isExpanded
              ? "grid-cols-1 md:grid-cols-2 opacity-100 max-h-[2000px] mt-6"
              : "grid-cols-1 max-h-0 opacity-0 overflow-hidden mt-0"
          )}
        >
          {items.map((item) => (
            <MenuItemComponent key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
