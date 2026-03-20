import { notFound } from "next/navigation";
import Image from "next/image";
import { RESTAURANTS } from "@/data/restaurants";
import Navbar from "@/components/Navbar";
import RestaurantContent from "./RestaurantContent";
import { BASE_URL } from "@/lib/seo";

export async function generateStaticParams() {
  return RESTAURANTS.map((restaurant) => ({
    slug: restaurant.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const restaurant = RESTAURANTS.find((r) => r.slug === slug);

  if (!restaurant) {
    return {
      title: "Restaurant non trouvé",
    };
  }
  
  const isRinasBar = restaurant.slug === 'rina-bar';
  const displayTitle = isRinasBar 
    ? "Rina's Bar Nice | Bar Rue Piétonne – Cocktails & Ambiance"
    : `${restaurant.name} Nice | Brasserie ${restaurant.subtitle}`;

  return {
    title: displayTitle,
    description: restaurant.description.substring(0, 155),
    alternates: {
      canonical: `${BASE_URL}/restaurants/${restaurant.slug}`,
    },
    openGraph: {
      title: displayTitle,
      description: restaurant.description.substring(0, 155),
      url: `${BASE_URL}/restaurants/${restaurant.slug}`,
      type: "website", 
      images: [
        {
          url: restaurant.imageHero,
          width: 1200,
          height: 630,
          alt: `${restaurant.name} Nice - ${restaurant.subtitle}`,
        },
      ],
    },
  };
}

export default async function RestaurantPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const restaurant = RESTAURANTS.find((r) => r.slug === slug);

  if (!restaurant) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <RestaurantContent restaurant={restaurant} />
    </>
  );
}
