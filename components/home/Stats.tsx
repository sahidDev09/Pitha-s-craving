"use client";

import { ShoppingBag, Truck, BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: ShoppingBag,
    title: "Easy to Order",
    description: "Our platform makes ordering your favorite Pitha as simple as a few clicks.",
    color: "bg-yellow-500/20 text-yellow-500"
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Get your traditional winter delicacies delivered hot and fresh to your doorstep.",
    color: "bg-orange-500/20 text-orange-500"
  },
  {
    icon: BadgeCheck,
    title: "Best Quality",
    description: "Every Pitha is handmade by expert local vendors using authentic ingredients.",
    color: "bg-primary/20 text-primary"
  }
];

const Stats = () => {
  return (
    <section className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="flex flex-col items-center text-center space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`p-4 rounded-full ${feature.color}`}>
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold">{feature.title}</h3>
              <p className="text-slate-400 max-w-xs">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
