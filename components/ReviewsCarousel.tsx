"use client";

import { motion } from "framer-motion";
import { REVIEWS } from "@/data/review";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

export default function ReviewsCarousel() {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/10 to-primary/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-red-brasserie mb-4">
            Ce que nos clients disent
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto" />
        </motion.div>

        {/* Horizontal Scrolling Reviews */}
        <div className="relative">
          {/* Previous Button - Desktop only */}
          <button
            onClick={() => {
              const container = document.getElementById('reviews-scroll');
              if (container) {
                container.scrollBy({ left: -400, behavior: 'smooth' });
              }
            }}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110 hidden lg:flex items-center justify-center"
            aria-label="Avis précédent"
          >
            <ChevronLeft className="w-6 h-6 text-primary" />
          </button>

          {/* Next Button - Desktop only */}
          <button
            onClick={() => {
              const container = document.getElementById('reviews-scroll');
              if (container) {
                container.scrollBy({ left: 400, behavior: 'smooth' });
              }
            }}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110 hidden lg:flex items-center justify-center"
            aria-label="Avis suivant"
          >
            <ChevronRight className="w-6 h-6 text-primary" />
          </button>

          <div id="reviews-scroll" className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {REVIEWS.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="relative group flex-shrink-0 w-[85vw] sm:w-[70vw] md:w-[45vw] lg:w-[30vw] snap-center"
              >
                {/* Glassmorphism Card */}
                <div className="relative backdrop-blur-md bg-white/80 dark:bg-gray-900/80 rounded-2xl p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 hover:scale-105 flex flex-col h-full min-h-[400px]">
                  {/* Source Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-accent/10 text-red-brasserie border border-accent/20">
                      {review.source}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {review.date}
                    </span>
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < review.rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "fill-gray-300 text-gray-300"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-700 dark:text-gray-300 font-lato text-base md:text-sm leading-relaxed mb-4 flex-grow">
                    &ldquo;{review.text}&rdquo;
                  </p>

                  {/* Author - stays at bottom */}
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-200/50 dark:border-gray-700/50 mt-auto">
                    <div className="w-10 h-10 rounded-full bg-red-brasserie from-accent to-accent/60 flex items-center justify-center text-white font-playfair font-bold">
                      {review.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-primary dark:text-white text-sm">
                        {review.author}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Client vérifié
                      </p>
                    </div>
                  </div>

                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-accent/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="text-center mt-4">
            <p className="text-sm text-primary/50 font-lato">
              ← Faites défiler pour voir plus d&apos;avis →
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
