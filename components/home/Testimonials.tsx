"use client";

import Image from "next/image";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Adnan Chowdhury",
    role: "Food Enthusiast",
    text: "The Bhapa Pitha tastes exactly like what my grandmother used to make in the village. Truly authentic and served hot!",
    avatar: "/images/hero_pitha.png", // Using hero for now as placeholder
    rating: 5
  },
  {
    id: 2,
    name: "Nusrat Jahan",
    role: "Busy Professional",
    text: "Ordering was so easy, and the delivery was fast. Finally, I can enjoy winter pithas without the hassle of making them at home.",
    avatar: "/images/bhapa.png",
    rating: 5
  },
  {
    id: 3,
    name: "Kamrul Islam",
    role: "Pitha Lover",
    text: "Pitha's Cravings has brought back the winter vibes to our city apartment. The Patishapta is simply divine!",
    avatar: "/images/patishapta.png",
    rating: 4
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-6">
            <p className="text-primary font-bold tracking-widest uppercase text-sm">Customer Stories</p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">What Our Customers <br />Says About Us?</h2>
            <p className="text-muted-foreground text-lg max-w-md">
              We take pride in delivering the most authentic Bengali winter food experience.
              Hear from our happy pitha lovers!
            </p>
            <div className="flex gap-4">
              <Button variant="outline" size="icon" className="rounded-full">
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full bg-primary text-white border-primary">
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.slice(0, 2).map((item, index) => (
              <motion.div 
                key={item.id}
                className="bg-white p-8 rounded-[40px] shadow-sm border space-y-4"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex gap-1 text-primary">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < item.rating ? "fill-primary" : "text-muted"}`} />
                  ))}
                </div>
                <p className="text-sm italic text-muted-foreground leading-relaxed">&quot;{item.text}&quot;</p>
                <div className="flex items-center gap-4 pt-4 border-t">
                  <div className="w-12 h-12 rounded-full overflow-hidden relative">
                    <Image src={item.avatar} alt={item.name} fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">{item.name}</h4>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wider">{item.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
