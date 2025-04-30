import Hero from "@/components/home/Hero";
import FeaturedItems from "@/components/home/FeaturedItems";
import AboutSection from "@/components/home/About";
import { RESTAURANT_NAME } from "@/lib/constants";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <FeaturedItems />
      <AboutSection />
      <Footer />
    </main>
  );
}
