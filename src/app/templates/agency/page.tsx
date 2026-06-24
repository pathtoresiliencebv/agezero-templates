import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LogoCloud } from "@/components/blocks/logo-cloud";
import { Stats } from "@/components/blocks/stats";
import { Testimonials } from "@/components/blocks/testimonials";
import { FAQ } from "@/components/blocks/faq";
import { Timeline } from "@/components/blocks/timeline";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Briefcase,
  Check,
  Code,
  Globe,
  Heart,
  Layers,
  Mail,
  MapPin,
  Pen,
  Rocket,
  Sparkles,
  Star,
  TrendingUp,
  Users,
  Wrench,
} from "@/components/icons";
import { FadeIn } from "@/components/motion/fade-in";
import { Tilt3D } from "@/components/motion/tilt-3d";

const SERVICES = [
  {
    icon: Pen,
    title: "Brand identity",
    body: "Logos, type systems, color, voice, motion. We build brands that survive their first launch and the next ten.",
    deliverables: ["Logo suite", "Brand book", "Typography", "Motion system"],
  },
  {
    icon: Code,
    title: "Web & product design",
    body: "End-to-end product design from research to hand-off. We work inside Figma the way your engineers work inside Linear.",
    deliverables: ["Design system", "Hi-fi flows", "Prototype", "Dev hand-off"],
  },
  {
    icon: TrendingUp,
    title: "Growth & conversion",
    body: "Landing pages, paid creative, and lifecycle email that compounds. We've shipped 40+ pages with median 6.1% CVR.",
    deliverables: ["Landing page", "Paid creative", "Lifecycle email", "A/B tests"],
  },
  {
    icon: Wrench,
    title: "Engineering & ship",
    body: "We don't just hand off Figma files. We ship the next.js + tailwind + shadcn stack that's already in your repo.",
    deliverables: ["Next.js build", "CMS integration", "Analytics", "A11y audit"],
  },
];

const TEAM = [
  { name: "Mira Okafor", role: "Founder & creative director", initials: "MO", accent: "from-rose-500/30 to-orange-500/20" },
  { name: "Daniel Reyes", role: "Head of engineering", initials: "DR", accent: "from-sky-500/30 to-indigo-500/20" },
  { name: "Priya Shah", role: "Design lead, product", initials: "PS", accent: "from-emerald-500/30 to-cyan-500/20" },
  { name: "Tomi Adeyemi", role: "Senior brand designer", initials: "TA", accent: "from-violet-500/30 to-fuchsia-500/20" },
  { name: "Elena Voss", role: "Motion & 3D", initials: "EV", accent: "from-amber-500/30 to-rose-500/20" },
  { name: "Kenji Park", role: "Full-stack engineer", initials: "KP", accent: "from-teal-500/30 to-sky-500/20" },
  { name: "Aria Mensah", role: "Content strategist", initials: "AM", accent: "from-pink-500/30 to-purple-500/20" },
  { name: "Lev Carter", role: "Project & ops", initials: "LC", accent: "from-cyan-500/30 to-emerald-500/20" },
];

const CASE_STUDIES = [
  {
    client: "Halcyon",
    tag: "Brand + product",
    title: "AI journaling app, rebuilt from onboarding up.",
    summary:
      "New visual system, 4-screen onboarding, and a marketing site shipped in 11 weeks. Day-1 retention up 38%.",
    metric: "+38%",
    metricLabel: "Day-1 retention",
    accent: "from-violet-500/30 to-fuchsia-500/20",
  },
  {
    client: "Tessera Labs",
    tag: "Marketing site",
    title: "Series-A landing that booked 11 calls in week one.",
    summary:
      "Hero redesign, comparison table, and pricing revamp. The site went live two weeks before the round closed.",
    metric: "11",
    metricLabel: "Inbound calls / wk",
    accent: "from-amber-500/30 to-rose-500/20",
  },
  {
    client: "Pivot Health",
    tag: "Design system",
    title: "120-component system used by 40 engineers.",
    summary:
      "Token-first architecture, Figma library, and a Storybook handoff. Spec time dropped from 3 days to 4 hours.",
    metric: "−92%",
    metricLabel: "Spec time",
    accent: "from-emerald-500/30 to-cyan-500/20",
  },
];

