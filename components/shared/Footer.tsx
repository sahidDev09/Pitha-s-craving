"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white pt-24 pb-12 border-t">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/" className="text-3xl font-bold flex items-center gap-2">
              <span className="text-primary italic">Pitha&apos;s</span>
              <span className="text-foreground">Cravings</span>
            </Link>
            <p className="text-muted-foreground leading-relaxed">
              Preserving the heritage of Bengali winter food. We connect traditional pitha makers 
              with lovers of authentic seasonal delicacies.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <Github className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Food</h3>
            <ul className="space-y-4">
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Our Menu</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Winter Specials</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Bulk Orders</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">New Arrivals</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Company</h3>
            <ul className="space-y-4">
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Kitchens</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Reviews</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Support</h3>
            <ul className="space-y-4">
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Account</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Support Center</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Feedback</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Delivery Area</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground text-center">
          <p>© Copyright 2026 Pitha&apos;s Cravings. All Rights Reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-primary">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
