"use client";

import * as React from "react";
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
import { Input } from "@/components/ui/input";
import { LogoCloud } from "@/components/blocks/logo-cloud";
import { Testimonials } from "@/components/blocks/testimonials";
import { FAQ } from "@/components/blocks/faq";
import { Marquee } from "@/components/blocks/marquee";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Code,
  Globe,
  Lock,
  Mail,
  Rocket,
  Shield,
  Sparkles,
  Star,
  Twitter,
  Users,
  Zap,
} from "@/components/icons";
import { FadeIn } from "@/components/motion/fade-in";
import { Tilt3D } from "@/components/motion/tilt-3d";

const BACKED_BY = [
  { name: "Y Combinator", text: "Y Combinator" },
  { name: "Sequoia", text: "SEQUOIA" },
  { name: "a16z", text: "a16z" },
  { name: "Index", text: "Index" },
  { name: "Lighthouse", text: "Lighthouse" },
  { name: "South Park Commons", text: "SPC" },
];

const METRICS = [
  { value: "12,847", label: "Founders on the waitlist" },
  { value: "$3.2M", label: "Pre-seed raised" },
  { value: "147", label: "Design partners" },
  { value: "0 → 1", label: "Built in 9 weeks" },
];

const TWEETS = [
  {
    name: "Sara Chen",
    handle: "@sarachen",
    initials: "SC",
    text: "Just got early access to Northwind. It replaces the 4 tools I was using to manage my SaaS. Insane how fast it is.",
    likes: 482,
    retweets: 64,
  },
  {
    name: "Marcus Webb",
    handle: "@marcusw",
    initials: "MW",
    text: "I've been in alpha for two weeks and it's already saved me 30+ hours. The AI assistant feels like cheating.",
    likes: 219,
    retweets: 28,
  },
  {
    name: "Priya Shah",
    handle: "@priyashah",
    initials: "PS",
    text: "Was using Notion + Linear + Superhuman. Northwind is genuinely the first tool that collapsed my workflow into one tab.",
    likes: 1024,
    retweets: 187,
  },
  {
    name: "Jordan Reyes",
    handle: "@jreyes",
    initials: "JR",
    text: "Got waitlisted 4 days ago. The onboarding email alone was better than most product docs. Take my money.",
    likes: 156,
    retweets: 19,
  },
  {
    name: "Avery Kim",
    handle: "@averyk",
    initials: "AK",
    text: "YC W26 alumni building on Northwind. It's the fastest 'ship an MVP in a weekend' tool I've seen since v0.",
    likes: 728,
    retweets: 102,
  },
];

const FAQ_ITEMS = [
  {
    question: "When does Northwind launch?",
    answer: "Public beta opens in July 2026. We're shipping one new design partner cohort per week until then. Join the waitlist to lock in your spot.",
  },
  {
    question: "How much will it cost?",
    answer: "Free during the public beta. After GA we'll have a $0 tier (up to 3 projects) and a $24/mo Pro tier with AI + team features. Founders on the waitlist get Pro for $12/mo for life.",
  },
  {
    question: "Can I bring my team in early?",
    answer: "Yes — Design Partners can invite up to 5 teammates. Apply via the form and we'll get you set up within 24 hours.",
  },
  {
    question: "Is my data safe?",
    answer: "All data is encrypted at rest (AES-256) and in transit (TLS 1.3). We're SOC 2 Type I in progress and targeting Type II by EOY. You can export everything as JSON at any time.",
  },
  {
    question: "Do you have an API?",
    answer: "Yes — a REST API and webhooks ship in beta. The CLI is also open source on GitHub.",
  },
];

const CODE_SNIPPET = `// Northwind: ship a feature in 4 lines
import { project, task, deploy } from "@northwind/sdk";

await project.create({ name: "Q3 launch" });
await task.create({ title: "Hero redesign", assignee: "@mira" });
await deploy.push({ branch: "feat/hero" });`;

