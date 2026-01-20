"use client";

import Image from "next/image";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";

const categories = ["Steamed", "Fried", "Syrup-soaked", "Milk-based"];

const pithas = [
  {
    id: 1,
    name: "Bhapa Pitha",
    price: 30,
    description: "Traditional steamed rice cake with jaggery and coconut.",
    image: "/images/bhapa.png",
    category: "Steamed"
  },
  {
    id: 2,
    name: "Patishapta",
    price: 45,
    description: "Crepes filled with coconut, kheer, and date jaggery.",
    image: "/images/patishapta.png",
    category: "Fried"
  },
  {
    id: 3,
    name: "Dudh Puli",
    price: 60,
    description: "Rice flour dumplings boiled in sweetened milk.",
    image: "/images/hero_pitha.png", // Fallback for now
    category: "Milk-based"
  },
  {
    id: 4,
    name: "Chitoi Pitha",
    price: 20,
    description: "Classic plain steamed rice cake served with bhortas.",
    image: "/images/bhapa.png", // Fallback for now
    category: "Steamed"
  }
];

interface Pitha {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

const PithaCard = ({ pitha }: { pitha: Pitha }) => {
  return (
    <motion.div 
      className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow group flex flex-col items-center text-center relative"
      whileHover={{ y: -5 }}
    >
      <div className="relative w-40 h-40 mb-6">
        <div className="absolute inset-0 bg-primary/10 rounded-full scale-110 group-hover:scale-125 transition-transform" />
        <div className="relative z-10 w-full h-full rounded-full overflow-hidden border-4 border-white shadow-lg">
          <Image src={pitha.image} alt={pitha.name} fill className="object-cover" />
        </div>
        <div className="absolute top-0 right-0 bg-primary text-primary-foreground font-bold px-3 py-1 rounded-full shadow-md z-20">
          ৳{pitha.price}
        </div>
      </div>
      
      <h3 className="text-xl font-bold mb-2">{pitha.name}</h3>
      <p className="text-muted-foreground text-sm mb-6 flex-grow">{pitha.description}</p>
      
      <div className="flex items-center gap-2">
        <Button variant="outline" size="icon" className="rounded-full border-primary/20 hover:bg-primary/10">
          <ShoppingCart className="w-4 h-4 text-primary" />
        </Button>
        <Button variant="secondary" className="rounded-full flex items-center gap-1 group/btn px-4 bg-primary/10 hover:bg-primary/20 text-primary border-none">
          Explore
          <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
        </Button>
      </div>
    </motion.div>
  );
};

const PopularItems = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <p className="text-primary font-bold tracking-widest uppercase text-sm mb-2">Our Specialties</p>
          <h2 className="text-4xl md:text-5xl font-bold">Popular Pitha Items</h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        <Tabs defaultValue="Steamed" className="w-full">
          <div className="flex justify-center mb-12 overflow-x-auto pb-4">
            <TabsList className="bg-transparent border-b rounded-none w-full max-w-2xl justify-start sm:justify-center">
              {categories.map((cat) => (
                <TabsTrigger 
                  key={cat} 
                  value={cat}
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-primary text-lg px-8 py-3"
                >
                  {cat}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {categories.map((cat) => (
            <TabsContent key={cat} value={cat} className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {pithas.filter(p => p.category === cat || cat === "All").map((pitha) => (
                  <PithaCard key={pitha.id} pitha={pitha} />
                ))}
                {/* Visual placeholders for variety if category is empty/few */}
                {pithas.filter(p => p.category === cat).length === 0 && (
                  <div className="col-span-full py-20 text-center text-muted-foreground">
                    New seasonal items arriving soon in this category!
                  </div>
                )}
              </div>
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="mt-16 text-center">
          <Button size="lg" className="rounded-full px-12 bg-primary hover:bg-primary/90">
            See More Items
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PopularItems;
