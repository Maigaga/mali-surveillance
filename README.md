# Site vitrine CCTV

Socle du site public de vidéosurveillance : Next.js App Router, TypeScript, Tailwind CSS et composants shadcn/ui locaux.

## Développement

```bash
pnpm install
pnpm dev
```

## Vérifications et production

```bash
pnpm lint
pnpm typecheck
pnpm build
pnpm start
```

## Configuration de l’entreprise

Renseigner les valeurs réelles dans [`lib/site-config.ts`](./lib/site-config.ts). Les valeurs `COMPANY_*` sont des marqueurs temporaires ; les coordonnées et les liens sociaux vides ne sont pas affichés. Le site ne fournit aucun numéro, adresse ou compte social fictif.

Les routes de navigation sont préparées pour les étapes suivantes. À cette étape, seule la page d’accueil est implémentée.
