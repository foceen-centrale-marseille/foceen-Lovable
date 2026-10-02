# Séparer les catégories Énergie, BTP et Environnement

## Modifications prévues
- Remplacer le groupe unique « Environnement, Énergie & BTP » dans l’index de la brochure par trois groupes : « Énergie », « BTP & Construction » et « Environnement ».
- Reclasser les entreprises concernées selon leur activité principale, notamment les acteurs nucléaires et énergétiques, les entreprises de construction, et les spécialistes de l’environnement et du recyclage.
- Conserver le tri alphabétique interne déjà assuré par la construction de l’index.
- Garder les fiches, leur ordre réel dans le diaporama, les liens interactifs et la pagination dynamique inchangés.

## Vérification
- Contrôler qu’aucune entreprise n’est dupliquée ou perdue dans l’index.
- Vérifier que chaque lien affiche toujours le numéro calculé `slide + 1` et ouvre la fiche exacte.
- Vérifier l’affichage de l’index et la navigation dans l’aperçu, sans publier le site.

## Périmètre technique
- Seul `src/pages/Brochure.tsx` sera modifié.
- Les titres de groupes continueront d’utiliser le style existant des sections de l’index, cohérent avec les intercalaires de secteurs.
