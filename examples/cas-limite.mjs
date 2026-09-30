// Cas limite : l’égalité de zone est un prérequis déterministe.
import assert from "node:assert/strict";
import { assessRule } from "../src/index.mjs";
import { createFakeProvider } from "../src/jev.mjs";

const jev = createFakeProvider(() => {
  throw new Error("Jev ne doit pas être appelé");
});
const resultat = await assessRule(
  {
    id: "p-2",
    insee: "31555",
    parcel: "AB-43",
    zone: "UM1",
    description: "Extension",
  },
  {
    id: "r-2",
    zone: "N",
    topic: "height",
    text: "Hauteur limitée",
    sourceUrl: "https://geoportail-urbanisme.gouv.fr",
  },
  jev,
);
assert.equal(resultat.result, "different_zone");
assert.equal(jev.calls, 0);
console.log(JSON.stringify(resultat, null, 2));
