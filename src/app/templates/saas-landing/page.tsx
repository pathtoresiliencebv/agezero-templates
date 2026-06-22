import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LogoCloud } from "@/components/blocks/logo-cloud";
import { Stats } from "@/components/blocks/stats";
import { Testimonials } from "@/components/blocks/testimonials";
import { FAQ } from "@/components/blocks/faq";
import { Pricing } from "@/components/blocks/pricing";
import { AnimatedNumber } from "@/components/blocks/animated-number";
import { Sparkline } from "@/components/charts/sparkline";
import {
  ArrowRight,
  Check,
  CircleCheck,
  Zap,
  Shield,
  Sparkles,
  ChartLine,
  Users,
  GitBranch,
  Brain,
  Bot,
} from "@/components/icons";
import { FadeIn } from "@/components/motion/fade-in";
import { Tilt3D } from "@/components/motion/tilt-3d";

export default function SaasLandingPage() {
  return (
    <div className="flex flex-col">
      {/* ───────────── Hero ───────────── */}
      <section className="relative overflow-hidden border-b border-border/60">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,theme(colors.primary/15),transparent_60%)]"
        />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-2 lg:py-28">
          <div>
            <FadeIn direction="up" duration={500}>
              <Badge variant="secondary" className="mb-5">
                <Sparkles size={12} className="mr-1" /> New: AI brief generator
              </Badge>
              <h1 className="text-balance text-5xl font-semibold tracking-tight sm:text-6xl">
                Ship projects{" "}
                <span className="text-primary">at the speed of thought.</span>
              </h1>
              <p className="mt-5 max-w-xl text-balance text-lg leading-relaxed text-muted-foreground">
                Ren is the AI-native project OS that turns scattered
                conversations, docs, and tickets into a single source of
                truth — so your team spends time shipping, not syncing.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Button size="lg" asChild>
                  <Link href="#pricing">
                    Start free trial <ArrowRight size={16} />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#features">See how it works</Link>
                </Button>
              </div>
              <p className="mt-4 text-xs text-muted-foreground">
                14-day free trial · No credit card · Cancel anytime
              </p>
            </FadeIn>
          </div>
          <FadeIn direction="up" delay={200} duration={700}>
            <Tilt3D className="rounded-xl border border-border bg-card shadow-2xl">
              <div className="p-5">
                <div className="flex items-center justify-between border-b border-border pb-3">
                  <div className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-rose-500" />
                    <span className="size-2 rounded-full bg-amber-500" />
                    <span className="size-2 rounded-full bg-emerald-500" />
                  </div>
                  <span className="text-xs text-muted-foreground">
                    ren.app / sprint-14
                  </span>
                </div>
                <div className="mt-4 grid gap-3">
                  {[
                    { name: "Onboarding flow v3", status: "In review", chart: [4, 6, 8, 6, 9, 7, 12] },
                    { name: "Pricing experiments", status: "On track", chart: [3, 5, 4, 6, 8, 9, 11] },
                    { name: "Mobile redesign", status: "Blocked", chart: [8, 7, 6, 5, 4, 3, 2] },
                    { name: "AI brief generator", status: "In review", chart: [2, 3, 5, 7, 8, 12, 15] },
                  ].map((task, i) => (
                    <div
                      key={task.name}
                      className="flex items-center gap-3 rounded-md border border-border/60 bg-background p-2.5"
                    >
                      <CircleCheck
                        size={16}
                        className={
                          i === 2
                            ? "text-rose-500"
                            : i === 3
                              ? "text-primary"
                              : "text-emerald-500"
                        }
                      />
                      <span className="flex-1 text-sm">{task.name}</span>
                      <div className="hidden h-6 w-20 sm:block">
                        <Sparkline data={task.chart} height={24} fill={false} />
                      </div>
                      <Badge
                        variant={
                          task.status === "Blocked"
                            ? "destructive"
                            : task.status === "In review"
                              ? "secondary"
                              : "outline"
                        }
                        className="text-[10px]"
                      >
                        {task.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>
            </Tilt3D>
          </FadeIn>
        </div>
      </section>

      {/* ───────────── Logo cloud ───────────── */}
      <LogoCloud
        title="Trusted by 4,000+ teams"
        logos={["Vercel", "Linear", "Stripe", "Notion", "Loom", "Framer"].map((n) => ({ name: n, text: n }))}
      />

      {/* ───────────── Bento features ───────────── */}
      <section id="features" className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-3">Features</Badge>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              One workspace. Every angle covered.
            </h2>
            <p className="mt-3 text-muted-foreground">
              Ren replaces five separate tools — and the meetings they
              create.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <Brain size={18} />,
                title: "AI brief generator",
                body: "Turn a one-line idea into a full PRD in under 30 seconds.",
              },
              {
                icon: <GitBranch size={18} />,
                title: "Git-native tasks",
                body: "Bridges and PRs flow straight into the board without a sync step.",
              },
              {
                icon: <Users size={18} />,
                title: "Async standups",
                body: "Auto-generated summaries that read like a Slack thread — but quieter.",
              },
              {
                icon: <ChartLine size={18} />,
                title: "Velocity forecasts",
                body: "ML-based sprint predictions that learn from your last 12 sprints.",
              },
              {
                icon: <Bot size={18} />,
                title: "Agent workflows",
                body: "Drop in a research agent or QA agent and wire them to any task type.",
              },
              {
                icon: <Shield size={18} />,
                title: "SOC 2 Type II",
                body: "Audited annually. Field-level encryption for sensitive projects.",
              },
            ].map((f) => (
              <Card key={f.title} className="bg-card">
                <CardHeader>
                  <div className="mb-2 inline-flex size-9 items-center justify-center rounded-md bg-primary/10 text-primary">
                    {f.icon}
                  </div>
                  <CardTitle className="text-base">{f.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{f.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── Stats ───────────── */}
      <Stats
        title="Built for shipping, not sync"
        items={[
          {
            value: "47",
            label: "Avg. tasks closed / week",
            description: "per teammate",
          },
          {
            value: "73%",
            label: "Reduction in standup time",
            description: "after 30 days",
          },
          {
            value: "4,128",
            label: "Teams onboarded",
            description: "across 38 countries",
          },
          {
            value: "71",
            label: "NPS",
            description: "industry avg: 32",
          },
        ]}
      />

      {/* ───────────── Pricing ───────────── */}
      <section id="pricing">
        <Pricing
          title="Simple pricing. Powerful product."
          subtitle="14-day free trial on every plan. Cancel anytime."
          tiers={[
            {
              name: "Starter",
              price: "$0",
              period: "/ forever",
              description: "For small teams getting started.",
              features: ["Up to 5 teammates", "Unlimited projects", "1 GB storage", "Community support"],
              cta: { label: "Get started", href: "#" },
            },
            {
              name: "Pro",
              price: "$14",
              period: "/ user / mo",
              description: "For growing teams that ship fast.",
              features: ["Unlimited teammates", "AI briefs (500 / mo)", "100 GB storage", "GitHub + Slack sync", "Priority support"],
              cta: { label: "Start trial", href: "#" },
              highlighted: true,
            },
            {
              name: "Enterprise",
              price: "Custom",
              description: "For org-wide rollouts.",
              features: ["SSO + SCIM", "Audit logs", "Dedicated CSM", "99.99% uptime SLA"],
              cta: { label: "Talk to sales", href: "#" },
            },
          ]}
        />
      </section>

      {/* ───────────── Testimonials ───────────── */}
      <Testimonials
        title="Loved by product teams"
        items={[
          {
            quote:
              "Ren cut our sprint planning from 90 minutes to 12. The AI brief alone is worth the upgrade.",
            name: "Maya Ortiz",
            role: "Head of Product, Cobble",
          },
          {
            quote:
              "We replaced Linear + Notion + Loom with Ren. Our meeting count is down 40% in two months.",
            name: "Theo Park",
            role: "CTO, Northbeam",
          },
          {
            quote:
              "The agent workflows feel like cheating. A research agent that posts findings directly into tasks? Wild.",
            name: "Priya Anand",
            role: "Engineering Lead, Drift",
          },
        ]}
      />

      {/* ───────────── FAQ ───────────── */}
      <FAQ
        title="Questions, answered."
        items={[
          { question: "Is there really a free plan?", answer: "Yes. Starter is free forever for teams up to 5. Pro starts at $14/user/month with a 14-day trial." },
          { question: "Do you have a self-hosted option?", answer: "Not yet — Enterprise customers can pin to a single-tenant cloud region. On-prem is on the roadmap for Q3." },
          { question: "How does the AI brief generator work?", answer: "It drafts a PRD from a one-line prompt using our internal model + your past project context. You stay in the driver&apos;s seat — every brief is editable." },
          { question: "Can I import from Linear / Jira / Asana?", answer: "Yes. We support one-click migration from Linear, Jira, and Asana with full history preserved." },
        ]}
      />

      {/* ───────────── CTA ───────────── */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
            Stop syncing.
            <br />
            <span className="text-primary">Start shipping.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Spin up a Ren workspace in under 60 seconds. Free for 14 days,
            no credit card required.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <Button size="lg" asChild>
              <Link href="#">
                Start free trial <ArrowRight size={16} />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#">Book a demo</Link>
            </Button>
          </div>
          <p className="mt-6 inline-flex items-center gap-2 text-xs text-muted-foreground">
            <Zap size={12} /> 4,128 teams · 71 NPS · SOC 2 Type II
          </p>
        </div>
      </section>
    </div>
  );
}