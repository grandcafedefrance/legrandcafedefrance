import { RESTAURANTS } from "@/data/restaurants";
import { notFound } from "next/navigation";
import MenuClient from "@/components/MenuClient";
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
    return { title: "Menu non trouvé" };
  }

  const menuCategories = restaurant.menu.map((category) => category.category).slice(0, 4).join(", ");
  const title = `Menu ${restaurant.name} - Groupe Grand Café de France`;
  const description = `Découvrez le menu de ${restaurant.name} à Nice. ${menuCategories ? `Catégories : ${menuCategories}.` : ""}`;

  return {
    title,
    description,
    alternates: {
      canonical: `${BASE_URL}/menu/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/menu/${slug}`,
      type: "website",
      images: [
        {
          url: `${BASE_URL}${restaurant.imageHero ?? restaurant.image ?? "/og-default.jpg"}`,
          width: 1200,
          height: 630,
          alt: restaurant.name,
        },
      ],
    },
  };
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function MenuPage({ params }: PageProps) {
  const { slug } = await params;
  const restaurant = RESTAURANTS.find((r) => r.slug === slug);

  if (!restaurant) {
    notFound();
  }

  return <MenuClient restaurant={restaurant} />;
}
