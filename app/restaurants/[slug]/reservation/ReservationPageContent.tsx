"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, MessageSquare, ArrowLeft, Clock } from "lucide-react";
import type { Restaurant } from "@/data/restaurants";

interface ReservationPageContentProps {
  restaurant: Restaurant;
}

export default function ReservationPageContent({ restaurant }: ReservationPageContentProps) {
  const smsBody = `Bonjour, je souhaite réserver une table au ${restaurant.name} pour `;
  const emailSubject = `Réservation ${restaurant.name}`;
  const emailBody = `Bonjour,\n\nJe souhaite réserver une table au ${restaurant.name}.\n\nNombre de personnes : \nDate souhaitée : \nHeure souhaitée : \n\nMerci de me confirmer la disponibilité.\n\nCordialement`;

  const smsLink = `sms:${restaurant.booking.phone}${/iPhone|iPad|iPod/.test(typeof navigator !== 'undefined' ? navigator.userAgent : '') ? '&' : '?'}body=${encodeURIComponent(smsBody)}`;
  const emailLink = `mailto:${restaurant.booking.email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section with Restaurant Image */}
      <section className="relative h-[40vh] md:h-[50vh]">
        <div className="absolute inset-0">
          <Image
            src={restaurant.image}
            alt={restaurant.name}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/60 to-primary/30" />
        </div>

        {/* Back Button */}
        <Link
          href={`/restaurants/${restaurant.slug}`}
          className="absolute top-24 left-4 md:left-8 z-10 flex items-center gap-2 px-4 py-2 bg-white/90 hover:bg-white rounded-full transition-all duration-300 shadow-lg"
        >
          <ArrowLeft size={20} className="text-primary" />
          <span className="font-lato text-sm font-semibold text-primary">Retour</span>
        </Link>

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-7xl mx-auto"
          >
            <p className="font-lato text-accent text-sm md:text-base uppercase tracking-widest mb-2">
              {restaurant.subtitle}
            </p>
            <h1 className="font-playfair text-4xl md:text-6xl font-bold text-white mb-4">
              Réserver une table
            </h1>
            <p className="font-lato text-xl md:text-2xl text-white/90">
              {restaurant.name}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Reservation Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Unified Horizontal Card - Luxury Ticket Style */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-[20px] shadow-xl overflow-hidden mb-8"
            >
              <div className="flex flex-col lg:flex-row">
                {/* Left Column - Text Content (60%) */}
                <div className="lg:w-[60%] p-8 md:p-12 order-2 lg:order-1">
                  <div className="mb-8">
                    <div className="w-24 h-px bg-accent mb-6" />
                    <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary mb-4">
                      Informations du restaurant
                    </h2>
                    <p className="font-lato text-lg text-primary/70 leading-relaxed">
                      {restaurant.description}
                    </p>
                  </div>

                  {/* Contact Details */}
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="flex items-start gap-4 p-4 bg-primary/5 rounded-2xl">
                      <MapPin className="text-red-brasserie mt-1 flex-shrink-0" size={24} />
                      <div>
                        <p className="font-lato font-semibold text-primary mb-1">Adresse</p>
                        <p className="font-lato text-sm text-primary/70">{restaurant.address}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-primary/5 rounded-2xl">
                      <Phone className="text-red-brasserie mt-1 flex-shrink-0" size={24} />
                      <div>
                        <p className="font-lato font-semibold text-primary mb-1">Téléphone</p>
                        <a
                          href={`tel:${restaurant.phone}`}
                          className="font-lato text-sm text-red-brasserie hover:underline"
                        >
                          {restaurant.phone}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Opening Hours Info */}
                  <div className="flex items-center justify-center gap-2 p-4 bg-accent/10 rounded-2xl border border-accent/20">
                    <Clock className="text-red-brasserie" size={20} />
                    <p className="font-lato text-sm text-primary">
                      Ouvert du lundi au dimanche
                    </p>
                  </div>
                </div>

                {/* Right Column - Image (40%) */}
                <div className="lg:w-[40%] relative min-h-[300px] lg:min-h-[600px] order-1 lg:order-2">
                  <Image
                    src="/grand-cafe-de-france-jean-medecin/interieur/interieur.jpeg"
                    alt={`Intérieur ${restaurant.name}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  {/* Subtle Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent lg:bg-gradient-to-l lg:from-transparent lg:via-transparent lg:to-white/10" />
                </div>
              </div>
            </motion.div>

            {/* Reservation Methods */}
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary mb-4">
                  Choisissez votre méthode de réservation
                </h2>
                <p className="font-lato text-primary/70">
                  Sélectionnez la méthode qui vous convient le mieux
                </p>
              </div>

              <div className="space-y-4">
                {/* SMS Button */}
                <a
                  href={smsLink}
                  className="flex items-center justify-center gap-3 w-full px-6 py-6 bg-accent text-white font-lato text-lg font-semibold rounded-2xl hover:bg-accent/90 transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-accent/20"
                >
                  <MessageSquare size={28} />
                  <span>Réserver par SMS</span>
                </a>

                {/* Email Button */}
                <a
                  href={emailLink}
                  className="flex items-center justify-center gap-3 w-full px-6 py-6 bg-primary text-white font-lato text-lg font-semibold rounded-2xl hover:bg-primary/90 transition-all duration-300 hover:scale-[1.02] shadow-lg"
                >
                  <Mail size={28} />
                  <span>Réserver par Email</span>
                </a>
              </div>

              {/* Additional Info */}
              <div className="mt-8 p-6 bg-primary/5 rounded-2xl">
                <p className="font-lato text-sm text-primary/70 text-center">
                  Notre équipe vous répondra dans les plus brefs délais pour confirmer votre réservation.
                  Pour toute demande spéciale, n&apos;hésitez pas à nous contacter directement.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