export default function StartupPage() {
  const [email, setEmail] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);
  const [position, setPosition] = React.useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    // Simulate waitlist signup — random position 800–12,800
    setPosition(Math.floor(Math.random() * 12000) + 800);
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col">
      {/* ───────── Top bar ───────── */}
      <header className="border-b border-border/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="#" className="flex items-center gap-2 text-base font-semibold">
            <span className="inline-flex size-7 items-center justify-center rounded-md bg-foreground text-background">
              <Rocket size={14} />
            </span>
            Northwind
          </Link>
          <div className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
            <Link href="#features" className="hover:text-foreground">Features</Link>
            <Link href="#proof" className="hover:text-foreground">Proof</Link>
            <Link href="#faq" className="hover:text-foreground">FAQ</Link>
            <Link href="https://twitter.com" className="hover:text-foreground" target="_blank">
              <Twitter size={14} />
            </Link>
          </div>
          <Button asChild size="sm">
            <Link href="#waitlist">
              Join waitlist <ArrowRight size={14} />
            </Link>
          </Button>
        </div>
      </header>

      {/* ───────── Hero ───────── */}
      <section className="relative overflow-hidden border-b border-border/60">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,theme(colors.primary/20),transparent_60%)]"
        />
        <div className="relative mx-auto max-w-6xl px-6 py-16 text-center lg:py-24">
          <FadeIn direction="up" duration={500}>
            <Badge variant="secondary" className="mb-5">
              <Sparkles size={12} className="mr-1" /> Now in private beta · 12,847 founders waiting
            </Badge>
            <h1 className="mx-auto max-w-3xl text-balance text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
              The project OS for{" "}
              <span className="text-primary">AI-native teams.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-balance text-lg leading-relaxed text-muted-foreground">
              Northwind replaces Notion + Linear + Loom + Superhuman with one
              tab. Built in 9 weeks by 4 people. Backed by YC, Sequoia, and
              a16z.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button size="lg" asChild>
                <Link href="#waitlist">
                  Join the waitlist <ArrowRight size={16} />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#proof">
                  See what people are saying
                </Link>
              </Button>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              <Lock size={12} className="mr-1 inline" /> No spam. Unsubscribe in one click. Founder pricing locked in for life.
            </p>
          </FadeIn>

          {/* ─── Product preview ─── */}
          <FadeIn direction="up" delay={250} duration={700}>
            <Tilt3D className="mx-auto mt-14 max-w-4xl rounded-xl border border-border bg-card shadow-2xl">
              <div className="p-1.5">
                <div className="rounded-lg border border-border/60 bg-background">
                  <div className="flex items-center justify-between border-b border-border/60 px-4 py-2.5">
                    <div className="flex items-center gap-2">
                      <span className="size-2 rounded-full bg-rose-500" />
                      <span className="size-2 rounded-full bg-amber-500" />
                      <span className="size-2 rounded-full bg-emerald-500" />
                    </div>
                    <span className="text-xs text-muted-foreground">northwind.app / sprint-14</span>
                    <span className="text-xs text-muted-foreground">⌘K</span>
                  </div>
                  <div className="grid gap-3 p-4 sm:grid-cols-3 sm:gap-4">
                    {[
                      { tag: "Today", title: "Hero redesign review", meta: "@mira · in 30m", color: "bg-rose-500/20" },
                      { tag: "Tomorrow", title: "Q3 OKR draft", meta: "@dan · in 2h", color: "bg-amber-500/20" },
                      { tag: "Friday", title: "Pricing page A/B test", meta: "@priya · 3d", color: "bg-emerald-500/20" },
                      { tag: "Today", title: "Series A deck v3", meta: "@tomi · now", color: "bg-sky-500/20" },
                      { tag: "This week", title: "Beta onboarding email", meta: "@aria · 5d", color: "bg-violet-500/20" },
                      { tag: "Today", title: "API rate-limit alerts", meta: "@lev · 1d", color: "bg-cyan-500/20" },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="rounded-lg border border-border/60 bg-card p-3 transition-all hover:border-foreground/30"
                      >
                        <div className="mb-2 flex items-center gap-2">
                          <span className={`size-1.5 rounded-full ${item.color}`} />
                          <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                            {item.tag}
                          </span>
                        </div>
                        <p className="text-sm font-medium">{item.title}</p>
                        <p className="mt-1 text-xs text-muted-foreground">{item.meta}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Tilt3D>
          </FadeIn>
        </div>
      </section>

      {/* ───────── Logo cloud / Backed by ───────── */}
      <section className="border-b border-border/60 py-10">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-5 text-center text-xs uppercase tracking-wider text-muted-foreground">
            Backed by
          </p>
          <LogoCloud logos={BACKED_BY} />
        </div>
      </section>

      {/* ───────── Metrics strip ───────── */}
      <section className="border-b border-border/60 bg-muted/30 py-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {METRICS.map((m) => (
              <div key={m.label} className="text-center">
                <p className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  {m.value}
                </p>
                <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Feature bento ───────── */}
      <section id="features" className="border-b border-border/60 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn direction="up">
            <div className="mb-12 text-center">
              <Badge variant="secondary" className="mb-3">
                <Zap size={12} className="mr-1" /> Features
              </Badge>
              <h2 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                One tab. Four tools replaced.
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-lg text-muted-foreground">
                Project management, docs, async video, and email — built
                AI-native from day one. No plugins, no integrations.
              </p>
            </div>
          </FadeIn>

          <div className="grid gap-4 md:grid-cols-3">
            <FadeIn direction="up" delay={50} className="md:col-span-2">
              <Card className="h-full overflow-hidden">
                <CardHeader>
                  <div className="mb-3 inline-flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Code size={18} />
                  </div>
                  <CardTitle>Built for builders, by builders</CardTitle>
                  <CardDescription>
                    Every screen has a ⌘K shortcut. Every field has an AI
                    suggestion. Every view can be filtered, sorted, and
                    shared in one keystroke.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <pre className="overflow-x-auto rounded-lg border border-border/60 bg-muted/50 p-4 text-xs">
                    <code>{CODE_SNIPPET}</code>
                  </pre>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn direction="up" delay={100}>
              <Card className="h-full">
                <CardHeader>
                  <div className="mb-3 inline-flex size-10 items-center justify-center rounded-lg bg-rose-500/10 text-rose-500">
                    <Sparkles size={18} />
                  </div>
                  <CardTitle>AI in the loop</CardTitle>
                  <CardDescription>
                    The AI drafts your standup, summarises threads, and
                    turns voice notes into tasks.
                  </CardDescription>
                </CardHeader>
              </Card>
            </FadeIn>

            <FadeIn direction="up" delay={150}>
              <Card className="h-full">
                <CardHeader>
                  <div className="mb-3 inline-flex size-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500">
                    <Shield size={18} />
                  </div>
                  <CardTitle>SOC 2 in progress</CardTitle>
                  <CardDescription>
                    End-to-end encrypted. Export everything as JSON any
                    time.
                  </CardDescription>
                </CardHeader>
              </Card>
            </FadeIn>

            <FadeIn direction="up" delay={200}>
              <Card className="h-full">
                <CardHeader>
                  <div className="mb-3 inline-flex size-10 items-center justify-center rounded-lg bg-amber-500/10 text-amber-500">
                    <Users size={18} />
                  </div>
                  <CardTitle>Real-time multiplayer</CardTitle>
                  <CardDescription>
                    Cursor presence, inline comments, and live task boards.
                  </CardDescription>
                </CardHeader>
              </Card>
            </FadeIn>

            <FadeIn direction="up" delay={250}>
              <Card className="h-full">
                <CardHeader>
                  <div className="mb-3 inline-flex size-10 items-center justify-center rounded-lg bg-sky-500/10 text-sky-500">
                    <Globe size={18} />
                  </div>
                  <CardTitle>Open CLI + API</CardTitle>
                  <CardDescription>
                    Script anything. Pipe tasks into your CI. Or just
                    <code className="ml-1 rounded bg-muted px-1 py-0.5 text-[10px]">nw ship</code>.
                  </CardDescription>
                </CardHeader>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ───────── Social proof ───────── */}
      <section id="proof" className="border-b border-border/60 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn direction="up">
            <div className="mb-12 text-center">
              <Badge variant="secondary" className="mb-3">
                <Twitter size={12} className="mr-1" /> Social proof
              </Badge>
              <h2 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                The first 147 founders
                <br />
                <span className="text-primary">are shipping with Northwind.</span>
              </h2>
            </div>
          </FadeIn>

          {/* Tweet marquee */}
          <FadeIn direction="up" delay={100}>
            <Marquee
              speed={30}
              items={TWEETS.map((t) => ({
                id: t.handle,
                content: (
                  <Card className="w-[320px] shrink-0">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-2">
                        <div className="inline-flex size-9 items-center justify-center rounded-full bg-gradient-to-br from-rose-500/30 to-violet-500/20 text-xs font-semibold">
                          {t.initials}
                        </div>
                        <div>
                          <p className="text-sm font-medium">{t.name}</p>
                          <p className="text-xs text-muted-foreground">{t.handle}</p>
                        </div>
                      </div>
                      <p className="mt-3 text-sm">{t.text}</p>
                      <div className="mt-3 flex items-center gap-4 text-xs text-muted-foreground">
                        <span>♥ {t.likes}</span>
                        <span>↻ {t.retweets}</span>
                      </div>
                    </CardContent>
                  </Card>
                ),
              }))}
            />
          </FadeIn>

          <div className="mt-16">
            <Testimonials
              items={[
                {
                  quote:
                    "I cancelled Notion, Linear, and Superhuman the week I got into the Northwind beta. Three subscriptions, one tab, half the friction.",
                  name: "Sara Chen",
                  role: "Founder, Halcyon",
                  initials: "SC",
                },
                {
                  quote:
                    "The AI standup generator alone saved me 4 hours/week. The CLI saved me the other 40.",
                  name: "Marcus Webb",
                  role: "Founder, Tessera Labs",
                  initials: "MW",
                },
                {
                  quote:
                    "We moved a 40-person eng team onto Northwind in a weekend. Onboarding took an afternoon, not a quarter.",
                  name: "Priya Shah",
                  role: "CTO, Pivot Health",
                  initials: "PS",
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* ───────── Waitlist ───────── */}
      <section id="waitlist" className="border-b border-border/60 py-20">
        <div className="mx-auto max-w-3xl px-6">
          <FadeIn direction="up">
            <Card className="overflow-hidden border-2">
              <div className="grid gap-0 md:grid-cols-[1.1fr_1fr]">
                <div className="p-8 sm:p-10">
                  <Badge variant="secondary" className="mb-3">
                    <Sparkles size={12} className="mr-1" /> Waitlist
                  </Badge>
                  <h3 className="text-3xl font-semibold tracking-tight">
                    Lock in your spot.
                  </h3>
                  <p className="mt-3 text-muted-foreground">
                    Public beta opens in July. Waitlist members get a free
                    month of Pro, founder pricing ($12/mo for life), and
                    a direct line to the founders.
                  </p>
                  <ul className="mt-5 space-y-2 text-sm">
                    {[
                      "Skip the queue — top 100 get instant access",
                      "Founder pricing locked for life ($12/mo)",
                      "Direct Slack with the team",
                      "Free Pro for the first month",
                    ].map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <Check size={14} className="mt-0.5 shrink-0 text-emerald-500" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-t border-border/60 bg-muted/30 p-8 sm:p-10 md:border-l md:border-t-0">
                  {!submitted ? (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="mb-1.5 block text-sm font-medium">
                          Work email
                        </label>
                        <Input
                          type="email"
                          required
                          placeholder="founder@yourco.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="bg-background"
                        />
                      </div>
                      <div>
                        <label className="mb-1.5 block text-sm font-medium">
                          Company
                        </label>
                        <Input
                          type="text"
                          placeholder="Your startup"
                          className="bg-background"
                        />
                      </div>
                      <Button type="submit" size="lg" className="w-full">
                        Join the waitlist <ArrowRight size={16} />
                      </Button>
                      <p className="text-center text-[10px] text-muted-foreground">
                        <Lock size={10} className="mr-1 inline" />
                        We&apos;ll only email you about Northwind. No spam, ever.
                      </p>
                    </form>
                  ) : (
                    <div className="flex h-full flex-col items-center justify-center text-center">
                      <div className="mb-4 inline-flex size-12 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-500">
                        <Check size={20} />
                      </div>
                      <h4 className="text-xl font-semibold">You&apos;re in.</h4>
                      <p className="mt-2 text-sm text-muted-foreground">
                        You&apos;re #{position?.toLocaleString()} on the waitlist.
                      </p>
                      <div className="mt-5 w-full rounded-lg border border-border/60 bg-background p-3">
                        <p className="text-xs uppercase tracking-wider text-muted-foreground">
                          Move up the queue
                        </p>
                        <p className="mt-1 text-sm font-medium">
                          Refer 3 friends → skip 1,000 spots
                        </p>
                        <Button variant="outline" size="sm" className="mt-3 w-full">
                          Copy your referral link
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          </FadeIn>
        </div>
      </section>

      {/* ───────── FAQ ───────── */}
      <section id="faq" className="border-b border-border/60 py-20">
        <div className="mx-auto max-w-3xl px-6">
          <FadeIn direction="up">
            <div className="mb-10 text-center">
              <Badge variant="secondary" className="mb-3">
                FAQ
              </Badge>
              <h2 className="text-balance text-4xl font-semibold tracking-tight">
                Frequently asked.
              </h2>
            </div>
          </FadeIn>
          <FAQ items={FAQ_ITEMS} />
        </div>
      </section>

      {/* ───────── Footer ───────── */}
      <footer className="py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-center sm:flex-row sm:text-left">
          <div>
            <p className="text-sm font-semibold">Northwind</p>
            <p className="mt-1 text-xs text-muted-foreground">
              © 2026 Northwind Labs · Made in Brooklyn
            </p>
          </div>
          <div className="flex items-center gap-5 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-foreground">Privacy</Link>
            <Link href="#" className="hover:text-foreground">Terms</Link>
            <Link href="#" className="hover:text-foreground">
              <Twitter size={14} />
            </Link>
            <Link href="mailto:hi@northwind.app" className="hover:text-foreground">
              <Mail size={14} />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}