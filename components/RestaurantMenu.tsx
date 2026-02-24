"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Utensils, Wine } from "lucide-react";
import type { MenuItem } from "@/data/restaurants";

interface RestaurantMenuProps {
  menu: MenuItem[];
}

export default function RestaurantMenu({ menu }: RestaurantMenuProps) {
  // ÉTAPE 1 : SÉPARATION DES DONNÉES (Hard-Filtering)
  const FOOD_CATEGORIES = [
    // Grand Café Piétonne & Jean-Médecin
    "Traditions Françaises",
    "Hors d'Oeuvres",
    "Hummus Bar",
    "Salades",
    "Pizza Lovers",
    "Pâtes & Risotto",
    "The Fish Boy (Poissons)",
    "Viandes",
    "Huîtres & Coquillages",
    "Plateaux de Fruits de Mer",
    "Caviars",
    "Desserts",
    // Petit Café de France (Rina's Bar)
    "Les Incontournables",
    "Pizzas",
    "Appetizers / Entrées",
    "Plats / Main Course",
    "Desserts & Cocktails",
  ];

  const DRINK_CATEGORIES = [
    // Grand Café Piétonne & Jean-Médecin
    "Champagnes",
    "Nos Vins Rouges d'Exception",
    "Vins & Rosés",
    "Cocktails Signature",
    // Petit Café de France (Rina's Bar)
    "Vins Blancs",
    "Vins Rouges",
    "Vins Rosés",
  ];
  
  // Toggle state: 'cuisine' or 'bar'
  const [menuType, setMenuType] = useState<'cuisine' | 'bar'>('cuisine');
  
  // ÉTAPE 2 : Filter menu based on toggle with explicit category lists
  const filteredMenu = menu.filter(cat => {
    if (menuType === 'bar') {
      return DRINK_CATEGORIES.includes(cat.category);
    } else {
      return FOOD_CATEGORIES.includes(cat.category);
    }
  });

  const [activeCategory, setActiveCategory] = useState(filteredMenu[0]?.category || "");

  // Update active category when toggle changes
  const handleToggle = (type: 'cuisine' | 'bar') => {
    setMenuType(type);
    const newFilteredMenu = menu.filter(cat => {
      if (type === 'bar') {
        return DRINK_CATEGORIES.includes(cat.category);
      } else {
        return FOOD_CATEGORIES.includes(cat.category);
      }
    });
    setActiveCategory(newFilteredMenu[0]?.category || "");
  };

  if (!menu || menu.length === 0) {
    return (
      <div className="flex flex-col items-center gap-6 py-16">
        <Utensils size={64} className="text-accent/30" />
        <p className="font-lato text-lg text-primary/60">
          Notre carte sera bientôt disponible.
          <br />
          Contactez-nous pour plus d&apos;informations.
        </p>
      </div>
    );
  }

  const activeItems = filteredMenu.find((cat) => cat.category === activeCategory)?.items || [];

  // Dynamic background image based on toggle
  const backgroundImage = menuType === 'cuisine' 
    ? '/grand-cafe-de-france-jean-medecin/interieur/interieur3.jpeg'
    : '/grand-cafe-de-france-jean-medecin/bar/bar2.jpeg';

  return (
    <div 
      className="space-y-12 relative rounded-3xl overflow-hidden p-8 md:p-12"
      style={{
        backgroundImage: menuType === 'cuisine' 
          ? `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('${backgroundImage}')`
          : `linear-gradient(rgba(10, 25, 47, 0.35), rgba(10, 25, 47, 0.45)), url('${backgroundImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        transition: 'background-image 0.5s ease-in-out'
      }}
    >
      {/* Toggle Switch - Notre Cuisine / Nos Vins */}
      <div className="flex justify-center">
        <div className="inline-flex items-center bg-white rounded-full p-1.5 border-2 border-accent shadow-lg">
          <button
            onClick={() => handleToggle('cuisine')}
            className={`
              relative px-8 py-3 rounded-full font-lato text-base font-semibold
              transition-all duration-300 flex items-center gap-2
              ${
                menuType === 'cuisine'
                  ? 'bg-red-brasserie text-white shadow-md'
                  : 'text-primary hover:text-accent'
              }
            `}
          >
            <Utensils size={20} />
            <span>Notre Cuisine</span>
            {menuType === 'cuisine' && (
              <motion.div
                layoutId="activeToggle"
                className="absolute inset-0 bg-accent rounded-full -z-10"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
          </button>
          <button
            onClick={() => handleToggle('bar')}
            className={`
              relative px-8 py-3 rounded-full font-lato text-base font-semibold
              transition-all duration-300 flex items-center gap-2
              ${
                menuType === 'bar'
                  ? 'bg-red-brasserie text-white shadow-md'
                  : 'text-primary hover:text-accent'
              }
            `}
          >
            <Wine size={20} />
            <span>Nos Vins</span>
            {menuType === 'bar' && (
              <motion.div
                layoutId="activeToggle"
                className="absolute inset-0 bg-accent rounded-full -z-10"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
          </button>
        </div>
      </div>

      {/* Category Tabs - Horizontal Scrollable */}
      <div className="relative">
        <div className="overflow-x-auto scrollbar-hide -mx-4 px-4">
          <div className="flex gap-3 min-w-max md:justify-center">
            {filteredMenu.map((category) => (
              <button
                key={category.category}
                onClick={() => setActiveCategory(category.category)}
                className={`
                  relative px-6 py-3 rounded-full font-lato text-sm md:text-base font-medium
                  transition-all duration-300 whitespace-nowrap
                  ${
                    activeCategory === category.category
                      ? "bg-red-brasserie text-white shadow-lg shadow-accent/30"
                      : menuType === 'bar' 
                        ? "bg-white/10 text-white hover:bg-white/20"
                        : "bg-white/95 text-primary hover:bg-white shadow-md"
                  }
                `}
              >
                {category.category}
                {activeCategory === category.category && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-accent rounded-full -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Items Grid - ONLY Active Category */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {activeItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className={`
                group rounded-2xl p-6 transition-all duration-300
                ${menuType === 'bar' 
                  ? 'bg-white/10 backdrop-blur-sm border border-white/20 hover:border-accent/50'
                  : 'hover:border-accent/30'
                }
              `}
              style={menuType === 'cuisine' ? {
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                border: '1px solid rgba(220, 220, 220, 0.3)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
              } : {}}
            >
              <div className="flex flex-col gap-2">
                {/* Name */}
                <h4 className={`
                  font-playfair text-lg md:text-xl font-bold group-hover:text-accent transition-colors
                  ${menuType === 'bar' ? 'text-white' : 'text-primary'}
                `}>
                  {item.name}
                </h4>

                {/* Description */}
                {item.description && (
                  <p className={`
                    font-lato text-sm italic leading-relaxed
                    ${menuType === 'bar' ? 'text-white/80' : 'text-primary/70'}
                  `}>
                    {item.description}
                  </p>
                )}

                {/* Price — wraps freely on mobile */}
                <span className={`
                  font-playfair text-base md:text-xl font-bold break-words
                  ${menuType === 'bar' ? 'text-accent' : 'text-accent'}
                `}>
                  {item.price}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
