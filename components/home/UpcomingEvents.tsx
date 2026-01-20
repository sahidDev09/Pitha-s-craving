"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Navigation, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const UpcomingEvents = () => {
  const eventDate = new Date("2026-02-15T10:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = eventDate - now;

      if (difference <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [eventDate]);

  const location = "Dhanmondi Lake Side, Road 32, Dhaka";
  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(location)}`;

  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden" id="events">
      {/* Decorative Gradients */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/10 blur-[120px] rounded-full translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <motion.p 
              className="text-primary font-bold tracking-widest uppercase text-sm"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Don&apos;t Miss Out
            </motion.p>
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              Upcoming Announcement
            </motion.h2>
          </div>

          {/* Event Card */}
          <motion.div 
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] p-8 md:p-12 shadow-2xl overflow-hidden relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                <Calendar className="w-64 h-64 text-white" strokeWidth={0.5} />
            </div>

            <div className="flex flex-col lg:flex-row gap-12 items-center">
              {/* Left Side: Info */}
              <div className="flex-1 space-y-8 text-center lg:text-left">
                <div>
                  <h3 className="text-3xl font-bold text-primary mb-2">Winter Pitha Festival 2026</h3>
                  <p className="text-slate-400">Join us for the biggest gathering of traditional pitha makers in the country. Experience over 50 varieties of winter delicacies!</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-4 justify-center lg:justify-start">
                    <div className="p-3 bg-primary/20 rounded-2xl">
                      <Calendar className="w-5 h-5 text-primary" />
                    </div>
                    <div className="text-left">
                      <p className="text-xs text-slate-500 uppercase font-bold">Starts - Ends</p>
                      <p className="font-semibold text-sm">Feb 15 - Feb 20, 2026</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 justify-center lg:justify-start">
                    <div className="p-3 bg-primary/20 rounded-2xl">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div className="text-left">
                      <p className="text-xs text-slate-500 uppercase font-bold">Location</p>
                      <p className="font-semibold text-sm">{location}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start text-center lg:text-left">
                  <Button 
                    className="bg-primary hover:bg-primary/90 rounded-full px-8 py-6 h-auto text-lg w-full sm:w-auto flex items-center gap-2 group"
                    asChild
                  >
                    <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                      Get Direction
                      <Navigation className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </a>
                  </Button>
                  <div className="flex items-center gap-2 text-slate-400">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">Entry is absolutely free!</span>
                  </div>
                </div>
              </div>

              {/* Right Side: Countdown */}
              <div className="flex-1 flex flex-col items-center justify-center space-y-4">
                <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Event Starts In</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {timeLeft && (
                    <>
                      <CountdownItem value={timeLeft.days} label="Days" />
                      <CountdownItem value={timeLeft.hours} label="Hours" />
                      <CountdownItem value={timeLeft.minutes} label="Mins" />
                      <CountdownItem value={timeLeft.seconds} label="Secs" />
                    </>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const CountdownItem = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center bg-white/10 backdrop-blur-md rounded-2xl p-4 min-w-[80px] border border-white/5">
    <span className="text-3xl font-bold text-primary">{value.toString().padStart(2, '0')}</span>
    <span className="text-[10px] uppercase text-slate-400 font-bold tracking-tighter">{label}</span>
  </div>
);

export default UpcomingEvents;
