"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import type { Restaurant } from "@/data/restaurants";
import RestaurantMenu from "@/components/RestaurantMenu";
import ReservationModal from "@/components/ReservationModal";
import ReviewsCarousel from "@/components/ReviewsCarousel";

import Script from "next/script";

interface RestaurantContentProps {
  restaurant: Restaurant;
}

export default function RestaurantContent({ restaurant }: RestaurantContentProps) {

  const isRinasBar = restaurant.slug === 'rina-bar';
  const schemaType = isRinasBar ? ["BarOrPub", "Restaurant"] : "Restaurant";
  
  const restaurantSchema = {
    "@context": "https://schema.org",
    "@type": schemaType,
    "name": restaurant.name,
    "image": `https://www.grandcafe-nice.com${restaurant.imageHero}`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": restaurant.address.split(',')[0],
      "addressLocality": "Nice",
      "postalCode": "06000",
      "addressCountry": "FR"
    },
    "telephone": restaurant.phone,
    "servesCuisine": isRinasBar ? "Cocktails & Tapas" : "French",
    "priceRange": isRinasBar ? "€€" : "€€€",
    "url": `https://www.grandcafe-nice.com/restaurants/${restaurant.slug}`,
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-end">
        <div className="absolute inset-0">
          <Image
            src={restaurant.imageHero}
            alt={restaurant.name}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 md:pb-32 text-white w-full"
        >
          <span className="inline-block px-4 py-1.5 rounded-full backdrop-blur-md bg-black/30 border border-accent/30 shadow-[0_2px_16px_rgba(0,0,0,0.4)] mb-4">
            <p className="font-lato text-accent text-sm md:text-base uppercase tracking-widest">
              {restaurant.subtitle}
            </p>
          </span>
          <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            {restaurant.name} <span className="sr-only">Nice {restaurant.subtitle}</span>
          </h1>
          <div className="flex flex-wrap gap-6 text-white/90">
            <div className="flex items-center gap-2">
              <MapPin size={20} className="text-accent" />
              <span className="font-lato text-sm md:text-base">{restaurant.address}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={20} className="text-accent" />
              <a href={`tel:${restaurant.phone}`} className="font-lato text-sm md:text-base hover:text-accent transition-colors">
                {restaurant.phone}
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Description Section - Split Layout with Video */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Split Layout: Text Left, Video Right */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex-1 space-y-8"
            >
              <div className="w-24 h-px bg-accent" />
              <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-red-brasserie">
                L&apos;Histoire de {restaurant.name} à Nice
              </h2>
              <p className="font-lato text-lg md:text-xl text-primary/80 leading-relaxed">
                {restaurant.description}
              </p>
            </motion.div>

            {/* Right Column - Vertical Video */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-1 flex justify-center"
            >
              <div className="relative w-full max-w-md">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto max-h-[600px] md:max-h-[75vh] object-cover rounded-2xl shadow-2xl"
                  style={{ pointerEvents: 'none' }}
                >
                  <source src={restaurant.aboutUsVideo} type="video/mp4" />
                  Votre navigateur ne supporte pas la lecture de vidéos.
                </video>
              </div>
            </motion.div>
          </div>

          {/* History Images Grid - Keep below if exists */}
          {restaurant.historyImages && restaurant.historyImages.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid md:grid-cols-2 gap-6 mt-16"
            >
              {restaurant.historyImages.map((image, index) => (
                <div
                  key={image}
                  className="relative aspect-[16/10] rounded-2xl overflow-hidden group"
                >
                  <Image
                    src={image}
                    alt={`${restaurant.name} - Histoire ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-20 md:py-32 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-8 mb-16"
          >
            <div className="w-24 h-px bg-accent mx-auto" />
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-red-brasserie">
                Notre Carte : {isRinasBar ? "Cocktails & Bar" : "Brasserie"} à Nice
            </h2>
          </motion.div>

          <RestaurantMenu menu={restaurant.menu} />
        </div>
      </section>

      {/* Gallery Section */}
      {restaurant.gallery && restaurant.gallery.length > 0 && (
        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-8 mb-16"
            >
              <div className="w-24 h-px bg-accent mx-auto" />
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-red-brasserie">
                Galerie Photo
              </h2>
              <p className="font-lato text-lg text-primary/70 max-w-2xl mx-auto">
                Découvrez l&apos;ambiance unique de notre établissement
              </p>
            </motion.div>

            {/* Horizontal Scrolling Gallery */}
            <div className="relative">
              {/* Previous Button - Desktop only */}
              <button
                onClick={() => {
                  const container = document.getElementById('gallery-scroll');
                  if (container) {
                    container.scrollBy({ left: -400, behavior: 'smooth' });
                  }
                }}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110 hidden lg:flex items-center justify-center"
                aria-label="Photo précédente"
              >
                <ChevronLeft className="w-6 h-6 text-primary" />
              </button>

              {/* Next Button - Desktop only */}
              <button
                onClick={() => {
                  const container = document.getElementById('gallery-scroll');
                  if (container) {
                    container.scrollBy({ left: 400, behavior: 'smooth' });
                  }
                }}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110 hidden lg:flex items-center justify-center"
                aria-label="Photo suivante"
              >
                <ChevronRight className="w-6 h-6 text-primary" />
              </button>

              <div id="gallery-scroll" className="flex gap-4 md:gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
                {restaurant.gallery.map((media, index) => {
                  const isVideo = media.toLowerCase().endsWith('.mp4') || media.toLowerCase().endsWith('.webm') || media.toLowerCase().endsWith('.mov');
                  
                  return (
                    <motion.div
                      key={media}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      className="relative flex-shrink-0 w-[85vw] sm:w-[70vw] md:w-[45vw] lg:w-[30vw] aspect-[4/3] rounded-2xl overflow-hidden snap-center"
                    >
                      {isVideo ? (
                        <video
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="absolute inset-0 w-full h-full object-cover"
                        >
                          <source src={media} type="video/mp4" />
                          Votre navigateur ne supporte pas la lecture de vidéos.
                        </video>
                      ) : (
                        <Image
                          src={media}
                          alt={`${restaurant.name} - Photo ${index + 1}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 85vw, (max-width: 768px) 70vw, (max-width: 1024px) 45vw, 30vw"
                        />
                      )}
                    </motion.div>
                  );
                })}
              </div>
              
              {/* Scroll Indicator */}
              <div className="text-center mt-4">
                <p className="text-sm text-primary/50 font-lato">
                  ← Faites défiler pour voir plus →
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Reservation Section - Split Layout */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-primary rounded-3xl overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col lg:flex-row lg:items-center">
              {/* Left Column - Dish Image (40%) */}
              <div className="lg:w-[40%] relative min-h-[300px] lg:min-h-[600px] order-1">
                <Image
                  src="/grand-cafe-de-france-jean-medecin/interieur/interieur5.jpeg"
                  alt="Plat signature Le Grand Café de France"
                  fill
                  className="object-cover w-full"
                  style={{ objectPosition: 'center center' }}
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                {/* Subtle Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-primary/30 lg:bg-gradient-to-r lg:from-transparent lg:to-primary/40" />
              </div>

              {/* Right Column - Reservation Content (60%) */}
              <div className="lg:w-[60%] p-12 md:p-16 text-center flex flex-col justify-center items-center space-y-8 order-2">
                <Clock size={48} className="text-accent" />
                <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white">
                  Réservez Votre Table
                </h2>
                <p className="font-lato text-lg md:text-xl text-white/90 max-w-lg">
                  Vivez une expérience gastronomique inoubliable. Notre équipe vous accueille du lundi au dimanche.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
                  <ReservationModal
                    restaurantName={restaurant.name}
                    phone={restaurant.booking.phone}
                    email={restaurant.booking.email}
                    slug={restaurant.slug}
                  />
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(restaurant.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-lato text-base font-semibold rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20"
                  >
                    <MapPin size={20} />
                    Voir sur Maps
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reviews Section */}
      <ReviewsCarousel />
      
      {/* Schema.org JSON-LD Script */}
      <Script
        id={`schema-${restaurant.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
        strategy="beforeInteractive"
      />
    </main>
  );
}
