"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { RESTAURANTS } from "@/data/restaurants";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <>
      {/* Local SEO Hidden/Visual Footer Block (Visually hidden but indexable for SEO, or a beautiful small footer) */}
      <h1 className="sr-only">Grand Café de France & Rina&apos;s Bar – Établissements et Brasseries au cœur de Nice</h1>
      
      <div className="h-[100dvh] w-full flex flex-col lg:flex-row overflow-hidden" suppressHydrationWarning>
        {RESTAURANTS.map((restaurant, index) => (
          <motion.div
            key={restaurant.slug}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="relative w-full h-1/3 lg:h-full flex-1 group overflow-hidden transition-all duration-500 lg:hover:flex-[1.5]"
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={restaurant.image}
                alt={`${restaurant.name} Nice ${restaurant.subtitle} - Brasserie & Restaurant`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                priority={index === 0}
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
              {/* Dark Overlay - stronger on mobile for readability */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-primary/40 to-primary/80 lg:from-transparent lg:via-primary/60 lg:to-primary/95 lg:group-hover:from-transparent lg:group-hover:via-primary/30 lg:group-hover:to-primary/90 transition-all duration-500" />
            </div>

            {/* Content */}
            <div className="relative h-full flex flex-col items-center justify-center px-4 md:px-6 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                className="space-y-3 md:space-y-6"
              >
                {/* Subtitle - always visible on mobile */}
                <span className="inline-block px-4 py-1.5 rounded-full backdrop-blur-md bg-black/30 border border-accent/30 shadow-[0_2px_16px_rgba(0,0,0,0.4)]">
                  <p className="font-lato text-accent text-xs md:text-base uppercase tracking-widest">
                    {restaurant.subtitle}
                  </p>
                </span>

                {/* Restaurant Name - upgraded SEO to H2, leaving H1 for the page */}
                <h2 className="font-playfair text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-md drop-shadow-[0_6px_12px_rgba(0,0,0,0.95)]">
                  {restaurant.name}
                </h2>

                {/* Divider - always visible on mobile */}
                <div className="w-16 md:w-24 h-px bg-accent mx-auto drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" />

                {/* Description - HIDDEN on mobile, hidden on desktop until hover */}
                <p className="hidden md:block font-lato text-white/90 text-sm md:text-base max-w-sm opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 leading-relaxed drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]">
                  {restaurant.description.substring(0, 120)}...
                </p>

                {/* CTA Button - refined on mobile */}
                <Link
                  href={`/restaurants/${restaurant.slug}`}
                  className="inline-flex items-center gap-2 px-5 py-2 md:px-8 md:py-4 bg-accent text-white font-lato text-xs md:text-base font-semibold rounded-full hover:bg-accent/90 transition-all duration-300 hover:scale-105 hover:gap-4 group/btn mt-2 md:mt-4 drop-shadow-[0_6px_12px_rgba(0,0,0,0.9)]"
                >
                  Découvrir
                  <ArrowRight
                    size={16}
                    className="md:w-5 md:h-5 transition-transform duration-300 group-hover/btn:translate-x-1"
                  />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Local SEO Content - Positioned visually off-screen or subtly at the bottom depending on design, here keeping it sr-only to maintain the 100dvh full-screen luxury aesthetic, while satisfying SEO requirements completely */}
      <section className="sr-only">
        <h2>Restaurant Nice centre-ville : L&apos;Excellence du Groupe Grand Café de France</h2>
        <p>
          Découvrez une expérience gastronomique incontournable avec le Groupe Grand Café de France. Que vous cherchiez une <strong>brasserie avenue Jean Médecin Nice</strong> pour un déjeuner ensoleillé, ou un <strong>café restaurant rue piétonne Nice</strong> pour un dîner romantique, nos établissements répondront à toutes vos envies. 
        </p>
        <p>
          Profitez d&apos;une magnifique <strong>terrasse Nice centre</strong> pour siroter l&apos;un de nos cocktails signature, ou installez-vous confortablement en salle intérieure pour déguster une cuisine française authentique. L&apos;endroit idéal pour votre <strong>déjeuner dîner Nice</strong>.
        </p>
        <h3>Nos Établissements à Nice</h3>
        <ul>
          <li><strong>Le Grand Café de France (Jean Médecin)</strong> : 13 Av Jean-Médecin, 06000 Nice. Une institution élégante.</li>
          <li><strong>Le Grand Café de France (Zone Piétonne)</strong> : 7 Rue de France, 06000 Nice. L&apos;ambiance conviviale au cœur de la ville.</li>
          <li><strong>Rina&apos;s Bar (Le Petit Café de France)</strong> : 7 Rue de France, 06000 Nice. Bar intimiste et cocktails sur la rue piétonne, l&apos;établissement frère de nos brasseries.</li>
        </ul>
      </section>
    </>
  );
}
