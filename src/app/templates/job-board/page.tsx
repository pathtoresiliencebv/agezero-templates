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
import { Testimonials } from "@/components/blocks/testimonials";
import { FAQ } from "@/components/blocks/faq";
import { LogoCloud } from "@/components/blocks/logo-cloud";
import {
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  Calendar,
  Check,
  Clock,
  Code,
  Globe,
  Heart,
  MapPin,
  Pen,
  Rocket,
  Sparkles,
  TrendingUp,
  Users,
  Wrench,
} from "@/components/icons";
import { Laptop } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";

type Department = "Engineering" | "Design" | "Operations" | "Go-to-market";

interface Role {
  slug: string;
  title: string;
  department: Department;
  location: string;
  type: "Full-time" | "Contract" | "Internship";
  remote: boolean;
  comp: string;
  summary: string;
  accent: string;
}

const ROLES: Role[] = [
  {
    slug: "senior-frontend-engineer",
    title: "Senior Frontend Engineer",
    department: "Engineering",
    location: "New York · Remote (US)",
    type: "Full-time",
    remote: true,
    comp: "$180k–$220k + equity",
    summary:
      "Own the design-system layer. You'll work directly with the founders and ship the next 12 months of UI in a fast, high-trust team.",
    accent: "from-violet-500/30 to-fuchsia-500/20",
  },
  {
    slug: "staff-platform-engineer",
    title: "Staff Platform Engineer",
    department: "Engineering",
    location: "Remote (Global)",
    type: "Full-time",
    remote: true,
    comp: "$220k–$280k + equity",
    summary:
      "Build the multi-tenant infra that runs Northwind for 10k+ teams. K8s, Postgres, Temporal, and a real on-call rotation.",
    accent: "from-sky-500/30 to-indigo-500/20",
  },
  {
    slug: "product-designer",
    title: "Product Designer",
    department: "Design",
    location: "New York · Hybrid",
    type: "Full-time",
    remote: false,
    comp: "$160k–$190k + equity",
    summary:
      "Design the AI-native project OS. Own end-to-end flows from research to hand-off. Portfolio required.",
    accent: "from-rose-500/30 to-orange-500/20",
  },
  {
    slug: "design-engineer",
    title: "Design Engineer",
    department: "Design",
    location: "Remote (US/EU)",
    type: "Full-time",
    remote: true,
    comp: "$170k–$210k + equity",
    summary:
      "Live at the seam between Figma and code. Ship the components the rest of the team uses. Strong React + motion required.",
    accent: "from-amber-500/30 to-rose-500/20",
  },
  {
    slug: "developer-relations",
    title: "Developer Relations Lead",
    department: "Go-to-market",
    location: "Remote (Global)",
    type: "Full-time",
    remote: true,
    comp: "$170k–$210k + equity",
    summary:
      "Build the Northwind developer community. Talks, docs, demos, sample apps. Public-facing role for a technical, opinionated person.",
    accent: "from-emerald-500/30 to-cyan-500/20",
  },
  {
    slug: "growth-marketing",
    title: "Growth Marketing Lead",
    department: "Go-to-market",
    location: "New York",
    type: "Full-time",
    remote: false,
    comp: "$160k–$190k + equity",
    summary:
      "Own the waitlist-to-paid funnel. Run paid + lifecycle experiments weekly. We're at 12k waitlist — help us turn that into 1k paying teams.",
    accent: "from-teal-500/30 to-emerald-500/20",
  },
  {
    slug: "ops-lead",
    title: "Operations Lead",
    department: "Operations",
    location: "New York · Hybrid",
    type: "Full-time",
    remote: false,
    comp: "$140k–$170k + equity",
    summary:
      "Run finance, legal, and people ops. We move fast — this role is the safety net. Looking for a generalist who loves chaos.",
    accent: "from-pink-500/30 to-purple-500/20",
  },
  {
    slug: "ml-engineer",
    title: "ML Engineer (Agents)",
    department: "Engineering",
    location: "Remote (US/EU)",
    type: "Full-time",
    remote: true,
    comp: "$200k–$260k + equity",
    summary:
      "Build the AI features in Northwind — the standup generator, doc summariser, and agent runtime. PyTorch + production experience required.",
    accent: "from-cyan-500/30 to-violet-500/20",
  },
];

const DEPARTMENTS: Array<Department | "All"> = [
  "All",
  "Engineering",
  "Design",
  "Go-to-market",
  "Operations",
];

