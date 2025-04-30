import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SocialLinks from "@/components/contact/SocialLinks";

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-20 pb-12 bg-gray-50 dark:bg-gray-900 min-h-screen">
        <div className="container mx-auto px-4 md:px-6 pt-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Contact Us
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Connect with us through social media, email, or visit our
              location.
            </p>
          </div>

          <SocialLinks />
        </div>
      </div>
      <Footer />
    </main>
  );
}
