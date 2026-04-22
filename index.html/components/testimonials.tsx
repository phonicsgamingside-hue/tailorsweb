'use client';
import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const REVIEWS = [
  {
    author: "Kahlan Shaikh",
    text: "Shadab bhai provides unparalleled value. The fit and finish of my short kurtas and pathani are simply stunning. The pricing is very reasonable considering the exceptional quality of the tailoring and construction. Truly the best tailor in Mumbai.",
    time: "a year ago"
  },
  {
    author: "AQUEEL Shaikh",
    text: "It was awesome experience with shadab bhai ... The fitting and finishing I found here I did not get anywhere and doesn't matter is it a formal or traditional or occasional... Thanks for being giving us a better look and to gain a confidence by a perfect dresses",
    time: "2 years ago"
  },
  {
    author: "Mohammed Taqi shaikh",
    text: "All time anytime my fav and my very Azeez...You can Blindly Trust Shadab bhai❤️",
    time: "a year ago"
  },
  {
    author: "Ayman Pathan",
    text: "Very nice fitting and finishing",
    time: "2 months ago"
  },
  {
    author: "Faiz Khan",
    text: "Excellence in hand",
    time: "a month ago"
  },
  {
    author: "Shadab Jhari",
    text: "Nice fiting and best experience",
    time: "6 months ago"
  },
  {
    author: "Mukit Shaikh",
    text: "Very kind and humble person. Must visit once for your tailoring needs",
    time: "a year ago"
  },
  {
    author: "Mohd Shadan",
    text: "Best finishing.",
    time: "3 months ago"
  },
  {
    author: "Shahbaz Ansari",
    text: "💯❤❤",
    time: "4 months ago"
  },
  {
    author: "Zaiyan Ansari",
    text: "A tailor sews clothes. He is found in every village and town. No civilized person can do without him. He is a very important member of our society. He earns his living by working hard.",
    time: "3 years ago"
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? REVIEWS.length - 1 : prev - 1));
  };

  // Auto slide setup
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-16">
      {/* Review Summary Graph - Made more realistic */}
      <div className="max-w-3xl mx-auto bg-zinc-900/40 border border-zinc-800 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="text-center md:text-left flex-shrink-0">
          <div className="text-7xl font-serif text-amber-500 mb-3">4.9</div>
          <div className="flex gap-1 justify-center md:justify-start mb-3">
            {[...Array(5)].map((_, idx) => (
              <Star key={idx} className="w-5 h-5 fill-amber-500 text-amber-500" />
            ))}
          </div>
          <div className="text-zinc-400 text-sm tracking-wide uppercase">Based on <span className="font-semibold text-zinc-100">64 reviews</span></div>
        </div>
        
        <div className="flex-1 w-full space-y-3">
          {[5, 4, 3, 2, 1].map((star) => {
             // Calculate realistic distribution: Mostly 5s, some 4s and 3s.
             const widthPercent = star === 5 ? 88 : star === 4 ? 8 : star === 3 ? 4 : 0;
             return (
              <div key={star} className="flex items-center gap-4 text-sm font-medium">
                <div className="w-16 text-zinc-400 shrink-0 flex items-center justify-end gap-2">
                  {star} <Star className="w-3 h-3 fill-zinc-500 text-zinc-500" />
                </div>
                <div className="h-2.5 flex-grow bg-zinc-950 rounded-full overflow-hidden border border-zinc-800/50">
                  <div 
                    className="h-full bg-amber-500 rounded-full transition-all duration-1000"
                    style={{ width: `${widthPercent}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Slider Layout */}
      <div className="relative max-w-4xl mx-auto px-4 md:px-16 pb-8">
        <div className="overflow-hidden rounded-3xl">
          <div 
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {REVIEWS.map((review, i) => (
              <div key={i} className="w-full shrink-0 flex items-center justify-center p-2">
                <div className="bg-zinc-950 border border-zinc-800 rounded-[2rem] p-8 md:p-14 w-full relative group">
                  <Quote className="absolute top-8 right-8 w-16 h-16 text-zinc-800/30 rotate-180" />
                  
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} className={`w-5 h-5 ${idx < (i === 1 ? 4 : 5) ? 'fill-amber-500 text-amber-500' : 'fill-zinc-800 text-zinc-800'}`} />
                    ))}
                  </div>
                  
                  <p className="text-zinc-300 font-light leading-relaxed mb-10 text-lg md:text-xl min-h-[140px] md:min-h-[120px] flex items-center">
                    "{review.text}"
                  </p>
                  
                  <div className="flex items-center justify-between border-t border-zinc-800/50 pt-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-amber-500 font-serif text-xl">
                        {review.author.charAt(0)}
                      </div>
                      <div>
                        <div className="font-medium text-zinc-100">{review.author}</div>
                        <div className="text-xs text-zinc-500 mt-1">Google Review • {review.time}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Arrow Controls */}
        <button 
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 -ml-2 md:ml-0 p-3 bg-zinc-900 rounded-full border border-zinc-800 hover:border-amber-500 hover:text-amber-500 transition-colors z-10 hidden sm:flex"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 -mr-2 md:mr-0 p-3 bg-zinc-900 rounded-full border border-zinc-800 hover:border-amber-500 hover:text-amber-500 transition-colors z-10 hidden sm:flex"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Mobile / Dot Indicators */}
        <div className="flex justify-center gap-2 mt-8 absolute -bottom-6 left-0 right-0">
          {REVIEWS.map((_, i) => (
            <button 
              key={i}
              onClick={() => setCurrentIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${i === currentIndex ? 'bg-amber-500 w-8' : 'bg-zinc-700 w-2 hover:bg-zinc-500'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
