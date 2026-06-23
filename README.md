#  CV — Personal Resume Web Application

A responsive, single-page curriculum vitae and portfolio application built with Next.js, TypeScript, Tailwind CSS, and SCSS. The repository is structured around typed section data, reusable layout shells, custom hooks, and semantic navigation so the site content stays maintainable while the presentation layer remains flexible.

![cv-screenshot.jpg](cv-screenshot.jpg)

## Overview

This project renders a personal CV website as a section-driven, single-page experience with dedicated areas for Hero, About, Contractor work, Skills, CV history, Education, Testimonials, and Contact content. Navigation is anchored to stable section identifiers and updates the active state as the user scrolls, which keeps desktop and mobile navigation aligned with the visible content.

The codebase separates structured content from visual composition. Data and type definitions live under `src/data/`, while reusable React components, layout primitives, and navigation elements live under `src/components/`, and browser-specific behavior is isolated in `src/hooks/`.

## Features

- Responsive single-page CV and portfolio layout with desktop and mobile navigation.
- Typed content architecture for sections, entries, images, CTA blocks, skills, descriptions, and suffix content.
- Modular layout shells that separate semantic structure from visual styling.
- Custom hooks for viewport detection, active-section observation, window sizing, outside-click handling, and timed UI updates.
- Testimonial carousel with auto-advance behavior and manual selection controls.
- Runtime environment helpers for browser, touch, DOM, and Apple-device capability checks.

## Tech Stack

| Technology                  | Role                                                                    |
|-----------------------------|-------------------------------------------------------------------------|
| Next.js                     | React framework, routing, image optimization, and application runtime.  |
| TypeScript                  | Static typing for content models, props, helpers, and configuration.    |
| Tailwind CSS                | Utility-first styling, theme tokens, and responsive layout composition. |
| SCSS                        | Global baseline styles in `src/globalStyles.scss`.                      |
| Headless UI                 | Mobile navigation dialog and transition primitives.                     |
| Heroicons                   | Menu icon and related navigation visuals.                               |
| classnames                  | Conditional class composition in interactive components.                |
| next-sitemap                | Sitemap generation support through `next-sitemap.js`.                   |
| Yarn                        | Package management via `yarn.lock` and `.yarnrc.yml`.                   |
| ESLint, Prettier, Stylelint | Code formatting and quality enforcement through root config files.      |

## Project Structure

```text
.
├── public/                    # Static assets served directly
├── src/
│   ├── components/            # UI components, layout shells, sections, navigation, icons
│   ├── data/                  # Section data, shared content definitions, helper types
│   ├── hooks/                 # Custom React hooks for browser and UI behavior
│   ├── pages/                 # Next.js page routes
│   ├── utilComp/              # Shared utility helpers and layout-related utilities
│   ├── images/                # Static image assets imported in source code
│   ├── config.ts              # Runtime environment flags
│   ├── globalStyles.scss      # Global SCSS styles
│   └── types.d.ts             # Global ambient type declarations
├── next.config.js             # Next.js configuration
├── next-sitemap.js            # Sitemap generation config
├── tailwind.config.js         # Tailwind CSS configuration
├── tsconfig.json              # TypeScript configuration
├── postcss.config.js          # PostCSS configuration
├── stylelint.config.js        # Stylelint rules
├── .eslintrc                  # ESLint rules
├── .prettierrc                # Prettier rules
├── JSDOC_STYLE.md             # JSDoc authoring guide
└── package.json               # Scripts and dependencies
```

The `src/components/Sections/` directory contains the top-level page sections, while `src/components/Layout/` contains the reusable shells and layout elements used to compose those sections. The `src/data/` tree stores both section-specific content and shared definitions, including section ids, hero data, footer data, content contracts, and utility prop definitions.

## Getting Started

### Prerequisites

- Node.js 18 or newer.
- Yarn configured for the repository environment.

### Install dependencies

```bash
yarn install
```

### Run the development server

```bash
yarn dev
```

### Create a production build

```bash
yarn build
```

### Start the production server

```bash
yarn start
```

### Lint and format

```bash
yarn lint
yarn lint:style
yarn format
```

