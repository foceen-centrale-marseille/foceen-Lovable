import { motion } from "framer-motion";
import { useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight, Users, Award, Shield, Lightbulb, Heart, Leaf, Briefcase } from "lucide-react";
import team26 from "@/assets/teams/team26.jpg";
import team25 from "@/assets/teams/team25.jpg";
import team24 from "@/assets/teams/team24.jpg";
import team23 from "@/assets/teams/team23.jpg";
import team22 from "@/assets/teams/team22.webp";
import team21 from "@/assets/teams/team21.webp";
import team20 from "@/assets/teams/team20.webp";
import team19 from "@/assets/teams/team19.webp";
import team18 from "@/assets/teams/team18.webp";
import team17 from "@/assets/teams/team17.webp";
import team16 from "@/assets/teams/team16.webp";
import team15 from "@/assets/teams/team15.webp";
import isoCertification from "@/assets/iso-certification.jpg";

const teamYears = [
{ year: 2026, label: "Equipe 2026", img: team26 },
{ year: 2025, label: "Equipe 2025", img: team25 },
{ year: 2024, label: "Equipe 2024", img: team24 },
{ year: 2023, label: "Equipe 2023", img: team23 },
{ year: 2022, label: "Equipe 2022", img: team22 },
{ year: 2021, label: "Equipe 2021", img: team21 },
{ year: 2020, label: "Equipe 2020", img: team20 },
{ year: 2019, label: "Equipe 2019", img: team19 },
{ year: 2018, label: "Equipe 2018", img: team18 },
{ year: 2017, label: "Equipe 2017", img: team17 },
{ year: 2016, label: "Equipe 2016", img: team16 },
{ year: 2015, label: "Equipe 2015", img: team15 }];


const values = [
{ icon: Briefcase, title: "Professionnalisme", desc: "Un événement organisé avec rigueur et exigence à chaque édition." },
{ icon: Heart, title: "Engagement", desc: "28 étudiants investis pour créer un pont entre écoles et entreprises." },
{ icon: Lightbulb, title: "Innovation", desc: "Des formats renouvelés chaque année pour répondre aux attentes du marché." },
{ icon: Shield, title: "Autonomie", desc: "Une gestion indépendante et responsable de l'événement." },
{ icon: Users, title: "Solidarité", desc: "Égalité des chances et accessibilité pour tous les étudiants." },
{ icon: Leaf, title: "Éco-responsabilité", desc: "Une démarche durable intégrée à chaque étape de l'organisation." }];


