import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MenuCategory from "@/components/menu/MenuCategory";
import { MENU_CATEGORIES } from "@/lib/constants";

export default function MenuPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-20 pb-12 bg-gray-50 dark:bg-gray-900 min-h-screen">
        <div className="container mx-auto px-4 md:px-6 pt-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Our Menu
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Discover our authentic dimsum specialties, handcrafted with care
              using traditional techniques and the finest ingredients.
            </p>
          </div>

          {/* Category Navigation */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {MENU_CATEGORIES.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full shadow-sm hover:bg-red-600 hover:text-white dark:hover:bg-red-600 transition-colors duration-300 border border-gray-200 dark:border-gray-700"
              >
                {category.name}
              </a>
            ))}
          </div>

          {/* Menu Categories */}
          <div className="space-y-16">
            {MENU_CATEGORIES.map((category) => (
              <MenuCategory
                key={category.id}
                id={category.id}
                name={category.name}
                description={category.description}
                image={category.image}
                items={category.items}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
