import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Story from "@/components/about/Story";

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-20 pb-12 bg-gray-50 dark:bg-gray-900 min-h-screen">
        <div className="container mx-auto px-4 md:px-6 pt-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              About Us
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Discover the story behind Dimsum Andria and our passion for
              authentic dimsum cuisine.
            </p>
          </div>

          <Story />
        </div>
      </div>
      <Footer />
    </main>
  );
}
