"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { DirectoryCard, type DirectoryTool } from "@/components/templates/directory-card";
import { Sparkline } from "@/components/charts/sparkline";
import { AnimatedNumber } from "@/components/blocks/animated-number";
import { Search, Plus, TrendingUp } from "@/components/icons";

const CATEGORIES = [
  "All",
  "Chat",
  "Code",
  "Image",
  "Video",
  "Voice",
  "Productivity",
  "Agents",
  "Data",
] as const;

const TOOLS: DirectoryTool[] = [
  { id: "claude", name: "Claude", tagline: "Anthropic&apos;s helpful, harmless, honest assistant.", category: "Chat", tags: ["assistant", "writing", "reasoning"], rating: 4.9, reviews: 12_400, pricing: "Freemium", featured: true, initials: "CL" },
  { id: "gpt4", name: "GPT-4o", tagline: "OpenAI&apos;s flagship multimodal model.", category: "Chat", tags: ["openai", "multimodal"], rating: 4.8, reviews: 18_200, pricing: "Freemium", featured: true, initials: "G4" },
  { id: "gemini", name: "Gemini 1.5 Pro", tagline: "Google&apos;s 1M context window model.", category: "Chat", tags: ["google", "long-context"], rating: 4.7, reviews: 9_100, pricing: "Freemium", initials: "GM" },
  { id: "mistral", name: "Mistral Large", tagline: "Open-weight European frontier model.", category: "Chat", tags: ["open-source", "eu"], rating: 4.6, reviews: 4_200, pricing: "Freemium", initials: "MS" },
  { id: "llama", name: "Llama 3.1", tagline: "Meta&apos;s open-source foundation model.", category: "Chat", tags: ["open-source", "meta"], rating: 4.5, reviews: 7_300, pricing: "Free", initials: "LL" },
  { id: "cursor", name: "Cursor", tagline: "AI-first code editor built on VS Code.", category: "Code", tags: ["editor", "ide"], rating: 4.9, reviews: 22_100, pricing: "Freemium", featured: true, initials: "CU" },
  { id: "copilot", name: "GitHub Copilot", tagline: "Your AI pair programmer.", category: "Code", tags: ["github", "completion"], rating: 4.7, reviews: 56_400, pricing: "Paid", initials: "GC" },
  { id: "v0", name: "v0 by Vercel", tagline: "Generate React UI from a prompt.", category: "Code", tags: ["vercel", "ui"], rating: 4.8, reviews: 14_800, pricing: "Freemium", initials: "V0" },
  { id: "replit", name: "Replit Agent", tagline: "Build and deploy apps from chat.", category: "Code", tags: ["agent", "deploy"], rating: 4.4, reviews: 3_900, pricing: "Freemium", initials: "RP" },
  { id: "midjourney", name: "Midjourney v6", tagline: "Best-in-class image generation.", category: "Image", tags: ["art", "gen"], rating: 4.9, reviews: 31_200, pricing: "Paid", featured: true, initials: "MJ" },
  { id: "dalle", name: "DALL-E 3", tagline: "OpenAI&apos;s image model with instruction tuning.", category: "Image", tags: ["openai"], rating: 4.6, reviews: 19_500, pricing: "Paid", initials: "DE" },
  { id: "flux", name: "FLUX.1 Pro", tagline: "Black Forest Labs&apos; photorealistic model.", category: "Image", tags: ["black-forest"], rating: 4.7, reviews: 6_300, pricing: "Freemium", initials: "FX" },
  { id: "sora", name: "Sora", tagline: "OpenAI&apos;s text-to-video model.", category: "Video", tags: ["openai", "video"], rating: 4.6, reviews: 8_400, pricing: "Paid", initials: "SO" },
  { id: "runway", name: "Runway Gen-3", tagline: "Pro video gen with motion brush.", category: "Video", tags: ["editor", "fx"], rating: 4.5, reviews: 5_100, pricing: "Paid", initials: "RW" },
  { id: "eleven", name: "ElevenLabs", tagline: "Hyper-realistic voice synthesis.", category: "Voice", tags: ["tts", "clone"], rating: 4.8, reviews: 11_700, pricing: "Freemium", initials: "EL" },
  { id: "whisper", name: "Whisper", tagline: "OpenAI&apos;s open-source speech recognition.", category: "Voice", tags: ["stt", "openai"], rating: 4.7, reviews: 8_900, pricing: "Free", initials: "WH" },
  { id: "perplexity", name: "Perplexity Pro", tagline: "Answer engine with citations.", category: "Productivity", tags: ["search", "research"], rating: 4.8, reviews: 13_400, pricing: "Freemium", featured: true, initials: "PX" },
  { id: "notion-ai", name: "Notion AI", tagline: "AI inside your Notion workspace.", category: "Productivity", tags: ["docs", "workspace"], rating: 4.5, reviews: 7_200, pricing: "Paid", initials: "NA" },
  { id: "raycast", name: "Raycast AI", tagline: "AI commands in your launcher.", category: "Productivity", tags: ["mac", "launcher"], rating: 4.7, reviews: 4_800, pricing: "Freemium", initials: "RC" },
  { id: "manus", name: "Manus", tagline: "Autonomous research and build agent.", category: "Agents", tags: ["agent", "autonomous"], rating: 4.6, reviews: 1_900, pricing: "Freemium", initials: "MN" },
  { id: "autogpt", name: "AutoGPT", tagline: "Open-source autonomous agent framework.", category: "Agents", tags: ["agent", "open-source"], rating: 4.2, reviews: 3_400, pricing: "Free", initials: "AG" },
  { id: "langchain", name: "LangChain", tagline: "Build LLM applications in any language.", category: "Agents", tags: ["framework", "python"], rating: 4.6, reviews: 9_700, pricing: "Freemium", initials: "LC" },
  { id: "exa", name: "Exa Search", tagline: "Neural search for AI applications.", category: "Data", tags: ["search", "embedding"], rating: 4.5, reviews: 1_200, pricing: "Paid", initials: "EX" },
  { id: "pinecone", name: "Pinecone", tagline: "Managed vector database at scale.", category: "Data", tags: ["vector", "db"], rating: 4.6, reviews: 2_800, pricing: "Freemium", initials: "PC" },
];

