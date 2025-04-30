"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Instagram } from "lucide-react";
import { SiTiktok } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MapPin, Clock } from "lucide-react";
import { SOCIAL_LINKS, BUSINESS_HOURS, LOCATION } from "@/lib/constants";

export default function SocialLinks() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async (email: string) => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email: ", err);
    }
  };

  const renderSocialIcon = (icon: string, size: number = 24) => {
    switch (icon) {
      case "instagram":
        return <Instagram className={`w-${size} h-${size}`} />;
      case "tiktok":
        return <SiTiktok className={`w-${size} h-${size}`} />;
      case "whatsapp":
        return <FaWhatsapp className={`w-${size} h-${size}`} />;
      case "email":
        return <MdEmail className={`w-${size} h-${size}`} />;
      default:
        return null;
    }
  };

  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
          Connect With Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Location and Hours */}
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-red-600 dark:text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                    Our Location
                  </h3>
                  <address className="not-italic text-gray-700 dark:text-gray-300 leading-relaxed">
                    {LOCATION.address}
                    <br />
                    {LOCATION.city}, {LOCATION.zipCode}
                    <br />
                    {LOCATION.country}
                  </address>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-red-600 dark:text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                    Business Hours
                  </h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    {BUSINESS_HOURS.map((schedule) => (
                      <li key={schedule.day} className="flex flex-col">
                        <span className="font-medium">{schedule.day}</span>
                        <span>{schedule.hours}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SOCIAL_LINKS.map((link) =>
              link.icon === "email" ? (
                <button
                  key={link.name}
                  onClick={() => handleCopyEmail(link.href)}
                  className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300 text-center group w-full"
                >
                  <div className="mb-4 p-4 rounded-full bg-red-50 dark:bg-red-900/20 group-hover:bg-red-100 dark:group-hover:bg-red-800/30 transition-colors duration-300">
                    {renderSocialIcon(link.icon, 8)}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-300">
                    {link.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {copied ? "Email copied!" : "Click to copy email"}
                  </p>
                </button>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300 text-center group"
                >
                  <div className="mb-4 p-4 rounded-full bg-red-50 dark:bg-red-900/20 group-hover:bg-red-100 dark:group-hover:bg-red-800/30 transition-colors duration-300">
                    {renderSocialIcon(link.icon, 8)}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-300">
                    {link.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Follow us on {link.name}
                  </p>
                </Link>
              )
            )}
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="rounded-xl overflow-hidden shadow-lg h-80 bg-gray-200 dark:bg-gray-700 relative mb-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d63456.36210842271!2d106.671477!3d-6.260749!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fb89a9054e3b%3A0x90864e132422b499!2sDimsum%20Andria%20Regensi%20Melati%20Mas%2C%20Serpong%20utara!5e0!3m2!1sen!2sid!4v1746005603498!5m2!1sen!2sid"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen={true}
            aria-hidden="false"
            tabIndex={0}
            title="Restaurant Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
