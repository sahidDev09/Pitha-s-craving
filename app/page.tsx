import Navbar from "@/components/shared/Navbar";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import PopularItems from "@/components/home/PopularItems";
import UpcomingEvents from "@/components/home/UpcomingEvents";
import Testimonials from "@/components/home/Testimonials";
import MissionVision from "@/components/home/MissionVision";
import Footer from "@/components/shared/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Stats />
      <PopularItems />
      <UpcomingEvents />
      <Testimonials />
      <MissionVision />
      <Footer />
    </main>
  );
}
