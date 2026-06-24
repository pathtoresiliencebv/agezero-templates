import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "@/components/icons";
import { createMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd, ItemListJsonLd } from "@/components/seo";

export const metadata = createMetadata({
  title: "Templates",
  description:
    "Ten complete starter sites built from the AgeZero UI kit: SaaS landing, Directory, Ad landing, Lead magnet, Portfolio, AI Tools Directory, Agency, Ecommerce, Startup, Job board. Fork and ship.",
  path: "/templates",
  keywords: ["saas template", "landing page template", "next.js template", "directory template", "ecommerce template", "startup template", "agency template", "careers template"],
});

const templates = [
  {
    slug: "saas-landing",
    title: "SaaS landing page",
    subject: "Ren — AI project management",
    description:
      "Multi-section funnel: hero with product shot, social proof, bento features, pricing tiers, FAQ, final CTA.",
    accent: "from-sky-500/20 to-indigo-500/10",
    sections: ["Hero", "Logo cloud", "Features", "Bento", "Stats", "Pricing", "FAQ"],
  },
  {
    slug: "directory",
    title: "Directory site",
    subject: "AI Tools Directory",
    description:
      "Searchable, filterable listing of 24 tools with categories, featured items, ratings, pricing tiers.",
    accent: "from-emerald-500/20 to-teal-500/10",
    sections: ["Search", "Categories", "Featured", "Grid", "Stats"],
  },
  {
    slug: "ad-landing",
    title: "Ad landing page",
    subject: "AgeZero UI Pro",
    description:
      "High-conversion single-CTA layout: punchy hero, urgency, comparison table, social proof, FAQ.",
    accent: "from-rose-500/20 to-orange-500/10",
    sections: ["Hero", "Benefits", "Comparison", "Testimonial", "Pricing", "FAQ"],
  },
  {
    slug: "lead-magnet",
    title: "Lead magnet",
    subject: "AI SaaS Launch Kit (PDF)",
    description:
      "Email-capture focused page: book preview, what&apos;s inside, author credibility, single form.",
    accent: "from-purple-500/20 to-pink-500/10",
    sections: ["Hero with form", "What&apos;s inside", "Author", "FAQ"],
  },
  {
    slug: "portfolio",
    title: "Portfolio site",
    subject: "Mira Okafor — Designer & Developer",
    description:
      "Personal brand site: featured work, about, skills, testimonials, contact CTA.",
    accent: "from-amber-500/20 to-rose-500/10",
    sections: ["Hero", "Featured work", "About", "Skills", "Testimonials", "Contact"],
  },
  {
    slug: "ai-tools-directory",
    title: "AI Tools Directory",
    subject: "Open-source AI tools",
    description:
      "Full SEO-optimised directory: 69 tools, 10 categories, 41 auto-generated compare pages, blog, RSS, JSON-LD. Static export ready.",
    accent: "from-cyan-500/20 to-violet-500/10",
    sections: ["Tools", "Categories", "Tags", "Compare", "Blog", "RSS", "SEO"],
    preview: "/templates/ai-tools-directory",
  },
  {
    slug: "agency",
    title: "Agency & consultancy",
    subject: "Northwind — design & engineering studio",
    description:
      "Studio landing: hero with team grid, services, case studies, process timeline, values, contact form.",
    accent: "from-rose-500/20 to-orange-500/10",
    sections: ["Hero", "Services", "Case studies", "Team grid", "Process", "Testimonials", "FAQ", "Contact"],
    preview: "/templates/agency",
  },
  {
    slug: "ecommerce",
    title: "Ecommerce product",
    subject: "Halcyon Goods — premium home essentials",
    description:
      "Product landing with sticky cart drawer, category filter, product grid, featured gallery modal, reviews, FAQ, footer.",
    accent: "from-violet-500/20 to-fuchsia-500/10",
    sections: ["Top nav", "Hero", "Categories", "Product grid", "Gallery", "Cart drawer", "Testimonials", "FAQ"],
    preview: "/templates/ecommerce",
  },
  {
    slug: "startup",
    title: "Startup launch (YC-style)",
    subject: "Northwind — the project OS for AI teams",
    description:
      "YC-style launch: punchy hero with mockup, backers strip, bento features, tweet marquee, testimonials, waitlist signup, FAQ.",
    accent: "from-emerald-500/20 to-cyan-500/10",
    sections: ["Hero", "Backers", "Bento features", "Tweet marquee", "Waitlist", "FAQ"],
    preview: "/templates/startup",
  },
  {
    slug: "job-board",
    title: "Careers / job board",
    subject: "Northwind — careers page",
    description:
      "Hiring page: values, perks grid, role list with filters, featured role detail, 5-step hiring process, application form, FAQ.",
    accent: "from-amber-500/20 to-orange-500/10",
    sections: ["Hero", "Values", "Perks", "Open roles", "Hiring process", "Apply form", "FAQ"],
    preview: "/templates/job-board",
  },
];

export default function TemplatesPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Templates", url: "/templates" },
        ]}
      />
      <ItemListJsonLd
        name="AgeZero UI Templates"
        description="Six complete starter sites built from the AgeZero UI kit."
        items={templates.map((t) => ({ name: t.title, url: `/templates/${t.slug}`, description: t.description }))}
      />
      <div className="mx-auto max-w-6xl px-6 py-16">
        <Badge variant="secondary" className="mb-3">
          Templates
        </Badge>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Ten starter sites,
          <br />
          <span className="text-primary">ready to fork.</span>
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Every template is a real, complete page built from the AgeZero UI
          primitives, blocks, and motion elements. Click any to open the
          live demo. View source on each to copy sections into your own
          app.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {templates.map((t) => (
            <Card
              key={t.slug}
              className="group overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div
                className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${t.accent}`}
              >
                {t.preview ? (
                  <img
                    src={t.preview + "/home.png"}
                    alt={t.title}
                    className="absolute inset-0 size-full object-cover object-top"
                    loading="lazy"
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 flex items-center justify-center p-6">
                      <div className="text-center">
                        <div className="mx-auto mb-3 inline-flex size-14 items-center justify-center rounded-2xl border border-border/60 bg-card/80 text-2xl font-semibold backdrop-blur">
                          {t.subject.slice(0, 1)}
                        </div>
                        <p className="text-sm font-medium text-foreground/80">
                          {t.subject}
                        </p>
                      </div>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-card to-transparent" />
                  </>
                )}
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold">{t.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {t.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1">
                  {t.sections.map((s) => (
                    <Badge key={s} variant="outline" className="text-[10px]">
                      {s}
                    </Badge>
                  ))}
                </div>
                <Button asChild className="mt-5 w-full" variant="outline">
                  <Link href={`/templates/${t.slug}`}>
                    Open demo <ArrowRight size={14} />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
