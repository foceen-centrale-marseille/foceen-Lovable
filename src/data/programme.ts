export type ProgrammeEvent = {
  name: string;
  time: string;
  room?: string;
  category: "conference" | "table-ronde" | "animation";
};

export const programme: ProgrammeEvent[] = [
  { name: "Table ronde Akkodis", time: "10h00 – 10h30", room: "Salle Sormiou", category: "table-ronde" },
  { name: "Table ronde Entrepreneuriat", time: "10h30 – 11h00", room: "Salle Morgiou", category: "table-ronde" },
  { name: "Table ronde BPCE-SI", time: "10h45 – 11h15", room: "Salle Sormiou", category: "table-ronde" },
  { name: "Conférence Dassault Systèmes", time: "11h00 – 12h00", room: "Amphi Callelongue", category: "conference" },
  { name: "Table ronde Framatome", time: "14h00 – 14h30", room: "Salle Morgiou", category: "table-ronde" },
  { name: "Concours projet innovant", time: "À partir de 13h30", category: "animation" },
  { name: "Entretiens fictifs et correction de CV", time: "Toute la journée", room: "Stands dédiés", category: "animation" },
];