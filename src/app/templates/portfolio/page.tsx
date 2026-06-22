import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Testimonials } from "@/components/blocks/testimonials";
import { LogoCloud } from "@/components/blocks/logo-cloud";
import { FAQ } from "@/components/blocks/faq";
import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  MapPin,
  Sparkles,
  Briefcase,
  Calendar,
} from "@/components/icons";
import { FadeIn } from "@/components/motion/fade-in";
import { Tilt3D } from "@/components/motion/tilt-3d";

interface Project {
  slug: string;
  title: string;
  client: string;
  year: string;
  category: string;
  role: string;
  summary: string;
  accent: string;
  initial: string;
}

const PROJECTS: Project[] = [
  {
    slug: "halcyon",
    title: "Halcyon — AI journaling app",
    client: "Halcyon",
    year: "2026",
    category: "Product design",
    role: "Lead designer + framer-motion dev",
    summary:
      "Rebuilt the entire onboarding flow for an AI journaling app. Reduced day-1 churn by 38% with a 4-screen onboarding that ends in a personalized first entry.",
    accent: "from-violet-500/30 to-fuchsia-500/20",
    initial: "HA",
  },
  {
    slug: "tessera",
    title: "Tessera — Brand & marketing site",
    client: "Tessera Labs",
    year: "2025",
    category: "Brand identity",
    role: "Design + Webflow development",
    summary:
      "Full rebrand and marketing site for a YC-backed AI security startup. Site shipped 2 weeks before Series A — landed 11 inbound leads in week one.",
    accent: "from-amber-500/30 to-rose-500/20",
    initial: "TE",
  },
  {
    slug: "field",
    title: "Field Notes — iOS app",
    client: "Personal",
    year: "2025",
    category: "Side project",
    role: "Design + SwiftUI dev",
    summary:
      "Voice-first note taking app with on-device transcription. Featured by Apple in 'Apps We Love&apos; for two months. 47k active users.",
    accent: "from-sky-500/30 to-emerald-500/20",
    initial: "FN",
  },
  {
    slug: "pivot",
    title: "Pivot — Design system",
    client: "Pivot Health",
    year: "2024",
    category: "Design systems",
    role: "Design system lead",
    summary:
      "Designed and shipped a 120-component design system used by 40 engineers. Cut feature spec time from 3 days to 4 hours.",
    accent: "from-emerald-500/30 to-cyan-500/20",
    initial: "PI",
  },
];

const SKILLS = [
  { group: "Design", items: ["Product design", "Brand identity", "Motion", "Design systems"] },
  { group: "Code", items: ["TypeScript", "React / Next.js", "SwiftUI", "Three.js"] },
  { group: "Tools", items: ["Figma", "Linear", "Cursor", "Vercel"] },
];

const TIMELINE = [
  { year: "2026", role: "Independent designer & developer", body: "Working with founders and design teams on AI-first products." },
  { year: "2024–25", role: "Design lead, Pivot Health", body: "Built and scaled the design system that powers the patient app." },
  { year: "2022–24", role: "Senior product designer, Tessera", body: "Shipped the Tessera brand and the AI security dashboard used by 200+ customers." },
  { year: "2018–22", role: "Designer, Pentagram", body: "Worked across brand, product, and editorial design for 14 clients." },
];