The exact available scripts are defined in `package.json`, and the repository also includes root-level configuration for Next.js, TypeScript, Tailwind CSS, PostCSS, Stylelint, ESLint, Prettier, and sitemap generation.

## Architecture

### Sections and navigation

The application is organized around stable section identifiers defined in `src/data/SectionIdData.tsx`. Main anchors include `home`, `about`, `contractor`, `skills`, `cv`, `education`, `stack`, `foresight`, and `contact`, with a companion `SectionSubId` object for nested subsection anchors.

`src/components/Navigation/Header.tsx` renders both `DesktopNav` and `MobileNav`, sharing the same ordered section list and active-section state. The navigation uses the `useNavObserver` hook to determine the current section based on viewport position and updates the highlighted item as the user scrolls or resizes the window.

### Hero section

The Hero section is implemented in `src/components/Sections/Hero/index.tsx` and acts as the landing layer of the site. It selects a `mobile` or `screen` image variant through `useIsMobile`, resolves the image source through `resolveImgSrc`, renders the main title and subtitle through the header shell components, and exposes social links plus CTA actions from `heroData`.

The hero layout is composed with `SectionExtShell`, `ArticleExtShell`, and `HeaderExtShell`, and places a jump navigation element at the bottom center of the viewport through `NavSections`. This keeps the section visually immersive while preserving semantic structure and clear navigation flow.

### Testimonials section

`src/components/Sections/Testimonials.tsx` implements a horizontally scrollable testimonial carousel backed by `testimonial` data from `src/data/data.tsx`. It uses `useWindow` to recompute slide width on viewport changes, `useInterval` to auto-advance every 10 seconds, and local state to sync active-dot indicators with the current scroll position.

The section also conditionally enables a fixed-background parallax effect unless the device is identified as both mobile and Apple-based, using runtime checks from `src/config.ts`. If there are no testimonial entries, the component returns `null` and does not render the section.

### Runtime helpers

The repository includes several focused hooks under `src/hooks/`:

- `useDetectOutsideClick` attaches `mousedown` and `touchstart` listeners and triggers a handler only when the event target is outside the referenced element.
- `useInterval` stores the latest callback in a ref and runs it on a configurable timer, which is used by the testimonial carousel.
- `useIsMobile` tracks whether the viewport width is below 640px by using `window.matchMedia` and updating on media-query changes.
- `useNavObserver` tracks the currently active section by combining `IntersectionObserver`, scroll events, resize events, and a fixed top-offset rule.
- `useWindow` exposes `window.innerWidth` and `window.innerHeight` with resize updates and SSR-safe initial values.

### Runtime configuration

`src/config.ts` provides low-level environment flags for `isBrowser`, `isMobile`, `canUseDOM`, and `isApple`. These values support browser-only logic and avoid unsafe DOM access during server-side rendering or when features behave differently across device classes.

## Type Definitions

The repository’s type system is organized around three complementary files in `src/data/utilComp/`: `GeneralDef.tsx` for structured content models, `generalTypeDef.tsx` for shared primitive and semantic unions, and `UtilImportPropsDef.tsx` for component-facing prop definitions. Together, they provide the typed contract that connects raw section data, reusable layout components, helper utilities, and navigation behavior across the application.

### Content definitions

`GeneralDef.tsx` defines the main domain model for section-based content. The central interface is `BaseIndexContentDef`, which represents one top-level section and groups its header, content entries, optional descriptions, CTA blocks, suffix content, and image assets into one reusable structure. `BaseAlContentDef` represents one aligned entry inside such a section and is used for timeline items, contractor content, education records, hero content, and similar article-style blocks.

