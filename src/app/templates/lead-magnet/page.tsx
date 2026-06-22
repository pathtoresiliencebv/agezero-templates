import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { EmailCapture } from "@/components/templates/email-capture";
import { Testimonials } from "@/components/blocks/testimonials";
import { FAQ } from "@/components/blocks/faq";
import {
  ArrowRight,
  Check,
  Download,
  Mail,
  Shield,
  Star,
  FileText,
  ImageIcon,
  Video,
  Code,
  MessageSquare,
  TrendingUp,
  Users,
  Clock,
} from "@/components/icons";

const INSIDE = [
  {
    icon: <FileText size={16} />,
    title: "PRD template (Notion)",
    body: "Battle-tested across 30+ launches. Skip the blank-page panic.",
  },
  {
    icon: <TrendingUp size={16} />,
    title: "Launch timeline",
    body: "Day-by-day plan from beta to GA, with email + social templates.",
  },
  {
    icon: <Users size={16} />,
    title: "Outreach scripts",
    body: "Cold email + DM templates that booked us 40+ calls in week one.",
  },
  {
    icon: <ImageIcon size={16} />,
    title: "50 AI image prompts",
    body: "Hero shots, social cards, OG images — copy-paste ready.",
  },
  {
    icon: <Video size={16} />,
    title: "Demo video script",
    body: "90-second explainer structure that converts at 6.2%.",
  },
  {
    icon: <MessageSquare size={16} />,
    title: "Pricing page teardown",
    body: "12 real AI SaaS pricing pages annotated with what works.",
  },
  {
    icon: <Code size={16} />,
    title: "Landing page snippets",
    body: "JSX blocks you can drop into any Next.js site in minutes.",
  },
  {
    icon: <Shield size={16} />,
    title: "Launch checklist",
    body: "97 items from 'domain bought&apos; to 'first paying customer'.",
  },
];

