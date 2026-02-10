"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { MapPin, Phone, Clock, Mail, Instagram, Facebook } from "lucide-react";

// Configuration des informations par restaurant
const RESTAURANT_INFO = {
  "grand-cafe-zone-pietonne": {
    name: "Le Grand Café de France",
    subtitle: "Zone Piétonne",
    address: "7 Rue de France, 06000 Nice",
    phone: "04 93 53 97 38",
    email: "reservation@grandcafe-nice.com",
    hours: "Lundi - Dimanche : 08h - 00h",
    mapLink: "https://maps.google.com/?q=7+Rue+de+France+Nice",
  },
  "rina-bar": {
    name: "Le Petit Café de France",
    subtitle: "Rina's Bar",
    address: "7 Rue de France, 06000 Nice",
    phone: "04 92 00 33 00",
    email: "reservation@rina-bar.com",
    hours: "Lundi - Dimanche : 08h - 00h",
    mapLink: "https://maps.google.com/?q=7+Rue+de+France+Nice",
  },
  "grand-cafe-jean-medecin": {
    name: "Le Grand Café de France",
    subtitle: "Jean-Médecin",
    address: "13 Av Jean-Médecin, 06000 Nice",
    phone: "04 93 53 97 38",
    email: "reservation@grandcafe-nice.com",
    hours: "Lundi - Dimanche : 08h - 00h",
    mapLink: "https://maps.google.com/?q=13+Avenue+Jean+Médecin+Nice",
  },
  default: {
    name: "Café de France",
    subtitle: "Groupe de Restaurants",
    address: "Nice, France",
    phone: "04 93 53 97 38",
    email: "contact@cafes-de-france.com",
    hours: "Lundi - Dimanche : 08h - 00h",
    mapLink: "https://maps.google.com/?q=Nice+France",
  },
};

export default function Footer() {
  const pathname = usePathname();

  // Ne pas afficher le footer sur la page d'accueil
  if (pathname === "/") {
    return null;
  }

  // Détecter le restaurant actuel depuis l'URL
  const getCurrentRestaurant = () => {
    const match = pathname.match(/\/restaurants\/([^\/]+)/);
    if (match && match[1]) {
      const slug = match[1];
      return RESTAURANT_INFO[slug as keyof typeof RESTAURANT_INFO] || RESTAURANT_INFO.default;
    }
    return RESTAURANT_INFO.default;
  };

  const restaurant = getCurrentRestaurant();

  return (
    <footer className="bg-primary text-white border-t border-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Restaurant Name & Subtitle */}
        <div className="text-center mb-12">
          <h3 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-2">
            {restaurant.name}
          </h3>
          <p className="text-accent font-lato text-sm uppercase tracking-widest">
            {restaurant.subtitle}
          </p>
          <div className="w-24 h-px bg-accent mx-auto mt-4" />
        </div>

        {/* 3 Columns Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center md:text-left">
          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-playfair text-xl font-semibold text-white mb-4 flex items-center justify-center md:justify-start gap-2">
              <MapPin size={20} className="text-accent" />
              Contact
            </h4>
            <div className="space-y-3 font-lato font-light text-sm">
              <a
                href={restaurant.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 hover:text-accent transition-colors justify-center md:justify-start"
              >
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>{restaurant.address}</span>
              </a>
              <a
                href={`tel:${restaurant.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 hover:text-accent transition-colors justify-center md:justify-start"
              >
                <Phone size={16} />
                <span>{restaurant.phone}</span>
              </a>
              <a
                href={`mailto:${restaurant.email}`}
                className="flex items-center gap-2 hover:text-accent transition-colors justify-center md:justify-start"
              >
                <Mail size={16} />
                <span>{restaurant.email}</span>
              </a>
            </div>
          </div>

          {/* Horaires */}
          <div className="space-y-4">
            <h4 className="font-playfair text-xl font-semibold text-white mb-4 flex items-center justify-center md:justify-start gap-2">
              <Clock size={20} className="text-accent" />
              Horaires
            </h4>
            <div className="font-lato font-light text-sm">
              <p>{restaurant.hours}</p>
              <p className="text-accent mt-2 text-xs">Service continu</p>
            </div>
          </div>

          {/* Réseaux Sociaux */}
          <div className="space-y-4">
            <h4 className="font-playfair text-xl font-semibold text-white mb-4 text-center md:text-left">
              Suivez-nous
            </h4>
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="https://www.instagram.com/legrandcafedefrance_/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-accent hover:bg-accent/10 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.facebook.com/grandcafedefrance/?locale=fr_FR"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-accent hover:bg-accent/10 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
            <div className="mt-6">
              <Link
                href="/"
                className="inline-block px-6 py-3 bg-accent text-white font-lato text-sm font-semibold rounded-full hover:bg-accent/90 transition-all duration-300 hover:scale-105"
              >
                Nos Restaurants
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-lato font-light text-white/50">
            <p>© 2026 Café de France. Tous droits réservés.</p>
            <div className="flex gap-6">
              <Link href="/mentions-legales" className="hover:text-accent transition-colors">
                Mentions légales
              </Link>
              <Link href="/politique-confidentialite" className="hover:text-accent transition-colors">
                Confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