const STATS = [
  { value: "142+", label: "Projects shipped" },
  { value: "38", label: "Awards & features" },
  { value: "96%", label: "Client retention" },
  { value: "12y", label: "In business" },
];

const TIMELINE_ENTRIES = [
  { date: "2014", title: "Studio founded", body: "Mira starts the studio out of a Brooklyn brownstone. Two clients, one espresso machine." },
  { date: "2017", title: "First product team", body: "Hired our first full-stack engineer. Started shipping code alongside design." },
  { date: "2020", title: "Remote-first", body: "Closed the office, opened a 12-person async studio across 8 time zones." },
  { date: "2024", title: "AI-native pivot", body: "Built our own internal agent tooling. Shipped 3 client products end-to-end with AI in the loop." },
  { date: "2026", title: "Twelve years, still shipping", body: "Now 22 humans, 4 full-time collaborators, and a roster of founders we still text." },
];

const FAQ_ITEMS = [
  { question: "How long does a typical engagement last?", answer: "Brand engagements run 6–10 weeks. Product design engagements run 8–14 weeks. Growth sprints are 4 weeks. We're happy to scope down to a single landing page or up to a 12-month retainer." },
  { question: "Do you work with early-stage startups?", answer: "Yes — roughly half our roster is pre-seed to Series A. We have a starter package ($18k) for founders who need a brand, a landing page, and a deck before they ship." },
  { question: "Can you just design it and hand off Figma files?", answer: "Absolutely. About a third of our work is design-only with a structured hand-off. We use a 90-minute Loom walkthrough plus annotated Figma frames so engineering can ship without us in the room." },
  { question: "What's your tech stack for engineering work?", answer: "Next.js + TypeScript + Tailwind + shadcn/ui by default. We also ship on Astro, SvelteKit, and React Native when the product calls for it. Everything goes through Vercel or your own infra." },
  { question: "How do you price retainers?", answer: "Monthly retainers start at $22k for a mixed design + engineering pod. They're month-to-month after a 90-day pilot. We share utilization numbers in a Friday Loom so you always know where the hours went." },
];