export default function PortfolioPage() {
  return (
    <div className="flex flex-col">
      {/* ───────── Hero ───────── */}
      <section className="relative overflow-hidden border-b border-border/60">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,theme(colors.amber-500/15),transparent_60%)]"
        />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[1fr_auto] lg:items-center lg:py-28">
          <div>
            <FadeIn direction="up" duration={500}>
              <Badge variant="secondary" className="mb-4">
                <Sparkles size={12} className="mr-1" /> Available for new work · Q3 2026
              </Badge>
              <h1 className="text-balance text-5xl font-semibold tracking-tight sm:text-7xl">
                Mira Okafor.
              </h1>
              <p className="mt-4 text-balance text-2xl font-medium text-foreground sm:text-3xl">
                Designer & developer
                <br />
                <span className="text-primary">making AI products feel human.</span>
              </p>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                I help early-stage AI teams ship interfaces that don&apos;t
                feel like they were designed by a committee. Past clients
                include Halcyon, Tessera Labs, and four YC-backed
                companies.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Button size="lg" asChild>
                  <Link href="#contact">
                    Start a project <ArrowRight size={16} />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#work">See selected work</Link>
                </Button>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin size={12} /> Lisbon · remote
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Mail size={12} /> mira@okafor.studio
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Briefcase size={12} /> 14 clients shipped
                </span>
              </div>
            </FadeIn>
          </div>

          <FadeIn direction="up" delay={200}>
            <div className="relative">
              <div className="absolute inset-0 -z-10 rotate-3 rounded-2xl bg-gradient-to-br from-amber-500/30 to-rose-500/20 blur-2xl" />
              <div className="grid size-56 grid-cols-3 gap-2 rounded-2xl border border-border bg-card p-4 shadow-xl">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div
                    key={i}
                    className="aspect-square rounded-md bg-gradient-to-br from-amber-500/40 to-rose-500/40"
                    style={{
                      opacity: 0.3 + ((i * 17) % 70) / 100,
                    }}
                  />
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ───────── Logo cloud (past clients) ───────── */}
      <LogoCloud
        title="Past clients"
        logos={["Halcyon", "Tessera", "Pivot Health", "Quill", "Drift", "Northbeam"].map((n) => ({ name: n, text: n }))}
      />

      {/* ───────── Featured work ───────── */}
      <section id="work" className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-3">
            <div>
              <Badge variant="secondary" className="mb-3">Selected work</Badge>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Four projects I&apos;m proud of.
              </h2>
            </div>
            <Button asChild variant="outline" size="sm">
              <Link href="#contact">
                Have one of your own? <ArrowRight size={14} />
              </Link>
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {PROJECTS.map((p) => (
              <Tilt3D key={p.slug} className="rounded-xl">
                <Link
                  href={`#${p.slug}`}
                  className="group block overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/40 hover:shadow-lg"
                >
                  <div className={`relative aspect-[16/9] overflow-hidden bg-gradient-to-br ${p.accent}`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-7xl font-bold opacity-30">
                        {p.initial}
                      </span>
                    </div>
                    <div className="absolute right-3 top-3">
                      <ArrowUpRight
                        size={18}
                        className="opacity-0 transition-opacity group-hover:opacity-100"
                      />
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="mb-2 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                      <Badge variant="outline" className="text-[10px]">{p.category}</Badge>
                      <span>·</span>
                      <span>{p.client}</span>
                      <span>·</span>
                      <span>{p.year}</span>
                    </div>
                    <h3 className="text-lg font-semibold">{p.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{p.role}</p>
                    <p className="mt-3 text-sm text-foreground/80">{p.summary}</p>
                  </div>
                </Link>
              </Tilt3D>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── About / Skills ───────── */}
      <section className="border-b border-border/60">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <Badge variant="secondary" className="mb-3">About</Badge>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Eight years of making AI products feel real.
            </h2>
            <p className="mt-5 text-muted-foreground">
              I started at Pentagram doing brand work, moved into
              product, and spent the last four years working exclusively
              on AI products. I think the interface of an AI app should
              be the slowest, most considered layer — not the fastest.
            </p>
            <p className="mt-4 text-muted-foreground">
              I work with founders directly, ship in two-week sprints,
              and don&apos;t take on more than two clients at a time.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Skills
            </h3>
            <div className="space-y-5">
              {SKILLS.map((s) => (
                <div key={s.group}>
                  <p className="mb-2 text-sm font-medium">{s.group}</p>
                  <div className="flex flex-wrap gap-2">
                    {s.items.map((it) => (
                      <Badge key={it} variant="secondary">{it}</Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Timeline ───────── */}
      <section className="border-b border-border/60 bg-muted/30">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <Badge variant="secondary" className="mb-3">Experience</Badge>
          <h2 className="mb-10 text-3xl font-semibold tracking-tight sm:text-4xl">
            Where I&apos;ve been.
          </h2>
          <div className="relative space-y-8 border-l border-border pl-8">
            {TIMELINE.map((t) => (
              <div key={t.year} className="relative">
                <span
                  aria-hidden
                  className="absolute -left-[34px] top-1 size-3 rounded-full bg-primary"
                />
                <p className="text-xs font-mono text-muted-foreground">{t.year}</p>
                <h3 className="mt-1 text-base font-semibold">{t.role}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Testimonials ───────── */}
      <Testimonials
        title="Kind words"
        items={[
          {
            quote:
              "Mira rebuilt our onboarding in 11 days. We 4x&apos;d our week-2 retention. Best money we spent all year.",
            name: "Sara Okafor",
            role: "Founder, Halcyon",
          },
          {
            quote:
              "It&apos;s rare to find someone who can design and ship at this level. Mira&apos;s design system work saved us a year.",
            name: "Daniel Reyes",
            role: "CTO, Pivot Health",
          },
        ]}
      />

      {/* ───────── Contact CTA ───────── */}
      <section id="contact" className="border-t border-border/60">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <Badge variant="secondary" className="mb-3">
            <Calendar size={12} className="mr-1" /> Booking Q3 2026
          </Badge>
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Have something to ship?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            I take on two clients at a time. The fastest way to start is
            to email me a one-paragraph brief — I&apos;ll reply within a day.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <Button size="lg" asChild>
              <Link href="mailto:mira@okafor.studio">
                <Mail size={16} className="mr-2" /> mira@okafor.studio
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#">
                Book a 30-min intro call
              </Link>
            </Button>
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
            Currently in Lisbon. Working hours: 09:00–18:00 WET.
          </p>
        </div>
      </section>

      {/* ───────── FAQ ───────── */}
      <FAQ
        title="Quick answers"
        items={[
          { question: "What&apos;s your typical engagement?", answer: "Two-week sprints, usually 2–6 sprints total. I prefer working with founders directly — no agency markup, no account managers." },
          { question: "Do you only design, or do you code too?", answer: "Both. About 60% of my work is design + Webflow / Next.js implementation. The rest is pure design." },
          { question: "How much does it cost?", answer: "Project-based, typically €8k–€25k depending on scope. Always scoped before signing." },
          { question: "Are you available full-time?", answer: "No. I take two clients at a time and stay hands-on throughout." },
        ]}
      />
    </div>
  );
}