const PERKS = [
  {
    icon: Heart,
    title: "Health, dental, vision",
    body: "Premium plans for you and your family. 100% covered for US employees.",
  },
  {
    icon: Laptop,
    title: "Hardware budget",
    body: "$3,500 every 2 years for a MacBook Pro, monitor, keyboard, and whatever else you need.",
  },
  {
    icon: Globe,
    title: "Remote-first",
    body: "Work from anywhere in your timezone. Quarterly off-sites in fun cities (last: Lisbon).",
  },
  {
    icon: Clock,
    title: "Flexible hours",
    body: "Async by default. We don't track time. Outcome > output.",
  },
  {
    icon: TrendingUp,
    title: "Meaningful equity",
    body: "10-year exercise window. Every employee gets a stake in what we're building.",
  },
  {
    icon: Wrench,
    title: "Learning stipend",
    body: "$2,500/year for courses, books, conferences. No approval needed.",
  },
  {
    icon: Calendar,
    title: "Generous PTO",
    body: "Unlimited PTO with a 3-week minimum. We track it to make sure you take it.",
  },
  {
    icon: Sparkles,
    title: "Parental leave",
    body: "20 weeks paid for primary, 12 for secondary. Ramp back at 60% for the first month.",
  },
];

const VALUES = [
  {
    title: "Ship every week",
    body: "We don't do quarterly roadmaps. Each Friday we ship something measurable — a feature, an experiment, a fix.",
  },
  {
    title: "Default to async",
    body: "If it can be a doc, it's a doc. If it can be a Loom, it's a Loom. Meetings are the exception, not the rule.",
  },
  {
    title: "Founders' mode",
    body: "Everyone — eng, design, ops — talks to users weekly. We're too small for silos.",
  },
  {
    title: "High trust, high bar",
    body: "We hire adults. No performance reviews, no KPIs. We expect you to hold yourself to a high bar.",
  },
];

const HIRING_PROCESS = [
  { step: "01", title: "Application", body: "Send us your CV + a 5-min Loom about why Northwind. No take-homes yet." },
  { step: "02", title: "Recruiter call", body: "30 minutes with our talent partner. Logistics, comp, your goals." },
  { step: "03", title: "Take-home (paid)", body: "2 hours, paid at $150. Or skip if you have open-source work that demonstrates the same." },
  { step: "04", title: "On-site (virtual)", body: "4×45 min sessions: technical, design, systems, founder. We never do live-coding puzzles." },
  { step: "05", title: "Offer", body: "Same day as the on-site. Comp range shared before the on-site so there are no surprises." },
];

const TESTIMONIALS = [
  {
    name: "Daniel R.",
    role: "Joined 2024 · Senior Engineer",
    quote:
      "I've worked at 4 startups. This is the first one where the founders actually listened when I said 'no, we shouldn't ship that'. Trust is the operating system here.",
    initials: "DR",
  },
  {
    name: "Mira O.",
    role: "Joined 2025 · Product Designer",
    quote:
      "The design-engineer pair-programming model is magic. I haven't opened a Jira ticket in six months — we just ship.",
    initials: "MO",
  },
  {
    name: "Sara C.",
    role: "Joined 2024 · Operations Lead",
    quote:
      "I came from a 4,000-person company. The trust here is scary at first — then you realise it's the only way small teams win.",
    initials: "SC",
  },
];

const FAQ_ITEMS = [
  {
    question: "Do you sponsor visas?",
    answer: "Yes — we sponsor O-1 and H-1B for US-based roles, and we work with immigration lawyers in Canada, the UK, and the EU for roles in those geographies. We don't currently sponsor remote roles outside of those regions.",
  },
  {
    question: "Can I work fully remote from a different country?",
    answer: "For most engineering and design roles, yes — we hire remote across US/EU timezones. For roles requiring physical presence (like our Operations Lead), we need you within commuting distance of NYC.",
  },
  {
    question: "What's the interview process like?",
    answer: "Five steps over ~10 days: application, recruiter call, paid take-home, virtual on-site, offer. We share the comp range before the on-site so there are no surprises. We never do live-coding puzzles.",
  },
  {
    question: "What's the comp philosophy?",
    answer: "We benchmark at the 75th percentile for cash and the 90th for equity. Every role has a published range. Founders + early employees set the bars by role and we update them annually.",
  },
  {
    question: "Do you offer internships?",
    answer: "Yes — we hire 2 summer interns per year (engineering + design). Applications open in January for the following summer.",
  },
];

