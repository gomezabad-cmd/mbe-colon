# Graph Report - .  (2026-07-17)

## Corpus Check
- 89 files · ~183,998 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 288 nodes · 366 edges · 25 communities (20 shown, 5 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 6 edges (avg confidence: 0.5)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Layout Raiz y Paginas Home/Contacto
- Dependencias NPM
- Configuracion TypeScript
- Articulos de Blog (Schema x2)
- Paginas de Servicios
- Blog Dinamico WP y Sitemap
- Contenido Blog SEO (WordPress)
- Convenciones del Proyecto
- Seccion de Resenas Google
- Schema JSON-LD Global (Layout)
- Articulo de Blog Estatico A
- Articulo de Blog: Bordados
- Articulo de Blog Estatico B
- Articulo de Blog Estatico C
- Articulo de Blog Estatico D
- Articulo de Blog Estatico E
- Articulo de Blog Estatico F
- Articulo de Blog Estatico G
- Articulo de Blog: Sellos
- Indice del Blog
- Config de ESLint
- Config de Next.js
- Config de PostCSS
- Config de Tailwind

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `CONTACT` - 13 edges
3. `trackLead()` - 11 edges
4. `Mail Boxes Etc. Colón` - 10 edges
5. `Blog SEO de mbecolon.com` - 8 edges
6. `Footer()` - 7 edges
7. `getPosts()` - 7 edges
8. `include` - 7 edges
9. `mbe-colon (Next.js project)` - 7 edges
10. `BlogPreviewSection()` - 6 edges

## Surprising Connections (you probably didn't know these)
- `mbe-colon (Next.js project)` --represents--> `Mail Boxes Etc. Colón`  [INFERRED]
  README.md → public/llms.txt
- `generateStaticParams()` --calls--> `getPosts()`  [EXTRACTED]
  app/blog/[slug]/page.tsx → lib/wordpress.ts
- `Navbar()` --calls--> `trackLead()`  [EXTRACTED]
  components/Navbar.tsx → lib/pixel.ts
- `ServicePageTemplate()` --calls--> `trackLead()`  [EXTRACTED]
  components/ServicePageTemplate.tsx → lib/pixel.ts
- `UrgencySection()` --calls--> `trackLead()`  [EXTRACTED]
  components/UrgencySection.tsx → lib/pixel.ts

## Import Cycles
- None detected.

## Communities (25 total, 5 thin omitted)

### Community 0 - "Layout Raiz y Paginas Home/Contacto"
Cohesion: 0.08
Nodes (16): metadata, metadata, metadata, SERVICES, POSTS, ContactSection(), Footer(), Navbar() (+8 more)

### Community 1 - "Dependencias NPM"
Cohesion: 0.06
Nodes (32): eslint, eslint-config-next, next, dependencies, next, react, react-dom, devDependencies (+24 more)

### Community 2 - "Configuracion TypeScript"
Cohesion: 0.07
Nodes (28): dom, dom.iterable, esnext, **/*.mts, .next/dev/types/**/*.ts, next-env.d.ts, .next/types/**/*.ts, node_modules (+20 more)

### Community 3 - "Articulos de Blog (Schema x2)"
Cohesion: 0.09
Nodes (15): articleSchema, breadcrumbSchema, metadata, articleSchema, breadcrumbSchema, metadata, articleSchema, breadcrumbSchema (+7 more)

### Community 4 - "Paginas de Servicios"
Cohesion: 0.08
Nodes (12): metadata, metadata, metadata, metadata, metadata, metadata, metadata, FAQ (+4 more)

### Community 5 - "Blog Dinamico WP y Sitemap"
Cohesion: 0.22
Nodes (16): BlogPostPage(), generateMetadata(), generateStaticParams(), Props, getBlogSlugs(), SERVICE_SLUGS, sitemap(), BlogPreviewSection() (+8 more)

### Community 6 - "Contenido Blog SEO (WordPress)"
Cohesion: 0.14
Nodes (18): Artículo: Trámites de aduana en Panamá, Artículo: Guía de compras en Amazon desde Colón, Artículo: Bordados personalizados para uniformes en Colón, Artículo: Cómo empacar paquetes correctamente, Artículo: Impresión de planos y brochures en Colón, Artículo: Logística para PYMEs en la Zona Libre de Colón, Artículo: Sellos automáticos personalizados en Colón, Blog SEO de mbecolon.com (+10 more)

### Community 7 - "Convenciones del Proyecto"
Cohesion: 0.14
Nodes (16): app/page.tsx, Bun, CLAUDE.md (referencia a AGENTS.md), create-next-app, Convención: Next.js con breaking changes, Comando de desarrollo local, Geist (fuente), http://localhost:3000 (+8 more)

### Community 8 - "Seccion de Resenas Google"
Cohesion: 0.29
Nodes (5): ReviewsSection(), getGoogleReviews(), GoogleReview, PlaceReviews, STATIC_REVIEWS

### Community 9 - "Schema JSON-LD Global (Layout)"
Cohesion: 0.33
Nodes (4): breadcrumbSchema, faqSchema, metadata, schemaGraph

### Community 10 - "Articulo de Blog Estatico A"
Cohesion: 0.40
Nodes (3): articleSchema, breadcrumbSchema, metadata

### Community 11 - "Articulo de Blog: Bordados"
Cohesion: 0.40
Nodes (3): articleSchema, breadcrumbSchema, metadata

### Community 12 - "Articulo de Blog Estatico B"
Cohesion: 0.40
Nodes (3): articleSchema, breadcrumbSchema, metadata

### Community 13 - "Articulo de Blog Estatico C"
Cohesion: 0.40
Nodes (3): articleSchema, breadcrumbSchema, metadata

### Community 14 - "Articulo de Blog Estatico D"
Cohesion: 0.40
Nodes (3): articleSchema, breadcrumbSchema, metadata

### Community 15 - "Articulo de Blog Estatico E"
Cohesion: 0.40
Nodes (3): articleSchema, breadcrumbSchema, metadata

### Community 16 - "Articulo de Blog Estatico F"
Cohesion: 0.40
Nodes (3): articleSchema, breadcrumbSchema, metadata

### Community 17 - "Articulo de Blog Estatico G"
Cohesion: 0.40
Nodes (3): articleSchema, breadcrumbSchema, metadata

### Community 18 - "Articulo de Blog: Sellos"
Cohesion: 0.40
Nodes (3): articleSchema, breadcrumbSchema, metadata

## Knowledge Gaps
- **127 isolated node(s):** `Props`, `metadata`, `articleSchema`, `breadcrumbSchema`, `metadata` (+122 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `CONTACT` connect `Articulos de Blog (Schema x2)` to `Layout Raiz y Paginas Home/Contacto`, `Paginas de Servicios`?**
  _High betweenness centrality (0.034) - this node is a cross-community bridge._
- **Why does `trackLead()` connect `Layout Raiz y Paginas Home/Contacto` to `Paginas de Servicios`?**
  _High betweenness centrality (0.014) - this node is a cross-community bridge._
- **What connects `Props`, `metadata`, `articleSchema` to the rest of the system?**
  _127 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Layout Raiz y Paginas Home/Contacto` be split into smaller, more focused modules?**
  _Cohesion score 0.08292682926829269 - nodes in this community are weakly interconnected._
- **Should `Dependencias NPM` be split into smaller, more focused modules?**
  _Cohesion score 0.06060606060606061 - nodes in this community are weakly interconnected._
- **Should `Configuracion TypeScript` be split into smaller, more focused modules?**
  _Cohesion score 0.06896551724137931 - nodes in this community are weakly interconnected._
- **Should `Articulos de Blog (Schema x2)` be split into smaller, more focused modules?**
  _Cohesion score 0.0873015873015873 - nodes in this community are weakly interconnected._