import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import ts from "typescript";
import { allExposants, DOMAINS, exposantsList } from "@/data/exhibitors";

const source = readFileSync(new URL("../pages/Brochure.tsx", import.meta.url), "utf8");
const data = source.slice(source.indexOf("type Company ="), source.indexOf("export default function Brochure"));
const compiled = ts.transpileModule(data, { compilerOptions: { target: ts.ScriptTarget.ES2020 } }).outputText;
const brochure = new Function(`${compiled}; return { slides, SECTORS, groupedIndex };`)() as {
  slides: { kind: string; label?: string; sector?: string; company?: { name: string } }[];
  SECTORS: { name: string; companies: { name: string }[] }[];
  groupedIndex: { label: string; entries: { name: string; slide: number }[] }[];
};

const domains = ["Tous", "Audit et Conseil", "BTP et Construction", "Énergie et Environnement", "Informatique, IT et Média", "Ingénierie et Industrie", "Transports et Systèmes embarqués", "Défense", "Formation", "Autre"];
const aliases: Record<string, string> = {
  EY: "EY Services France", "Orano Support": "Orano", "CGI France SAS": "CGI France",
  "Orange SA": "Orange", "Exail SAS": "EXAIL", "Ortec Group": "Groupe Ortec",
  "Tractebel Engineering": "Tractebel", "Vulcain Engineering Group": "Vulcain Engineering",
  "HEINEKEN France": "HEINEKEN",
};
const normalize = (name: string) => name.toLocaleLowerCase("fr");

describe("Official brochure and exhibitor rules", () => {
  it("provides exactly the ten requested filter options in order", () => {
    expect(DOMAINS).toEqual(domains);
  });
  it("removes Exiom from both catalogues", () => {
    expect(exposantsList.some((company) => /exiom/i.test(company.name))).toBe(false);
    expect(brochure.slides.some((slide) => /exiom/i.test(slide.company?.name ?? ""))).toBe(false);
  });
  it("removes the director slide and retains a 99-page sequence", () => {
    expect(brochure.slides.some((slide) => slide.kind === "mot-directrice")).toBe(false);
    expect(brochure.slides).toHaveLength(99);
  });
  it.each([
    ["EMIS et EMIS Access", "Ingénierie et Industrie"],
    ["NAOS", "Énergie et Environnement"],
    ["AVEC L'INDUSTRIE", "Autre"],
    ["Assystem", "Ingénierie et Industrie"],
    ["AXA France", "Autre"],
    ["Thales", "Ingénierie et Industrie"],
  ])("classifies %s as %s in both catalogues", (name, domain) => {
    expect(allExposants.find((company) => company.name === name)?.domain).toBe(domain);
    expect(brochure.SECTORS.find((sector) => sector.companies.some((company) => normalize(company.name) === normalize(name)))?.name).toBe(domain);
  });
  it("matches every exhibitor domain to its actual brochure section", () => {
    for (const company of allExposants) {
      const name = normalize(aliases[company.name] ?? company.name);
      const section = company.id === 0 ? "Transports et Systèmes embarqués" : brochure.SECTORS.find((sector) => sector.companies.some((entry) => normalize(entry.name) === name))?.name;
      expect(company.domain, company.name).toBe(section);
    }
  });
  it("points every index entry to the matching company and section", () => {
    for (const group of brochure.groupedIndex) {
      for (const entry of group.entries) {
        expect(brochure.slides[entry.slide]?.company?.name).toBe(entry.name);
        expect(brochure.slides[entry.slide]?.sector).toBe(group.label);
      }
    }
  });
});