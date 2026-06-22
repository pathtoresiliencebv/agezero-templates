import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Code,
  Database,
  FileText,
  Globe,
  GitBranch,
  Layers,
  Search,
  Rocket,
  Tag,
  Award,
} from "@/components/icons";
import { createMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd, JsonLd } from "@/components/seo";

export const metadata = createMetadata({
  title: "AI Tools Directory template",
  description:
    "A full SEO-optimised directory site for open-source AI tools. 69 tools across 10 categories, 14 tags, 41 generated comparison pages, blog, RSS feeds, sitemap, JSON-LD for every tool. Built with Next.js 16 + React 19 + Tailwind v4.",
  path: "/templates/ai-tools-directory",
  keywords: [
    "ai tools directory",
    "directory template",
    "next.js directory",
    "static site template",
    "seo template",
    "open source ai",
  ],
});

const STATS = [
  { value: 69, label: "Tools" },
  { value: 10, label: "Categories" },
  { value: 14, label: "Tags" },
  { value: 41, label: "Compare pages" },
  { value: 8, label: "Blog posts" },
  { value: 104, label: "Indexed pages" },
];

const CATEGORIES = [
  "LLMs & Inference",
  "Code Assistants",
  "Image Generation",
  "Video Generation",
  "Audio & Voice",
  "RAG Frameworks",
  "AI Agents",
  "Vector Databases",
  "Fine-tuning",
  "Multimodal",
];

const ROUTES = [
  { path: "/", desc: "Homepage with hero, featured tools, category quick-links, search" },
  { path: "/tools", desc: "Browse all 69 tools with search, category filter, sort" },
  { path: "/tools/[slug]", desc: "Tool detail with JSON-LD, FAQ schema, related tools" },
  { path: "/categories", desc: "All 10 categories with counts and hero" },
  { path: "/categories/[category]", desc: "Filtered tool list per category" },
  { path: "/compare/[slug]", desc: "Side-by-side tool comparisons (41 generated)" },
  { path: "/tags", desc: "All 14 tags with counts" },
  { path: "/tags/[tag]", desc: "Tools filtered by tag (e.g. self-hostable, python)" },
  { path: "/licenses", desc: "Open-source license overview (MIT, Apache, …)" },
  { path: "/blog", desc: "Editorial posts about the AI tooling ecosystem" },
  { path: "/blog/[slug]", desc: "Blog post detail with markdown rendering" },
  { path: "/submit", desc: "Submission form for adding a new tool" },
  { path: "/about", desc: "About the directory + contact info" },
  { path: "/feed.xml", desc: "RSS feed for new tools" },
  { path: "/feed.json", desc: "JSON Feed for tools" },
  { path: "/sitemap.xml", desc: "Auto-generated sitemap of every page" },
];

const FEATURES = [
  {
    icon: Search,
    title: "Full-text search",
    body: "Client-side fuzzy search across name, tagline, description, tags and category.",
  },
  {
    icon: Layers,
    title: "10 categories",
    body: "LLMs, code, image, video, audio, RAG, agents, vector DBs, fine-tuning, multimodal.",
  },
  {
    icon: Tag,
    title: "14 cross-cutting tags",
    body: "Filter by language, deployment target or use case: self-hostable, python, typescript, cli, …",
  },
  {
    icon: GitBranch,
    title: "41 auto-generated comparisons",
    body: "/compare/[a]-vs-[b] pages generated at build time for every popular tool pair.",
  },
  {
    icon: Globe,
    title: "Native i18n-friendly URLs",
    body: "All routes are static-friendly with stable slugs, no client-side routing required.",
  },
  {
    icon: Code,
    title: "TypeScript end-to-end",
    body: "Strict types, discriminated unions for categories/tags, typed metadata helpers.",
  },
  {
    icon: Database,
    title: "Static data — no DB",
    body: "69 tools as a typed `tools.ts` array. Easy to fork and replace with a CMS or DB later.",
  },
  {
    icon: FileText,
    title: "JSON-LD everywhere",
    body: "SoftwareApplication schema per tool, FAQ schema per detail page, breadcrumbs, ItemList.",
  },
  {
    icon: Rocket,
    title: "Static export ready",
    body: "Fully static `out/` via `output: 'export'`. Deploy to Vercel, Cloudflare Pages, or GitHub Pages.",
  },
  {
    icon: Award,
    title: "SEO baked in",
    body: "Per-tool meta titles, OG images, sitemap, robots, RSS + JSON feeds.",
  },
];

export default function AIToolsDirectoryTemplatePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Templates", url: "/templates" },
          { name: "AI Tools Directory", url: "/templates/ai-tools-directory" },
        ]}
      />
      <JsonLd id="ld-ai-tools-template">
        {{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "AI Tools Directory template",
          applicationCategory: "WebApplication",
          operatingSystem: "Any",
          description:
            "A full SEO-optimised directory site for open-source AI tools. 69 tools, 10 categories, 14 tags, 41 compare pages, blog, RSS feeds.",
          url: "/templates/ai-tools-directory",
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        }}
      </JsonLd>

      {/* HERO */}
      <section className="relative isolate overflow-hidden border-b border-border/60">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(ellipse at top, hsl(var(--primary)/0.10), transparent 60%)",
          }}
        />
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[1.1fr_1fr] lg:py-24">
          <div>
            <Badge variant="secondary" className="mb-3">
              Template · Directory
            </Badge>
            <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
              An entire AI tools directory,
              <br />
              <span className="text-primary">in one repo.</span>
            </h1>
            <p className="mt-4 max-w-xl text-lg text-muted-foreground">
              69 curated open-source AI tools across 10 categories and 14
              tags. Side-by-side comparisons, blog, RSS feeds, sitemap, JSON-LD
              for every page. Drop in your own data, deploy, done.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <a
                  href="https://agezero-ai-tools-directory.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live demo <ArrowUpRight size={16} />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a
                  href="https://github.com/pathtoresiliencebv/agezero-ui/tree/main/standalone-templates/ai-tools-directory"
                  target="_blank"
                  rel="noreferrer"
                >
                  Clone source <ArrowRight size={16} />
                </a>
              </Button>
              <Button asChild size="lg" variant="ghost">
                <Link href="/templates">← All templates</Link>
              </Button>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-4 sm:grid-cols-6">
              {STATS.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-2xl font-semibold tabular-nums sm:text-3xl">
                    {s.value}
                  </div>
                  <div className="mt-1 text-[10px] uppercase tracking-wider text-muted-foreground">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Preview screenshot */}
          <div className="relative">
            <div className="overflow-hidden rounded-xl border border-border/60 bg-card shadow-2xl shadow-primary/5">
              <div className="flex items-center gap-1.5 border-b border-border/60 bg-muted/30 px-3 py-2">
                <span className="size-2.5 rounded-full bg-rose-400/70" />
                <span className="size-2.5 rounded-full bg-amber-400/70" />
                <span className="size-2.5 rounded-full bg-emerald-400/70" />
                <span className="ml-3 text-xs text-muted-foreground">
                  ai-tools-directory.vercel.app
                </span>
              </div>
              <img
                src="/templates/ai-tools-directory/home.png"
                alt="AI Tools Directory — homepage preview"
                className="block w-full"
                loading="lazy"
              />
            </div>
            <div className="pointer-events-none absolute -inset-x-6 -bottom-6 -z-10 h-2/3 bg-gradient-to-t from-primary/20 to-transparent blur-3xl" />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="border-b border-border/60 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <Badge variant="outline" className="mb-3">
              What&apos;s inside
            </Badge>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Built for AI tooling curators.
            </h2>
            <p className="mt-3 text-muted-foreground">
              Every page has SEO, JSON-LD, and metadata baked in. The static
              data layer means zero infrastructure: just edit
              <code className="mx-1 rounded bg-muted px-1 font-mono text-xs">
                src/data/tools.ts
              </code>
              and redeploy.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => {
              const Icon = f.icon;
              return (
                <Card key={f.title} className="h-full">
                  <CardContent className="p-5">
                    <div className="mb-3 grid size-9 place-items-center rounded-lg border border-border/60 bg-muted/40 text-foreground">
                      <Icon size={18} />
                    </div>
                    <h3 className="font-semibold">{f.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {f.body}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CATEGORIES + TAGS */}
      <section className="border-b border-border/60 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold">10 categories</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                One page per category at <code className="rounded bg-muted px-1 font-mono text-xs">/categories/[slug]</code>.
              </p>
              <ul className="mt-4 space-y-1.5 text-sm">
                {CATEGORIES.map((c) => (
                  <li key={c} className="flex items-center gap-2">
                    <Check size={14} className="text-primary" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">14 tags</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Cross-cutting filters at <code className="rounded bg-muted px-1 font-mono text-xs">/tags/[slug]</code>.
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {[
                  "self-hostable",
                  "python",
                  "typescript",
                  "rust",
                  "cpp",
                  "go",
                  "cli",
                  "api",
                  "production-ready",
                  "beginner-friendly",
                  "multimodal",
                  "real-time",
                  "open-source",
                  "no-code",
                ].map((t) => (
                  <Badge key={t} variant="secondary" className="text-[10px]">
                    {t}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SCREENSHOTS */}
      <section className="border-b border-border/60 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h3 className="text-lg font-semibold">Pages & screens</h3>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {[
              { src: "/templates/ai-tools-directory/tools.png", alt: "Tools directory listing" },
              { src: "/templates/ai-tools-directory/category.png", alt: "Category detail" },
              { src: "/templates/ai-tools-directory/detail.png", alt: "Tool detail page" },
              { src: "/templates/ai-tools-directory/compare.png", alt: "Side-by-side comparison" },
            ].map((s) => (
              <div
                key={s.src}
                className="overflow-hidden rounded-xl border border-border/60 bg-card shadow-sm"
              >
                <img
                  src={s.src}
                  alt={s.alt}
                  className="block w-full"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROUTE MAP */}
      <section className="border-b border-border/60 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h3 className="text-lg font-semibold">All routes</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            16 file-system routes plus dynamic segments. Static export
            produces 104+ pages.
          </p>
          <div className="mt-6 overflow-hidden rounded-xl border border-border/60 bg-card">
            <table className="w-full text-sm">
              <thead className="bg-muted/40">
                <tr>
                  <th className="px-4 py-2 text-left font-medium">Path</th>
                  <th className="px-4 py-2 text-left font-medium">Purpose</th>
                </tr>
              </thead>
              <tbody>
                {ROUTES.map((r, i) => (
                  <tr
                    key={r.path}
                    className={i % 2 ? "bg-muted/20" : undefined}
                  >
                    <td className="px-4 py-2 font-mono text-xs">{r.path}</td>
                    <td className="px-4 py-2 text-muted-foreground">{r.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-semibold tracking-tight">
            Fork it. Replace the data. Ship.
          </h2>
          <p className="mt-3 text-muted-foreground">
            The full Next.js 16 + React 19 source is committed to the
            AgeZero UI monorepo. Add your own tools, deploy as a static
            site, embed anywhere.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg">
              <a
                href="https://agezero-ai-tools-directory.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                Open the live demo <ArrowUpRight size={16} />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a
                href="https://github.com/pathtoresiliencebv/agezero-ui/tree/main/standalone-templates/ai-tools-directory"
                target="_blank"
                rel="noreferrer"
              >
                View source on GitHub <ArrowRight size={14} />
              </a>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <Link href="/templates">
                All templates <ArrowRight size={14} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}