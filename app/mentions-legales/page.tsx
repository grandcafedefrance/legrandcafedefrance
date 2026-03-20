import { BASE_URL } from "@/lib/seo";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export async function generateMetadata() {
  const url = `${BASE_URL}/mentions-legales`;
  return {
    title: "Mentions légales | Grand Café de France",
    description: "Mentions légales du site Grand Café de France.",
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
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        <section className="pt-28 md:pt-36 pb-16 md:pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="w-24 h-px bg-accent mb-6" />
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-red-brasserie mb-6">
              Mentions légales
            </h1>
            <p className="font-lato text-primary/70 text-base md:text-lg leading-relaxed mb-10">
              Conformément aux dispositions des articles 6-III et 19 de la Loi n°2004-575 du 21 juin 2004 pour la
              Confiance dans l&apos;économie numérique (LCEN), il est précisé aux utilisateurs du site
              grandcafedefrance.fr l&apos;identité des différents intervenants dans le cadre de sa réalisation et de son
              suivi.
            </p>

            <div className="space-y-10">
              <section className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                <h2 className="font-playfair text-2xl md:text-3xl font-bold text-primary mb-4">Éditeur du site</h2>
                <div className="font-lato text-primary/80 leading-relaxed space-y-2">
                  <p><strong>Raison sociale :</strong> Grand Café de France</p>
                  <p><strong>Forme juridique :</strong> [à compléter]</p>
                  <p><strong>Adresse :</strong> [à compléter]</p>
                  <p><strong>Téléphone :</strong> +33762123837</p>
                  <p><strong>Email :</strong> contact@grandcafedefrance.fr</p>
                  <p><strong>Directeur de la publication :</strong> [à compléter]</p>
                </div>
              </section>

              <section className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                <h2 className="font-playfair text-2xl md:text-3xl font-bold text-primary mb-4">Hébergement</h2>
                <div className="font-lato text-primary/80 leading-relaxed space-y-2">
                  <p><strong>Hébergeur :</strong> Vercel Inc.</p>
                  <p><strong>Adresse :</strong> 340 Pine Street, Suite 701, San Francisco, CA 94104, USA</p>
                  <p>
                    <strong>Site :</strong>{" "}
                    <a
                      href="https://vercel.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-brasserie hover:underline"
                    >
                      https://vercel.com
                    </a>
                  </p>
                </div>
              </section>

              <section className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                <h2 className="font-playfair text-2xl md:text-3xl font-bold text-primary mb-4">
                  Propriété intellectuelle
                </h2>
                <p className="font-lato text-primary/80 leading-relaxed">
                  L&apos;ensemble des contenus présents sur ce site (textes, images, graphismes, logos, vidéos, icônes,
                  sons, logiciels) est la propriété exclusive de Grand Café de France ou de ses partenaires, sauf
                  mention contraire. Toute reproduction, représentation, modification, publication, adaptation de tout
                  ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sauf
                  autorisation écrite préalable de Grand Café de France. Tous droits réservés.
                </p>
              </section>

              <section className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                <h2 className="font-playfair text-2xl md:text-3xl font-bold text-primary mb-4">
                  Limitation de responsabilité
                </h2>
                <p className="font-lato text-primary/80 leading-relaxed">
                  Grand Café de France s&apos;efforce d&apos;assurer l&apos;exactitude et la mise à jour des informations diffusées
                  sur ce site. Toutefois, l&apos;éditeur ne saurait être tenu responsable des omissions, inexactitudes ou
                  carences dans la mise à jour, qu&apos;elles soient de son fait ou du fait des tiers partenaires.
                  L&apos;éditeur ne pourra pas non plus être tenu responsable des dommages directs ou indirects liés à
                  l&apos;utilisation du site, ni du contenu des sites externes accessibles via des liens hypertextes.
                </p>
              </section>

              <section className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                <h2 className="font-playfair text-2xl md:text-3xl font-bold text-primary mb-4">Données personnelles</h2>
                <p className="font-lato text-primary/80 leading-relaxed">
                  Les modalités de collecte et de traitement des données personnelles sont détaillées dans notre{" "}
                  <Link href="/politique-confidentialite" className="text-red-brasserie hover:underline">
                    Politique de confidentialité
                  </Link>
                  .
                </p>
              </section>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

