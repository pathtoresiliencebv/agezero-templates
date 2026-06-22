import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FAQ } from "@/components/blocks/faq";
import { Testimonials } from "@/components/blocks/testimonials";
import { StarRating } from "@/components/templates/star-rating";
import {
  ArrowRight,
  Check,
  X,
  Shield,
  Sparkles,
  Zap,
  Clock,
  Lock,
} from "@/components/icons";
import { FadeIn } from "@/components/motion/fade-in";
import { CountUp } from "@/components/motion/count-up";

const COMPARISON = [
  {
    row: "AI components",
    free: "10",
    pro: "Unlimited",
    flag: true,
  },
  {
    row: "Motion elements",
    free: "Basic",
    pro: "Full library",
    flag: true,
  },
  {
    row: "Theme builder",
    free: false,
    pro: true,
    flag: true,
  },
  {
    row: "Component playground",
    free: false,
    pro: true,
    flag: true,
  },
  {
    row: "CLI auto-install",
    free: false,
    pro: true,
    flag: true,
  },
  {
    row: "MCP server",
    free: false,
    pro: true,
    flag: true,
  },
  {
    row: "Commercial license",
    free: "Single project",
    pro: "Unlimited projects",
    flag: true,
  },
  {
    row: "Updates",
    free: "Best effort",
    pro: "Daily",
    flag: true,
  },
  {
    row: "Support",
    free: "GitHub issues",
    pro: "Priority Slack + email",
    flag: true,
  },
];

