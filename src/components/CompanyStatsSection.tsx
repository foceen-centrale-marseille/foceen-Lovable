import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Download, FileText } from "lucide-react";
import plaquetteAsset from "@/assets/Plaquette_FOCEEN_2026.pdf.asset.json";

const sectorData = [
  { name: "BTP / Construction", value: 22 },
  { name: "Énergie", value: 18 },
  { name: "Conseil / Ingénierie", value: 15 },
  { name: "Info / Numérique", value: 14 },
  { name: "Industrie", value: 12 },
  { name: "Transport / Logistique", value: 8 },
  { name: "Finance / Banque", value: 6 },
  { name: "Environnement", value: 3 },
  { name: "Autres", value: 2 },
];

const structureData = [
  { name: "Grandes entreprises", value: 40 },
  { name: "ETI", value: 25 },
  { name: "PME", value: 20 },
  { name: "Startups", value: 10 },
  { name: "Organismes publics", value: 5 },
];

const COLORS_SECTOR = [
  "hsl(197,71%,45%)", "hsl(197,71%,55%)", "hsl(197,71%,65%)",
  "hsl(213,40%,20%)", "hsl(213,40%,30%)", "hsl(213,35%,40%)",
  "hsl(197,50%,50%)", "hsl(213,30%,50%)", "hsl(197,40%,75%)",
];

const COLORS_STRUCTURE = [
  "hsl(197,71%,50%)", "hsl(197,71%,63%)", "hsl(213,40%,20%)",
  "hsl(213,35%,35%)", "hsl(197,50%,75%)",
];

const MyTooltip = ({ active, payload }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-card border border-border rounded-lg px-3 py-2 shadow-lg text-sm">
      <p className="font-heading font-semibold text-foreground">{payload[0].name}</p>
      <p className="text-muted-foreground">{payload[0].value}%</p>
    </div>
  );
};

const Leg = ({ data, colors }: { data: { name: string; value: number }[]; colors: string[] }) => (
  <div className="flex flex-col gap-1.5">
    {data.map((e, i) => (
      <div key={e.name} className="flex items-center gap-2">
        <span className="inline-block w-3 h-3 rounded-sm shrink-0" style={{ backgroundColor: colors[i % colors.length] }} />
        <span className="text-xs text-foreground/80 leading-tight">{e.name}</span>
      </div>
    ))}
  </div>
);

const Chart = ({ data, colors }: { data: { name: string; value: number }[]; colors: string[] }) => (
  <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
    <div className="w-full sm:w-auto h-[250px] min-w-[200px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie data={data} cx="50%" cy="50%" outerRadius={95} innerRadius={38} dataKey="value" paddingAngle={1} label={false} labelLine={false}>
            {data.map((_, i) => <Cell key={i} fill={colors[i % colors.length]} stroke="none" />)}
          </Pie>
          <Tooltip content={<MyTooltip />} />
        </PieChart>
      </ResponsiveContainer>
    </div>
    <Leg data={data} colors={colors} />
  </div>
);

export default function CompanyStatsSection() {
  return (
    <>
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-foreground text-center mb-12">STATISTIQUES ENTREPRISES</h2>
          {/* FORCED ROW on desktop, column on mobile with chart first */}
          <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between sm:gap-12">
            <div className="sm:w-[40%] sm:shrink-0 mt-6 sm:mt-0">
              <h3 className="text-xl lg:text-2xl font-heading font-bold text-foreground mb-4">136 EXPOSANTS</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                C'est plus de 136 entreprises qui font le déplacement chaque année pour présenter leurs activités et rencontrer les étudiants qui viennent se présenter à elles.
              </p>
            </div>
            <div className="sm:w-[55%] sm:shrink-0">
              <Tabs defaultValue="sector" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="sector">Secteurs d'activités</TabsTrigger>
                  <TabsTrigger value="structure">Types de structures</TabsTrigger>
                </TabsList>
                <TabsContent value="sector"><Chart data={sectorData} colors={COLORS_SECTOR} /></TabsContent>
                <TabsContent value="structure"><Chart data={structureData} colors={COLORS_STRUCTURE} /></TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Bannière Plaquette Commerciale ─── */}
      <section className="py-14 bg-primary">
        <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-5">
            <div className="shrink-0 w-14 h-14 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
              <FileText size={28} className="text-cyan" />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-heading font-bold text-primary-foreground">
                Plaquette Commerciale 2026
              </h3>
              <p className="text-sm text-primary-foreground/70 font-body mt-1">
                Découvrez toutes les offres et opportunités de partenariat pour la 19<sup>e</sup> édition du Forum FOCEEN.
              </p>
            </div>
          </div>
          <a
            href={plaquetteAsset.url}
            download="Plaquette_FOCEEN_2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-cyan text-primary-foreground font-heading font-semibold text-sm uppercase tracking-wide hover:bg-cyan/90 transition-colors shadow-lg"
          >
            <Download size={18} />
            Télécharger la Plaquette Commerciale 2026
          </a>
        </div>
      </section>
    </>
  );
}
