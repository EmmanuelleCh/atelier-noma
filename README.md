# Atelier Noma — Architecture intérieure & décoration

Des espaces pensés pour vivre, des lieux conçus pour durer.</strong>

Un site vitrine élégant et contemporain pour un studio fictif d'architecture intérieure et de décoration.

---

## À propos

**Atelier Noma** est un projet de développement web conçu autour d'un studio fictif d'architecture intérieure et de décoration.

L'objectif : créer une expérience digitale immersive, à la fois minimaliste, chaleureuse et fonctionnelle, capable de refléter l'identité d'un studio créatif.

Le design repose sur une approche éditoriale : typographie sobre, espaces généreux, palette naturelle et mise en valeur des projets visuels.

Ce projet est également l'occasion d'approfondir la conception d'interfaces avec Next.js, de structurer une architecture de composants réutilisables et de développer un site responsive de bout en bout.

## Direction artistique

- **Univers :** minimalisme chaleureux, architecture contemporaine et design éditorial.
- **Palette :** ivoire, sauge, beige naturel et charbon.
- **Interface :** navigation épurée, hiérarchie visuelle claire et mise en page aérée.
- **Expérience :** navigation fluide, adaptation mobile et accès direct à la prise de contact.

## Fonctionnalités

- [x] Page d'accueil présentant l'identité du studio.
- [x] Page Studio pour raconter l'approche et la vision de l'agence.
- [x] Page Prestations présentant les services proposés.
- [x] Page Réalisations alimentée par des données de projets.
- [x] Page Contact avec formulaire interactif.
- [x] Navigation fixe et menu mobile.
- [x] Composants d'interface réutilisables.
- [x] Mise en page responsive.
- [x] Organisation des contenus dans des fichiers de données dédiés.
- [ ] Traitement réel et envoi des demandes du formulaire.
- [ ] Finalisation du SEO et des vérifications d'accessibilité.
- [ ] Déploiement en production.

> Le formulaire est actuellement une démonstration côté interface. L'envoi réel des messages reste à intégrer.

## Stack technique

| Technologie | Utilisation |
| --- | --- |
| [Next.js](https://nextjs.org/) | Framework React et routage avec App Router |
| [React](https://react.dev/) | Construction de l'interface |
| [TypeScript](https://www.typescriptlang.org/) | Typage et fiabilité du code |
| [Tailwind CSS](https://tailwindcss.com/) | Stylisation et responsive design |
| [Git](https://git-scm.com/) & [GitHub](https://github.com/) | Versionnement du projet |

## Architecture du projet

```text
atelier-noma/
├── app/
│   ├── contact/
│   │   └── page.tsx
│   ├── prestations/
│   │   └── page.tsx
│   ├── realisations/
│   │   └── page.tsx
│   ├── studio/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── layout/
│   │   ├── Footer.tsx
│   │   ├── MobileMenu.tsx
│   │   └── Navbar.tsx
│   ├── sections/
│   │   └── ContactForm.tsx
│   └── ui/
├── data/
│   ├── navigation.ts
│   ├── projects.ts
│   └── services.ts
├── public/
├── types/
├── .gitignore
├── package.json
└── README.md
```

Cette organisation sépare les pages, les éléments de mise en page, les composants d'interface et les données métier afin de faciliter la maintenance et les évolutions futures.

## Pistes d'amélioration

Les prochaines évolutions envisagées :

- Connecter le formulaire de contact à un véritable service d'envoi d'e-mails.
- Optimiser les métadonnées SEO et le partage sur les réseaux sociaux.
- Renforcer l'accessibilité et les tests sur différentes tailles d'écran.
- Optimiser le chargement des images et les performances.
- Déployer le site et documenter sa version en ligne.


## Contexte du projet

Atelier Noma est un projet fictif réalisé dans une démarche d'apprentissage et de développement de compétences en développement web front-end.

Il illustre un travail sur la conception d'interface, l'organisation d'un projet Next.js, la réutilisation de composants et la création d'une expérience responsive.

---

Conçu avec soin, curiosité et beaucoup de café.

Atelier Noma · Projet de portfolio
