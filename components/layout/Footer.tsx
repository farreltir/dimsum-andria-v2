"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Instagram } from "lucide-react";
import { SiTiktok } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {
  NAVIGATION_LINKS,
  RESTAURANT_NAME,
  SOCIAL_LINKS,
  BUSINESS_HOURS,
} from "@/lib/constants";

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const email = "dimsumandria@gmail.com"; // Alamat email yang ingin disalin

  const getCurrentYear = () => new Date().getFullYear();

  const renderSocialIcon = (icon: string) => {
    switch (icon) {
      case "instagram":
        return <Instagram className="w-5 h-5" />;
      case "tiktok":
        return <SiTiktok className="w-5 h-5" />;
      case "whatsapp":
        return <FaWhatsapp className="w-5 h-5" />;
      default:
        return null;
    }
  };

  const handleEmailClick = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Menyembunyikan "Copied!" setelah 2 detik
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Restaurant Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-red-500">
              {RESTAURANT_NAME}
            </h3>
            <p className="mb-4 text-gray-300">
              Authentic dim sum prepared with fresh ingredients and traditional
              techniques.
            </p>
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-red-500 transition-colors"
                  aria-label={link.name}
                >
                  {renderSocialIcon(link.icon)}{" "}
                  {/* Ikon dirender langsung sebagai komponen */}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-red-500">Navigation</h3>
            <ul className="space-y-2">
              {NAVIGATION_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-red-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-red-500">
              Business Hours
            </h3>
            <ul className="space-y-2">
              {BUSINESS_HOURS.map((schedule) => (
                <li key={schedule.day} className="text-gray-300">
                  <span className="block">{schedule.day}</span>
                  <span className="block">{schedule.hours}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-red-500">Contact Us</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a
                  href="https://maps.app.goo.gl/BUmBKE27h7tcZ7ci6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-400 transition-colors"
                >
                  Melati Mas Regency G5/17,
                  <br />
                  Jelupang, North Serpong,
                  <br />
                  South Tangerang, Banten
                </a>
              </li>
              <li className="pt-2">
                <button
                  onClick={handleEmailClick}
                  className="flex items-center text-gray-300 hover:text-red-400 transition-colors"
                >
                  <MdEmail className="w-5 h-5 mr-2" />
                  {email}
                </button>
                {copied && <span className="text-red-400">Copied!</span>}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400">
          <p>
            &copy; {getCurrentYear()} {RESTAURANT_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
