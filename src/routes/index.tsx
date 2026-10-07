import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Search,
  User,
  ShoppingBag,
  Menu,
  X,
  ShieldCheck,
  HardHat,
  ClipboardList,
  Truck,
  Wrench,
  CalendarCheck,
  Phone,
  Mail,
  MapPin,
  Star,
  Plus,
} from "lucide-react";

import hero from "@/assets/hero.jpg";
import shop from "@/assets/shop.jpg";
import pro from "@/assets/pro.jpg";
import team from "@/assets/team.jpg";
import catTanks from "@/assets/cat-tanks.jpg";
import catTiles from "@/assets/cat-tiles.jpg";
import catPlumbing from "@/assets/cat-plumbing.jpg";
import catBathroom from "@/assets/cat-bathroom.jpg";
import catTaps from "@/assets/cat-taps.jpg";
import catSupplies from "@/assets/cat-supplies.jpg";
import pBasin from "@/assets/p-basin.jpg";
import pShower from "@/assets/p-shower.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TujengeKe — Construction Materials & Trusted Professionals in Kenya" },
      {
        name: "description",
        content:
          "Source quality construction materials and connect with trusted plumbers and building professionals across Kenya — all through TujengeKe.",
      },
      { property: "og:title", content: "TujengeKe — Build Better. Source Smarter." },
      {
        property: "og:description",
        content: "Construction materials, trusted professionals and project support in one place.",
      },
    ],
  }),
  component: Index,
});

const NAV = ["Shop", "Services", "How It Works", "Projects", "Resources"];

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-card/90 py-3 shadow-soft backdrop-blur-xl" : "bg-transparent py-5"
      }`}
    >
      <div className="container-x flex items-center justify-between gap-6">
        <a href="#" className={`font-display text-2xl font-bold tracking-tight ${scrolled ? "text-foreground" : "text-primary-foreground"}`}>
          Tujenge<span className="text-sale">Ke</span>
        </a>
        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((n) => (
            <a
              key={n}
              href={`#${n.toLowerCase().replace(/ /g, "-")}`}
              className={`group relative text-sm font-medium ${scrolled ? "text-foreground" : "text-primary-foreground/90"}`}
            >
              {n}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-current transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>
        <div className={`flex items-center gap-1 ${scrolled ? "text-foreground" : "text-primary-foreground"}`}>
          <button aria-label="Search" className="hidden rounded-full p-2.5 transition hover:bg-foreground/10 sm:block"><Search className="size-[18px]" /></button>
          <button aria-label="Account" className="hidden rounded-full p-2.5 transition hover:bg-foreground/10 sm:block"><User className="size-[18px]" /></button>
          <button aria-label="Cart" className="relative rounded-full p-2.5 transition hover:bg-foreground/10">
            <ShoppingBag className="size-[18px]" />
            <span className="absolute right-1 top-1 grid size-4 place-items-center rounded-full bg-sale text-[10px] font-bold text-primary-foreground">2</span>
          </button>
          <a href="#quote" className="ml-2 hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary-deep md:inline-flex">
            Get a Quote
          </a>
          <button aria-label="Menu" onClick={() => setOpen(true)} className="rounded-full p-2.5 lg:hidden"><Menu className="size-5" /></button>
        </div>
      </div>
      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-card p-6 lg:hidden">
          <div className="flex items-center justify-between">
            <span className="font-display text-2xl font-bold">Tujenge<span className="text-sale">Ke</span></span>
            <button aria-label="Close" onClick={() => setOpen(false)} className="rounded-full p-2"><X className="size-6" /></button>
          </div>
          <nav className="mt-12 flex flex-col gap-6">
            {NAV.map((n) => (
              <a key={n} onClick={() => setOpen(false)} href={`#${n.toLowerCase().replace(/ /g, "-")}`} className="font-display text-4xl font-semibold">{n}</a>
            ))}
          </nav>
          <a href="#quote" onClick={() => setOpen(false)} className="mt-auto rounded-full bg-primary py-4 text-center font-semibold text-primary-foreground">Get a Quote</a>
        </div>
      )}
    </header>
  );
}

const SUGGESTIONS = ["Tiles", "Water Tanks", "Plumbing", "Bathroom Fixtures", "Plumbers"];

