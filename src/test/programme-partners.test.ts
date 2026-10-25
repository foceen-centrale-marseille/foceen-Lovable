import { describe, expect, it } from "vitest";
import { programme } from "@/data/programme";
import { allExposants, parrain, partenaires } from "@/data/exhibitors";

describe("Official site partners", () => {
  it("retains SNCF Réseau as the sponsor", () => {
    expect(parrain.name).toBe("SNCF Réseau");
  });
  it("has exactly the six official partners", () => {
    expect(partenaires.map((partner) => partner.name)).toEqual([
      "Batiactu", "Le Monde des Grandes Écoles et Universités",
      "Haribo", "Gomet'", "Studyrama", "La Mie Câline",
    ]);
  });
  it("keeps Groupe ADF and CEA as exhibitors in their sectors", () => {
    expect(partenaires.some((p) => p.name === "Groupe ADF" || p.name === "CEA")).toBe(false);
    expect(allExposants.find((e) => e.name === "Groupe ADF")?.domain).toBe("Ingénierie et Industrie");
    expect(allExposants.find((e) => e.name === "CEA")?.domain).toBe("Énergie et Environnement");
  });
  it("does not turn partner-only records into recruiting exhibitors", () => {
    for (const partner of partenaires.filter((entry) => entry.partnerOnly)) {
      expect(allExposants.some((entry) => entry.id === partner.id)).toBe(false);
    }
  });
});

describe("19th edition programme", () => {
  it("contains seven events", () => { expect(programme).toHaveLength(7); });
  it.each([
    ["Table ronde Akkodis", "10h00 – 10h30", "Salle Sormiou"],
    ["Table ronde Entrepreneuriat", "10h30 – 11h00", "Salle Morgiou"],
    ["Table ronde BPCE-SI", "10h45 – 11h15", "Salle Sormiou"],
    ["Conférence Dassault Systèmes", "11h00 – 12h00", "Amphi Callelongue"],
    ["Table ronde Framatome", "14h00 – 14h30", "Salle Morgiou"],
    ["Concours projet innovant", "À partir de 13h30", undefined],
    ["Entretiens fictifs et correction de CV", "Toute la journée", "Stands dédiés"],
  ])("schedules %s correctly", (name, time, room) => {
    const event = programme.find((entry) => entry.name === name);
    expect(event?.time).toBe(time);
    expect(event?.room).toBe(room);
  });
});