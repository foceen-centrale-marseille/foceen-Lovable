const parrain = {
  name: "SNCF Réseau",
  src: "/logo-sncf.png",
  description:
    "Acteur majeur du transport ferroviaire et des mobilités durables, SNCF Réseau entretient, modernise et exploite les 28 000 km du réseau ferré national.",
};

const partenaires = [
  { name: "Métropole Aix-Marseille Provence", src: "/logo-metropole-aix-marseille.png" },
  { name: "Batiactu", src: "/81792a_3e8f982fc8a6497ca46a98b487517d35~mv2.png" },
  { name: "Haribo", src: "/png-clipart-logo-haribo-of-america-brand-bear-bear-animals-text.png" },
  { name: "Min. Enseignement Sup.", src: "/logo-ministere.png" },
  { name: "La Mie Câline", src: "/logo-la-mie-caline.png" },
  { name: "Cafés Richard", src: "/logo-cafes-richard.png" },
  { name: "Gomet'", src: "/logo-gomet.png" },
  { name: "Studyrama", src: "/752_ckeditor_agenda_53966_637f4194bed9f_1.png" },
];


export default function PartnersSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-heading font-bold text-center text-foreground mb-4">PARRAIN</h2>
        <div className="flex flex-col items-center mb-12">
          <div className="w-72 h-32 bg-white rounded-lg flex items-center justify-center border border-border p-2">
            <img
              src={parrain.src}
              alt={`Logo ${parrain.name}, parrain officiel du FOCEEN`}
              width={800}
              height={800}
              className="w-full h-full object-contain"
              loading="lazy"
              decoding="async"
            />
          </div>
          <p className="mt-4 max-w-2xl text-center font-body text-muted-foreground">{parrain.description}</p>
        </div>


        <h2 className="text-3xl font-heading font-bold text-center text-foreground mb-8">NOS PARTENAIRES</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 items-center justify-items-center">
          {partenaires.map((p) => (
            <div key={p.name} className="w-36 h-20 bg-white rounded-lg flex items-center justify-center border border-border p-2">
              <img src={p.src} alt={p.name} className="object-contain h-16 w-auto" loading="lazy" decoding="async" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