| Interface                 | Description                                                                                                                                                             |
|---------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `BaseIndexContentDef`     | Top-level section model containing `IxHeader`, `IxContent`, optional `IxDescription`, `IxCallToAction`, `IxBottomSuffix`, `IxImages`, and `IxMainImg`.                  |
| `BaseAlContentDef`        | Reusable aligned content entry with header, dates, role, company, location, up to three descriptions, images, grouped skills, CTA content, and optional suffix content. |
| `ExtAlSkills`             | Grouped skill definition with enable flag, stable section id, optional heading, display mode, and list of skill items.                                                  |
| `BaseAlSkills`            | Single skill item with stable id/key, optional display name, optional description, and initial open state.                                                              |
| `BaseDescriptionDef`      | Structured description block with heading, semantic id, and rich `ReactNode` content.                                                                                   |
| `BaseHeaderItemDef`       | Shared header model with title, optional subtitle, optional suffix, and header-specific identifiers.                                                                    |
| `BaseSuffixDef`           | Optional suffix block rendered below a section or article, with title, content, and stable id.                                                                          |
| `ImgItem`                 | Shared image descriptor with alt text, semantic image type, optional Next.js static import, direct source, optional id/key, and optional image CTA.                     |
| `ExtCallToActionDef`      | Call-to-action group model containing an enable flag and CTA item collection.                                                                                           |
| `BaseCallToActionItemDef` | Single CTA item with type, label, icon, href target, prefix text, primary flag, and stable key.                                                                         |

### Shared semantic types

`generalTypeDef.tsx` provides the reusable low-level type aliases and unions that support the higher-level content models. These definitions standardize how icons, image sources, CTA behavior, role labels, heading tags, image variants, and skill display modes are represented throughout the codebase.

| Type                    | Description                                                                                                                    |
|-------------------------|--------------------------------------------------------------------------------------------------------------------------------|
| `IconButtonLayoutProps` | Props for icon-only link buttons, including `href`, accessible `label`, optional color variant, and class names.               |
| `IconDef`               | Supported icon component shape, either from `react-icons`, forwarded SVG components, or `undefined`.                           |
| `ImgSrcType`            | Direct image source type used by image rendering helpers: string or `StaticImageData`.                                         |
| `BgImageSrc`            | Flexible image input used by background/image resolution helpers: string, `StaticImageData`, `ImgItem`, or `undefined`.        |
| `HdrVariantStyleType`   | Semantic header/layout style variant: `bright`, `dark`, `highlight`, `highlightAlt`, or `null`.                                |
| `DateType`              | Shared string-based date label used by timeline and article entries.                                                           |
| `CallToActionType`      | Supported CTA behavior variants: `contact`, `jump`, `linkPill`, and `linkSimple`.                                              |
| `StrngUndfndType`       | Shared helper alias for optional string values.                                                                                |
| `RoleType`              | Supported role labels such as `Contract-based`, `Project-based`, `Contractor`, `Certification`, and training-related variants. |
| `HeadingTag`            | Semantic heading tag name derived from `React.JSX.IntrinsicElements`.                                                          |
| `ImagesType`            | Semantic image variant type: `mobile`, `screen`, `undefined`, `top`, `bottom`, or `main`.                                      |
| `DisplaySkills`         | Skill rendering mode: `pills`, `pillsExt`, `list`, `onlyDescription`, or `undefined`.                                          |

### Component prop contracts

`UtilImportPropsDef.tsx` builds on the shared content and primitive definitions and maps them into concrete component props for layout shells, content sections, skills rendering, image helpers, CTA rendering, and navigation. This file acts as the typed interface layer between section data and the React component tree.

#### Skills and content props

| Prop type                | Description                                                                                                                                            |
|--------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|
| `SkillsArticleProps`     | Props for one top-level skills article, including the `SkillsCollection`, parent section id, subsection id, and optional image/background positioning. |
| `SkillsProps`            | Props for one nested skill entry inside a skills article.                                                                                              |
| `ContentIndexLytProps`   | Props for top-level index-based section layouts using `BaseIndexContentDef`.                                                                           |
| `ContentArticleLytProps` | Props for article list rendering with `BaseAlContentDef[]` and a semantic title tag.                                                                   |
| `ContentSectionLytProps` | Props for a single content entry section rendered with heading semantics.                                                                              |
| `ArtSkillsLytProps`      | Props for article-style skills rendering using `ExtAlSkills`.                                                                                          |
| `SkillsElmntProps`       | Props for the shared skills element renderer, including parent id, optional heading tag, and styling hooks.                                            |
| `SkillsLytProps`         | Props for standalone skills layouts using grouped skill content.                                                                                       |
| `ArtDescriptionLyt`      | Props for rendering a structured description block, including optional disclosure state and toggle callback.                                           |