export default function DirectoryPage() {
  const [q, setQ] = React.useState("");
  const [cat, setCat] = React.useState<(typeof CATEGORIES)[number]>("All");
  const [sort, setSort] = React.useState<"popular" | "rating" | "new">("popular");

  const filtered = React.useMemo(() => {
    let list = TOOLS;
    if (cat !== "All") list = list.filter((t) => t.category === cat);
    if (q.trim()) {
      const needle = q.toLowerCase();
      list = list.filter(
        (t) =>
          t.name.toLowerCase().includes(needle) ||
          t.tagline.toLowerCase().includes(needle) ||
          t.tags.some((tag) => tag.includes(needle))
      );
    }
    const sorted = [...list];
    if (sort === "rating") sorted.sort((a, b) => b.rating - a.rating);
    if (sort === "popular") sorted.sort((a, b) => b.reviews - a.reviews);
    return sorted;
  }, [q, cat, sort]);

  const featured = TOOLS.filter((t) => t.featured);

  return (
    <div className="flex flex-col">
      {/* ───────── Hero with search ───────── */}
      <section className="relative overflow-hidden border-b border-border/60">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,theme(colors.emerald-500/15),transparent_60%)]"
        />
        <div className="relative mx-auto max-w-5xl px-6 py-16 text-center sm:py-20">
          <Badge variant="secondary" className="mb-4">
            <TrendingUp size={12} className="mr-1" /> 24 tools · updated weekly
          </Badge>
          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
            The directory for{" "}
            <span className="text-primary">AI tools that ship.</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-balance text-lg text-muted-foreground">
            Honest ratings, real pricing, no sponsored listings. Find the
            right model, agent, or app for what you&apos;re building.
          </p>
          <div className="relative mx-auto mt-8 max-w-xl">
            <Search
              size={18}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
            />
            <Input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search 24 tools, e.g. 'voice agent&apos; or 'cursor'"
              className="h-12 pl-11 pr-4 text-base shadow-lg"
            />
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={cn(
                  "rounded-full border px-3 py-1 text-xs transition-colors",
                  cat === c
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-muted-foreground hover:text-foreground"
                )}
              >
                {c}
              </button>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            {filtered.length} of {TOOLS.length} tools
          </p>
        </div>
      </section>

      {/* ───────── Featured row ───────── */}
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="mb-6 flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">
                Featured this week
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Editors&apos; picks, refreshed every Monday.
              </p>
            </div>
            <Button asChild variant="outline" size="sm">
              <Link href="#all">View all</Link>
            </Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((tool) => (
              <DirectoryCard key={tool.id} tool={tool} />
            ))}
          </div>
        </div>
      </section>

      {/* ───────── All tools + sidebar ───────── */}
      <section id="all" className="border-b border-border/60">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 lg:grid-cols-[240px_1fr]">
          <aside>
            <div className="sticky top-20 space-y-6">
              <div>
                <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Sort by
                </h3>
                <div className="space-y-1">
                  {[
                    { v: "popular", l: "Most popular" },
                    { v: "rating", l: "Highest rated" },
                    { v: "new", l: "Recently added" },
                  ].map((opt) => (
                    <button
                      key={opt.v}
                      onClick={() => setSort(opt.v as typeof sort)}
                      className={cn(
                        "block w-full rounded-md px-3 py-1.5 text-left text-sm transition-colors",
                        sort === opt.v
                          ? "bg-primary text-primary-foreground"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      )}
                    >
                      {opt.l}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Pricing
                </h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  {["Free", "Freemium", "Paid", "Enterprise"].map((p) => (
                    <li key={p} className="flex items-center justify-between">
                      <span>{p}</span>
                      <span className="text-xs">
                        {TOOLS.filter((t) => t.pricing === p).length}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <Card className="bg-gradient-to-br from-primary/10 to-transparent">
                <CardContent className="p-4">
                  <h4 className="text-sm font-semibold">Submit a tool</h4>
                  <p className="mt-1 text-xs text-muted-foreground">
                    We add 3-5 tools per week.
                  </p>
                  <Button size="sm" className="mt-3 w-full">
                    <Plus size={12} className="mr-1" /> Submit
                  </Button>
                </CardContent>
              </Card>
            </div>
          </aside>

          <div>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {filtered.map((tool) => (
                <DirectoryCard key={tool.id} tool={tool} />
              ))}
            </div>
            {filtered.length === 0 && (
              <div className="flex h-40 flex-col items-center justify-center rounded-xl border border-dashed border-border text-center">
                <p className="text-sm text-muted-foreground">No tools match those filters.</p>
                <Button
                  size="sm"
                  variant="outline"
                  className="mt-3"
                  onClick={() => {
                    setQ("");
                    setCat("All");
                  }}
                >
                  Clear filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ───────── Stats footer ───────── */}
      <section className="border-t border-border/60">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-12 sm:grid-cols-4">
          {[
            { v: 24, label: "Tools tracked" },
            { v: 187000, label: "Verified reviews" },
            { v: 4.6, label: "Avg rating", suffix: "/5", decimals: 1 },
            { v: 38, label: "Categories" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-semibold tabular-nums">
                <AnimatedNumber value={s.v} decimals={s.decimals ?? 0} />
                {s.suffix ?? ""}
              </div>
              <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}