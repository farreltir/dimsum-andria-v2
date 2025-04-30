import Image from "next/image";

interface MenuItemProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

export default function MenuItem({
  id,
  name,
  description,
  price,
  image,
}: MenuItemProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-700/50 border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow duration-300">
      <div className="sm:w-1/3 h-28 rounded-lg overflow-hidden">
        <Image
          src={image}
          alt={name}
          width={200}
          height={150}
          className="w-full h-full object-cover"
          unoptimized
        />
      </div>
      <div className="sm:w-2/3 flex flex-col">
        <div className="flex justify-between items-start mb-1">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {name}
          </h3>
          <span className="font-bold text-red-600 dark:text-red-400">
            ${price.toFixed(2)}
          </span>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-300 flex-grow">
          {description}
        </p>
      </div>
    </div>
  );
}
