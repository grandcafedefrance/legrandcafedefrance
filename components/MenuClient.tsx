"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Restaurant } from "@/data/restaurants";

interface MenuClientProps {
  restaurant: Restaurant;
}

export default function MenuClient({ restaurant }: MenuClientProps) {
  // Default to first category
  const [activeCategory, setActiveCategory] = useState(restaurant.menu[0].category);

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Find active category content
  const currentCategoryData = restaurant.menu.find(
    (c) => c.category === activeCategory
  );

  return (
    <main 
      className="min-h-screen bg-background text-primary pb-20 selection:bg-red-brasserie selection:text-white"
      suppressHydrationWarning
    >
      {/* Header */}
      <header className="pt-12 pb-8 px-4 text-center">
        <h1 className="font-playfair text-3xl md:text-5xl font-bold mb-3 drop-shadow-sm">
          {restaurant.name}
        </h1>
        <p className="font-lato text-accent text-xs md:text-sm uppercase tracking-[0.2em] font-medium">
          {restaurant.subtitle}
        </p>
      </header>

      {/* Sticky Tab Navigation */}
      <nav className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-primary/10 shadow-sm transition-all duration-300">
        <div className="overflow-x-auto scrollbar-hide py-4 px-4 w-full">
          <div className="flex gap-3 whitespace-nowrap min-w-max mx-auto px-2">
            {restaurant.menu.map((category) => {
              const isActive = activeCategory === category.category;
              return (
                <button
                  key={category.category}
                  onClick={() => handleCategoryClick(category.category)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-accent text-white shadow-md scale-105"
                      : "bg-white border border-primary/10 text-primary/60 hover:text-primary hover:border-red-brasserie/50"
                  }`}
                >
                  {category.category}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Menu Content */}
      <div className="max-w-2xl mx-auto px-3 sm:px-6 pt-8 min-h-[50vh]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid gap-10"
          >
            {currentCategoryData?.items.map((item, index) => (
              <div 
                key={`${activeCategory}-${index}`} 
                className="group flex flex-col gap-3 pb-6 border-b border-primary/10 last:border-none last:pb-0"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-2 md:gap-4 w-full">
                  <h3 className="font-playfair text-xl md:text-2xl font-bold text-primary group-hover:text-red-brasserie transition-colors duration-300 break-words">
                    {item.name}
                  </h3>
                  <span className="font-lato font-bold text-lg text-red-brasserie w-full md:w-auto" style={{ whiteSpace: 'normal', wordBreak: 'break-word' }}>
                    {item.price}
                  </span>
                </div>
                
                {item.description && (
                  <p className="font-lato text-sm md:text-base text-primary/60 italic leading-relaxed break-words">
                    {item.description}
                  </p>
                )}
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer */}
      <footer className="mt-16 py-10 px-4 text-center border-t border-primary/10 bg-primary/5">
        <p className="text-xs text-primary/40 font-lato mb-6 uppercase tracking-wider">
          Prix nets, service compris. L&apos;abus d&apos;alcool est dangereux pour la santé.
        </p>
      </footer>
    </main>
  );
}
