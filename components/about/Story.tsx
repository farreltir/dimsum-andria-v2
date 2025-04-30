import Image from "next/image";
import { ABOUT_CONTENT } from "@/lib/constants";

export default function Story() {
  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
          Our Story
        </h2>

        <div className="mb-12 relative rounded-xl overflow-hidden">
          <Image
            src="https://images.pexels.com/photos/2814828/pexels-photo-2814828.jpeg"
            alt="Restaurant interior"
            width={1000}
            height={600}
            className="w-full object-cover h-[400px]"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
            <p className="text-xl italic text-white">
              Bringing authentic dimsum traditions to our community.
            </p>
          </div>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            {ABOUT_CONTENT.story}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
            <div className="rounded-xl overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/2403391/pexels-photo-2403391.jpeg"
                alt="Chef preparing food"
                width={500}
                height={300}
                className="w-full h-full object-cover"
                unoptimized
              />
            </div>
            <div className="rounded-xl overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg"
                alt="Restaurant ambience"
                width={500}
                height={300}
                className="w-full h-full object-cover"
                unoptimized
              />
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Our Mission
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            {ABOUT_CONTENT.mission}
          </p>

          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Our Philosophy
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            {ABOUT_CONTENT.philosophy}
          </p>

          <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border border-red-100 dark:border-red-800/30 my-8">
            <h3 className="text-xl font-bold mb-3 text-red-700 dark:text-red-400">
              What Sets Us Apart
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
              <li>Traditional recipes passed down through generations</li>
              <li>Handcrafted dimsum made fresh daily</li>
              <li>Finest quality ingredients sourced locally when possible</li>
              <li>Authentic cooking techniques</li>
              <li>
                Warm, welcoming atmosphere for an immersive dining experience
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
