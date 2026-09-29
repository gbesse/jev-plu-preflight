// Objectif : démontrer la frontière de décision sans appel réseau.
import assert from "node:assert/strict";
import { assessRule } from "../src/index.mjs";
import { createFakeProvider } from "../src/jev.mjs";
const p = createFakeProvider(() => ({
  model: "jev-1.13.0",
  answers: {
    result: {
      type: "choice",
      choice: "insufficient_information",
      probabilities: {
        compatible: 0.08,
        conditional: 0.15,
        possible_conflict: 0.12,
        insufficient_information: 0.65,
      },
      confidence: 0.65,
    },
  },
  usage: {},
}));
const resultat = await assessRule(
  {
    id: "p1",
    insee: "31555",
    parcel: "AB-42",
    zone: "UM1",
    description: "Extension arrière d'une maison",
    facts: { heightMeters: 6.5 },
  },
  {
    id: "r1",
    zone: "UM1",
    topic: "setback",
    text: "Les constructions respectent un recul défini selon la voie.",
    sourceUrl: "https://geoportail-urbanisme.gouv.fr",
  },
  p,
);
assert.equal(resultat.result, "insufficient_information");
console.log(JSON.stringify(resultat, null, 2));
