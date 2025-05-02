import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ABOUT_CONTENT } from "@/lib/constants";

export default function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Our Story
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              {ABOUT_CONTENT.story.substring(0, 300)}...
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex-1 min-w-[200px] bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-100 dark:border-red-800/30">
                <h3 className="text-lg font-semibold text-red-700 dark:text-red-400 mb-2">
                  Traditional Techniques
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We preserve authentic dimsum making methods passed down
                  through generations.
                </p>
              </div>
              <div className="flex-1 min-w-[200px] bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg border border-amber-100 dark:border-amber-800/30">
                <h3 className="text-lg font-semibold text-amber-700 dark:text-amber-400 mb-2">
                  Fresh Ingredients
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We source only the highest quality ingredients for authentic
                  flavors.
                </p>
              </div>
            </div>
            <Link
              href="/about"
              className="inline-flex items-center text-red-600 dark:text-red-400 font-medium group"
            >
              <span>Read Our Full Story</span>
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-xl overflow-hidden shadow-lg h-48 sm:h-64">
                <Image
                  src="images/hero1.png"
                  alt="Hero1"
                  width={400}
                  height={300}
                  className="object-cover w-full h-full"
                  unoptimized
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg h-64 sm:h-80">
                <Image
                  src="images/hero2.png"
                  alt="Hero2"
                  width={400}
                  height={500}
                  className="object-cover w-full h-full"
                  unoptimized
                />
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="rounded-xl overflow-hidden shadow-lg h-64 sm:h-80">
                <Image
                  src="images/hero3.png"
                  alt="Hero3"
                  width={400}
                  height={500}
                  className="object-cover w-full h-full"
                  unoptimized
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg h-48 sm:h-64">
                <Image
                  src="images/hero4.png"
                  alt="Hero4"
                  width={400}
                  height={300}
                  className="object-cover w-full h-full"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
