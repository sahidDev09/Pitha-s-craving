"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Target, Eye, Heart } from "lucide-react";

const MissionVision = () => {
  return (
    <section className="py-24 bg-white overflow-hidden" id="about">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Owner Image Side */}
          <motion.div 
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl" />
              
              <div className="relative z-10 rounded-[60px] overflow-hidden border-[12px] border-secondary/50 shadow-2xl">
                {/* 
                   Note: Using a high-quality placeholder for the owner image. 
                   User can replace this with their actual owner portrait.
                */}
                <Image 
                  src="https://images.unsplash.com/photo-1556910602-3884ee022588?auto=format&fit=crop&q=80&w=800" 
                  alt="Our Founder" 
                  width={800} 
                  height={1000} 
                  className="object-cover h-[600px] w-full"
                />
              </div>
              
              {/* Floating Name Badge */}
              <div className="absolute bottom-12 -right-8 bg-white p-6 rounded-2xl shadow-xl z-20">
                <h4 className="font-bold text-xl">Rehnuma Khan</h4>
                <p className="text-sm text-primary font-medium italic">Founder & Head Chef</p>
              </div>
            </div>
          </motion.div>

          {/* Story Side */}
          <motion.div 
            className="lg:w-1/2 space-y-10"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              <p className="text-primary font-bold tracking-widest uppercase text-sm">Our Story</p>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">From a Home Kitchen to <span className="text-primary italic">Every Heart</span></h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Started in a small kitchen by Rehnuma Khan, Pitha&apos;s Cravings began with a simple desire: 
                to bring the warmth of village winters to the city. What started as sharing recipes with 
                neighbors turned into a mission to support local pitha makers and share our culture with the world.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Our Mission</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  To preserve and share the authentic taste of Bengali winter pithas while empowering home-based artisans.
                </p>
              </div>

              <div className="space-y-4">
                <div className="w-12 h-12 bg-orange-500/10 rounded-2xl flex items-center justify-center">
                  <Eye className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold">Our Vision</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  To become the leading digital destination for traditional seasonal delicacies globally.
                </p>
              </div>
            </div>

            <div className="pt-8 border-t flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center">
                <Heart className="w-6 h-6 text-primary fill-primary" />
              </div>
              <p className="text-sm font-medium italic text-muted-foreground">
                &quot;Every pitha we make is a labor of love, crafted to bring back your fondest winter memories.&quot;
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
