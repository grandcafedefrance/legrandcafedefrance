export interface Restaurant {
  slug: string;
  name: string;
  subtitle: string;
  description: string;
  image: string;
  imageHero: string;
  address: string;
  phone: string;
  menu: MenuItem[];
  gallery?: string[];
  historyImages?: string[];
  booking: {
    phone: string;
    email: string;
  };
  aboutUsVideo: string;
}

export interface MenuItem {
  category: string;
  items: {
    name: string;
    description?: string;
    price: string;
  }[];
}

export const RESTAURANTS: Restaurant[] = [
  {
    slug: "grand-cafe-zone-pietonne",
    name: "Grand Café de France",
    subtitle: "Zone Piétonne",
    description:
      "Institution niçoise depuis 1975, le  Grand Café de France incarne une brasserie de prestige unique, mêlant élégance, convivialité et charme, au cœur de la zone piétonne, ouverte tous les jours. ",
    image: "/grand-cafe-de-France-pietonne/hero/grand-cafe-france-nice-rue-pietonne-facade-451.jpg",
    aboutUsVideo:"/grand-cafe-de-France-pietonne/video/notre-histoire.mp4",
    imageHero :"/grand-cafe-de-France-pietonne/hero/grand-cafe-france-nice-rue-pietonne-facade-451.jpg",
    address: "7 Rue de France, 06000 Nice",
    phone: "04 93 53 97 38",
    gallery: [
      "/grand-cafe-de-France-pietonne/gallery/grand-cafe-france-nice-rue-pietonne-gallery-1.jpg",
      "/grand-cafe-de-France-pietonne/gallery/grand-cafe-france-nice-rue-pietonne-gallery-2.jpg",
      "/grand-cafe-de-France-pietonne/gallery/grand-cafe-france-nice-rue-pietonne-gallery-3.jpg",
      "/grand-cafe-de-France-pietonne/gallery/grand-cafe-france-nice-rue-pietonne-gallery-4.jpg",
      "/grand-cafe-de-France-pietonne/gallery/photo-6.mp4",
      "/grand-cafe-de-France-pietonne/gallery/grand-cafe-france-nice-rue-pietonne-gallery-7.jpg",
      "/grand-cafe-de-France-pietonne/gallery/grand-cafe-france-nice-rue-pietonne-gallery-8.jpg",
      "/grand-cafe-de-France-pietonne/gallery/grand-cafe-france-nice-rue-pietonne-gallery-9.jpg",
      "/grand-cafe-de-France-pietonne/gallery/grand-cafe-france-nice-rue-pietonne-gallery-10.jpg",
      "/grand-cafe-de-France-pietonne/gallery/grand-cafe-france-nice-rue-pietonne-gallery-12.jpg",
      "/grand-cafe-de-France-pietonne/gallery/grand-cafe-france-nice-rue-pietonne-gallery-13.jpg",
      "/grand-cafe-de-France-pietonne/gallery/grand-cafe-france-nice-rue-pietonne-gallery-14.jpg",
      "/grand-cafe-de-France-pietonne/gallery/grand-cafe-france-nice-rue-pietonne-gallery-15.jpg",
      "/grand-cafe-de-France-pietonne/gallery/grand-cafe-france-nice-rue-pietonne-gallery-16.jpg",
      "/grand-cafe-de-France-pietonne/gallery/grand-cafe-france-nice-rue-pietonne-gallery-17.jpg",
      "/grand-cafe-de-France-pietonne/gallery/grand-cafe-france-nice-rue-pietonne-gallery-18.jpg",
      "/grand-cafe-de-France-pietonne/gallery/grand-cafe-france-nice-rue-pietonne-gallery-19.jpg",
      "/grand-cafe-de-France-pietonne/gallery/grand-cafe-france-nice-rue-pietonne-gallery-20.jpg",
      "/grand-cafe-de-France-pietonne/gallery/grand-cafe-france-nice-rue-pietonne-gallery-21.jpg",
      "/grand-cafe-de-France-pietonne/gallery/grand-cafe-france-nice-rue-pietonne-gallery-22.jpg",
      "/grand-cafe-de-France-pietonne/gallery/grand-cafe-france-nice-rue-pietonne-gallery-23.jpg",
      "/grand-cafe-de-France-pietonne/gallery/photo-24.mp4",
      "/grand-cafe-de-France-pietonne/gallery/grand-cafe-france-nice-rue-pietonne-gallery-25.jpg",
      "/grand-cafe-de-France-pietonne/gallery/grand-cafe-france-nice-rue-pietonne-gallery-26.jpg",
      "/grand-cafe-de-France-pietonne/gallery/grand-cafe-france-nice-rue-pietonne-gallery-27.jpg",
      "/grand-cafe-de-France-pietonne/gallery/grand-cafe-france-nice-rue-pietonne-gallery-28.jpg",
      "/grand-cafe-de-France-pietonne/gallery/grand-cafe-france-nice-rue-pietonne-gallery-29.jpg",
    ],
    historyImages: [
      
    ],
    booking: {
      phone: "0493539738",
      email: "reservation@grandcafe-nice.com",
    },
    menu: [
      {
        category: "Traditions Françaises",
        items: [
          {
            name: "Soupe à l'Oignon Gratinée",
            description: "French onion soup gratinée",
            price: "19.00€",
          },
          {
            name: "Soupe de Poissons",
            description: "Rouille & croûtons",
            price: "19.00€",
          },
          {
            name: "Assiette de Fromages",
            description: "Comté, Tome grise, Chèvre, Camembert",
            price: "19.50€",
          },
          {
            name: "Cuisses de Grenouilles",
            description: "Au beurre persillé (7 pcs)",
            price: "21.00€",
          },
          {
            name: "Escargots de Bourgogne",
            description: "Au beurre persillé (12 pcs)",
            price: "19.00€",
          },
          {
            name: "Foie Gras Mi-Cuit",
            description: "Au Cognac, pain mendiant",
            price: "22.00€",
          },
        ],
      },
      {
        category: "Hors d'Oeuvres",
        items: [
          {
            name: "Oeufs Mimosa",
            description: "Copeaux de truffe",
            price: "13.00€",
          },
          {
            name: "Camembert Rôti",
            description: "Roasted Camembert Cheese",
            price: "18.00€",
          },
          {
            name: "Bouquet de Crevettes",
            description: "6 pièces, sauce cocktail",
            price: "27.00€",
          },
          {
            name: "6 Huîtres Fines de Claire N°2",
            description: "Sauce mignonnette",
            price: "26.00€",
          },
          {
            name: "Fritto Misto di Mare",
            description: "Portofino style",
            price: "21.00€",
          },
          { name: "Fish & Chips (Entrée)", price: "21.00€" },
        ],
      },
      {
        category: "Hummus Bar",
        items: [
          { name: "Hummus Classique", price: "10.00€" },
          { name: "Hummus Jalapeños", price: "11.50€" },
          { name: "Hummus Boeuf", price: "11.50€" },
          { name: "Hummus Tomates Séchées", price: "11.50€" },
          { name: "Hummus Poulet", price: "11.50€" },
          { name: "Hummus Légumes", price: "11.50€" },
        ],
      },
      {
        category: "Salades",
        items: [
          {
            name: "Salade Verte",
            description: "Green mix salad",
            price: "9.00€",
          },
          {
            name: "Salade Cesar",
            description: "Poulet ou Crevettes",
            price: "19.50€",
          },
          {
            name: "Salade Caprese",
            description: "Tomates, Mozzarella, Basilic",
            price: "19.50€",
          },
          {
            name: "Salade Niçoise",
            description: "Ventrèche de thon",
            price: "19.50€",
          },
        ],
      },
      {
        category: "Pizza Lovers",
        items: [
          {
            name: "Focaccia Fantastica",
            description: "Bread, sea salt, olive oil, rosemary",
            price: "9.00€",
          },
          {
            name: "Margherita",
            description: "Tomato sauce, cheese, basil",
            price: "13.00€",
          },
          { name: "Regina", description: "Ham, mushrooms", price: "18.00€" },
          {
            name: "Napolitana",
            description: "Anchovies, olives, capers",
            price: "15.00€",
          },
          { name: "Pepperoni", description: "Spicy sausage", price: "18.00€" },
          {
            name: "Aubergine",
            description: "Eggplant, garlic, parsley",
            price: "18.00€",
          },
          { name: "Parma", description: "Parma ham, arugula", price: "18.00€" },
          { name: "Neptune", description: "Tuna, onion", price: "18.00€" },
          { name: "4 Fromages", description: "4 Cheeses", price: "18.00€" },
          {
            name: "Meat Lovers",
            description: "Minced beef, egg, onion",
            price: "18.00€",
          },
          { name: "Saumon", description: "Cream, salmon", price: "18.00€" },
          {
            name: "Tartufo",
            description: "Truffle cream, tuber aestivum",
            price: "29.00€",
          },
        ],
      },
      {
        category: "Pâtes & Risotto",
        items: [
          { name: "Rigatoni Arrabiata", price: "16.00€" },
          {
            name: "Rigatoni Alla Norma",
            description: "Aubergines, tomates, basilic",
            price: "17.50€",
          },
          { name: "Linguini Bolognaise", price: "19.50€" },
          { name: "Linguini Carbonara", price: "19.50€" },
          { name: "Mac & Cheese", price: "22.00€" },
          { name: "Ravioli à la Truffe", price: "24.00€" },
          {
            name: "Linguini aux Vongoles",
            description: "Clams",
            price: "28.00€",
          },
          { name: "Risotto Asperges & Gambas", price: "28.00€" },
        ],
      },
      {
        category: "The Fish Boy (Poissons)",
        items: [
          {
            name: "Tartare Saumon Avocat",
            description: "Pesto, pignons, tomates séchées",
            price: "23.00€",
          },
          {
            name: "Filet de Branzino",
            description: "Méditerranéo, olives, tomates cerises",
            price: "31.00€",
          },
          {
            name: "Saumon Rôti",
            description: "Riz et sauce vierge",
            price: "24.00€",
          },
          {
            name: "Fish & Chips (Plat)",
            description: "Le classique",
            price: "21.00€",
          },
          {
            name: "Paëlla aux Fruits de Mer",
            description: "Pour 2 personnes",
            price: "32.00€",
          },
          { name: "Linguine Fruits de Mer", price: "32.00€" },
          {
            name: "Moules Frites",
            description: "Poulette, Marinière, Provençale ou Curry",
            price: "19.50€",
          },
        ],
      },
      {
        category: "Viandes",
        items: [
          { name: "Hamburger Frites", price: "21.50€" },
          {
            name: "Steak Tartare",
            description: "Pommes frites",
            price: "22.00€",
          },
          {
            name: "Tagliata de Boeuf",
            description: "Parmesan, roquette",
            price: "24.00€",
          },
          {
            name: "Paillard de Poulet",
            description: "Salade, pommes de terre",
            price: "21.00€",
          },
          {
            name: "Magret de Canard",
            description: "Sauce miel, pommes parisiennes",
            price: "20.00€",
          },
          {
            name: "Steak Faux-Filet",
            description: "Sauce béarnaise",
            price: "29.00€",
          },
          {
            name: "Filet de Boeuf",
            description: "Purée, sauce poivre",
            price: "44.00€",
          },
        ],
      },
      {
        category: "Huîtres & Coquillages",
        items: [
          {
            name: "Huîtres Pléiade Poget N°5",
            description: "Par 6",
            price: "22.00€",
          },
          {
            name: "Huîtres Pléiade Poget N°3",
            description: "Par 6",
            price: "24.00€",
          },
          {
            name: "Huîtres Pléiade Poget N°2",
            description: "Par 6",
            price: "26.00€",
          },
          {
            name: "Huîtres Pléiade Poget N°1",
            description: "Par 6",
            price: "29.00€",
          },
          {
            name: "Huîtres Gillardeau N°3",
            description: "Par 6",
            price: "35.00€",
          },
          {
            name: "Huîtres Gillardeau N°2",
            description: "Par 6",
            price: "39.00€",
          },
          { name: "Bulots Cuits", description: "300g", price: "18.00€" },
          { name: "Crevettes", description: "Par 6", price: "27.00€" },
          { name: "Langoustine Pochée", description: "Pièce", price: "7.50€" },
          { name: "Tourteau Mayonnaise", description: "400g", price: "31.00€" },
          {
            name: "Homard Entier Froid",
            description: "600/800g",
            price: "66.00€",
          },
          { name: "Demi Homard Grillé", price: "39.50€" },
        ],
      },
      {
        category: "Plateaux de Fruits de Mer",
        items: [
          {
            name: "Plateau de l'Écailler",
            description: "3 Fine de Claire N°3, bulots, 3 crevettes",
            price: "32.00€",
          },
          {
            name: "Plateau Dégustation",
            description: "4 Gillardeau, 4 Poget N°2, 4 Fine de Claire N°3",
            price: "52.00€",
          },
          {
            name: "Plateau Crustacés",
            description:
              "12 crevettes, 4 langoustines, 1 demi homard, 1 tourteau",
            price: "129.00€",
          },
          {
            name: "Plateau Royal",
            description:
              "Gillardeau, huîtres, bulots, crevettes, langoustines, homard, tourteau",
            price: "220.00€",
          },
          {
            name: "Plateau Grand Café de France",
            description: "Le sommet : Homard, Langouste, Caviar, Vodka...",
            price: "790.00€",
          },
        ],
      },
      {
        category: "Caviars",
        items: [
          { name: "Osciètre 30g", price: "130.00€" },
          { name: "Osciètre 50g", price: "240.00€" },
          { name: "Beluga 50g", price: "690.00€" },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Crème brûlée", price: "9.00€" },
          { name: "Mousse au Chocolat", price: "9.00€" },
          { name: "Tiramisu", price: "9.00€" },
        ],
      },
      {
        category: "Champagnes",
        items: [
          { name: "Mercier (75cl)", price: "100.00€" },
          { name: "Moët & Chandon Brut (75cl)", price: "135.00€" },
          { name: "Veuve Clicquot Brut (75cl)", price: "190.00€" },
          { name: "Veuve Clicquot Rosé (75cl)", price: "210.00€" },
          { name: "Perrier-Jouët (75cl)", price: "155.00€" },
          { name: "Perrier-Jouët Blanc de Blanc (75cl)", price: "310.00€" },
          { name: "Perrier-Jouët Belle Epoque Brut (75cl)", price: "550.00€" },
          { name: "Perrier-Jouët Belle Epoque Rosé (75cl)", price: "990.00€" },
          { name: "Ruinart Brut (75cl)", price: "180.00€" },
          { name: "Ruinart Rosé (75cl)", price: "275.00€" },
          { name: "Ruinart Blanc de Blanc (75cl)", price: "320.00€" },
          { name: "Dom Pérignon (75cl)", price: "595.00€" },
          { name: "Krug Grande Cuvée (75cl)", price: "695.00€" },
          { name: "Roederer Brut (75cl)", price: "160.00€" },
          { name: "Roederer Cristal (75cl)", price: "695.00€" },
          { name: "Rare Millésime 2008 (75cl)", price: "695.00€" },
          { name: "Laurent-Perrier Grand Siècle (75cl)", price: "490.00€" },
          { name: "Coupe de Champagne (10cl)", price: "18.00€" },
          { name: "Coupe de Champagne Prestige (10cl)", price: "21.00€" },
        ],
      },
      {
        category: "Nos Vins Rouges d'Exception",
        items: [
          { name: "Pomerol AOP Pétrus - Grand Vin (2019)", price: "21 500.00€" },
          { name: "Pomerol AOP Pétrus - Grand Vin (2018)", price: "14 500.00€" },
          { name: "USA Napa Valley - Opus One 6 (2012)", price: "1 900.00€" },
          { name: "Gevrey Chambertin AOP Dugat-Py", price: "1 290.00€" },
          { name: "Masseto 2020 (Italie)", price: "990.00€" },
          { name: "Sassicaia 2018 (Italie)", price: "940.00€" },
          { name: "Haut-Médoc AOP Château Lamarque", price: "80.00€" },
          { name: "Margaux AOP Confidences de Prieuré", price: "190.00€" },
          { name: "Châteauneuf du Pape AOP Famille Perrin", price: "79.00€" },
        ],
      },
      {
        category: "Vins & Rosés",
        items: [
          { name: "Côtes de Provence AOP Tasquier (Btl)", price: "36.00€" },
          { name: "Domaine de la Source Bellet AOP (Local Nice)", price: "59.00€" },
          { name: "Chablis «Petit» AOP Ropiteau (Blanc)", price: "56.00€" },
          { name: "Sancerre AOP Domaine de St-Rombles (Blanc)", price: "56.00€" },
          { name: "Minuty Prestige (Rosé)", price: "59.00€" },
          { name: "Whispering Angel (Rosé)", price: "65.00€" },
          { name: "Domaine Ott «Château de Selle» (Rosé)", price: "89.00€" },
        ],
      },
      {
        category: "Cocktails Signature",
        items: [
          { name: "Aperol Spritz", description: "15cl", price: "14.50€" },
          { name: "St Germain Spritz", description: "15cl", price: "14.50€" },
          { name: "Limoncello Spritz", description: "15cl", price: "14.50€" },
          { name: "Moscow Mule", description: "Vodka, ginger beer", price: "14.50€" },
          { name: "Pina Colada", description: "Rhum, ananas, coco", price: "14.50€" },
          { name: "Sex on the Beach", description: "Vodka, orange, cranberry", price: "14.50€" },
          { name: "Espresso Martini", description: "Vodka, kahlua, café", price: "14.50€" },
          { name: "Mojito", description: "Rhum, menthe, citron vert", price: "14.50€" },
          { name: "Pornstar Martini", description: "Vodka, vanille, passion", price: "14.50€" },
        ],
      },
    ],
  },
  {
    slug: "rina-bar",
    name: "Petit Café de France",
    subtitle: "Rina's Bar",
    description:
      "Une atmosphère plus intimiste et chaleureuse. Le lieu idéal pour vos cafés matinaux ou vos cocktails en soirée",
    image: "/petit-cafe-de-france/hero/rinas-bar-nice-rue-pietonne-facade-2.jpg",
    aboutUsVideo:"/petit-cafe-de-france/video/notreHistoire.mp4",
    imageHero :"/petit-cafe-de-france/gallery/grand-cafe-france-nice-centre-nice-gallery-2.jpg",
    address: "7 Rue de France, 06000 Nice",
    phone: "04 92 00 33 00",
    gallery: [
      "/petit-cafe-de-france/gallery/grand-cafe-france-nice-centre-nice-gallery-1.jpg",
      "/petit-cafe-de-france/gallery/grand-cafe-france-nice-centre-nice-gallery-2.jpg",
      "/petit-cafe-de-france/gallery/grand-cafe-france-nice-centre-nice-gallery-3.jpg",
      "/petit-cafe-de-france/gallery/grand-cafe-france-nice-centre-nice-gallery-4.jpg",
      "/petit-cafe-de-france/gallery/grand-cafe-france-nice-centre-nice-gallery-5.jpg",
      "/petit-cafe-de-france/gallery/grand-cafe-france-nice-centre-nice-gallery-6.jpg",
      "/petit-cafe-de-france/gallery/grand-cafe-france-nice-centre-nice-gallery-7.jpg",
      "/petit-cafe-de-france/gallery/grand-cafe-france-nice-centre-nice-gallery-8.jpg",
      "/petit-cafe-de-france/gallery/grand-cafe-france-nice-centre-nice-gallery-9.jpg",
      "/petit-cafe-de-france/gallery/grand-cafe-france-nice-centre-nice-gallery-10.jpg",
    ],
    historyImages: [

    ],
    booking: {
      phone: "0600000000",
      email: "reservation@rina-bar.com",
    },
    menu: [
      {
        category: "Les Incontournables",
        items: [
          {
            name: "Moules-Frites",
            description: "Au choix : Poulette, Marinière, Provençale ou Curry",
            price: "17.50€",
          },
          {
            name: "Paëlla aux Fruits de Mer",
            description: "Prix par personne",
            price: "31.00€",
          },
        ],
      },
      {
        category: "Pizzas",
        items: [
          {
            name: "Marguerite",
            description: "Tomate, fromage, origan, olives",
            price: "13.00€",
          },
          {
            name: "Napolitaine",
            description: "Tomate, fromage, anchois, olives, origan, câpres",
            price: "14.50€",
          },
          {
            name: "Regina",
            description: "Tomate, fromage, jambon, champignons, origan",
            price: "15.00€",
          },
          {
            name: "Aubergine",
            description: "Fromage, tomate, aubergine, ail, persil, origan",
            price: "15.50€",
          },
          {
            name: "Neptune",
            description: "Tomate, thon, fromage, origan, oignon",
            price: "15.50€",
          },
          {
            name: "Quatre Fromages",
            description: "Tomate, assortiment de fromages, origan",
            price: "15.50€",
          },
          {
            name: "Parma",
            description: "Tomates, fromage, jambon de Parme, roquette",
            price: "16.00€",
          },
          {
            name: "Pepperoni",
            description: "Tomate, fromage, saucisse pimentée, origan",
            price: "16.50€",
          },
          {
            name: "Norvégienne",
            description: "Tomate cerise, saumon, crème, origan",
            price: "18.50€",
          },
          {
            name: "Pizza à la Truffe",
            description: "Truffle pizza",
            price: "29.00€",
          },
        ],
      },
      {
        category: "Appetizers / Entrées",
        items: [
          {
            name: "Soupe à l'oignon gratinée",
            description: "French Onion Soup Gratinée",
            price: "16.00€",
          },
          {
            name: "Camembert Rôti",
            description: "À l'huile de truffe 'tuber aestivum'",
            price: "18.50€",
          },
          {
            name: "Escargots de Bourgogne",
            description: "Beurre persillé (Garlic butter)",
            price: "17.50€",
          },
          {
            name: "Cuisses de Grenouilles",
            description: "7 pièces (Frog Legs)",
            price: "21.50€",
          },
          {
            name: "Foie Gras",
            description: "Duck Liver Pâté",
            price: "21.00€",
          },
          {
            name: "Cocktail de Crevettes",
            description: "6 pièces",
            price: "27.00€",
          },
          {
            name: "Huîtres Gillardeau n°2",
            description: "6 pièces",
            price: "39.00€",
          },
        ],
      },
      {
        category: "Salades",
        items: [
          {
            name: "Salade Verte",
            description: "Huile d'olive et basilic",
            price: "11.00€",
          },
          {
            name: "Salade César",
            description: "Poulet, salade romaine, anchois",
            price: "17.50€",
          },
          {
            name: "Salade Niçoise",
            description:
              "Thon, tomate, oeuf, cébette, févettes, anchois, olives, basilic, radis",
            price: "17.50€",
          },
          {
            name: "Salade Burrata",
            description: "Mozzarella Burrata, tomate, huile d'olive, basilic",
            price: "17.50€",
          },
          {
            name: "Salade d'Artichauts",
            description: "À l'Italienne",
            price: "19.50€",
          },
        ],
      },
      {
        category: "Pâtes & Risotto",
        items: [
          { name: "Penne à l'Arrabiata", price: "15.50€" },
          { name: "Risotto aux Moules", price: "16.50€" },
          { name: "Pâtes à la Bolognaise", price: "17.50€" },
          {
            name: "Gnocchi à la Truffe",
            description: "Crème de truffe, burrata",
            price: "22.50€",
          },
          {
            name: "Spaghetti Vongoles",
            description: "Aux palourdes (Clams)",
            price: "24.50€",
          },
          { name: "Risotto aux Gambas", price: "25.50€" },
          { name: "Spaghetti Fruits de Mer", price: "31.00€" },
          {
            name: "Spaghetti Homard",
            description: "Fruits de mer et demi-homard",
            price: "41.00€",
          },
        ],
      },
      {
        category: "Plats / Main Course",
        items: [
          {
            name: "Terre et Mer (Surf & Turf)",
            description: "Filet de boeuf avec gambas, frites",
            price: "35.50€",
          },
          {
            name: "Tartare de Boeuf",
            description: "Salade verte et frites",
            price: "21.00€",
          },
          {
            name: "Rina's Beef Burger",
            description: "Hamburger, frites et cornichons",
            price: "21.00€",
          },
          {
            name: "Rina's Chicken Burger",
            description: "Hamburger poulet, frites et cornichons",
            price: "21.00€",
          },
          {
            name: "Escalope Milanaise",
            description: "Volaille, frites, salade",
            price: "21.50€",
          },
          {
            name: "Faux-filet (NYC Steak)",
            description: "Sauce au poivre, salade verte et frites",
            price: "23.50€",
          },
          {
            name: "Coq au Vin",
            description: "Poulet du Chef, carottes, pomme de terre",
            price: "29.50€",
          },
          {
            name: "Saumon Rôti",
            description: "Frites, salade",
            price: "22.50€",
          },
          {
            name: "Filet de Loup",
            description: "Sea bass, sauce vierge, légumes",
            price: "26.50€",
          },
        ],
      },
      {
        category: "Huîtres & Coquillages",
        items: [
          {
            name: "Huîtres Pléiade Poget N°5",
            description: "Par 6 (Papillon)",
            price: "22.00€",
          },
          {
            name: "Huîtres Pléiade Poget N°3",
            description: "Par 6 (Fine de Claire)",
            price: "24.00€",
          },
          {
            name: "Huîtres Pléiade Poget N°2",
            description: "Par 6 (Fine de Claire)",
            price: "26.00€",
          },
          {
            name: "Huîtres Pléiade Poget N°1",
            description: "Par 6 (Fine de Claire)",
            price: "29.00€",
          },
          { name: "Gillardeau N°3", description: "Par 6", price: "35.00€" },
          { name: "Gillardeau N°2", description: "Par 6", price: "39.00€" },
          {
            name: "Bulots Cuits",
            description: "300g env. (Whelks)",
            price: "18.00€",
          },
          {
            name: "Langoustine Pochée",
            description: "La pièce",
            price: "7.50€",
          },
          {
            name: "Tourteau Mayonnaise",
            description: "La pièce (400g env.)",
            price: "31.00€",
          },
          {
            name: "Homard Entier Froid",
            description: "600g/800g",
            price: "66.00€",
          },
          {
            name: "Demi Homard Grillé",
            description: "Frites salade ou pâtes pink sauce",
            price: "39.50€",
          },
        ],
      },
      {
        category: "Plateaux de Fruits de Mer",
        items: [
          {
            name: "Plateau de l'Écailler",
            description: "3 Fine de Claire n°3, bulots, 3 crevettes",
            price: "34.00€",
          },
          {
            name: "Plateau Dégustation",
            description: "4 Gillardeau, 4 Poget n°2, 4 Fine de Claire n°3",
            price: "54.00€",
          },
          {
            name: "Plateau Grand Café de France",
            description:
              "4 huîtres n°5, n°3, n°2, n°1, bulots, 12 crevettes, 12 langoustines",
            price: "188.00€",
          },
          {
            name: "Plateau Crustacés",
            description: "12 crevettes, 12 langoustines, 1 homard entier",
            price: "196.00€",
          },
          {
            name: "Plateau Royal",
            description:
              "Gillardeau, huîtres, bulots, crevettes, langoustines, homard, tourteau",
            price: "229.00€",
          },
        ],
      },
      {
        category: "Vins Blancs",
        items: [
          {
            name: "Chardonnay Bourgogne AOP (Olivier de Pardon)",
            price: "Verre 11€ / Carafe 32€ / Btl 46€",
          },
          {
            name: "Chablis AOP (Maison Ropiteau)",
            price: "Verre 12.50€ / Carafe 35€ / Btl 50€",
          },
          { name: "Pouilly Fuissé AOP (Jaffelin)", price: "Btl 62.00€" },
          {
            name: "Vin de France UNO (Cave la Divine)",
            price: "Verre 7€ / Carafe 16.50€ / Btl 29€",
          },
          {
            name: "Var IGP (Divines Restanques)",
            price: "Verre 7.50€ / Carafe 18€ / Btl 33€",
          },
          {
            name: "Côtes de Provence AOP (Tasquier)",
            price: "Verre 8.50€ / Carafe 19€ / Btl 34€",
          },
          {
            name: "Bellet AOP (Domaine de la Source - Nice)",
            price: "Btl 59.00€",
          },
           {
            name: "Côtes de Provence AOP (Domaine Ott - Clos Mireille)",
            price: "Btl 89.00€",
          },
          {
            name: "Côtes de Provence AOP (Clos Réal)",
            price: "Verre 11€ / Carafe 25€ / Btl 42€",
          },
           {
            name: "Côtes de Provence AOP (Clos de Caille)",
            price: "Btl 100cl   79.00€",
          },
          {
            name: "Sancerre AOP (Paul Vattan)",
            price: "Verre 12.50€ / Carafe 35€ / Btl 50€",
          },
          {
            name: "Pouilly Fumé AOP (Domaine de Maltaverne)",
            price: "Btl 51.00€",
          },
          {
            name: "Gewurztraminer AOP (Ruhlmann Vieilles Vignes)",
            price: "Verre 11.50€ / Carafe 31€ / Btl 44€",
          },
          {
            name: "Pinot Grigio (Italie - Corte Martina)",
            price: "Verre 10.50€ / Carafe 30€ / Btl 41€",
          },
          { name: "Prosecco DOC (Villa Miazzi)", price: "Verre 11€ / Btl 59€" },
        ],
      },
      {
        category: "Vins Rouges",
        items: [
          {
            name: "Pinot Noir Grand Cru AOP (Clos de Vougeot)",
            price: "Btl 395.00€",
          },
          { name: "Pinot Noir AOP (Gevrey-Chambertin)", price: "Btl 174.00€" },
          {
            name: "Var IGP (Divines Restanques)",
            price: "Verre 7.50€ / Carafe 16.50€ / Btl 29€",
          },
          {
            name: "Côtes de Provence AOP (Tasquier)",
            price: "Verre 8.50€ / Carafe 19€ / Btl 24€",
          },
          {
            name: "Bellet AOP (Domaine de la Source - Nice)",
            price: "Btl 59.00€",
          },
          {
            name: "Côtes de Provence AOP (Clos Réal)",
            price: "Verre 8.50€ / Carafe 19€ / Btl 34€",
          },
          {
            name: "Côtes du Rhône AOP (Vieux Truffiers)",
            price: "Verre 9€ / Carafe 24€ / Btl 36€",
          },
          {
            name: "Châteauneuf du Pape AOP (Famille Perrin)",
            price: "Btl 79.00€",
          },
          { name: "Pétrus Pomerol (Grand Vin 2018)", price: "Btl 14 500.00€" },
          {
            name: "Saint Emilion Grand Cru AOP (Château Vieux Guinot)",
            price: "Verre 12.50€ / Carafe 38€ / Btl 54€",
          },
          {
            name: "Margaux AOP Grand Cru (Château Giscours)",
            price: "Btl 190.00€",
          },
          { name: "Château La Fleur-Pétrus 2018", price: "Btl 880.00€" },
          { name: "Château Cheval Blanc 2013", price: "Btl 1 590.00€" },
          { name: "Opus One 2012 (Napa Valley)", price: "Btl 1 900.00€" },
          {
            name: "Pinot Noir Pays D'Oc (Jeanjean)",
            price: "Verre 9€ / Carafe 18€ / Btl 33€",
          },
        ],
      },
      {
        category: "Vins Rosés",
        items: [
          {
            name: "Vin de France UNO (Cave la Divine)",
            price: "Verre 7€ / Carafe 16.50€ / Btl 29€",
          },
          {
            name: "Côtes de Provence AOP (Tasquier)",
            price: "Verre 8.50€ / Carafe 19€ / Btl 34€",
          },
          {
            name: "Côtes de Provence AOP (Clos Réal)",
            price: "Verre 11€ / Carafe 25€ / Btl 42€",
          },
          {
            name: "Château Rasque Côtes de Provence AOP",
            price: "Verre 12.50€ / Carafe 35€ / Btl 50€",
          },
          { name: "Minuty Prestige", price: "Btl 59.00€" },
          { name: "Domaine Ott (Clos Mireille)", price: "Btl 89.00€" },
          {
            name: "Whispering Angel",
            price: "Verre 15€ / Carafe 41€ / Btl 79€",
          },
          {
            name: "The One and Only (Clos de Caille)",
            description: "Bouteille 1 Litre",
            price: "79.00€",
          },
        ],
      },
      {
        category: "Desserts & Cocktails",
        items: [
          { name: "Crème brûlée", price: "9.00€" },
          { name: "Mousse au Chocolat", price: "9.00€" },
          { name: "Tiramisu", price: "9.00€" },
          {
            name: "Cocktails",
            description: "Aperol Spritz, St Germain Spritz, Mojito",
            price: "12.00€",
          },
        ],
      },
    ],
  },
  {
    slug: "grand-cafe-jean-medecin",
    name: "Grand Café de France",
    subtitle: "Jean-Médecin",
    description:
      "L'âme d'une brasserie parisienne, la lumière de la Côte d'Azur. Situé sur la célèbre avenue Jean-Médecin, Le Grand Café de France est le rendez-vous incontournable des amoureux du goût et de l'élégance. Une parenthèse gourmande et raffinée, à toute heure de la journée.",
    image: "/grand-cafe-de-france-jean-medecin/hero/grand-cafe-france-nice-jean-medecin-facade-464.jpeg",
    aboutUsVideo:"/grand-cafe-de-france-jean-medecin/video/histoire.mp4",
    imageHero :"/grand-cafe-de-france-jean-medecin/terasse/grand-cafe-france-nice-jean-medecin-terrasse-3.jpeg",
    address: "13 Av Jean-Médecin, 06000 Nice",
    phone: "04 93 53 97 38",
    gallery: [
      "/grand-cafe-de-france-jean-medecin/exterieur/grand-cafe-france-nice-jean-medecin-facade-2.jpeg",
      "/grand-cafe-de-france-jean-medecin/exterieur/grand-cafe-france-nice-jean-medecin-facade-537.jpeg",
      "/grand-cafe-de-france-jean-medecin/exterieur/grand-cafe-france-nice-jean-medecin-facade-3.jpeg",
      "/grand-cafe-de-france-jean-medecin/hero/grand-cafe-france-nice-jean-medecin-hero-934.jpeg",
      "/grand-cafe-de-france-jean-medecin/hero/grand-cafe-france-nice-jean-medecin-facade-2.jpeg",
      "/grand-cafe-de-france-jean-medecin/terasse/grand-cafe-france-nice-jean-medecin-terrasse-1.jpeg",
      "/grand-cafe-de-france-jean-medecin/interieur/grand-cafe-france-nice-jean-medecin-salle-interieure-6.jpeg", 
      "/grand-cafe-de-france-jean-medecin/interieur/grand-cafe-france-nice-jean-medecin-salle-interieure-5.jpeg", 
      "/grand-cafe-de-france-jean-medecin/interieur/grand-cafe-france-nice-jean-medecin-salle-interieure-4.jpeg",
      "/grand-cafe-de-france-jean-medecin/rooftop/grand-cafe-france-nice-jean-medecin-rooftop-4.jpg",
      "/grand-cafe-de-france-jean-medecin/rooftop/grand-cafe-france-nice-jean-medecin-rooftop-5.jpg",
      "/grand-cafe-de-france-jean-medecin/rooftop/grand-cafe-france-nice-jean-medecin-rooftop-6.jpg",
      "/grand-cafe-de-france-jean-medecin/rooftop/grand-cafe-france-nice-jean-medecin-rooftop-7.jpg",
      "/grand-cafe-de-france-jean-medecin/rooftop/grand-cafe-france-nice-jean-medecin-rooftop-8.jpg",
      "/grand-cafe-de-france-jean-medecin/rooftop/grand-cafe-france-nice-jean-medecin-rooftop-9.jpg",
      "/grand-cafe-de-france-jean-medecin/rooftop/grand-cafe-france-nice-jean-medecin-rooftop-10.jpg",
      "/grand-cafe-de-france-jean-medecin/rooftop/grand-cafe-france-nice-jean-medecin-rooftop-11.jpg",
      "/grand-cafe-de-france-jean-medecin/ecritaux/grand-cafe-france-nice-jean-medecin-ecritaux-1.jpeg",
      "/grand-cafe-de-france-jean-medecin/interieur/grand-cafe-france-nice-jean-medecin-salle-interieure-7.jpeg",
    ],
    booking: {
      phone: "0493539738",
      email: "reservation@grandcafe-nice.com",
    },
    menu: [
      {
        category: "Traditions Françaises",
        items: [
          {
            name: "Soupe à l'Oignon Gratinée",
            description: "French onion soup gratinée",
            price: "19.00€",
          },
          {
            name: "Soupe de Poissons",
            description: "Rouille & croûtons",
            price: "19.00€",
          },
          {
            name: "Assiette de Fromages",
            description: "Comté, Tome grise, Chèvre, Camembert",
            price: "19.50€",
          },
          {
            name: "Cuisses de Grenouilles",
            description: "Au beurre persillé (7 pcs)",
            price: "21.00€",
          },
          {
            name: "Escargots de Bourgogne",
            description: "Au beurre persillé (12 pcs)",
            price: "19.00€",
          },
          {
            name: "Foie Gras Mi-Cuit",
            description: "Au Cognac, pain mendiant",
            price: "22.00€",
          },
        ],
      },
      {
        category: "Hors d'Oeuvres",
        items: [
          {
            name: "Oeufs Mimosa",
            description: "Copeaux de truffe",
            price: "13.00€",
          },
          {
            name: "Camembert Rôti",
            description: "Roasted Camembert Cheese",
            price: "18.00€",
          },
          {
            name: "Bouquet de Crevettes",
            description: "6 pièces, sauce cocktail",
            price: "27.00€",
          },
          {
            name: "6 Huîtres Fines de Claire N°2",
            description: "Sauce mignonnette",
            price: "26.00€",
          },
          {
            name: "Fritto Misto di Mare",
            description: "Portofino style",
            price: "21.00€",
          },
          { name: "Fish & Chips (Entrée)", price: "21.00€" },
        ],
      },
      {
        category: "Hummus Bar",
        items: [
          { name: "Hummus Classique", price: "10.00€" },
          { name: "Hummus Jalapeños", price: "11.50€" },
          { name: "Hummus Boeuf", price: "11.50€" },
          { name: "Hummus Tomates Séchées", price: "11.50€" },
          { name: "Hummus Poulet", price: "11.50€" },
          { name: "Hummus Légumes", price: "11.50€" },
        ],
      },
      {
        category: "Salades",
        items: [
          {
            name: "Salade Verte",
            description: "Green mix salad",
            price: "9.00€",
          },
          {
            name: "Salade Cesar",
            description: "Poulet ou Crevettes",
            price: "19.50€",
          },
          {
            name: "Salade Caprese",
            description: "Tomates, Mozzarella, Basilic",
            price: "19.50€",
          },
          {
            name: "Salade Niçoise",
            description: "Ventrèche de thon",
            price: "19.50€",
          },
        ],
      },
      {
        category: "Pizza Lovers",
        items: [
          {
            name: "Focaccia Fantastica",
            description: "Bread, sea salt, olive oil, rosemary",
            price: "9.00€",
          },
          {
            name: "Margherita",
            description: "Tomato sauce, cheese, basil",
            price: "13.00€",
          },
          { name: "Regina", description: "Ham, mushrooms", price: "18.00€" },
          {
            name: "Napolitana",
            description: "Anchovies, olives, capers",
            price: "15.00€",
          },
          { name: "Pepperoni", description: "Spicy sausage", price: "18.00€" },
          {
            name: "Aubergine",
            description: "Eggplant, garlic, parsley",
            price: "18.00€",
          },
          { name: "Parma", description: "Parma ham, arugula", price: "18.00€" },
          { name: "Neptune", description: "Tuna, onion", price: "18.00€" },
          { name: "4 Fromages", description: "4 Cheeses", price: "18.00€" },
          {
            name: "Meat Lovers",
            description: "Minced beef, egg, onion",
            price: "18.00€",
          },
          { name: "Saumon", description: "Cream, salmon", price: "18.00€" },
          {
            name: "Tartufo",
            description: "Truffle cream, tuber aestivum",
            price: "29.00€",
          },
        ],
      },
      {
        category: "Pâtes & Risotto",
        items: [
          { name: "Rigatoni Arrabiata", price: "16.00€" },
          {
            name: "Rigatoni Alla Norma",
            description: "Aubergines, tomates, basilic",
            price: "17.50€",
          },
          { name: "Linguini Bolognaise", price: "19.50€" },
          { name: "Linguini Carbonara", price: "19.50€" },
          { name: "Mac & Cheese", price: "22.00€" },
          { name: "Ravioli à la Truffe", price: "24.00€" },
          {
            name: "Linguini aux Vongoles",
            description: "Clams",
            price: "28.00€",
          },
          { name: "Risotto Asperges & Gambas", price: "28.00€" },
        ],
      },
      {
        category: "The Fish Boy (Poissons)",
        items: [
          {
            name: "Tartare Saumon Avocat",
            description: "Pesto, pignons, tomates séchées",
            price: "23.00€",
          },
          {
            name: "Filet de Branzino",
            description: "Méditerranéo, olives, tomates cerises",
            price: "31.00€",
          },
          {
            name: "Saumon Rôti",
            description: "Riz et sauce vierge",
            price: "24.00€",
          },
          {
            name: "Fish & Chips (Plat)",
            description: "Le classique",
            price: "21.00€",
          },
          {
            name: "Paëlla aux Fruits de Mer",
            description: "Pour 2 personnes",
            price: "32.00€",
          },
          { name: "Linguine Fruits de Mer", price: "32.00€" },
          {
            name: "Moules Frites",
            description: "Poulette, Marinière, Provençale ou Curry",
            price: "19.50€",
          },
        ],
      },
      {
        category: "Viandes",
        items: [
          { name: "Hamburger Frites", price: "21.50€" },
          {
            name: "Steak Tartare",
            description: "Pommes frites",
            price: "22.00€",
          },
          {
            name: "Tagliata de Boeuf",
            description: "Parmesan, roquette",
            price: "24.00€",
          },
          {
            name: "Paillard de Poulet",
            description: "Salade, pommes de terre",
            price: "21.00€",
          },
          {
            name: "Magret de Canard",
            description: "Sauce miel, pommes parisiennes",
            price: "20.00€",
          },
          {
            name: "Steak Faux-Filet",
            description: "Sauce béarnaise",
            price: "29.00€",
          },
          {
            name: "Filet de Boeuf",
            description: "Purée, sauce poivre",
            price: "44.00€",
          },
        ],
      },
      {
        category: "Huîtres & Coquillages",
        items: [
          {
            name: "Huîtres Pléiade Poget N°5",
            description: "Par 6",
            price: "22.00€",
          },
          {
            name: "Huîtres Pléiade Poget N°3",
            description: "Par 6",
            price: "24.00€",
          },
          {
            name: "Huîtres Pléiade Poget N°2",
            description: "Par 6",
            price: "26.00€",
          },
          {
            name: "Huîtres Pléiade Poget N°1",
            description: "Par 6",
            price: "29.00€",
          },
          {
            name: "Huîtres Gillardeau N°3",
            description: "Par 6",
            price: "35.00€",
          },
          {
            name: "Huîtres Gillardeau N°2",
            description: "Par 6",
            price: "39.00€",
          },
          { name: "Bulots Cuits", description: "300g", price: "18.00€" },
          { name: "Crevettes", description: "Par 6", price: "27.00€" },
          { name: "Langoustine Pochée", description: "Pièce", price: "7.50€" },
          { name: "Tourteau Mayonnaise", description: "400g", price: "31.00€" },
          {
            name: "Homard Entier Froid",
            description: "600/800g",
            price: "66.00€",
          },
          { name: "Demi Homard Grillé", price: "39.50€" },
        ],
      },
      {
        category: "Plateaux de Fruits de Mer",
        items: [
          {
            name: "Plateau de l'Écailler",
            description: "3 Fine de Claire N°3, bulots, 3 crevettes",
            price: "32.00€",
          },
          {
            name: "Plateau Dégustation",
            description: "4 Gillardeau, 4 Poget N°2, 4 Fine de Claire N°3",
            price: "52.00€",
          },
          {
            name: "Plateau Crustacés",
            description:
              "12 crevettes, 4 langoustines, 1 demi homard, 1 tourteau",
            price: "129.00€",
          },
          {
            name: "Plateau Royal",
            description:
              "Gillardeau, huîtres, bulots, crevettes, langoustines, homard, tourteau",
            price: "220.00€",
          },
          {
            name: "Plateau Grand Café de France",
            description: "Le sommet : Homard, Langouste, Caviar, Vodka...",
            price: "790.00€",
          },
        ],
      },
      {
        category: "Caviars",
        items: [
          { name: "Osciètre 30g", price: "130.00€" },
          { name: "Osciètre 50g", price: "240.00€" },
          { name: "Beluga 50g", price: "690.00€" },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Crème brûlée", price: "9.00€" },
          { name: "Mousse au Chocolat", price: "9.00€" },
          { name: "Tiramisu", price: "9.00€" },
        ],
      },
      {
        category: "Champagnes",
        items: [
          { name: "Mercier (75cl)", price: "100.00€" },
          { name: "Moët & Chandon Brut (75cl)", price: "135.00€" },
          { name: "Veuve Clicquot Brut (75cl)", price: "190.00€" },
          { name: "Veuve Clicquot Rosé (75cl)", price: "210.00€" },
          { name: "Perrier-Jouët (75cl)", price: "155.00€" },
          { name: "Perrier-Jouët Blanc de Blanc (75cl)", price: "310.00€" },
          { name: "Perrier-Jouët Belle Epoque Brut (75cl)", price: "550.00€" },
          { name: "Perrier-Jouët Belle Epoque Rosé (75cl)", price: "990.00€" },
          { name: "Ruinart Brut (75cl)", price: "180.00€" },
          { name: "Ruinart Rosé (75cl)", price: "275.00€" },
          { name: "Ruinart Blanc de Blanc (75cl)", price: "320.00€" },
          { name: "Dom Pérignon (75cl)", price: "595.00€" },
          { name: "Krug Grande Cuvée (75cl)", price: "695.00€" },
          { name: "Roederer Brut (75cl)", price: "160.00€" },
          { name: "Roederer Cristal (75cl)", price: "695.00€" },
          { name: "Rare Millésime 2008 (75cl)", price: "695.00€" },
          { name: "Laurent-Perrier Grand Siècle (75cl)", price: "490.00€" },
          { name: "Coupe de Champagne (10cl)", price: "18.00€" },
          { name: "Coupe de Champagne Prestige (10cl)", price: "21.00€" },
        ],
      },
      {
        category: "Nos Vins Rouges d'Exception",
        items: [
          { name: "Pomerol AOP Pétrus - Grand Vin (2019)", price: "21 500.00€" },
          { name: "Pomerol AOP Pétrus - Grand Vin (2018)", price: "14 500.00€" },
          { name: "USA Napa Valley - Opus One 6 (2012)", price: "1 900.00€" },
          { name: "Gevrey Chambertin AOP Dugat-Py", price: "1 290.00€" },
          { name: "Masseto 2020 (Italie)", price: "990.00€" },
          { name: "Sassicaia 2018 (Italie)", price: "940.00€" },
          { name: "Haut-Médoc AOP Château Lamarque", price: "80.00€" },
          { name: "Margaux AOP Confidences de Prieuré", price: "190.00€" },
          { name: "Châteauneuf du Pape AOP Famille Perrin", price: "79.00€" },
        ],
      },
      {
        category: "Vins & Rosés",
        items: [
          { name: "Côtes de Provence AOP Tasquier (Btl)", price: "36.00€" },
          { name: "Domaine de la Source Bellet AOP (Local Nice)", price: "59.00€" },
          { name: "Chablis «Petit» AOP Ropiteau (Blanc)", price: "56.00€" },
          { name: "Sancerre AOP Domaine de St-Rombles (Blanc)", price: "56.00€" },
          { name: "Minuty Prestige (Rosé)", price: "59.00€" },
          { name: "Whispering Angel (Rosé)", price: "65.00€" },
          { name: "Domaine Ott «Château de Selle» (Rosé)", price: "89.00€" },
        ],
      },
      {
        category: "Cocktails Signature",
        items: [
          { name: "Aperol Spritz", description: "15cl", price: "14.50€" },
          { name: "St Germain Spritz", description: "15cl", price: "14.50€" },
          { name: "Limoncello Spritz", description: "15cl", price: "14.50€" },
          { name: "Moscow Mule", description: "Vodka, ginger beer", price: "14.50€" },
          { name: "Pina Colada", description: "Rhum, ananas, coco", price: "14.50€" },
          { name: "Sex on the Beach", description: "Vodka, orange, cranberry", price: "14.50€" },
          { name: "Espresso Martini", description: "Vodka, kahlua, café", price: "14.50€" },
          { name: "Mojito", description: "Rhum, menthe, citron vert", price: "14.50€" },
          { name: "Pornstar Martini", description: "Vodka, vanille, passion", price: "14.50€" },
        ],
      },
    ],
  },
];