export default function LeadMagnetPage() {
  return (
    <div className="flex flex-col">
      {/* ───────── Hero with form ───────── */}
      <section className="relative overflow-hidden border-b border-border/60">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,theme(colors.purple-500/15),transparent_60%)]"
        />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <Badge variant="secondary" className="mb-4">
              <Star size={12} className="mr-1 fill-current text-amber-500" /> 12,847 builders downloaded
            </Badge>
            <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
              The <span className="text-primary">AI SaaS Launch Kit</span>{" "}
              — free, no opt-in tricks.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
              80 pages of the templates, scripts, and checklists we used
              to launch three AI products to $10k MRR. Drop your email
              and it&apos;s yours.
            </p>

            <EmailCapture
              title="Send me the kit"
              subtitle="PDF + Notion links, instantly. No upsells, no drip campaigns."
              cta="Send it to me"
              badge="Free · No spam · Unsubscribe anytime"
              incentive="🔒 We never share your email. Read our privacy promise below."
              className="mt-8 max-w-xl"
            />

            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <Shield size={12} /> GDPR-friendly
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Download size={12} /> 4.2 MB PDF
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock size={12} /> 80 pages · 30 min read
              </span>
            </div>
          </div>

          {/* Book preview */}
          <div className="relative">
            <div className="absolute inset-0 -z-10 rotate-3 rounded-2xl bg-gradient-to-br from-purple-500/20 to-rose-500/20 blur-2xl" />
            <div className="rotate-2 rounded-xl border border-border bg-card p-6 shadow-2xl transition-transform hover:rotate-0">
              <div className="mb-4 flex items-center justify-between border-b border-border pb-3">
                <Badge className="bg-primary text-primary-foreground">Free</Badge>
                <span className="text-xs text-muted-foreground">v3.2 · 2026</span>
              </div>
              <h3 className="text-2xl font-bold leading-tight">
                The AI SaaS
                <br />
                Launch Kit
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                80 pages · 12 templates · 1 goal
              </p>
              <div className="mt-6 space-y-2">
                {[
                  "PRD template",
                  "Launch timeline",
                  "Outreach scripts",
                  "97-item checklist",
                  "Pricing teardowns",
                  "Demo video script",
                ].map((t) => (
                  <div key={t} className="flex items-center gap-2 text-sm">
                    <Check size={14} className="text-emerald-500" />
                    <span>{t}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 border-t border-border pt-4 text-xs text-muted-foreground">
                Built by the team behind 3 AI products, $10k+ MRR combined.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── What&apos;s inside ───────── */}
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-3">
              What&apos;s inside
            </Badge>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              8 templates. 1 launch.
            </h2>
            <p className="mt-3 text-muted-foreground">
              Every template has been used in a real launch — and edited
              after each one.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {INSIDE.map((item) => (
              <Card key={item.title} className="bg-card">
                <CardContent className="p-5">
                  <div className="mb-3 inline-flex size-8 items-center justify-center rounded-md bg-primary/10 text-primary">
                    {item.icon}
                  </div>
                  <h3 className="text-sm font-semibold">{item.title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{item.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Author credibility ───────── */}
      <section className="border-b border-border/60 bg-muted/30">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <div className="grid gap-8 sm:grid-cols-[120px_1fr] sm:items-center">
            <div className="flex size-28 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/60 text-3xl font-bold text-primary-foreground shadow-xl sm:size-32">
              SO
            </div>
            <div>
              <Badge variant="secondary" className="mb-2">About the author</Badge>
              <h2 className="text-2xl font-semibold tracking-tight">
                Built by Sara Okafor, ex-founder.
              </h2>
              <p className="mt-2 text-muted-foreground">
                Sara launched two AI products to $10k+ MRR and led growth
                at a third. She writes about AI product launches on
                Substack (32k subscribers) and tweets about it to no one
                in particular. The kit is the full set of materials she
                wished she&apos;d had on day one.
              </p>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-10">
            {[
              { v: 12_847, l: "Downloads" },
              { v: 4.8, l: "Avg rating", suffix: "/5", decimals: 1 },
              { v: 32_000, l: "Newsletter subs" },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <div className="text-3xl font-semibold tabular-nums">
                  {s.v.toLocaleString()}
                  {s.suffix ?? ""}
                </div>
                <div className="mt-1 text-xs text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Social proof ───────── */}
      <Testimonials
        title="What readers are saying"
        items={[
          {
            quote: "The PRD template alone saved me a week. I shipped my beta in 11 days.",
            name: "Marcus L.",
            role: "Founder, Slingshot",
          },
          {
            quote: "I bought $400 of templates before this. These are better. And they&apos;re free.",
            name: "Priya R.",
            role: "Indie hacker",
          },
          {
            quote: "The launch timeline is the only one that survived contact with reality.",
            name: "Hadi K.",
            role: "Co-founder, Quill",
          },
        ]}
      />

      {/* ───────── FAQ ───────── */}
      <FAQ
        title="Last questions."
        items={[
          { question: "Is it really free?", answer: "Yes. No upsell, no credit card, no 'premium tier&apos; of the same kit. We make money elsewhere." },
          { question: "What&apos;s the format?", answer: "PDF + a Notion workspace link. The Notion version is editable." },
          { question: "Can I share it with my team?", answer: "Yes — please do. Forward the email or share the Notion link. We don&apos;t gate it." },
          { question: "Will you email me later?", answer: "Only if you opt in to the newsletter. The kit itself triggers no follow-up emails." },
          { question: "Do you have a refund policy?", answer: "It&apos;s free, but if you want a refund we&apos;ll send you $5 for your trouble. Email us." },
        ]}
      />

      {/* ───────── Final CTA repeat ───────── */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-2xl px-6 py-16 text-center">
          <Mail size={28} className="mx-auto mb-3 text-primary" />
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Ready when you are.
          </h2>
          <p className="mt-2 text-muted-foreground">
            Drop your email. Get the kit. Ship the launch.
          </p>
          <EmailCapture
            title=""
            subtitle=""
            cta="Send it to me"
            className="mt-6 bg-transparent p-0"
          />
          <Button asChild variant="ghost" className="mt-4" size="sm">
            <Link href="/templates">
              ← Back to all templates
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}