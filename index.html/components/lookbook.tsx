'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { ZoomIn, X, MessageCircle } from 'lucide-react';

const ITEMS = [
  { 
    id: 1, 
    title: 'Midnight Beaded Motif Suit', 
    description: 'Bespoke geometric beading pattern with a studded aesthetic on premium dark fabric.',
    img: '/image1.jpeg' 
  },
  { 
    id: 2, 
    title: 'Royal Red Floral Embroidered Trim', 
    description: 'Exquisite hand-threaded floral embroidery cascaded over a vibrant silk blend base.',
    img: '/image2.jpeg' 
  },
  { 
    id: 3, 
    title: 'Golden Eagle Wing Embroidery', 
    description: 'Meticulous beadwork and scattered studded aesthetics forming an eagle wing on the shoulder.',
    img: '/image3.jpeg' 
  },
  { 
    id: 4, 
    title: 'Intricate Embellished Crystal Jacket', 
    description: 'Luxurious heavy lapel detailing and scattered bead placement.',
    img: '/image4.jpeg' 
  },
  {
    id: 5,
    title: 'Precision Embroidery Zari Work',
    description: 'Close-up look at our meticulously hand-crafted Zari embroidery patch.',
    img: '/image5.jpeg'
  }
];

export function Lookbook() {
  const [selectedImage, setSelectedImage] = useState<typeof ITEMS[0] | null>(null);

  // Disable scrolling when lightbox is open
  if (typeof window !== 'undefined') {
    document.body.style.overflow = selectedImage ? 'hidden' : 'auto';
  }

  return (
    <div>
      <div className="grid md:grid-cols-2 gap-6 lg:gap-10">
        {ITEMS.map((item, idx) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            key={item.id}
            className="group cursor-pointer flex flex-col"
            onClick={() => setSelectedImage(item)}
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-zinc-800/80 mb-6 bg-zinc-900">
              {/* Replace the src below with your 8k image URLs when ready */}
              <Image 
                src={item.img} 
                alt={item.title} 
                fill 
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                <div className="bg-zinc-950/80 text-white rounded-full p-4 border border-zinc-800 flex items-center gap-2 pr-6">
                   <ZoomIn className="w-5 h-5 text-amber-500" />
                   <span className="text-sm font-medium tracking-wide">View Details</span>
                </div>
              </div>
            </div>
            <div className="flex-1 flex justify-between items-start gap-4">
              <div>
                <h3 className="font-serif text-2xl font-light mb-2">{item.title}</h3>
                <p className="text-sm text-zinc-500 font-light">{item.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
           <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-zinc-950/98 backdrop-blur-xl flex flex-col items-center justify-center p-4 lg:p-12"
          >
            <button 
              className="absolute top-6 right-6 p-4 bg-zinc-900 rounded-full border border-zinc-800 text-zinc-400 hover:text-amber-500 transition-colors z-10"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </button>

            <div className="w-full max-w-7xl flex flex-col lg:flex-row h-full max-h-[90vh] gap-8" onClick={(e) => e.stopPropagation()}>
              
              {/* Image Container */}
              <motion.div 
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative flex-1 rounded-2xl overflow-hidden border border-zinc-800/50 bg-zinc-900"
              >
                <Image 
                  src={selectedImage.img} 
                  fill 
                  alt={selectedImage.title} 
                  className="object-contain" 
                  sizes="100vw"
                  quality={100}
                  priority
                />
              </motion.div>

              {/* Details & Action Panel */}
              <motion.div 
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 20, opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="w-full lg:w-96 flex flex-col justify-center shrink-0"
              >
                <h2 className="font-serif text-3xl md:text-4xl font-light mb-4 text-zinc-100">
                  {selectedImage.title}
                </h2>
                <div className="w-12 h-px bg-amber-500/50 mb-6"></div>
                <p className="text-zinc-400 text-lg font-light leading-relaxed mb-10">
                  {selectedImage.description} Every element is strictly crafted to measure by Shadab Bhai, ensuring a flawless bespoke experience.
                </p>

                <a 
                  href={`https://wa.me/919137213500?text=I'm%20interested%20in%20a%20design%20similar%20to:%20${selectedImage.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-amber-600 hover:bg-amber-500 text-zinc-950 px-8 py-5 rounded-full flex items-center justify-center gap-3 w-full transition-colors uppercase tracking-widest text-xs font-bold"
                >
                   <MessageCircle className="w-5 h-5" /> Inquire About Design
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