export default function AgencyPage() {
  return (
    <div className="flex flex-col">
      {/* ───────── Hero ───────── */}
      <section className="relative overflow-hidden border-b border-border/60">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,theme(colors.rose-500/12),transparent_60%)]"
        />
        <div className="relative mx-auto max-w-6xl px-6 py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <FadeIn direction="up" duration={500}>
              <Badge variant="secondary" className="mb-5">
                <Sparkles size={12} className="mr-1" /> Now booking Q3 2026
              </Badge>
              <h1 className="text-balance text-5xl font-semibold tracking-tight sm:text-6xl">
                A design &amp; engineering
                <br />
                <span className="text-primary">studio for founders.</span>
              </h1>
              <p className="mt-5 max-w-xl text-balance text-lg leading-relaxed text-muted-foreground">
                Northwind is a 22-person studio building brands, products, and
                marketing sites for AI-native founders. We ship the design
                and the code — so nothing gets lost in translation.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Button size="lg" asChild>
                  <Link href="#contact">
                    Book a 30-min intro <ArrowRight size={16} />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#work">See our work</Link>
                </Button>
              </div>
              <div className="mt-7 flex items-center gap-6 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <Star size={14} className="fill-current text-amber-500" /> 4.9 / 5 on Clutch
                </span>
                <span className="hidden sm:inline">·</span>
                <span className="hidden sm:inline-flex items-center gap-1.5">
                  <Award size={14} /> 38 industry awards
                </span>
                <span className="hidden md:inline">·</span>
                <span className="hidden md:inline-flex items-center gap-1.5">
                  <Heart size={14} /> 96% retention
                </span>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={200} duration={700}>
              <Tilt3D className="rounded-xl border border-border bg-card p-1 shadow-2xl">
                <div className="rounded-lg bg-gradient-to-br from-rose-500/10 via-amber-500/10 to-violet-500/10 p-6">
                  <div className="grid grid-cols-3 gap-3">
                    {TEAM.slice(0, 9).map((member, i) => (
                      <div
                        key={member.name}
                        className={`relative aspect-square overflow-hidden rounded-md bg-gradient-to-br ${member.accent} ring-1 ring-border/60`}
                        style={{
                          transform: `rotate(${(i % 3) * 1.5 - 1}deg) translateY(${i % 2 === 0 ? "-2px" : "2px"})`,
                        }}
                      >
                        <div className="absolute inset-0 flex items-center justify-center text-lg font-semibold">
                          {member.initials}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                    <span>Northwind team — 22 humans, 8 time zones</span>
                    <span className="inline-flex items-center gap-1">
                      <span className="size-1.5 animate-pulse rounded-full bg-emerald-500" />
                      Online now
                    </span>
                  </div>
                </div>
              </Tilt3D>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ───────── Logo cloud ───────── */}
      <section className="border-b border-border/60 py-12">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-6 text-center text-sm uppercase tracking-wider text-muted-foreground">
            Trusted by 142 founders &amp; teams
          </p>
          <LogoCloud
            logos={[
              { name: "Halcyon", text: "Halcyon" },
              { name: "Tessera", text: "Tessera" },
              { name: "Pivot", text: "Pivot" },
              { name: "Ren", text: "Ren" },
              { name: "Field", text: "Field" },
              { name: "Lumen", text: "Lumen" },
              { name: "Nimbus", text: "Nimbus" },
              { name: "Quill", text: "Quill" },
            ]}
          />
        </div>
      </section>

      {/* ───────── Services ───────── */}
      <section id="services" className="border-b border-border/60 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn direction="up">
            <Badge variant="secondary" className="mb-3">
              <Layers size={12} className="mr-1" /> What we do
            </Badge>
            <h2 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
              Four services, one studio.
            </h2>
            <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
              We work in pods of two — a designer and an engineer — so the
              thing you approve in Figma is the thing that ships in code.
            </p>
          </FadeIn>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {SERVICES.map((service, i) => (
              <FadeIn key={service.title} direction="up" delay={i * 80}>
                <Card className="group h-full transition-all hover:-translate-y-1 hover:shadow-lg">
                  <CardHeader>
                    <div className="mb-3 inline-flex size-11 items-center justify-center rounded-lg border border-border/60 bg-muted text-primary">
                      <service.icon size={20} />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">
                      {service.body}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="grid grid-cols-2 gap-2 text-sm">
                      {service.deliverables.map((d) => (
                        <li
                          key={d}
                          className="flex items-center gap-2 text-muted-foreground"
                        >
                          <Check size={14} className="shrink-0 text-primary" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Stats ───────── */}
      <section className="border-b border-border/60 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <Stats items={STATS} />
        </div>
      </section>

      {/* ───────── Case studies ───────── */}
      <section id="work" className="border-b border-border/60 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn direction="up">
            <Badge variant="secondary" className="mb-3">
              <Briefcase size={12} className="mr-1" /> Selected work
            </Badge>
            <h2 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
              Three case studies,
              <br />
              <span className="text-primary">one repeatable system.</span>
            </h2>
          </FadeIn>

          <div className="mt-12 space-y-5">
            {CASE_STUDIES.map((study, i) => (
              <FadeIn key={study.client} direction="up" delay={i * 100}>
                <Card className="overflow-hidden transition-all hover:-translate-y-0.5 hover:shadow-lg">
                  <div className="grid gap-0 md:grid-cols-[1.2fr_1fr]">
                    <div className="p-6 sm:p-8">
                      <div className="mb-3 flex items-center gap-2">
                        <Badge variant="outline" className="text-[10px]">
                          {study.tag}
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          {study.client}
                        </span>
                      </div>
                      <h3 className="text-2xl font-semibold tracking-tight">
                        {study.title}
                      </h3>
                      <p className="mt-3 text-muted-foreground">
                        {study.summary}
                      </p>
                      <Button asChild variant="link" className="mt-4 px-0">
                        <Link href="#contact">
                          Read the full case study <ArrowUpRight size={14} />
                        </Link>
                      </Button>
                    </div>
                    <div
                      className={`flex flex-col items-center justify-center gap-1 bg-gradient-to-br ${study.accent} p-8 md:p-12`}
                    >
                      <span className="text-5xl font-semibold tracking-tight">
                        {study.metric}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {study.metricLabel}
                      </span>
                    </div>
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Team grid ───────── */}
      <section className="border-b border-border/60 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn direction="up">
            <Badge variant="secondary" className="mb-3">
              <Users size={12} className="mr-1" /> The team
            </Badge>
            <h2 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
              The humans behind the work.
            </h2>
            <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
              Twenty-two people. Eight time zones. One Friday Loom where we
              share utilization, blockers, and what we shipped.
            </p>
          </FadeIn>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {TEAM.map((member, i) => (
              <FadeIn key={member.name} direction="up" delay={i * 50}>
                <Card className="group overflow-hidden transition-all hover:-translate-y-1 hover:shadow-md">
                  <div
                    className={`relative aspect-[4/3] bg-gradient-to-br ${member.accent}`}
                  >
                    <div className="absolute inset-0 flex items-center justify-center text-4xl font-semibold">
                      {member.initials}
                    </div>
                    <div className="absolute right-2 top-2 inline-flex items-center gap-1 rounded-full border border-border/60 bg-background/70 px-2 py-0.5 text-[10px] backdrop-blur">
                      <span className="size-1.5 rounded-full bg-emerald-500" />
                      Available
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <p className="font-semibold">{member.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {member.role}
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Process / timeline ───────── */}
      <section className="border-b border-border/60 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn direction="up">
            <Badge variant="secondary" className="mb-3">
              <Rocket size={12} className="mr-1" /> How we work
            </Badge>
            <h2 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
              From kickoff to ship in five steps.
            </h2>
          </FadeIn>
          <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:items-start">
            <FadeIn direction="up">
              <Timeline
                entries={TIMELINE_ENTRIES.map((t) => ({
                  date: t.date,
                  title: t.title,
                  body: t.body,
                }))}
              />
            </FadeIn>
            <FadeIn direction="up" delay={150}>
              <Card className="p-6">
                <h3 className="text-lg font-semibold">A typical 10-week engagement</h3>
                <ol className="mt-4 space-y-4 text-sm">
                  {[
                    { week: "Wk 1–2", title: "Discovery", body: "Stakeholder interviews, competitor teardown, success metrics." },
                    { week: "Wk 3–4", title: "Direction", body: "Two distinct creative directions, presented as clickable prototypes." },
                    { week: "Wk 5–7", title: "Build", body: "Design system + high-fidelity flows, weekly Friday Loom." },
                    { week: "Wk 8–9", title: "Ship", body: "Engineering handoff, QA, lighthouse + a11y audit." },
                    { week: "Wk 10", title: "Launch & iterate", body: "Go-live support, conversion telemetry, 30-day retro." },
                  ].map((step) => (
                    <li key={step.week} className="flex gap-4">
                      <span className="mt-0.5 shrink-0 rounded-md border border-border/60 bg-muted px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
                        {step.week}
                      </span>
                      <div>
                        <p className="font-medium">{step.title}</p>
                        <p className="text-muted-foreground">{step.body}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ───────── Testimonials ───────── */}
      <section className="border-b border-border/60 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn direction="up">
            <Badge variant="secondary" className="mb-3">
              <QuoteIcon size={12} className="mr-1" /> What founders say
            </Badge>
            <h2 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
              "The studio that finally shipped our launch."
            </h2>
          </FadeIn>
          <div className="mt-12">
            <Testimonials
              items={[
                {
                  quote:
                    "We hired Northwind for a brand sprint and ended up keeping them for 14 months. They are the studio that finally shipped our Series-A launch.",
                  name: "Sara Chen",
                  role: "Co-founder, Halcyon",
                  initials: "SC",
                },
                {
                  quote:
                    "The level of craft is unmatched. Every detail — every transition, every margin — was intentional. Our conversion rate doubled in six weeks.",
                  name: "Marcus Webb",
                  role: "Founder, Tessera Labs",
                  initials: "MW",
                },
                {
                  quote:
                    "A team that actually understands code. We didn't need to translate design into engineering — they just shipped it.",
                  name: "Priya Shah",
                  role: "CTO, Pivot Health",
                  initials: "PS",
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* ───────── FAQ ───────── */}
      <section className="border-b border-border/60 py-20">
        <div className="mx-auto max-w-3xl px-6">
          <FadeIn direction="up">
            <Badge variant="secondary" className="mb-3">
              <HelpCircleIcon size={12} className="mr-1" /> FAQ
            </Badge>
            <h2 className="text-balance text-4xl font-semibold tracking-tight">
              Frequently asked, honestly answered.
            </h2>
          </FadeIn>
          <div className="mt-10">
            <FAQ items={FAQ_ITEMS} />
          </div>
        </div>
      </section>

      {/* ───────── Contact / CTA ───────── */}
      <section id="contact" className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <FadeIn direction="up">
            <Card className="overflow-hidden border-2">
              <div className="grid gap-0 md:grid-cols-[1fr_1fr]">
                <div className="border-b border-border/60 p-8 md:border-b-0 md:border-r">
                  <Badge variant="secondary" className="mb-3">
                    <Mail size={12} className="mr-1" /> Book an intro
                  </Badge>
                  <h3 className="text-2xl font-semibold tracking-tight">
                    Tell us about your project.
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    A real human (Mira) replies within one business day. No
                    forms, no sequences.
                  </p>
                  <div className="mt-6 space-y-2 text-sm text-muted-foreground">
                    <p className="inline-flex items-center gap-2">
                      <Mail size={14} /> hello@northwind.studio
                    </p>
                    <p className="inline-flex items-center gap-2">
                      <MapPin size={14} /> Brooklyn · Lisbon · Remote
                    </p>
                    <p className="inline-flex items-center gap-2">
                      <Globe size={14} /> northwind.studio
                    </p>
                  </div>
                </div>
                <div className="p-8">
                  <form className="space-y-4">
                    <div>
                      <label className="mb-1.5 block text-sm font-medium">Your name</label>
                      <input
                        type="text"
                        placeholder="Jane Founder"
                        className="w-full rounded-md border border-border/60 bg-background px-3 py-2 text-sm outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/30"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium">Work email</label>
                      <input
                        type="email"
                        placeholder="jane@yourco.com"
                        className="w-full rounded-md border border-border/60 bg-background px-3 py-2 text-sm outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/30"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium">Tell us about the project</label>
                      <textarea
                        rows={4}
                        placeholder="What are you building? When do you need to ship?"
                        className="w-full rounded-md border border-border/60 bg-background px-3 py-2 text-sm outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/30"
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full">
                      Book my intro <ArrowRight size={16} />
                    </Button>
                    <p className="text-center text-[10px] text-muted-foreground">
                      By submitting, you agree to our privacy policy. We'll never share your email.
                    </p>
                  </form>
                </div>
              </div>
            </Card>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

// Inline icon helpers to avoid extra imports — using already-exported icons
function QuoteIcon(props: React.SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size ?? 24}
      height={props.size ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h2c0 5-3.5 6-3.5 6z" />
      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h2c0 5-3.5 6-3.5 6z" />
    </svg>
  );
}

function HelpCircleIcon(props: React.SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size ?? 24}
      height={props.size ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );
}