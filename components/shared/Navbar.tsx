"use client";

import Link from "next/link";
import { ShoppingCart, Menu as MenuIcon } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold flex items-center gap-2">
          <span className="text-primary">Pitha&apos;s</span>
          <span className="text-foreground">Craving</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">Home</Link>
          <div className="group relative">
            <button className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1">
              Menu
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
            </button>
          </div>
          <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">About Us</Link>
          <Link href="#offers" className="text-sm font-medium hover:text-primary transition-colors">Offers</Link>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-secondary rounded-full transition-colors relative">
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">0</span>
          </button>

          <button className="md:hidden p-2 hover:bg-secondary rounded-full transition-colors" onClick={() => setIsOpen(!isOpen)}>
            <MenuIcon className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <Link href="/" className="text-sm font-medium py-2" onClick={() => setIsOpen(false)}>Home</Link>
              <Link href="#menu" className="text-sm font-medium py-2" onClick={() => setIsOpen(false)}>Menu</Link>
              <Link href="#about" className="text-sm font-medium py-2" onClick={() => setIsOpen(false)}>About Us</Link>
              <Link href="#offers" className="text-sm font-medium py-2" onClick={() => setIsOpen(false)}>Offers</Link>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
