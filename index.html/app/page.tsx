'use client';

import { useState } from 'react';
import { Lookbook } from '@/components/lookbook';
import { Testimonials } from '@/components/testimonials';
import { MapPin, Phone, Star, CheckCircle, Navigation, MessageCircle, Menu, X } from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-amber-500/30 overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="font-serif text-2xl tracking-widest text-amber-500"
          >
            RAHAT TAILORS
          </motion.div>
          
          {/* Desktop Nav */}
          <motion.div 
             initial={{ opacity: 0, y: -10 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.2 }}
             className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest text-zinc-400"
          >
            <a href="#showroom" className="hover:text-amber-500 transition-colors">Showroom</a>
            <a href="#about" className="hover:text-amber-500 transition-colors">About</a>
            <a href="#contact" className="hover:text-amber-500 transition-colors">Contact</a>
            <a href="https://wa.me/919137213500" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-zinc-950 px-5 py-2 rounded-full uppercase tracking-widest text-xs font-semibold transition-colors">
              Contact on WhatsApp
            </a>
          </motion.div>

          {/* Mobile Nav Toggle */}
          <motion.button 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="md:hidden p-2 text-zinc-100 hover:text-amber-500 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </motion.button>
        </div>

        {/* Mobile Nav Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-zinc-950/95 backdrop-blur-xl border-b border-zinc-800 overflow-hidden"
            >
              <div className="flex flex-col items-center gap-6 py-8 px-6 text-sm uppercase tracking-widest text-zinc-400">
                <a href="#showroom" onClick={toggleMenu} className="hover:text-amber-500 transition-colors">Showroom</a>
                <a href="#about" onClick={toggleMenu} className="hover:text-amber-500 transition-colors">About</a>
                <a href="#contact" onClick={toggleMenu} className="hover:text-amber-500 transition-colors">Contact</a>
                <a href="https://wa.me/919137213500" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border border-amber-500 text-amber-500 bg-amber-500/10 px-6 py-3 rounded-full font-semibold transition-colors mt-2">
                  <MessageCircle className="w-4 h-4" /> Message on WhatsApp
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero / About Section */}
      <section id="about" className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-[85vh] flex flex-col justify-center">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="space-y-8 z-10"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 border border-amber-500/30 rounded-full px-4 py-1.5 text-xs tracking-widest text-amber-500">
              <Star className="w-3 h-3 fill-amber-500" />
              <span>5.0 Star Rated Custom Tailoring</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] md:leading-[0.9] font-light text-zinc-50">
              Premium <br />
              <span className="text-amber-500 italic">Craftsmanship</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-zinc-400 max-w-md text-lg leading-relaxed font-light">
              Elevate your style with perfect fitting and exclusive designs. Rahat Tailors is the premier destination for bespoke ethnic and formal wear.
            </motion.p>
            
            {/* Store Information Card inline */}
            <motion.div variants={fadeUp} className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-6 md:p-8 space-y-6 shadow-2xl">
               <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-amber-500 shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-zinc-100 mb-1">Our Showroom</h3>
                    <p className="text-zinc-400 font-light text-sm leading-relaxed">
                      B’20 shop, jhumka bhakar, Gate 5 plot, 265,<br />
                      Mahakali Rd, Malvani, Malad West,<br />
                      Mumbai - 400095
                    </p>
                  </div>
               </div>
               
               <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-amber-500 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-zinc-100 mb-1">Call Us</h3>
                    <p className="text-zinc-400 font-light text-sm">+91 91372 13500</p>
                  </div>
               </div>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 pt-4 relative z-20">
              <a href="https://wa.me/919137213500" target="_blank" rel="noopener noreferrer" className="bg-amber-600 hover:bg-amber-500 text-zinc-950 px-8 py-4 rounded-full flex items-center justify-center gap-2 uppercase tracking-widest text-xs font-semibold transition-colors">
                <MessageCircle className="w-4 h-4" /> Message on WhatsApp
              </a>
              <a href="tel:+919137213500" className="border border-zinc-700 hover:border-amber-500 hover:text-amber-500 px-8 py-4 rounded-full flex items-center justify-center gap-2 uppercase tracking-widest text-xs font-medium transition-colors">
                <Phone className="w-4 h-4" /> Call Now
              </a>
            </motion.div>
            
             <motion.div variants={fadeUp} className="flex flex-wrap gap-4 pt-4">
                <div className="inline-flex items-center gap-2 border border-zinc-800 bg-zinc-900 rounded-full px-4 py-2 text-xs tracking-wider text-zinc-300">
                  <CheckCircle className="w-3.5 h-3.5 text-amber-500" /> Women-owned
                </div>
                <div className="inline-flex items-center gap-2 border border-zinc-800 bg-zinc-900 rounded-full px-4 py-2 text-xs tracking-wider text-zinc-300">
                  <CheckCircle className="w-3.5 h-3.5 text-amber-500" /> LGBTQ+ Friendly
                </div>
              </motion.div>
          </motion.div>
          
          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1, delay: 0.3 }}
             className="relative aspect-[3/4] lg:aspect-[4/5] rounded-[2rem] overflow-hidden border border-zinc-800"
          >
            <Image 
              src="https://picsum.photos/seed/tailorstorefront/800/1000"
              alt="Premium Tailoring Showcase"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60" />
            
            <a 
              href="https://maps.google.com/?q=B’20+shop,+jhumka+bhakar,+Gate+5+plot,+265,+Mahakali+Rd,+Malvani,+Malad+West,+Mumbai" 
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-8 right-8 z-20 bg-zinc-950/80 backdrop-blur-md border border-zinc-800 hover:border-amber-500 rounded-full p-4 flex items-center gap-4 transition-colors group cursor-pointer"
            >
              <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center group-hover:bg-amber-500 transition-colors">
                <Navigation className="w-5 h-5 text-zinc-100 group-hover:text-zinc-950 transition-colors" />
              </div>
              <div className="pr-4 hidden sm:block">
                <div className="text-sm font-medium text-zinc-100 group-hover:text-amber-500 transition-colors">Get Directions</div>
                <div className="text-xs text-zinc-400">Open Google Maps</div>
              </div>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Showroom / Lookbook */}
      <section id="showroom" className="py-24 px-6 bg-zinc-900/30 border-t border-zinc-800/50 overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-16">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="text-center space-y-4 max-w-2xl mx-auto"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-light">The Masterpiece Gallery</h2>
            <p className="text-zinc-400 font-light text-lg">
              A glimpse into our high-end creations. Every stitch tells a story of precision and elegance.
            </p>
          </motion.div>
          
          <Lookbook />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center pt-8"
          >
            <a href="https://wa.me/919137213500?text=Wait,%20I%20would%20like%20to%20discuss%20a%20custom%20design" target="_blank" rel="noopener noreferrer" className="bg-zinc-100 hover:bg-white text-zinc-950 px-8 py-4 rounded-full uppercase tracking-widest text-xs font-semibold transition-colors text-center inline-flex items-center gap-2">
              <MessageCircle className="w-4 h-4" /> Discuss Your Design
            </a>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 overflow-hidden border-t border-zinc-800/50">
        <div className="max-w-7xl mx-auto space-y-16">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="text-center space-y-4"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-light">Client Stories</h2>
            <p className="text-zinc-400 uppercase tracking-widest text-sm">Our reputation speaks for itself</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
             <Testimonials />
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-zinc-900 pt-24 pb-12 px-6 border-t border-zinc-800">
        <motion.div 
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           variants={staggerContainer}
           className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16"
        >
          <motion.div variants={fadeUp} className="space-y-6">
            <div className="font-serif text-2xl tracking-widest text-amber-500">RAHAT TAILORS</div>
            <p className="text-zinc-400 font-light max-w-sm">
              Premium custom tailoring studio crafting impeccable bespoke outfits with dedication since 2004.
            </p>
            <div className="flex gap-4">
                <span className="inline-flex items-center gap-1.5 text-zinc-400 text-sm"><CheckCircle className="w-4 h-4 text-amber-500"/> LGBTQ+ Friendly</span>
                <span className="inline-flex items-center gap-1.5 text-zinc-400 text-sm"><CheckCircle className="w-4 h-4 text-amber-500"/> Women-owned</span>
            </div>
          </motion.div>
          <motion.div variants={fadeUp} className="space-y-6 lg:col-span-2">
            <h3 className="text-sm uppercase tracking-widest font-semibold text-zinc-100">Visit Our Studio</h3>
            <div className="grid sm:grid-cols-2 gap-8 text-zinc-400 font-light">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <p>
                  B’20 shop, jhumka bhakar,<br />
                  Gate 5 plot, 265, Mahakali Rd,<br />
                  Malvani, Malad West,<br />
                  Mumbai - 400095
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Phone className="w-5 h-5 text-amber-500 shrink-0" />
                  <p>+91 91372 13500</p>
                </div>
                <div className="flex items-center gap-4">
                  <Star className="w-5 h-5 text-amber-500 shrink-0" />
                  <p>5.0 Google Rated Tailor</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.5 }}
           className="max-w-7xl mx-auto pt-8 border-t border-zinc-800 text-center text-zinc-500 text-sm font-light"
        >
          <p>© {new Date().getFullYear()} Rahat Tailors. All rights reserved.</p>
        </motion.div>
      </footer>

      {/* Floating WhatsApp Button */}
      <motion.a 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", delay: 1, stiffness: 200, damping: 15 }}
        href="https://wa.me/919137213500?text=Hi%20Shadab%20bhai,%20I%20have%20an%20inquiry%20from%20your%20website" 
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:-translate-y-1 transition-transform z-50 shadow-green-500/20"
        title="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.878-.788-1.474-1.761-1.648-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
        </svg>
      </motion.a>
    </main>
  );
}
