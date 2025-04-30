"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NAVIGATION_LINKS, RESTAURANT_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 dark:bg-black/95 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className={cn(
              "text-xl md:text-2xl font-bold tracking-tight transition-colors",
              scrolled
                ? "text-red-700 dark:text-red-500"
                : "text-[#111827] dark:text-white"
            )}
          >
            {RESTAURANT_NAME}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "font-medium transition-colors hover:text-red-600 dark:hover:text-red-400",
                  scrolled
                    ? "text-red-700 dark:text-gray-200"
                    : "text-[#111827] dark:text-white"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={cn(
              "md:hidden transition-colors",
              scrolled
                ? "text-red-700 dark:text-gray-200"
                : "text-[#111827] dark:text-white"
            )}
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden fixed inset-0 bg-black/95 z-40 transition-transform duration-300 transform",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        style={{ top: "60px" }}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 p-8">
          {NAVIGATION_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-white text-2xl font-medium hover:text-red-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
