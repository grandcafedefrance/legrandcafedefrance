import { BASE_URL } from "@/lib/seo";

export async function generateMetadata() {
  const url = `${BASE_URL}/mentions-legales`;
  return {
    title: "Mentions légales | Grand Café de France",
    description: "Mentions légales du Grand Café de France.",
    alternates: {
      canonical: url,
    },
    openGraph: {
      url,
      type: "website",
    },
  };
}

export default function MentionsLegalesPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="font-playfair text-4xl font-bold text-primary mb-6">Mentions légales</h1>
        <p className="font-lato text-primary/70">
          Placeholder — ajoute ici le contenu des mentions légales.
        </p>
      </div>
    </main>
  );
}

