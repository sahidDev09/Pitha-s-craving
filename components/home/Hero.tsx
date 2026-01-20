"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-24 lg:pt-20 lg:pb-32">
      {/* Background Blob */}
      <div className="absolute top-0 right-0 -z-10 w-[60%] h-[100%] bg-primary/10 rounded-bl-[100px] hidden lg:block" />
      <div className="absolute top-20 right-20 -z-10 w-96 h-96 bg-primary/20 blur-[100px] rounded-full hidden lg:block" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-8 z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Enjoy <span className="text-primary italic">Traditional</span> <br />
                Pitha In Your <br />
                <span className="text-primary">Winter Life</span>
              </h1>
            </motion.div>
            
            <motion.p 
              className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Experience the authentic taste of Bengali winter delicacies. 
              Handcrafted with love and traditional recipes passed down through generations.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button size="lg" className="rounded-full px-8 text-lg bg-primary hover:bg-primary/90 h-14 w-full sm:w-auto">
                Order Now
              </Button>
              <Button size="lg" variant="ghost" className="rounded-full px-8 text-lg flex items-center gap-2 h-14 group">
                <div className="bg-primary/20 p-2 rounded-full group-hover:bg-primary/30 transition-colors">
                  <Play className="w-4 h-4 fill-primary text-primary" />
                </div>
                Watch More
              </Button>
            </motion.div>
          </div>

          {/* Image Content */}
          <motion.div 
            className="flex-1 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative w-full aspect-square max-w-[500px] mx-auto">
              {/* Decorative circle/blob behind image */}
              <div className="absolute inset-0 bg-primary/20 rounded-full animate-pulse blur-3xl" />
              <div className="relative z-10 w-full h-full rounded-full border-[16px] border-white shadow-2xl overflow-hidden">
                <Image 
                  src="/images/hero_pitha.png" 
                  alt="Traditional Pitha Platter" 
                  fill 
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Floating element 1 */}
              <motion.div 
                className="absolute -top-4 -left-4 bg-white p-4 rounded-2xl shadow-xl z-20 hidden md:block"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold">🔥</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold">Freshly Steamed</p>
                    <p className="text-[10px] text-muted-foreground">Served Hot</p>
                  </div>
                </div>
              </motion.div>
              
              {/* Floating element 2 */}
              <motion.div 
                className="absolute -bottom-8 -right-8 bg-white p-4 rounded-2xl shadow-xl z-20 hidden md:block"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200" />
                    ))}
                  </div>
                  <div>
                    <p className="text-xs font-bold">5k+ Reviews</p>
                    <p className="text-[10px] text-muted-foreground">⭐⭐⭐⭐⭐</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
