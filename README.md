# Jev PLU Preflight

**Build a reviewable preflight between a property project description and sourced French PLU rules.**

[![Tests](https://github.com/gbesse/jev-plu-preflight/actions/workflows/test.yml/badge.svg)](https://github.com/gbesse/jev-plu-preflight/actions/workflows/test.yml) [MIT](LICENSE) · Node.js 22+ · Public alpha

## Try it

```sh
git clone https://github.com/gbesse/jev-plu-preflight.git
cd jev-plu-preflight
npm install
npm run demo
```

The demo uses synthetic records and fixture probabilities. It makes no network call and makes no measured quality claim.

## Decision boundary

Parcel, municipality, zone, rule topic and numeric project values remain code-owned. Jev compares the narrative project facts with one supplied rule and cites no rule outside the input. Every result needs planning review.

## Upstream sources

- [https://www.data.gouv.fr/dataservices/api-edifiable-le-reglement-durbanisme-dune-commune-en-json](https://www.data.gouv.fr/dataservices/api-edifiable-le-reglement-durbanisme-dune-commune-en-json)
- [https://www.data.gouv.fr/dataservices/api-carto-module-geoportail-de-lurbanisme-gpu](https://www.data.gouv.fr/dataservices/api-carto-module-geoportail-de-lurbanisme-gpu)

Keep upstream attribution, original identifiers, source URLs and retrieval dates with derived records.

## Real Jev requests

Real requests are opt-in and paid. The client pins `jev-1.13.0`, validates model identity and probabilities, rejects redirects, retries only network failures plus HTTP 429/529, and refuses state above a conservative 24,000-token estimate.

```sh
TYPESAFE_API_KEY=... node scripts/live-smoke.mjs
```

Never send secrets, personal data or unredacted case files. Evaluate representative French labels before operational use.

## Validation

`npm run validate` runs syntax checks, strict public-type checks, tests and the offline demo. CI runs it on Node.js 22 and 24.

Independent project; not affiliated with TypeSafe AI or the French administration. See the [Jev API documentation](https://docs.typesafe.ai/api) and [model limitations](https://docs.typesafe.ai/model-jaggedness/jev-1.13).