#### Layout shell props

| Prop type                   | Description                                                                                                                        |
|-----------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| `AsideLytProps`             | Props for the aside wrapper, including optional CTA content and divider display.                                                   |
| `ArticleFooterLytProps`     | Props for footer regions rendered at the bottom of article layouts.                                                                |
| `BrightPillArticleLytProps` | Props for the pill-styled article wrapper, including parent and article class names.                                               |
| `ArticleExtShelProps`       | Props for the semantic article shell with ids, labels, class names, and optional inner wrapper behavior.                           |
| `HeaderLayoutProps`         | Props for reusable header styling, semantic variants, title suffixes, borders, and hover behavior.                                 |
| `HeaderLytProps`            | Props for the header shell used to render titles, subtitles, suffixes, underlines, and custom date nodes.                          |
| `PillLayoutProps`           | Props for pill-style media layouts, including wrapper classes, overlay classes, and image source.                                  |
| `SectionLayoutProps`        | Props for themed section wrappers such as `SectionLayout`, including section id, padding toggle, and main-section flag.            |
| `SectionExtShellProps`      | Props for the general section shell, including section/sub-wrapper classes, optional hidden inner div, and accessibility bindings. |
| `ImageElementProps`         | Props for rendering a semantic image element from an `ImgItem` and image type.                                                     |
| `SectionLytProps`           | Props for semantic section wrappers with optional inner div classes, label ids, and padding behavior.                              |

#### CTA, navigation, and id helpers

| Type                | Description                                                                                                                                   |
|---------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|
| `CallToActionProps` | Props for CTA renderer components, built around one `BaseCallToActionItemDef`.                                                                |
| `NavProps`          | Props for navigation components, including available sections, current active section, and selection callback.                                |
| `NavItemProps`      | Props for individual nav items, including active/inactive styling and click behavior.                                                         |
| `SectionIdsType`    | Structured collection of derived ids for sections, articles, headings, suffixes, and `aria-labelledby` bindings.                              |
| `HeaderIdsType`     | Structured collection of derived ids for headers and suffix sections.                                                                         |
| `ContentIdsType`    | Structured collection of derived ids for section wrappers, headings, descriptions, skills, call-to-action blocks, and accessibility bindings. |

### Design of the type system

The type architecture follows a clear three-layer pattern: content models in `GeneralDef.tsx`, semantic primitives in `generalTypeDef.tsx`, and component prop contracts in `UtilImportPropsDef.tsx`. This separation keeps raw content declarative, component APIs stable, and helper logic reusable, which is especially useful across the repository’s section-driven modules such as Hero, CV, Contractor, Education, Skills, and shared layout infrastructure.

## Key Source Modules

### `src/components/`

This directory contains the site’s visual layer. It includes base wrappers such as `Base.tsx`, standalone components like `Imprint.tsx` and `Socials.tsx`, icon components, navigation modules, layout shells, and the top-level sections that make up the page.

### `src/data/`

This directory stores both actual section content and the shared definitions that describe how content should be shaped. It contains section-specific folders for About, CV, Contractor, Education, Hero, Homepage, and Skills, as well as shared files such as `HeaderData.tsx`, `FooterData.tsx`, `SectionIdData.tsx`, `data.tsx`, and the utility typing modules.

### `src/hooks/`

The hook layer abstracts client-side behavior into small focused utilities. These hooks support media-query checks, active-section detection, timed transitions, click-outside logic, and viewport sizing without leaking browser-specific code deep into section components.

## Code Style

The repository includes a dedicated `JSDOC_STYLE.md` guide and already applies JSDoc to core hooks and shared definitions, such as `useNavObserver`, `useIsMobile`, and the section id/type definitions. Root-level configuration files for ESLint, Prettier, and Stylelint indicate that formatting, linting, and style consistency are part of the repository workflow.

When extending the project, prefer documenting components, hooks, interfaces, and helper functions in the same pattern already used in the codebase. That keeps the repository readable and makes the shared layout/type system easier to evolve over time.

[JSDOC_STYLE.md](JSDOC_STYLE.md)

## License

This repository includes an MIT license in the root `LICENSE` file.