import { notFound } from "next/navigation";
import { RESTAURANTS } from "@/data/restaurants";
import Navbar from "@/components/Navbar";
import ReservationPageContent from "@/app/restaurants/[slug]/reservation/ReservationPageContent";
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

  const title = `Réserver - ${restaurant.name} - Groupe Grand Café de France`;
  const description = `Réservez votre table au ${restaurant.name}. ${restaurant.description}`;

  return {
    title,
    description,
    alternates: {
      canonical: `${BASE_URL}/restaurants/${slug}/reservation`,
    },
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/restaurants/${slug}/reservation`,
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

export default async function ReservationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const restaurant = RESTAURANTS.find((r) => r.slug === slug);

  if (!restaurant) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <ReservationPageContent restaurant={restaurant} />
    </>
  );
}
