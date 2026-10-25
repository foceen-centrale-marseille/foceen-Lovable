import { parrain, partenaires } from "@/data/exhibitors";


export default function PartnersSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-heading font-bold text-center text-foreground mb-4">PARRAIN</h2>
        <div className="flex flex-col items-center mb-12">
          <a href={parrain.website} target="_blank" rel="noopener noreferrer" className="w-72 h-32 bg-card rounded-lg flex items-center justify-center border border-border p-1 hover:opacity-80 transition-opacity">
            <img
              src={parrain.logo}
              alt="Logo SNCF Réseau"
              width={800}
              height={800}
              className="w-full h-full object-contain"
              loading="lazy"
              decoding="async"
            />
          </a>
          <p className="mt-4 font-heading font-bold text-lg text-foreground">SNCF Réseau</p>
          <p className="mt-2 max-w-2xl text-center font-body text-muted-foreground">{parrain.description}</p>
        </div>


        <h2 className="text-3xl font-heading font-bold text-center text-foreground mb-8">NOS PARTENAIRES</h2>
        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4">
          {partenaires.map((p) => (
            <a key={p.id} href={p.website} target="_blank" rel="noopener noreferrer" aria-label={p.name} className="w-36 sm:w-44 h-24 bg-card rounded-lg flex items-center justify-center border border-border p-3 hover:border-cyan transition-colors">
              <img src={p.logo} alt={p.name} className="object-contain max-h-12 sm:max-h-14 max-w-full w-auto" loading="lazy" decoding="async" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