export default function AdLandingPage() {
  return (
    <div className="flex flex-col">
      {/* ───────── Above the fold ───────── */}
      <section className="relative overflow-hidden border-b border-border/60">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,theme(colors.rose-500/15),transparent_70%)]"
        />
        <div className="relative mx-auto max-w-4xl px-6 py-20 text-center sm:py-28">
          <FadeIn direction="up" duration={500}>
            <Badge variant="default" className="mb-5 bg-rose-600 text-white">
              <Sparkles size={12} className="mr-1" /> Launch week: 50% off Pro · ends Friday
            </Badge>
            <h1 className="text-balance text-5xl font-semibold tracking-tight sm:text-7xl">
              Build your AI product
              <br />
              <span className="text-primary">in a single afternoon.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground">
              AgeZero UI Pro gives you 14 premium AI components, 10 motion
              elements, a 6-theme builder, and the auto-installing CLI —
              everything you need to ship a polished AI UI today.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={150}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button size="lg" asChild>
                <Link href="#pricing">
                  Claim 50% off <ArrowRight size={16} />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#demo">See it live</Link>
              </Button>
            </div>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <Clock size={12} /> 24 hours left
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Lock size={12} /> 30-day refund
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Shield size={12} /> Lifetime updates
              </span>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={300}>
            <div className="mt-10 flex items-center justify-center gap-6">
              <div className="text-right">
                <div className="text-3xl font-semibold tabular-nums">
                  <CountUp value={4182} duration={1500} />
                </div>
                <div className="text-xs text-muted-foreground">Teams shipping</div>
              </div>
              <div className="h-10 w-px bg-border" />
              <div className="text-left">
                <div className="flex items-center gap-1.5">
                  <span className="text-3xl font-semibold tabular-nums">4.9</span>
                  <span className="text-sm text-muted-foreground">/5</span>
                </div>
                <StarRating value={4.9} count={847} size={12} />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ───────── 3 benefits ───────── */}
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              {
                icon: <Zap size={18} />,
                title: "Ship today, not next month",
                body: "Drop in the kit, customize with the theme builder, and you&apos;re in production by sundown.",
              },
              {
                icon: <Sparkles size={18} />,
                title: "Built for AI products",
                body: "Streaming text, agent cards, reasoning panels, citations — all wired for the Vercel AI SDK.",
              },
              {
                icon: <Shield size={18} />,
                title: "Lock in lifetime access",
                body: "One payment. Every future update. Use it on as many projects as you ship.",
              },
            ].map((b) => (
              <Card key={b.title} className="bg-card">
                <CardContent className="p-6">
                  <div className="mb-3 inline-flex size-9 items-center justify-center rounded-md bg-rose-500/10 text-rose-600">
                    {b.icon}
                  </div>
                  <h3 className="text-base font-semibold">{b.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{b.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Comparison table ───────── */}
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <div className="mb-8 text-center">
            <Badge variant="secondary" className="mb-3">
              Free vs Pro
            </Badge>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              What you get with Pro.
            </h2>
          </div>
          <div className="overflow-hidden rounded-xl border border-border bg-card">
            <div className="grid grid-cols-3 border-b border-border bg-muted/40 px-5 py-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              <div>Feature</div>
              <div className="text-center">Free</div>
              <div className="text-center text-primary">Pro</div>
            </div>
            {COMPARISON.map((c, i) => (
              <div
                key={c.row}
                className={`grid grid-cols-3 px-5 py-3 text-sm ${
                  i % 2 === 0 ? "" : "bg-muted/20"
                }`}
              >
                <div>{c.row}</div>
                <div className="flex items-center justify-center text-muted-foreground">
                  {typeof c.free === "boolean" ? (
                    c.free ? (
                      <Check size={16} className="text-emerald-500" />
                    ) : (
                      <X size={16} />
                    )
                  ) : (
                    <span>{c.free}</span>
                  )}
                </div>
                <div className="flex items-center justify-center font-medium text-foreground">
                  {typeof c.pro === "boolean" ? (
                    c.pro ? (
                      <Check size={16} className="text-emerald-500" />
                    ) : (
                      <X size={16} />
                    )
                  ) : (
                    <span>{c.pro}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Pricing (single offer) ───────── */}
      <section id="pricing" className="border-b border-border/60">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <Badge variant="secondary" className="mb-3">
            Launch pricing
          </Badge>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            One simple price.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Pay once, use forever. No subscription, no surprise upgrades.
          </p>
          <Card className="mx-auto mt-10 max-w-lg border-2 border-rose-500/40 bg-gradient-to-br from-rose-500/5 to-transparent">
            <CardContent className="p-8 text-center">
              <Badge className="mb-3 bg-rose-600 text-white">50% off this week</Badge>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-5xl font-semibold tabular-nums">$149</span>
                <span className="text-2xl text-muted-foreground line-through tabular-nums">$299</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">One-time payment</p>
              <ul className="mt-6 space-y-2 text-left text-sm">
                {[
                  "All 76 components & motion elements",
                  "Theme builder with 6 presets",
                  "Component playground",
                  "CLI auto-install",
                  "MCP server for icon search",
                  "Lifetime updates",
                  "Commercial license (unlimited projects)",
                  "Priority support (Slack + email)",
                ].map((line) => (
                  <li key={line} className="flex items-start gap-2">
                    <Check size={16} className="mt-0.5 shrink-0 text-emerald-500" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg" className="mt-7 w-full" asChild>
                <Link href="#">
                  Get AgeZero UI Pro <ArrowRight size={16} />
                </Link>
              </Button>
              <p className="mt-3 text-xs text-muted-foreground">
                30-day refund · Secure checkout via Stripe
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ───────── Testimonial ───────── */}
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <StarRating value={5} size={20} />
          <blockquote className="mt-6 text-2xl font-medium leading-snug sm:text-3xl">
            &ldquo;We replaced six Figma files and a half-built component
            library with AgeZero UI Pro. Our launch went from &lsquo;next
            quarter&rsquo; to &lsquo;next week&rsquo;.&rdquo;
          </blockquote>
          <div className="mt-6">
            <p className="font-semibold">Lina Park</p>
            <p className="text-sm text-muted-foreground">Co-founder, Halcyon AI</p>
          </div>
        </div>
      </section>

      {/* ───────── FAQ ───────── */}
      <FAQ
        title="Quick answers."
        items={[
          { question: "Can I use Pro on client work?", answer: "Yes. The Pro license covers unlimited personal and client projects, including work you resell." },
          { question: "What if I already bought the free kit?", answer: "Send us your email and we&apos;ll credit your free purchase against Pro — no questions asked." },
          { question: "Do you offer team pricing?", answer: "Not yet. One Pro license covers up to 10 teammates per company." },
          { question: "What&apos;s your refund policy?", answer: "30 days, full refund, no questions. Just reply to the receipt email." },
        ]}
      />

      {/* ───────── Final CTA ───────── */}
      <section className="border-t border-border/60 bg-gradient-to-br from-rose-500/10 to-transparent">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Don&apos;t ship another
            <br />
            <span className="text-rose-600">boring AI demo.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            4,182 teams already chose AgeZero UI. The launch discount ends
            Friday at midnight UTC.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <Button size="lg" asChild className="bg-rose-600 hover:bg-rose-700">
              <Link href="#">
                Claim your 50% discount <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            <Clock size={12} className="mr-1 inline" /> 24 hours left
          </p>
        </div>
      </section>
    </div>
  );
}