function Hero() {
  const [q, setQ] = useState("");
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-ink">
      <img src={hero} alt="Modern home nearing completion in Nairobi" width={1920} height={1088} className="absolute inset-0 size-full object-cover" />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="container-x relative flex min-h-[100svh] flex-col justify-end pb-14 pt-36 md:pb-20">
        <p className="eyebrow mb-6 text-primary-foreground/70">Build better. Source smarter.</p>
        <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] text-primary-foreground sm:text-7xl lg:text-[6.5rem]">
          Everything you need to build better.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-primary-foreground/80">
          Source quality construction materials and connect with trusted professionals for your project — all through TujengeKe.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#shop" className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 font-semibold text-primary-foreground transition hover:bg-primary-deep">
            Shop Construction Supplies <ArrowRight className="size-4 transition group-hover:translate-x-1" />
          </a>
          <a href="#services" className="group inline-flex items-center gap-2 rounded-full bg-card px-7 py-4 font-semibold text-foreground transition hover:bg-lavender">
            Find a Professional <ArrowRight className="size-4 transition group-hover:translate-x-1" />
          </a>
        </div>

        <div className="mt-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <p className="text-sm font-medium tracking-wide text-primary-foreground/70">Materials • Professionals • Project Support</p>
          <div className="w-full max-w-xl rounded-3xl bg-card/95 p-5 shadow-lift backdrop-blur-xl">
            <p className="text-sm font-semibold">What are you looking for?</p>
            <form onSubmit={(e) => e.preventDefault()} className="mt-3 flex items-center gap-2 rounded-full border bg-background px-4 py-1.5 focus-within:border-primary">
              <Search className="size-4 text-muted-foreground" />
              <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search materials, products or services..." className="w-full bg-transparent py-2 text-sm outline-none placeholder:text-muted-foreground" />
              <button className="grid size-9 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground transition hover:bg-primary-deep" aria-label="Search"><ArrowRight className="size-4" /></button>
            </form>
            <div className="mt-3 flex flex-wrap gap-2">
              {SUGGESTIONS.map((s) => (
                <button key={s} onClick={() => setQ(s)} className="rounded-full bg-lavender px-3.5 py-1.5 text-xs font-medium text-primary transition hover:bg-primary hover:text-primary-foreground">
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CoreServices() {
  const cards = [
    { id: "shop", tag: "Shop Construction Supplies", title: "Source the materials for your project.", body: "Explore quality construction and finishing products or request a quote for larger projects.", cta: "Explore Products", img: shop, items: ["Plumbing", "Water Tanks", "Tiles", "Bathroom", "Taps & Fittings"] },
    { id: "services", tag: "Find a Professional", title: "Find the right professional for the job.", body: "Connect with trusted plumbers and construction professionals for your project.", cta: "Find a Professional", img: pro, items: ["Plumbers", "Request a Service", "Site Visits", "Coordination"] },
  ];
  return (
    <section className="container-x py-24 md:py-32">
      <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <h2 className="max-w-2xl text-4xl font-semibold leading-tight md:text-6xl">Two ways to get your project moving.</h2>
        <p className="max-w-sm text-muted-foreground">Materials and the people to install them — sourced, coordinated and delivered through one platform.</p>
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        {cards.map((c, i) => (
          <a key={c.id} id={c.id} href={`#${c.id}`} className={`group relative flex min-h-[560px] scroll-mt-24 flex-col overflow-hidden rounded-3xl transition duration-500 hover:-translate-y-1 hover:shadow-lift ${i === 0 ? "bg-card" : "bg-primary text-primary-foreground"}`}>
            <div className="relative h-72 overflow-hidden">
              <img src={c.img} alt={c.tag} loading="lazy" width={1200} height={1408} className="size-full object-cover transition duration-700 group-hover:scale-105" />
            </div>
            <div className="flex flex-1 flex-col p-8 md:p-10">
              <p className={`eyebrow ${i === 0 ? "text-primary" : "text-primary-foreground/70"}`}>{c.tag}</p>
              <h3 className="mt-3 text-3xl font-semibold md:text-4xl">{c.title}</h3>
              <p className={`mt-3 max-w-md ${i === 0 ? "text-muted-foreground" : "text-primary-foreground/75"}`}>{c.body}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {c.items.map((it) => (
                  <span key={it} className={`rounded-full border px-3 py-1 text-xs font-medium ${i === 0 ? "" : "border-primary-foreground/25"}`}>{it}</span>
                ))}
              </div>
              <span className="mt-auto inline-flex items-center gap-2 pt-8 font-semibold">
                {c.cta} <ArrowRight className="size-4 transition group-hover:translate-x-2" />
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function Value() {
  const items = [
    { icon: ShieldCheck, t: "Quality Sourcing", d: "Products sourced through trusted manufacturers, suppliers and wholesalers." },
    { icon: HardHat, t: "Trusted Professionals", d: "Vetted plumbers and construction professionals for the job." },
    { icon: ClipboardList, t: "Project Support", d: "Help with quotations, sourcing and coordinating the work." },
    { icon: Truck, t: "Delivered Where You Need It", d: "Materials delivered to your site across Kenya." },
  ];
  return (
    <section className="bg-card py-24 md:py-28">
      <div className="container-x grid gap-14 lg:grid-cols-[1fr_2fr]">
        <div>
          <p className="eyebrow text-primary">Why TujengeKe</p>
          <h2 className="mt-4 text-4xl font-semibold md:text-5xl">Construction made simpler.</h2>
        </div>
        <div className="grid gap-px overflow-hidden rounded-3xl border bg-border sm:grid-cols-2">
          {items.map(({ icon: I, t, d }) => (
            <div key={t} className="group bg-card p-8 transition hover:bg-lavender">
              <span className="grid size-12 place-items-center rounded-2xl bg-lavender text-primary transition group-hover:bg-primary group-hover:text-primary-foreground"><I className="size-5" /></span>
              <h3 className="mt-6 text-xl font-semibold">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const CATS = [
  { n: "Water Tanks", img: catTanks, c: "Storage & stands" },
  { n: "Tiles", img: catTiles, c: "Floor & wall" },
  { n: "Plumbing", img: catPlumbing, c: "Pipes & fittings" },
  { n: "Bathroom & Sanitary", img: catBathroom, c: "Basins, WCs, showers" },
  { n: "Taps & Fittings", img: catTaps, c: "Mixers & valves" },
  { n: "Construction Supplies", img: catSupplies, c: "Cement, steel, blocks" },
];

function Categories() {
  return (
    <section id="shop-categories" className="container-x py-24 md:py-32">
      <div className="mb-12 flex items-end justify-between gap-6">
        <div>
          <p className="eyebrow text-primary">Featured categories</p>
          <h2 className="mt-4 text-5xl font-semibold md:text-7xl">Build From Here.</h2>
        </div>
        <a href="#shop" className="hidden items-center gap-2 font-semibold text-primary md:inline-flex">All categories <ArrowRight className="size-4" /></a>
      </div>
      <div className="grid auto-rows-[260px] grid-cols-2 gap-4 md:auto-rows-[300px] md:grid-cols-4 md:gap-5">
        {CATS.map((c, i) => (
          <a
            key={c.n}
            href="#shop"
            className={`group relative overflow-hidden rounded-3xl bg-ink ${i === 0 ? "col-span-2 row-span-2" : ""} ${i === 3 ? "col-span-2" : ""}`}
          >
            <img src={c.img} alt={c.n} loading="lazy" width={1008} height={1200} className="absolute inset-0 size-full object-cover transition duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-tile-overlay" />
            <div className="absolute inset-0 bg-primary/0 transition duration-500 group-hover:bg-primary/35" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 md:p-7">
              <div className="transition duration-500 group-hover:-translate-y-1.5">
                <p className="text-xs font-medium text-primary-foreground/70">{c.c}</p>
                <h3 className={`mt-1 font-semibold text-primary-foreground ${i === 0 ? "text-3xl md:text-5xl" : "text-xl md:text-2xl"}`}>{c.n}</h3>
              </div>
              <span className="grid size-11 translate-y-3 place-items-center rounded-full bg-card text-foreground opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <ArrowUpRight className="size-5" />
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

const PRODUCTS = [
  { n: "4,000L Water Tank with Steel Stand", c: "Water Tanks", p: "KES 38,500", old: "KES 42,000", img: catTanks, sale: true },
  { n: "Matte Black Basin Mixer Tap", c: "Taps & Fittings", p: "KES 6,900", img: catTaps },
  { n: "Rectangular Ceramic Vessel Basin", c: "Bathroom & Sanitary", p: "KES 8,400", img: pBasin },
  { n: "Thermostatic Rain Shower Set", c: "Bathroom & Sanitary", p: "KES 24,900", img: pShower },
];

function Products() {
  return (
    <section className="bg-card py-24 md:py-32">
      <div className="container-x">
        <div className="mb-12 flex items-end justify-between gap-6">
          <h2 className="text-4xl font-semibold md:text-6xl">Popular Right Now</h2>
          <a href="#shop" className="group inline-flex shrink-0 items-center gap-2 font-semibold text-primary">View All Products <ArrowRight className="size-4 transition group-hover:translate-x-1" /></a>
        </div>
        <div className="no-scrollbar -mx-5 flex snap-x gap-5 overflow-x-auto px-5 md:mx-0 md:grid md:grid-cols-2 md:overflow-visible md:px-0 lg:grid-cols-4">
          {PRODUCTS.map((p) => (
            <article key={p.n} className="group w-[78%] shrink-0 snap-start sm:w-[45%] md:w-auto">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-background">
                <img src={p.img} alt={p.n} loading="lazy" width={816} height={816} className="size-full object-cover transition duration-700 group-hover:scale-105" />
                {p.sale && <span className="absolute left-4 top-4 rounded-full bg-sale px-3 py-1 text-xs font-bold text-primary-foreground">Sale</span>}
                <div className="absolute inset-x-4 bottom-4 flex translate-y-4 gap-2 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <button className="flex flex-1 items-center justify-center gap-2 rounded-full bg-primary py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-deep"><Plus className="size-4" /> Add to cart</button>
                  <button className="rounded-full bg-card px-4 text-sm font-semibold hover:bg-lavender">Quote</button>
                </div>
              </div>
              <p className="mt-4 text-xs font-medium text-muted-foreground">{p.c}</p>
              <h3 className="mt-1 font-sans text-base font-semibold tracking-normal">{p.n}</h3>
              <p className="mt-1.5 flex items-baseline gap-2">
                <span className="font-semibold text-primary">{p.p}</span>
                {p.old && <span className="text-sm text-muted-foreground line-through">{p.old}</span>}
              </p>
            </article>
          ))}
        </div>
        <p className="mt-8 text-xs text-muted-foreground">Prices shown are sample prices for this concept.</p>
      </div>
    </section>
  );
}

function ProjectQuote() {
  return (
    <section id="quote" className="container-x scroll-mt-24 py-24 md:py-32">
      <div className="relative overflow-hidden rounded-[2rem] bg-primary text-primary-foreground">
        <div className="grid lg:grid-cols-2">
          <div className="relative z-10 p-10 md:p-16">
            <p className="eyebrow text-primary-foreground/70">Projects</p>
            <h2 className="mt-4 text-4xl font-semibold md:text-6xl">Building something bigger?</h2>
            <p className="mt-5 max-w-md text-lg text-primary-foreground/80">Tell us what you need and we'll help you source the right materials and solutions for your project.</p>
            <ul className="mt-8 space-y-3 text-sm text-primary-foreground/85">
              {["Bulk & project pricing", "Bill of quantities sourcing", "Coordinated deliveries to site"].map((x) => (
                <li key={x} className="flex items-center gap-3"><span className="size-1.5 rounded-full bg-primary-foreground" />{x}</li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-card px-7 py-4 font-semibold text-foreground transition hover:bg-lavender">Request a Project Quote <ArrowRight className="size-4" /></a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-7 py-4 font-semibold transition hover:bg-primary-foreground/10">Talk to TujengeKe</a>
            </div>
          </div>
          <div className="relative min-h-[320px]">
            <img src={team} alt="Construction team reviewing plans on site" loading="lazy" width={1600} height={1104} className="absolute inset-0 size-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Professionals() {
  const opts = [
    { icon: Wrench, t: "Find Plumbers", d: "Installation, repairs and full plumbing works." },
    { icon: ClipboardList, t: "Request a Service", d: "Describe the job and get matched quickly." },
    { icon: CalendarCheck, t: "Book a Site Visit", d: "A professional assesses your site and needs." },
  ];
  return (
    <section className="bg-ink py-24 text-ink-foreground md:py-32">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2">
        <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
          <img src={pro} alt="Plumber installing bathroom fittings" loading="lazy" width={1200} height={1408} className="size-full object-cover" />
          <div className="absolute bottom-5 left-5 right-5 flex items-center gap-4 rounded-2xl bg-card/95 p-4 text-foreground backdrop-blur">
            <span className="grid size-11 place-items-center rounded-full bg-lavender text-primary"><HardHat className="size-5" /></span>
            <div>
              <p className="text-sm font-semibold">Trusted professionals</p>
              <p className="text-xs text-muted-foreground">Plumbers & construction specialists</p>
            </div>
          </div>
        </div>
        <div>
          <p className="eyebrow text-ink-foreground/60">Professionals</p>
          <h2 className="mt-4 text-4xl font-semibold md:text-6xl">Need someone to do the work?</h2>
          <p className="mt-5 max-w-md text-ink-foreground/70">From a leaking tap to a full bathroom fit-out, connect with professionals who get it done properly.</p>
          <div className="mt-10 divide-y divide-ink-foreground/10 border-y border-ink-foreground/10">
            {opts.map(({ icon: I, t, d }) => (
              <a key={t} href="#services" className="group flex items-center gap-5 py-6 transition hover:pl-2">
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-ink-foreground/10 transition group-hover:bg-primary"><I className="size-5" /></span>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">{t}</h3>
                  <p className="text-sm text-ink-foreground/60">{d}</p>
                </div>
                <ArrowUpRight className="size-5 opacity-50 transition group-hover:opacity-100" />
              </a>
            ))}
          </div>
          <a href="#services" className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 font-semibold text-primary-foreground transition hover:bg-primary-deep">Find a Professional <ArrowRight className="size-4" /></a>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { n: "01", t: "Tell Us What You Need", d: "Find a product, service or tell us about your project." },
    { n: "02", t: "We Help You Source It", d: "Choose from available products or get assistance with sourcing and coordination." },
    { n: "03", t: "Get It Done", d: "Receive your materials or connect with a professional to complete the job." },
  ];
  return (
    <section id="how-it-works" className="container-x scroll-mt-24 py-24 md:py-32">
      <p className="eyebrow text-primary">How it works</p>
      <h2 className="mt-4 max-w-3xl text-4xl font-semibold md:text-6xl">From idea to execution in three steps.</h2>
      <div className="mt-16 grid gap-10 md:grid-cols-3">
        {steps.map((s) => (
          <div key={s.n} className="group border-t-2 border-foreground/10 pt-8 transition hover:border-primary">
            <span className="font-display text-6xl font-semibold text-primary/20 transition group-hover:text-primary">{s.n}</span>
            <h3 className="mt-6 text-2xl font-semibold">{s.t}</h3>
            <p className="mt-3 text-muted-foreground">{s.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  const t = [
    { q: "Sourcing the tank, fittings and a plumber in one place saved me weeks of running around.", n: "Customer name", r: "Homeowner, Nairobi" },
    { q: "Our tiles arrived on schedule and the quote for the whole bathroom was clear from day one.", n: "Customer name", r: "Contractor, Kiambu" },
    { q: "The site visit helped us understand exactly what materials we needed before buying.", n: "Customer name", r: "Developer, Nakuru" },
  ];
  return (
    <section id="projects" className="scroll-mt-24 bg-lavender py-24 md:py-32">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <h2 className="max-w-2xl text-4xl font-semibold md:text-5xl">Built around better construction experiences.</h2>
          <span className="self-start rounded-full bg-card px-3 py-1 text-xs font-medium text-muted-foreground">Placeholder testimonials — replace with real reviews</span>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {t.map((x, i) => (
            <figure key={i} className="flex flex-col rounded-3xl bg-card p-8 shadow-soft transition hover:-translate-y-1">
              <div className="flex gap-1 text-primary">{Array.from({ length: 5 }).map((_, k) => <Star key={k} className="size-4 fill-current" />)}</div>
              <blockquote className="mt-6 flex-1 text-lg leading-relaxed">“{x.q}”</blockquote>
              <figcaption className="mt-8 border-t pt-5">
                <p className="font-semibold">{x.n}</p>
                <p className="text-sm text-muted-foreground">{x.r}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Guides() {
  const g = [
    { t: "How to choose the right water tank size for your home", c: "Water Tank Buying Guides", img: catTanks },
    { t: "Planning your plumbing before you build: a practical checklist", c: "Plumbing & Construction Guides", img: catPlumbing },
    { t: "Bathroom fixtures that balance durability and design", c: "Bathroom Products", img: catBathroom },
  ];
  return (
    <section id="resources" className="container-x scroll-mt-24 py-24 md:py-32">
      <div className="mb-12 flex items-end justify-between gap-6">
        <h2 className="text-4xl font-semibold md:text-6xl">Construction Guides & Ideas</h2>
        <a href="#resources" className="hidden shrink-0 items-center gap-2 font-semibold text-primary md:inline-flex">Explore Resources <ArrowRight className="size-4" /></a>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        {g.map((x) => (
          <a key={x.t} href="#resources" className="group">
            <div className="aspect-[4/3] overflow-hidden rounded-3xl">
              <img src={x.img} alt={x.c} loading="lazy" width={1008} height={1200} className="size-full object-cover transition duration-700 group-hover:scale-105" />
            </div>
            <p className="eyebrow mt-5 text-primary">{x.c}</p>
            <h3 className="mt-2 text-xl font-semibold leading-snug transition group-hover:text-primary">{x.t}</h3>
          </a>
        ))}
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="container-x pb-24 md:pb-32">
      <div className="rounded-[2rem] bg-card px-8 py-20 text-center shadow-soft md:py-28">
        <h2 className="mx-auto max-w-3xl text-4xl font-semibold md:text-7xl">Planning your next project?</h2>
        <p className="mx-auto mt-6 max-w-lg text-lg text-muted-foreground">From materials to professionals, TujengeKe helps you move from idea to execution.</p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a href="#shop" className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 font-semibold text-primary-foreground transition hover:bg-primary-deep">Shop Supplies <ArrowRight className="size-4" /></a>
          <a href="#quote" className="inline-flex items-center gap-2 rounded-full border px-7 py-4 font-semibold transition hover:border-primary hover:text-primary">Request a Quote</a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const cols = [
    { h: "Shop", l: ["Water Tanks", "Tiles", "Plumbing", "Bathroom & Sanitary", "Taps & Fittings"] },
    { h: "Services", l: ["Find a Plumber", "Request a Service", "Book a Site Visit", "Project Quotes"] },
    { h: "Company", l: ["About", "How It Works", "Resources", "Careers"] },
  ];
  return (
    <footer id="contact" className="bg-ink pt-20 text-ink-foreground">
      <div className="container-x grid gap-12 pb-16 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1.3fr]">
        <div>
          <p className="font-display text-3xl font-bold">Tujenge<span className="text-sale">Ke</span></p>
          <p className="mt-4 max-w-xs text-sm text-ink-foreground/60">Construction sourcing and professional services made simpler.</p>
        </div>
        {cols.map((c) => (
          <div key={c.h}>
            <p className="text-sm font-semibold">{c.h}</p>
            <ul className="mt-5 space-y-3 text-sm text-ink-foreground/60">
              {c.l.map((x) => <li key={x}><a href="#" className="transition hover:text-ink-foreground">{x}</a></li>)}
            </ul>
          </div>
        ))}
        <div>
          <p className="text-sm font-semibold">Contact</p>
          <ul className="mt-5 space-y-3 text-sm text-ink-foreground/60">
            <li className="flex items-center gap-3"><Phone className="size-4" /> +254 700 000 000</li>
            <li className="flex items-center gap-3"><Mail className="size-4" /> hello@tujengeke.co.ke</li>
            <li className="flex items-center gap-3"><MapPin className="size-4" /> Nairobi, Kenya</li>
          </ul>
        </div>
      </div>
      <div className="container-x flex flex-col justify-between gap-3 border-t border-ink-foreground/10 py-6 text-xs text-ink-foreground/50 md:flex-row">
        <p>© {new Date().getFullYear()} TujengeKe. All rights reserved.</p>
        <p>Privacy · Terms</p>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main>
      <Header />
      <Hero />
      <CoreServices />
      <Value />
      <Categories />
      <Products />
      <ProjectQuote />
      <Professionals />
      <HowItWorks />
      <Testimonials />
      <Guides />
      <FinalCTA />
      <Footer />
    </main>
  );
}