export default function JobBoardPage() {
  return (
    <div className="flex flex-col">
      {/* ───────── Top nav ───────── */}
      <header className="border-b border-border/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="#" className="flex items-center gap-2 text-base font-semibold">
            <span className="inline-flex size-7 items-center justify-center rounded-md bg-foreground text-background">
              <Rocket size={14} />
            </span>
            Northwind · Careers
          </Link>
          <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
            <Link href="#roles" className="hover:text-foreground">Open roles</Link>
            <Link href="#values" className="hover:text-foreground">How we work</Link>
            <Link href="#process" className="hover:text-foreground">Hiring process</Link>
            <Link href="#faq" className="hover:text-foreground">FAQ</Link>
          </nav>
          <Button asChild size="sm" variant="outline">
            <Link href="#roles">
              See open roles <ArrowRight size={14} />
            </Link>
          </Button>
        </div>
      </header>

      {/* ───────── Hero ───────── */}
      <section className="relative overflow-hidden border-b border-border/60">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,theme(colors.primary/15),transparent_60%)]"
        />
        <div className="relative mx-auto max-w-6xl px-6 py-16 text-center lg:py-24">
          <FadeIn direction="up" duration={500}>
            <Badge variant="secondary" className="mb-5">
              <Sparkles size={12} className="mr-1" /> 8 open roles · Hiring across 4 teams
            </Badge>
            <h1 className="mx-auto max-w-3xl text-balance text-5xl font-semibold tracking-tight sm:text-6xl">
              Help us build the
              <br />
              <span className="text-primary">project OS for AI teams.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground">
              We&apos;re 22 people, fully distributed, and backed by YC,
              Sequoia, and a16z. We ship every Friday and we&apos;re hiring
              across engineering, design, ops, and GTM.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button size="lg" asChild>
                <Link href="#roles">
                  See open roles <ArrowRight size={16} />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#values">How we work</Link>
              </Button>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              <Check size={12} className="mr-1 inline text-emerald-500" /> Comp ranges published up-front · Paid take-home · 5-step process
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ───────── Press / where we've been featured ───────── */}
      <section className="border-b border-border/60 py-10">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-5 text-center text-xs uppercase tracking-wider text-muted-foreground">
            As covered in
          </p>
          <LogoCloud
            logos={[
              { name: "TechCrunch", text: "TechCrunch" },
              { name: "The Verge", text: "The Verge" },
              { name: "Wired", text: "WIRED" },
              { name: "Fast Company", text: "FAST CO" },
              { name: "Y Combinator", text: "YC" },
              { name: "Forbes", text: "Forbes" },
            ]}
          />
        </div>
      </section>

      {/* ───────── Values ───────── */}
      <section id="values" className="border-b border-border/60 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn direction="up">
            <div className="mb-12 text-center">
              <Badge variant="secondary" className="mb-3">
                <Heart size={12} className="mr-1" /> How we work
              </Badge>
              <h2 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Four values we actually live by.
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-lg text-muted-foreground">
                Not posters. We hired and fired against these.
              </p>
            </div>
          </FadeIn>

          <div className="grid gap-5 md:grid-cols-2">
            {VALUES.map((v, i) => (
              <FadeIn key={v.title} direction="up" delay={i * 80}>
                <Card className="h-full">
                  <CardHeader>
                    <div className="mb-3 inline-flex size-10 items-center justify-center rounded-lg bg-primary/10 font-mono text-sm font-semibold text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <CardTitle className="text-xl">{v.title}</CardTitle>
                    <CardDescription className="text-base">
                      {v.body}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Perks grid ───────── */}
      <section className="border-b border-border/60 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn direction="up">
            <div className="mb-12 text-center">
              <Badge variant="secondary" className="mb-3">
                <Sparkles size={12} className="mr-1" /> Perks &amp; benefits
              </Badge>
              <h2 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Everything you need to do your best work.
              </h2>
            </div>
          </FadeIn>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PERKS.map((p, i) => (
              <FadeIn key={p.title} direction="up" delay={i * 60}>
                <Card className="h-full transition-all hover:-translate-y-1 hover:shadow-md">
                  <CardHeader>
                    <div className="mb-3 inline-flex size-10 items-center justify-center rounded-lg border border-border/60 bg-muted">
                      <p.icon size={18} className="text-foreground" />
                    </div>
                    <CardTitle className="text-base">{p.title}</CardTitle>
                    <CardDescription className="text-sm">
                      {p.body}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Open roles ───────── */}
      <section id="roles" className="border-b border-border/60 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn direction="up">
            <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
              <div>
                <Badge variant="secondary" className="mb-3">
                  <Briefcase size={12} className="mr-1" /> Open roles
                </Badge>
                <h2 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                  {ROLES.length} open roles.
                </h2>
                <p className="mt-2 text-muted-foreground">
                  Don&apos;t see your role? Email us at{" "}
                  <Link href="mailto:hiring@northwind.app" className="text-foreground underline-offset-4 hover:underline">
                    hiring@northwind.app
                  </Link>
                  .
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {DEPARTMENTS.map((d) => (
                  <Badge key={d} variant="outline" className="text-xs">
                    {d}
                  </Badge>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={100}>
            <Card className="overflow-hidden">
              <div className="divide-y divide-border/60">
                {ROLES.map((role) => (
                  <Link
                    key={role.slug}
                    href={`#${role.slug}`}
                    className="group grid gap-3 p-5 transition-colors hover:bg-muted/40 sm:grid-cols-[1fr_auto] sm:items-center sm:p-6"
                  >
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-semibold">{role.title}</h3>
                        <Badge variant="outline" className="text-[10px]">
                          {role.department}
                        </Badge>
                        {role.remote && (
                          <Badge variant="secondary" className="text-[10px]">
                            Remote
                          </Badge>
                        )}
                      </div>
                      <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                        {role.summary}
                      </p>
                      <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                        <span className="inline-flex items-center gap-1">
                          <MapPin size={12} /> {role.location}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Briefcase size={12} /> {role.type}
                        </span>
                        <span className="inline-flex items-center gap-1 font-mono">
                          {role.comp}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-end gap-1 text-sm text-muted-foreground transition-colors group-hover:text-foreground">
                      View role <ArrowUpRight size={14} />
                    </div>
                  </Link>
                ))}
              </div>
            </Card>
          </FadeIn>
        </div>
      </section>

      {/* ───────── Featured role detail ───────── */}
      <section id="process" className="border-b border-border/60 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
            <FadeIn direction="up">
              <Badge variant="secondary" className="mb-3">
                <Code size={12} className="mr-1" /> Featured role
              </Badge>
              <h2 className="text-balance text-4xl font-semibold tracking-tight">
                Senior Frontend Engineer
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Own the design-system layer at Northwind. You&apos;ll work
                with the founders directly and ship the next 12 months of
                UI in a small, high-trust team.
              </p>
              <div className="mt-6 space-y-2 text-sm">
                <p className="flex items-center gap-2 text-muted-foreground">
                  <MapPin size={14} /> New York · Remote (US)
                </p>
                <p className="flex items-center gap-2 text-muted-foreground">
                  <Briefcase size={14} /> Full-time
                </p>
                <p className="flex items-center gap-2 text-muted-foreground">
                  <TrendingUp size={14} /> $180k–$220k + equity
                </p>
                <p className="flex items-center gap-2 text-muted-foreground">
                  <Users size={14} /> Reports to CTO
                </p>
              </div>
              <Button asChild size="lg" className="mt-6">
                <Link href="#apply">
                  Apply now <ArrowRight size={16} />
                </Link>
              </Button>
            </FadeIn>

            <FadeIn direction="up" delay={150}>
              <Card>
                <CardHeader>
                  <CardTitle>What you&apos;ll do</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm">
                  {[
                    "Own the design-system layer — tokens, primitives, motion, accessibility",
                    "Pair with designers weekly to ship high-craft UI",
                    "Drive technical decisions on state management, rendering, and animation",
                    "Mentor mid-level engineers and review PRs across the team",
                    "Set the bar for performance (LCP < 1.2s, TBT < 100ms)",
                  ].map((b) => (
                    <div key={b} className="flex items-start gap-2">
                      <Check size={14} className="mt-0.5 shrink-0 text-primary" />
                      <span>{b}</span>
                    </div>
                  ))}

                  <div className="mt-6 border-t border-border/60 pt-4">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">
                      What we&apos;re looking for
                    </p>
                    <ul className="mt-3 space-y-2 text-sm">
                      {[
                        "5+ years of frontend experience (or equivalent open-source work)",
                        "Strong React + TypeScript + Tailwind skills",
                        "Comfortable owning a design-system end-to-end",
                        "Past work shipping accessibility-first products",
                      ].map((b) => (
                        <li key={b} className="flex items-start gap-2">
                          <span className="mt-1.5 size-1 shrink-0 rounded-full bg-foreground/60" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ───────── Hiring process ───────── */}
      <section className="border-b border-border/60 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn direction="up">
            <div className="mb-12 text-center">
              <Badge variant="secondary" className="mb-3">
                <Clock size={12} className="mr-1" /> Hiring process
              </Badge>
              <h2 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Five steps. About ten days.
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-lg text-muted-foreground">
                We share the comp range before the on-site. We pay for the
                take-home. We never do live-coding puzzles.
              </p>
            </div>
          </FadeIn>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {HIRING_PROCESS.map((step, i) => (
              <FadeIn key={step.step} direction="up" delay={i * 80}>
                <Card className="relative h-full">
                  <CardHeader>
                    <span className="mb-2 font-mono text-2xl font-semibold text-primary">
                      {step.step}
                    </span>
                    <CardTitle className="text-base">{step.title}</CardTitle>
                    <CardDescription className="text-sm">
                      {step.body}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Testimonials ───────── */}
      <section className="border-b border-border/60 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn direction="up">
            <div className="mb-12 text-center">
              <Badge variant="secondary" className="mb-3">
                <Heart size={12} className="mr-1" /> What the team says
              </Badge>
              <h2 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                The best place they&apos;ve worked.
              </h2>
            </div>
          </FadeIn>
          <Testimonials items={TESTIMONIALS} />
        </div>
      </section>

      {/* ───────── Application form ───────── */}
      <section id="apply" className="border-b border-border/60 py-20">
        <div className="mx-auto max-w-3xl px-6">
          <FadeIn direction="up">
            <Card className="overflow-hidden border-2">
              <div className="grid gap-0 md:grid-cols-[1fr_1.1fr]">
                <div className="border-b border-border/60 p-8 md:border-b-0 md:border-r">
                  <Badge variant="secondary" className="mb-3">
                    <Pen size={12} className="mr-1" /> Apply
                  </Badge>
                  <h3 className="text-2xl font-semibold tracking-tight">
                    Ready to apply?
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Send a CV and a 5-min Loom about why Northwind. We read
                    every one — no ATS black hole.
                  </p>
                  <ul className="mt-6 space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <Check size={14} className="mt-0.5 shrink-0 text-emerald-500" />
                      <span>Reply within 5 business days, always.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={14} className="mt-0.5 shrink-0 text-emerald-500" />
                      <span>Comp range shared up-front, no surprises.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={14} className="mt-0.5 shrink-0 text-emerald-500" />
                      <span>$150 paid for the take-home (or skip with OSS).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={14} className="mt-0.5 shrink-0 text-emerald-500" />
                      <span>Visa sponsorship for US, CA, UK, EU roles.</span>
                    </li>
                  </ul>
                </div>

                <form className="space-y-4 p-8">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-sm font-medium">
                        First name
                      </label>
                      <input
                        type="text"
                        placeholder="Jane"
                        className="w-full rounded-md border border-border/60 bg-background px-3 py-2 text-sm outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/30"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium">
                        Last name
                      </label>
                      <input
                        type="text"
                        placeholder="Founder"
                        className="w-full rounded-md border border-border/60 bg-background px-3 py-2 text-sm outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/30"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="jane@yourco.com"
                      className="w-full rounded-md border border-border/60 bg-background px-3 py-2 text-sm outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/30"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium">
                      Role
                    </label>
                    <select className="w-full rounded-md border border-border/60 bg-background px-3 py-2 text-sm outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/30">
                      <option>Senior Frontend Engineer</option>
                      <option>Staff Platform Engineer</option>
                      <option>Product Designer</option>
                      <option>Design Engineer</option>
                      <option>Developer Relations Lead</option>
                      <option>Growth Marketing Lead</option>
                      <option>Operations Lead</option>
                      <option>ML Engineer (Agents)</option>
                      <option>Other / general application</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium">
                      LinkedIn / portfolio
                    </label>
                    <input
                      type="url"
                      placeholder="https://linkedin.com/in/..."
                      className="w-full rounded-md border border-border/60 bg-background px-3 py-2 text-sm outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/30"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium">
                      Why Northwind? (5 min Loom link or 200 words)
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us why you, why this role, why now."
                      className="w-full rounded-md border border-border/60 bg-background px-3 py-2 text-sm outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/30"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    Submit application <ArrowRight size={16} />
                  </Button>
                  <p className="text-center text-[10px] text-muted-foreground">
                    By submitting, you agree to our privacy policy. We&apos;ll only contact you about this role.
                  </p>
                </form>
              </div>
            </Card>
          </FadeIn>
        </div>
      </section>

      {/* ───────── FAQ ───────── */}
      <section id="faq" className="py-20">
        <div className="mx-auto max-w-3xl px-6">
          <FadeIn direction="up">
            <div className="mb-10 text-center">
              <Badge variant="secondary" className="mb-3">
                FAQ
              </Badge>
              <h2 className="text-balance text-4xl font-semibold tracking-tight">
                Questions, answered.
              </h2>
            </div>
          </FadeIn>
          <FAQ items={FAQ_ITEMS} />
        </div>
      </section>
    </div>
  );
}