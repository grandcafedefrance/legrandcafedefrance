import { BASE_URL } from "@/lib/seo";
import Navbar from "@/components/Navbar";

export async function generateMetadata() {
  const url = `${BASE_URL}/politique-confidentialite`;
  return {
    title: "Politique de confidentialité | Grand Café de France",
    description: "Politique de confidentialité du site Grand Café de France.",
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
  const lastUpdate = "20 mars 2026";

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        <section className="pt-28 md:pt-36 pb-16 md:pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="w-24 h-px bg-accent mb-6" />
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-red-brasserie mb-6">
              Politique de confidentialité
            </h1>
            <p className="font-lato text-primary/70 text-base md:text-lg leading-relaxed mb-10">
              Grand Café de France attache une grande importance à la protection de vos données personnelles et au
              respect de votre vie privée.
            </p>

            <div className="space-y-10">
              <section className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                <h2 className="font-playfair text-2xl md:text-3xl font-bold text-primary mb-4">Introduction</h2>
                <p className="font-lato text-primary/80 leading-relaxed">
                  La présente politique de confidentialité a pour objet de vous informer de manière transparente sur la
                  manière dont Grand Café de France collecte, utilise, conserve et protège vos données personnelles,
                  conformément au Règlement (UE) 2016/679 du Parlement européen et du Conseil du 27 avril 2016 (RGPD)
                  et à la réglementation française applicable.
                </p>
              </section>

              <section className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                <h2 className="font-playfair text-2xl md:text-3xl font-bold text-primary mb-4">
                  Responsable du traitement
                </h2>
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
                <h2 className="font-playfair text-2xl md:text-3xl font-bold text-primary mb-4">Données collectées</h2>
                <h3 className="font-playfair text-xl font-semibold text-primary mb-2">Données de réservation</h3>
                <p className="font-lato text-primary/80 leading-relaxed mb-4">
                  Lorsque vous effectuez une réservation, nous pouvons collecter les informations suivantes : nom,
                  prénom, adresse e-mail, numéro de téléphone, date et heure de réservation, ainsi que les informations
                  complémentaires utiles au service.
                </p>
                <h3 className="font-playfair text-xl font-semibold text-primary mb-2">Données de navigation</h3>
                <p className="font-lato text-primary/80 leading-relaxed">
                  Lors de votre navigation sur le site, des informations techniques peuvent être collectées via des
                  cookies et outils d&apos;analyse d&apos;audience (adresse IP tronquée/anonymisée, pages consultées, durée de
                  visite, type d&apos;appareil, navigateur).
                </p>
              </section>

              <section className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                <h2 className="font-playfair text-2xl md:text-3xl font-bold text-primary mb-4">
                  Finalités du traitement
                </h2>
                <ul className="font-lato text-primary/80 leading-relaxed list-disc pl-6 space-y-2">
                  <li>Gestion des réservations et suivi de la relation client.</li>
                  <li>Amélioration de la qualité du service et de l&apos;expérience utilisateur.</li>
                  <li>Communication d&apos;informations commerciales, uniquement lorsque votre consentement est requis.</li>
                </ul>
              </section>

              <section className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                <h2 className="font-playfair text-2xl md:text-3xl font-bold text-primary mb-4">Base légale</h2>
                <ul className="font-lato text-primary/80 leading-relaxed list-disc pl-6 space-y-2">
                  <li><strong>Exécution d&apos;un contrat :</strong> traitement des demandes de réservation.</li>
                  <li><strong>Intérêt légitime :</strong> mesure d&apos;audience et amélioration continue du site.</li>
                  <li><strong>Consentement :</strong> envoi d&apos;offres marketing, lorsqu&apos;applicable.</li>
                </ul>
              </section>

              <section className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                <h2 className="font-playfair text-2xl md:text-3xl font-bold text-primary mb-4">Durée de conservation</h2>
                <ul className="font-lato text-primary/80 leading-relaxed list-disc pl-6 space-y-2">
                  <li>Données de réservation : 3 ans.</li>
                  <li>Données de navigation (cookies/analytics) : 13 mois maximum.</li>
                </ul>
              </section>

              <section className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                <h2 className="font-playfair text-2xl md:text-3xl font-bold text-primary mb-4">
                  Droits des utilisateurs
                </h2>
                <p className="font-lato text-primary/80 leading-relaxed">
                  Conformément à la réglementation applicable, vous disposez d&apos;un droit d&apos;accès, de rectification,
                  d&apos;effacement, de limitation, de portabilité et d&apos;opposition au traitement de vos données. Vous pouvez
                  exercer vos droits en écrivant à : <strong>contact@grandcafedefrance.fr</strong>. En cas de litige, vous
                  pouvez également introduire une réclamation auprès de la CNIL.
                </p>
              </section>

              <section className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                <h2 className="font-playfair text-2xl md:text-3xl font-bold text-primary mb-4">Cookies</h2>
                <p className="font-lato text-primary/80 leading-relaxed">
                  Le site utilise des cookies techniques nécessaires au fonctionnement, ainsi que des cookies de mesure
                  d&apos;audience. Un bandeau de consentement vous permet de gérer vos préférences de dépôt de cookies
                  conformément à la réglementation en vigueur.
                </p>
              </section>

              <section className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                <h2 className="font-playfair text-2xl md:text-3xl font-bold text-primary mb-4">Modifications</h2>
                <p className="font-lato text-primary/80 leading-relaxed">
                  La présente politique peut être modifiée à tout moment pour tenir compte des évolutions légales,
                  réglementaires ou techniques. Nous vous invitons à la consulter régulièrement.
                </p>
                <p className="font-lato text-primary/60 mt-4 text-sm">
                  Dernière mise à jour : {lastUpdate}
                </p>
              </section>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

