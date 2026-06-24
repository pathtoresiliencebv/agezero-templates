"use client";

import * as React from "react";
import Image from "next/image";
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
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Testimonials } from "@/components/blocks/testimonials";
import { FAQ } from "@/components/blocks/faq";
import { LogoCloud } from "@/components/blocks/logo-cloud";
import {
  ArrowRight,
  Camera,
  Check,
  ChevronDown,
  Heart,
  Plus,
  Search,
  ShoppingCart,
  Sparkles,
  Star,
  Tag,
  X,
} from "@/components/icons";
import { Minus, Truck } from "lucide-react";
import { cn } from "@/lib/utils";

interface Product {
  id: string;
  name: string;
  price: number;
  category: "Audio" | "Wearables" | "Home" | "Office";
  badge?: string;
  rating: number;
  reviews: number;
  accent: string;
  description: string;
  features: string[];
}

const PRODUCTS: Product[] = [
  {
    id: "aurora-buds",
    name: "Aurora Buds Pro",
    price: 249,
    category: "Audio",
    badge: "Bestseller",
    rating: 4.9,
    reviews: 1284,
    accent: "from-violet-500/30 to-fuchsia-500/20",
    description:
      "Studio-grade wireless earbuds with adaptive ANC and a 32-hour charging case. Tuned by Grammy-winning engineers.",
    features: ["Adaptive ANC", "Spatial Audio", "32h battery", "IPX5 water resistance"],
  },
  {
    id: "lumen-desk",
    name: "Lumen Standing Desk",
    price: 599,
    category: "Office",
    badge: "New",
    rating: 4.8,
    reviews: 412,
    accent: "from-emerald-500/30 to-cyan-500/20",
    description:
      "Three-motor electric standing desk with bamboo top. Whisper-quiet lifts 350 lb in 9 seconds.",
    features: ["3-motor lift", "Bamboo top", "4 memory presets", "USB-C hub"],
  },
  {
    id: "halo-lamp",
    name: "Halo Smart Lamp",
    price: 129,
    category: "Home",
    rating: 4.7,
    reviews: 856,
    accent: "from-amber-500/30 to-rose-500/20",
    description:
      "Circadian-rhythm smart lamp that mimics natural sunlight. Pairs with HomeKit, Alexa, and Matter.",
    features: ["16M colors", "Matter / HomeKit", "Sunset alarm", "Music sync"],
  },
  {
    id: "pulse-watch",
    name: "Pulse Watch 3",
    price: 349,
    category: "Wearables",
    badge: "−20%",
    rating: 4.8,
    reviews: 2103,
    accent: "from-sky-500/30 to-indigo-500/20",
    description:
      "Fitness-first smartwatch with 14-day battery, dual-band GPS, and an AMOLED always-on display.",
    features: ["14-day battery", "Dual-band GPS", "AMOLED", "ECG sensor"],
  },
  {
    id: "echo-speaker",
    name: "Echo Studio Speaker",
    price: 199,
    category: "Audio",
    rating: 4.6,
    reviews: 547,
    accent: "from-rose-500/30 to-orange-500/20",
    description:
      "Bookshelf-sized speaker that fills the room with lossless, room-corrected sound from a single box.",
    features: ["Room correction", "Lossless audio", "AirPlay 2", "HDMI ARC"],
  },
  {
    id: "nimbus-air",
    name: "Nimbus Air Purifier",
    price: 329,
    category: "Home",
    rating: 4.7,
    reviews: 678,
    accent: "from-teal-500/30 to-emerald-500/20",
    description:
      "HEPA-13 air purifier with PM2.5 + VOC sensors. Quiet at 22 dB and cleans 600 sq ft in 30 minutes.",
    features: ["HEPA-13 filter", "22 dB whisper mode", "PM2.5 + VOC", "App control"],
  },
];

const CATEGORIES: Array<{ name: "All" | Product["category"]; count: number }> = [
  { name: "All", count: PRODUCTS.length },
  { name: "Audio", count: 2 },
  { name: "Wearables", count: 1 },
  { name: "Home", count: 2 },
  { name: "Office", count: 1 },
];

