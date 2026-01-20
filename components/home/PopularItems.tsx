"use client";

import Image from "next/image";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingCart, Star } from "lucide-react";
import { motion } from "framer-motion";

const categories = ["Steamed", "Fried", "Syrup-soaked", "Milk-based"];

const pithas = [
  {
    id: 1,
    name: "Bhapa Pitha",
    price: 30,
    oldPrice: 40,
    rating: 4.8,
    reviews: 124,
    description: "Traditional steamed rice cake with jaggery and coconut.",
    image: "/images/bhapa.png",
    category: "Steamed"
  },
  {
    id: 2,
    name: "Patishapta",
    price: 45,
    oldPrice: 55,
    rating: 4.9,
    reviews: 89,
    description: "Crepes filled with coconut, kheer, and date jaggery.",
    image: "/images/patishapta.png",
    category: "Fried"
  },
  {
    id: 3,
    name: "Dudh Puli",
    price: 60,
    rating: 4.7,
    reviews: 56,
    description: "Rice flour dumplings boiled in sweetened milk.",
    image: "/images/hero_pitha.png",
    category: "Milk-based"
  },
  {
    id: 4,
    name: "Chitoi Pitha",
    price: 20,
    oldPrice: 25,
    rating: 4.6,
    reviews: 210,
    description: "Classic plain steamed rice cake served with bhortas.",
    image: "/images/bhapa.png",
    category: "Steamed"
  },
  {
    id: 5,
    name: "Nokshi Pitha",
    price: 50,
    oldPrice: 70,
    rating: 5.0,
    reviews: 45,
    description: "Artistic deep-fried rice cake with beautiful patterns.",
    image: "/images/patishapta.png",
    category: "Fried"
  },
  {
    id: 6,
    name: "Malpua",
    price: 35,
    rating: 4.5,
    reviews: 78,
    description: "Sweet pancakes deep fried and soaked in sugar syrup.",
    image: "/images/hero_pitha.png",
    category: "Syrup-soaked"
  }
];

interface Pitha {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
  description: string;
  image: string;
  category: string;
}

const PithaCard = ({ pitha }: { pitha: Pitha }) => {
  return (
    <motion.div 
      className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col items-center text-center relative border border-secondary"
      whileHover={{ y: -10 }}
    >
      <div className="relative w-40 h-40 mb-6">
        <div className="absolute inset-0 bg-primary/10 rounded-full scale-110 group-hover:scale-125 transition-transform duration-500" />
        <div className="relative z-10 w-full h-full rounded-full overflow-hidden border-4 border-white shadow-lg">
          <Image src={pitha.image} alt={pitha.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
        </div>
        {pitha.oldPrice && (
          <div className="absolute top-0 left-0 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-md z-20">
            {Math.round(((pitha.oldPrice - pitha.price) / pitha.oldPrice) * 100)}% OFF
          </div>
        )}
      </div>
      
      <div className="flex items-center gap-1 mb-2">
        <div className="flex text-yellow-500">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`w-3 h-3 ${i < Math.floor(pitha.rating) ? "fill-current" : "text-gray-300"}`} 
            />
          ))}
        </div>
        <span className="text-[10px] text-muted-foreground">({pitha.reviews})</span>
      </div>

      <h3 className="text-xl font-bold mb-1">{pitha.name}</h3>
      <p className="text-muted-foreground text-xs mb-4 line-clamp-2 h-10">{pitha.description}</p>
      
      <div className="flex items-center gap-2 mb-6">
        <span className="text-xl font-bold text-primary">৳{pitha.price}</span>
        {pitha.oldPrice && (
          <span className="text-sm text-muted-foreground line-through">৳{pitha.oldPrice}</span>
        )}
      </div>

      <div className="flex items-center gap-2 w-full mt-auto">
        <Button variant="outline" size="icon" className="rounded-full border-primary/20 hover:bg-primary/10 h-10 w-10 shrink-0">
          <ShoppingCart className="w-4 h-4 text-primary" />
        </Button>
        <Button variant="secondary" className="rounded-full flex-grow flex items-center justify-center gap-1 group/btn px-4 bg-primary/10 hover:bg-primary/20 text-primary border-none h-10">
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
          <div className="flex justify-center mb-16 overflow-x-auto pb-4 scrollbar-hide">
            <TabsList className="bg-white/50 backdrop-blur-sm p-1 rounded-2xl border flex h-auto gap-1">
              {categories.map((cat) => (
                <TabsTrigger 
                  key={cat} 
                  value={cat}
                  className="rounded-xl data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all px-6 py-2.5 text-sm font-medium"
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
