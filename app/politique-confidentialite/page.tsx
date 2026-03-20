import { BASE_URL } from "@/lib/seo";

export async function generateMetadata() {
  const url = `${BASE_URL}/politique-confidentialite`;
  return {
    title: "Politique de confidentialité | Grand Café de France",
    description: "Politique de confidentialité du Grand Café de France.",
    alternates: {
      canonical: url,
    },
    openGraph: {
      url,
      type: "website",
    },
  };
}

export default function PolitiqueConfidentialitePage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="font-playfair text-4xl font-bold text-primary mb-6">
          Politique de confidentialité
        </h1>
        <p className="font-lato text-primary/70">
          Placeholder — ajoute ici le contenu de la politique de confidentialité.
        </p>
      </div>
    </main>
  );
}