const FAQ_ITEMS = [
  {
    question: "Do you offer free shipping?",
    answer: "Yes — free 2-day shipping on every order in the US and Canada. International shipping is $15 flat and arrives in 5–7 business days.",
  },
  {
    question: "What's your return policy?",
    answer: "60-day no-questions-asked returns. If you don't love it, send it back for a full refund. We even cover the return shipping label.",
  },
  {
    question: "How does the 2-year warranty work?",
    answer: "Every product ships with a 2-year limited warranty covering manufacturing defects. Battery degradation is covered for the first 18 months. Just email support and we'll send a replacement.",
  },
  {
    question: "Can I pre-order new releases?",
    answer: "Absolutely. Pre-orders ship the morning of launch day. We charge your card at shipment, not at order — so you can change your mind any time before then.",
  },
  {
    question: "Do you have a student or educator discount?",
    answer: "Yes — 15% off everything, year-round, with a valid .edu email. We also donate one product to a classroom for every 100 student orders.",
  },
];

interface CartLine {
  id: string;
  quantity: number;
}

function formatPrice(n: number) {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}

export default function EcommercePage() {
  const [activeCategory, setActiveCategory] = React.useState<"All" | Product["category"]>("All");
  const [cart, setCart] = React.useState<CartLine[]>([
    { id: "aurora-buds", quantity: 1 },
    { id: "halo-lamp", quantity: 2 },
  ]);
  const [cartOpen, setCartOpen] = React.useState(false);

  const cartLines = cart
    .map((line) => {
      const product = PRODUCTS.find((p) => p.id === line.id);
      if (!product) return null;
      return { ...product, quantity: line.quantity };
    })
    .filter(Boolean) as Array<Product & { quantity: number }>;

  const cartCount = cart.reduce((sum, line) => sum + line.quantity, 0);
  const cartTotal = cartLines.reduce((sum, line) => sum + line.price * line.quantity, 0);

  const addToCart = (id: string) => {
    setCart((current) => {
      const existing = current.find((line) => line.id === id);
      if (existing) {
        return current.map((line) =>
          line.id === id ? { ...line, quantity: line.quantity + 1 } : line
        );
      }
      return [...current, { id, quantity: 1 }];
    });
  };

  const updateQty = (id: string, delta: number) => {
    setCart((current) =>
      current
        .map((line) =>
          line.id === id ? { ...line, quantity: Math.max(0, line.quantity + delta) } : line
        )
        .filter((line) => line.quantity > 0)
    );
  };

  const removeLine = (id: string) => {
    setCart((current) => current.filter((line) => line.id !== id));
  };

  const filteredProducts =
    activeCategory === "All"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <div className="flex flex-col">
      {/* ───────── Top nav ───────── */}
      <header className="sticky top-0 z-30 border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3">
          <Link href="#" className="flex items-center gap-2 text-base font-semibold">
            <span className="inline-flex size-7 items-center justify-center rounded-md bg-gradient-to-br from-rose-500 to-violet-500 text-white">
              <Sparkles size={14} />
            </span>
            Halcyon Goods
          </Link>
          <nav className="hidden gap-6 text-sm text-muted-foreground md:flex">
            <Link href="#shop" className="hover:text-foreground">Shop</Link>
            <Link href="#categories" className="hover:text-foreground">Categories</Link>
            <Link href="#reviews" className="hover:text-foreground">Reviews</Link>
            <Link href="#faq" className="hover:text-foreground">FAQ</Link>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" aria-label="Search">
              <Search size={16} />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCartOpen(true)}
              className="relative"
            >
              <ShoppingCart size={16} />
              <span className="hidden sm:inline">Cart</span>
              {cartCount > 0 && (
                <span className="absolute -right-2 -top-2 inline-flex size-5 items-center justify-center rounded-full bg-primary text-[10px] font-semibold text-primary-foreground">
                  {cartCount}
                </span>
              )}
            </Button>
          </div>
        </div>
      </header>

      {/* ───────── Hero ───────── */}
      <section className="relative overflow-hidden border-b border-border/60">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,theme(colors.rose-500/15),transparent_60%)]"
        />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <Badge variant="secondary" className="mb-4">
              <Sparkles size={12} className="mr-1" /> Spring drop · 12 new products
            </Badge>
            <h1 className="text-balance text-5xl font-semibold tracking-tight sm:text-6xl">
              Things worth keeping
              <br />
              <span className="text-primary">in your home.</span>
            </h1>
            <p className="mt-5 max-w-xl text-balance text-lg leading-relaxed text-muted-foreground">
              Halcyon Goods makes premium audio, lighting, and home essentials.
              Designed in Brooklyn, built to last, and shipped carbon-neutral.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Button size="lg" asChild>
                <Link href="#shop">
                  Shop the drop <ArrowRight size={16} />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#categories">Browse categories</Link>
              </Button>
            </div>
            <div className="mt-6 flex items-center gap-4 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1">
                <Truck size={14} /> Free 2-day shipping
              </span>
              <span>·</span>
              <span className="inline-flex items-center gap-1">
                <Check size={14} /> 60-day returns
              </span>
              <span className="hidden sm:inline">·</span>
              <span className="hidden sm:inline-flex items-center gap-1">
                <Tag size={14} /> 2-year warranty
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 top-6 size-40 rounded-full bg-rose-500/20 blur-3xl" />
            <div className="absolute -right-6 bottom-6 size-40 rounded-full bg-violet-500/20 blur-3xl" />
            <div className="relative grid grid-cols-2 gap-3">
              {PRODUCTS.slice(0, 4).map((product, i) => (
                <div
                  key={product.id}
                  className={cn(
                    "aspect-square rounded-2xl border border-border/60 bg-gradient-to-br p-6",
                    product.accent,
                    i % 2 === 0 ? "translate-y-4" : "-translate-y-4"
                  )}
                >
                  <div className="flex h-full items-end">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted-foreground">
                        {product.category}
                      </p>
                      <p className="text-sm font-semibold">{product.name}</p>
                      <p className="mt-1 text-sm font-mono">
                        {formatPrice(product.price)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Logo cloud / press ───────── */}
      <section className="border-b border-border/60 py-10">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-5 text-center text-xs uppercase tracking-wider text-muted-foreground">
            As seen in
          </p>
          <LogoCloud
            logos={[
              { name: "Wired", text: "WIRED" },
              { name: "The Verge", text: "The Verge" },
              { name: "GQ", text: "GQ" },
              { name: "Fast Co", text: "FAST CO" },
              { name: "Architectural Digest", text: "AD" },
              { name: "Dwell", text: "Dwell" },
            ]}
          />
        </div>
      </section>

      {/* ───────── Categories + Shop ───────── */}
      <section id="categories" className="border-b border-border/60 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <Badge variant="secondary" className="mb-3">
                <Tag size={12} className="mr-1" /> Browse by category
              </Badge>
              <h2 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Shop the catalog.
              </h2>
            </div>
            <Button variant="outline" asChild>
              <Link href="#shop">
                View all <ArrowRight size={14} />
              </Link>
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={cn(
                  "rounded-full border px-4 py-1.5 text-sm transition-all",
                  activeCategory === cat.name
                    ? "border-foreground bg-foreground text-background"
                    : "border-border/60 text-muted-foreground hover:border-foreground/40 hover:text-foreground"
                )}
              >
                {cat.name}
                <span className="ml-1.5 text-xs opacity-60">{cat.count}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Product grid + Gallery modal ───────── */}
      <section id="shop" className="border-b border-border/60 py-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                inCartQty={cart.find((line) => line.id === product.id)?.quantity ?? 0}
                onAdd={() => addToCart(product.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Featured product gallery ───────── */}
      <section className="border-b border-border/60 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <Badge variant="secondary" className="mb-3">
                <Camera size={12} className="mr-1" /> Featured product
              </Badge>
              <h2 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Aurora Buds Pro,
                <br />
                <span className="text-primary">re-tuned for 2026.</span>
              </h2>
              <p className="mt-4 max-w-xl text-lg text-muted-foreground">
                Adaptive ANC that reads your environment 200× per second.
                Spatial Audio from a single, pocketable driver pair. 32 hours of
                battery in the case.
              </p>

              <div className="mt-6 flex items-center gap-3">
                <span className="text-3xl font-semibold">$249</span>
                <span className="text-sm text-muted-foreground line-through">$299</span>
                <Badge variant="secondary">Save $50</Badge>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {PRODUCTS[0].features.map((f) => (
                  <Badge key={f} variant="outline">
                    <Check size={10} className="mr-1" /> {f}
                  </Badge>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button size="lg" onClick={() => addToCart("aurora-buds")}>
                  <ShoppingCart size={16} />
                  Add to cart
                </Button>
                <Button size="lg" variant="outline">
                  Watch the 90-sec demo
                </Button>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <Dialog>
                <DialogTrigger asChild>
                  <button className="group relative aspect-square w-full overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-violet-500/30 via-fuchsia-500/20 to-rose-500/20 p-12 text-left transition-all hover:-translate-y-1 hover:shadow-2xl">
                    <div className="flex h-full items-end">
                      <div>
                        <Badge variant="secondary" className="mb-3">
                          Aurora Buds Pro · #1 bestseller
                        </Badge>
                        <p className="text-3xl font-semibold">Violet Frost</p>
                        <p className="text-sm text-muted-foreground">
                          4 colors · Tap to view gallery
                        </p>
                      </div>
                    </div>
                    <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full border border-border/60 bg-background/70 px-3 py-1 text-xs backdrop-blur">
                      <Camera size={12} /> View gallery
                    </span>
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogTitle className="mb-4">Aurora Buds Pro — gallery</DialogTitle>
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {[
                      "Violet Frost",
                      "Midnight",
                      "Sand",
                      "Pearl",
                      "Forest",
                      "Sunset",
                    ].map((color, i) => (
                      <div
                        key={color}
                        className={cn(
                          "aspect-square rounded-lg border border-border/60 p-4",
                          [
                            "bg-gradient-to-br from-violet-500/40 to-fuchsia-500/20",
                            "bg-gradient-to-br from-slate-500/40 to-slate-700/20",
                            "bg-gradient-to-br from-amber-500/40 to-rose-500/20",
                            "bg-gradient-to-br from-slate-200/40 to-slate-400/20",
                            "bg-gradient-to-br from-emerald-500/40 to-teal-500/20",
                            "bg-gradient-to-br from-orange-500/40 to-rose-500/20",
                          ][i]
                        )}
                      >
                        <div className="flex h-full items-end">
                          <span className="text-sm font-medium">{color}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center justify-between">
                    <p className="text-sm text-muted-foreground">
                      All colors in stock · Ships within 24h
                    </p>
                    <Button onClick={() => addToCart("aurora-buds")}>
                      <ShoppingCart size={14} /> Add to cart · $249
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Testimonials ───────── */}
      <section id="reviews" className="border-b border-border/60 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 text-center">
            <Badge variant="secondary" className="mb-3">
              <Star size={12} className="mr-1 fill-current text-amber-500" /> 4.8 from 12,481 reviews
            </Badge>
            <h2 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
              Loved by people who use it every day.
            </h2>
          </div>
          <Testimonials
            items={[
              {
                quote:
                  "Aurora Buds replaced three pairs of premium earbuds in my house. The ANC is genuinely class-leading — I can't hear my open-plan office anymore.",
                name: "Jordan M.",
                role: "Designer, bought Aurora Buds Pro",
                initials: "JM",
              },
              {
                quote:
                  "The Lumen desk is the first standing desk that doesn't feel like a gym. Whisper quiet, beautiful bamboo, and the memory presets are magic.",
                name: "Avery K.",
                role: "Engineer, bought Lumen Desk",
                initials: "AK",
              },
              {
                quote:
                  "I bought a Halo Lamp on a whim. Now I own three. The sunset alarm genuinely improved my sleep — that's not something I say about lamps.",
                name: "Riley T.",
                role: "Photographer, bought Halo Lamp",
                initials: "RT",
              },
            ]}
          />
        </div>
      </section>

      {/* ───────── FAQ ───────── */}
      <section id="faq" className="border-b border-border/60 py-20">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mb-10 text-center">
            <Badge variant="secondary" className="mb-3">
              Questions
            </Badge>
            <h2 className="text-balance text-4xl font-semibold tracking-tight">
              Before you check out.
            </h2>
          </div>
          <FAQ items={FAQ_ITEMS} />
        </div>
      </section>

      {/* ───────── Footer ───────── */}
      <footer className="border-b border-border/60 py-16">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-4">
          <div>
            <Link href="#" className="flex items-center gap-2 text-base font-semibold">
              <span className="inline-flex size-7 items-center justify-center rounded-md bg-gradient-to-br from-rose-500 to-violet-500 text-white">
                <Sparkles size={14} />
              </span>
              Halcyon Goods
            </Link>
            <p className="mt-3 text-sm text-muted-foreground">
              Designed in Brooklyn. Built to last. Shipped carbon-neutral since 2019.
            </p>
          </div>
          {[
            { title: "Shop", links: ["New arrivals", "Bestsellers", "Bundles", "Gift cards"] },
            { title: "Support", links: ["Help center", "Returns", "Warranty", "Track order"] },
            { title: "Company", links: ["About", "Sustainability", "Press", "Careers"] },
          ].map((col) => (
            <div key={col.title}>
              <p className="mb-3 text-sm font-semibold">{col.title}</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="hover:text-foreground">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>

      {/* ───────── Cart drawer (Dialog) ───────── */}
      <Dialog open={cartOpen} onOpenChange={setCartOpen}>
        <DialogContent className="max-h-[90vh] w-full max-w-md overflow-y-auto sm:right-2 sm:top-2 sm:translate-x-0">
          <DialogTitle className="flex items-center justify-between">
            <span className="flex items-center gap-2">
              <ShoppingCart size={18} /> Your cart
              <span className="text-sm font-normal text-muted-foreground">
                ({cartCount} {cartCount === 1 ? "item" : "items"})
              </span>
            </span>
          </DialogTitle>
          <div className="mt-6 space-y-4">
            {cartLines.length === 0 ? (
              <div className="rounded-lg border border-dashed border-border/60 p-8 text-center text-sm text-muted-foreground">
                Your cart is empty. <br />
                <Link href="#shop" onClick={() => setCartOpen(false)} className="text-primary hover:underline">
                  Browse the shop →
                </Link>
              </div>
            ) : (
              cartLines.map((line) => (
                <div key={line.id} className="flex gap-3 rounded-lg border border-border/60 p-3">
                  <div
                    className={cn(
                      "size-16 shrink-0 rounded-md bg-gradient-to-br",
                      line.accent
                    )}
                  />
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="text-sm font-medium">{line.name}</p>
                        <p className="text-xs text-muted-foreground">{line.category}</p>
                      </div>
                      <button
                        onClick={() => removeLine(line.id)}
                        className="text-muted-foreground transition-colors hover:text-foreground"
                        aria-label="Remove"
                      >
                        <X size={14} />
                      </button>
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                      <div className="inline-flex items-center rounded-md border border-border/60">
                        <button
                          className="size-7 text-muted-foreground hover:text-foreground"
                          onClick={() => updateQty(line.id, -1)}
                          aria-label="Decrease"
                        >
                          <Minus size={12} className="mx-auto" />
                        </button>
                        <span className="w-7 text-center text-xs font-medium">{line.quantity}</span>
                        <button
                          className="size-7 text-muted-foreground hover:text-foreground"
                          onClick={() => updateQty(line.id, 1)}
                          aria-label="Increase"
                        >
                          <Plus size={12} className="mx-auto" />
                        </button>
                      </div>
                      <span className="text-sm font-semibold">
                        {formatPrice(line.price * line.quantity)}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {cartLines.length > 0 && (
            <div className="mt-6 space-y-3 border-t border-border/60 pt-5">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span>{formatPrice(cartTotal)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Shipping</span>
                <span className="text-emerald-600">Free</span>
              </div>
              <div className="flex justify-between border-t border-border/60 pt-3 text-base font-semibold">
                <span>Total</span>
                <span>{formatPrice(cartTotal)}</span>
              </div>
              <Button className="mt-4 w-full" size="lg">
                Checkout <ArrowRight size={16} />
              </Button>
              <p className="text-center text-[10px] text-muted-foreground">
                Secure checkout · 60-day returns · 2-year warranty
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

interface ProductCardProps {
  product: Product;
  inCartQty: number;
  onAdd: () => void;
}

function ProductCard({ product, inCartQty, onAdd }: ProductCardProps) {
  return (
    <Card className="group overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lg">
      <div
        className={cn(
          "relative aspect-[5/4] overflow-hidden bg-gradient-to-br p-8",
          product.accent
        )}
      >
        {product.badge && (
          <Badge variant="secondary" className="absolute left-3 top-3">
            {product.badge}
          </Badge>
        )}
        <button
          aria-label="Add to wishlist"
          className="absolute right-3 top-3 inline-flex size-8 items-center justify-center rounded-full border border-border/60 bg-background/70 text-foreground/70 backdrop-blur transition-colors hover:text-rose-500"
        >
          <Heart size={14} />
        </button>
        <div className="flex h-full items-end">
          <div>
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
              {product.category}
            </p>
            <p className="text-lg font-semibold">{product.name}</p>
          </div>
        </div>
      </div>
      <CardContent className="p-5">
        <div className="flex items-center gap-1 text-xs">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={12}
              className={cn(
                i < Math.floor(product.rating)
                  ? "fill-amber-400 text-amber-400"
                  : "text-muted-foreground/30"
              )}
            />
          ))}
          <span className="ml-1 font-medium">{product.rating}</span>
          <span className="text-muted-foreground">({product.reviews.toLocaleString()})</span>
        </div>
        <p className="mt-3 line-clamp-2 text-sm text-muted-foreground">
          {product.description}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-semibold">{formatPrice(product.price)}</span>
          <Button size="sm" onClick={onAdd} variant={inCartQty > 0 ? "secondary" : "default"}>
            {inCartQty > 0 ? (
              <>In cart · {inCartQty}</>
            ) : (
              <>
                <Plus size={14} /> Add
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}