const QuiSommesNous = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const nextSlide = useCallback(
    () => setCarouselIndex((i) => (i + 1) % teamYears.length),
    []
  );
  const prevSlide = useCallback(
    () => setCarouselIndex((i) => (i - 1 + teamYears.length) % teamYears.length),
    []
  );

  // Navigation manuelle uniquement — pas de défilement automatique

  return (
    <div>
      {/* ─── 1. HERO ─── */}
      <section className="relative h-[70vh] md:h-[80vh] overflow-hidden flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${team26})` }}>

          <div className="absolute inset-0 bg-black/25" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative text-center px-4">

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground uppercase tracking-wide leading-tight">
            Une équipe dynamique
            <br />
            et professionnelle
          </h1>
          <div className="mt-6 w-20 h-1 bg-cyan mx-auto rounded-full" />
        </motion.div>
      </section>

      {/* ─── 2. PRÉSENTATION ─── */}
      <section className="py-20 bg-background">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center">

            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-8">
              <span className="text-cyan">FOCEEN</span>
            </h2>
            <p className="text-base md:text-lg font-body text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Le FOCEEN (Forum Centrale Méditerranée Entreprises) est une association composée de 28 étudiants-ingénieurs passionnés. Ensemble, nous orchestrons un événement de recrutement incontournable dans le Sud-Est, réunissant entreprises et étudiants pour bâtir les carrières de demain.
            </p>
            <div className="mt-10 flex flex-row items-center justify-between sm:justify-center sm:gap-8 gap-2">
              <div className="text-center">
                <span className="block text-2xl sm:text-4xl md:text-5xl font-heading font-bold text-cyan">19e</span>
                <span className="text-xs sm:text-sm font-heading uppercase tracking-widest text-muted-foreground mt-1 block">Édition</span>
              </div>
              <div className="hidden sm:block w-px h-16 bg-border" />
              <div className="text-center">
                <span className="block text-2xl sm:text-4xl md:text-5xl font-heading font-bold text-cyan">03</span>
                <span className="text-xs sm:text-sm font-heading uppercase tracking-widest text-muted-foreground mt-1 block">Novembre 2026</span>
              </div>
              <div className="hidden sm:block w-px h-16 bg-border" />
              <div className="text-center">
                <span className="block text-2xl sm:text-4xl md:text-5xl font-heading font-bold text-cyan">28</span>
                <span className="text-xs sm:text-sm font-heading uppercase tracking-widest text-muted-foreground mt-1 block">Membres</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── 3. HISTORIQUE — Carrousel ─── */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">

            NOTRE HISTOIRE
          </motion.h2>
          <div className="w-20 h-1 bg-cyan mx-auto rounded-full mb-8" />
          <p className="text-center text-primary-foreground/70 font-body mb-12 max-w-2xl mx-auto">Créé en 2007, le Forum Centrale Méditerranée Entreprises est, depuis plusieurs années, le plus grand forum de recrutement de la Région Sud à destination des étudiants du supérieur. Il fait maintenant partie du cercle restreint des forums de recrutement ingénieur de France.

          </p>

          <div className="relative">
            <div className="overflow-hidden rounded-lg">
              <motion.div
                key={carouselIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="relative aspect-video rounded-lg overflow-hidden">

                <img
                  src={teamYears[carouselIndex].img}
                  alt={teamYears[carouselIndex].label}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async" />

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/90 to-transparent p-6">
                  <h3 className="text-xl md:text-2xl font-heading font-bold">
                    {teamYears[carouselIndex].label}
                  </h3>
                </div>
              </motion.div>
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-2 md:-left-5 top-1/2 -translate-y-1/2 p-2 rounded-full bg-primary/80 hover:bg-primary text-primary-foreground transition-colors"
              aria-label="Équipe précédente">

              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 md:-right-5 top-1/2 -translate-y-1/2 p-2 rounded-full bg-primary/80 hover:bg-primary text-primary-foreground transition-colors"
              aria-label="Équipe suivante">

              <ChevronRight size={24} />
            </button>

            <div className="flex justify-center gap-2 mt-6 flex-wrap">
              {teamYears.map((t, i) =>
              <button
                key={t.year}
                onClick={() => setCarouselIndex(i)}
                className={`px-3 py-1 rounded-full text-xs font-heading transition-all ${
                i === carouselIndex ?
                "bg-cyan text-primary-foreground" :
                "bg-primary-foreground/10 text-primary-foreground/60 hover:bg-primary-foreground/20"}`
                }>

                  {t.year}
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. NOS VALEURS — Plein écran ─── */}
      <section className="py-24 bg-background">
        <div className="max-w-5xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-heading font-bold text-center text-foreground mb-6">

            NOS VALEURS
          </motion.h2>
          <p className="text-center text-muted-foreground font-body mb-16 max-w-2xl mx-auto">Les principes qui guident chaque édition du Forum FOCEEN :

          </p>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((v, i) =>
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="flex flex-col items-center text-center gap-3 p-6">

                <div className="w-14 h-14 rounded-xl bg-cyan/10 flex items-center justify-center">
                  <v.icon size={26} className="text-cyan" />
                </div>
                <h4 className="font-heading font-semibold text-foreground">{v.title}</h4>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">{v.desc}</p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* ─── 4b. CERTIFICATIONS — 2 colonnes ─── */}
      <section className="py-20 bg-muted">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-heading font-bold text-center text-foreground mb-16">

            CERTIFICATIONS
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Gauche — Texte */}
            <div>
              <p className="text-sm md:text-base font-body text-muted-foreground leading-relaxed mb-6">
                Depuis sa création, le FOCEEN s'est imposé comme un acteur incontournable du recrutement étudiant
                dans la région Sud-Est. Cette réputation repose sur un engagement constant envers la qualité
                et l'innovation, validé par des certifications reconnues internationalement.
              </p>

              <div className="p-5 bg-card rounded-lg border border-border">
                <h4 className="font-heading font-bold text-foreground mb-3 flex items-center gap-2">
                  <Award size={18} className="text-cyan" />
                  Certifications ISO
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground font-body">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan shrink-0" />
                    <span><strong className="text-foreground">ISO 9001</strong> — Management de la qualité, depuis 2020</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan shrink-0" />
                    <span><strong className="text-foreground">ISO 20121</strong> — Événementiel durable, depuis 2024</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Droite — Image */}
            <div className="flex justify-center">
              <img
                src={isoCertification}
                alt="Certification ISO 9001 et ISO 20121 - Bureau Veritas"
                className="w-full max-w-md rounded-xl border border-border shadow-sm object-contain"
                loading="lazy"
                decoding="async" />

            </div>
          </div>
        </div>
      </section>

      {/* ─── 5. POLITIQUE QUALITÉ — Layout côte à côte ─── */}
      <section className="py-20 bg-muted">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-heading font-bold text-center text-foreground mb-16">

            NOTRE POLITIQUE QUALITÉ EN QUELQUES MOTS
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Gauche — Piliers fondateurs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card p-8 rounded-xl border border-border shadow-sm">

              <h3 className="text-xl font-heading font-bold text-foreground mb-4 flex items-center gap-2">
                <Shield size={20} className="text-cyan" />
                Piliers fondateurs
              </h3>
              <p className="text-sm font-body text-muted-foreground mb-5 leading-relaxed">
                Notre politique qualité repose sur quatre piliers fondateurs qui guident chaque édition du Forum FOCEEN
                et garantissent une amélioration continue de nos services.
              </p>
              <ul className="space-y-3 text-sm font-body text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-cyan font-bold shrink-0">01</span>
                  <span>Offrir un cadre de recrutement professionnel et structuré, à la hauteur des exigences des entreprises.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan font-bold shrink-0">02</span>
                  <span>Garantir une organisation irréprochable grâce à des processus audités et certifiés ISO.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan font-bold shrink-0">03</span>
                  <span>Améliorer continuellement l'expérience visiteur et exposant à travers le retour d'expérience.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan font-bold shrink-0">04</span>
                  <span>Intégrer une démarche éco-responsable dans toutes les phases de l'événement.</span>
                </li>
              </ul>
            </motion.div>

            {/* Droite — Politique d'accueil */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-card p-8 rounded-xl border border-border shadow-sm">

              <h3 className="text-xl font-heading font-bold text-foreground mb-4 flex items-center gap-2">
                <Users size={20} className="text-cyan" />
                Politique d'accueil
              </h3>

              <div className="space-y-5">
                <div>
                  <h4 className="font-heading font-semibold text-foreground text-sm mb-2">Accueil des élèves</h4>
                  <ul className="space-y-1.5 text-sm font-body text-muted-foreground list-disc pl-5">
                    <li>Diversifier les entreprises représentées.</li>
                    <li>Ouvrir l'accès au forum à des étudiants venant d'autres formations.</li>
                    <li>Favoriser l'insertion des jeunes diplômés et l'obtention de stages.</li>
                    <li>Favoriser l'insertion des étudiants en situation de handicap.</li>
                  </ul>
                </div>
                <div className="w-full h-px bg-border" />
                <div>
                  <h4 className="font-heading font-semibold text-foreground text-sm mb-2">Accueil des entreprises</h4>
                  <ul className="space-y-1.5 text-sm font-body text-muted-foreground list-disc pl-5">
                    <li>Assurer une grande diversité d'étudiants qualifiés.</li>
                    <li>Proposer des services de qualité aux entreprises.</li>
                    <li>Assurer la conservation d'une même exigence de qualité.</li>
                    <li>Développer constamment un regard critique et un souci d'amélioration du forum.</li>
                    <li>Pérenniser les échanges avec les médias, les professionnels et les écoles participantes.</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>);

};

export default QuiSommesNous;