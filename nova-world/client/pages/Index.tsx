import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

type ProjectItem = { image: string; title: string; category: string; year: string; url: string };
import { Instagram, Linkedin, Palette, ArrowRight, Sparkles } from "lucide-react";
import { toast } from "sonner";

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];

function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${
      scrolled ? "backdrop-blur-md bg-background/60 border-b border-border/60 py-2" : "bg-transparent py-4"
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#inicio" className="group inline-flex items-center gap-3">
          <div className="relative">
            <span className="absolute inset-0 rounded-full blur-md opacity-70 bg-cyan-400/40"></span>
            <svg width="36" height="36" viewBox="0 0 100 100" className="relative">
              <circle cx="50" cy="50" r="44" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" />
              <circle cx="50" cy="50" r="30" fill="url(#g)" />
              <defs>
                <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="hsl(var(--primary) / 0.35)" />
                  <stop offset="100%" stopColor="hsl(var(--glow-blue) / 0.25)" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span className="font-bold tracking-widest text-lg">OrviumStudio</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="text-foreground/80 hover:text-primary transition-colors">{item.label}</a>
          ))}
        </nav>
        <a href="#proyectos" className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-300/40 text-cyan-200 bg-cyan-500/10 hover:bg-cyan-500/15 transition-colors neon-shadow">
          Explorar <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}

function SectionTitle({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-12">
      {eyebrow && (
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/40 bg-primary/10 text-primary text-xs uppercase tracking-wider">
          <Sparkles className="h-3.5 w-3.5" /> {eyebrow}
        </div>
      )}
      <h2 className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-foreground/70">{subtitle}</p>}
    </div>
  );
}

function ProjectCard({ image, title, desc }: { image: string; title: string; desc: string }) {
  return (
    <motion.a
      href="#contacto"
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden rounded-2xl border border-cyan-400/30 bg-gradient-to-b from-white/5 to-white/0 hover:from-white/10 transition-all duration-300"
    >
      <div className="overflow-hidden">
        <img src={image} alt={title} className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="mt-2 text-sm text-foreground/70">{desc}</p>
      </div>
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-cyan-400/20 rounded-2xl group-hover:ring-cyan-300/40" />
    </motion.a>
  );
}

function ServiceCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <motion.div whileHover={{ y: -4 }} className="relative rounded-2xl border border-cyan-400/30 p-6 bg-gradient-to-b from-white/5 to-white/0">
      <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity shine animate-shine" />
      <div className="flex items-center gap-3">
        <div className="h-11 w-11 rounded-xl grid place-items-center neon-shadow bg-cyan-500/10 border border-cyan-300/40">
          {icon}
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="mt-3 text-foreground/70 text-sm">{desc}</p>
    </motion.div>
  );
}

function ProyectosDestacados() {
  const [expanded, setExpanded] = useState(false);
  const projects = [
    { image: "https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=1400&auto=format&fit=crop", title: "Plataforma IA Vision", category: "Web App", year: "2025", url: "https://images.unsplash.com/photo-1542751110-97427bbecf20" },
    { image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1400&auto=format&fit=crop", title: "E‑commerce Holográfico", category: "E‑commerce", year: "2025", url: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f" },
    { image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1400&auto=format&fit=crop", title: "UI Quantum", category: "UI/UX", year: "2024", url: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a" },
    { image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1400&auto=format&fit=crop", title: "Metaverso Showcase", category: "Experiencia 3D", year: "2025", url: "https://images.unsplash.com/photo-1518770660439-4636190af475" },
    { image: "https://images.unsplash.com/photo-1534759859975-7f97f4b4a39a?q=80&w=1400&auto=format&fit=crop", title: "Panel Analytics+", category: "Dashboard", year: "2024", url: "https://images.unsplash.com/photo-1534759859975-7f97f4b4a39a" },
    { image: "https://images.unsplash.com/photo-1516245834210-c4c142787335?q=80&w=1400&auto=format&fit=crop", title: "SEO Engine", category: "SEO/Marketing", year: "2023", url: "https://images.unsplash.com/photo-1516245834210-c4c142787335" },
    { image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=1400&auto=format&fit=crop", title: "Motion UI Kit", category: "UI Library", year: "2023", url: "https://images.unsplash.com/photo-1535223289827-42f1e9919769" },
    { image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1400&auto=format&fit=crop", title: "AR Commerce", category: "AR", year: "2025", url: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8" },
  ];

  const chunks = Array.from({ length: Math.ceil(projects.length / 4) }, (_, i) => projects.slice(i * 4, i * 4 + 4));

  return (
    <div className="max-w-[960px] mx-auto px-4 md:px-6">
      {/* First block (always visible) */}
      {chunks[0] && <GroupSquare items={chunks[0]} indexOffset={0} />}

      {/* Extra blocks */}
      <AnimatePresence initial={false}>
        {expanded && chunks.slice(1).map((group, gi) => (
          <motion.div
            key={`group-${gi + 1}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4 }}
            className="mt-10"
          >
            <GroupSquare items={group} indexOffset={(gi + 1) * 4} />
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Toggle */}
      {chunks.length > 1 && (
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => setExpanded((v) => !v)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-cyan-300/50 text-cyan-100 bg-cyan-500/10 hover:bg-cyan-500/15 neon-shadow transition-colors"
          >
            {expanded ? "Ver menos" : "Ver más proyectos"}
          </button>
        </div>
      )}
    </div>
  );
}

function GroupSquare({ items, indexOffset }: { items: ProjectItem[]; indexOffset: number }) {
  const data = (items.length === 4 ? items : [...items, ...Array(4 - items.length).fill(null)]).slice(0, 4);
  const variants = ["A", "B", "C", "D"] as const;
  return (
    <div className="relative w-full [aspect-ratio:1/1] md:[aspect-ratio:4/3]">
      <div
        className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-3 md:gap-4 lg:grid-cols-3 lg:grid-rows-3 lg:gap-6"
      >
        {data.map((p, i) => {
          const v = variants[i];
          const pos =
            v === "A"
              ? "lg:col-start-1 lg:col-span-2 lg:row-start-1 lg:row-span-2"
              : v === "B"
              ? "lg:col-start-3 lg:col-span-1 lg:row-start-1 lg:row-span-1"
              : v === "C"
              ? "lg:col-start-3 lg:col-span-1 lg:row-start-2 lg:row-span-2"
              : "lg:col-start-1 lg:col-span-2 lg:row-start-3 lg:row-span-1";

          if (!p) return <div key={`empty-${i}`} className={`hidden lg:block ${pos}`} />;

          const delay = (i * 0.08) + (indexOffset ? 0.02 : 0);
          return (
            <motion.a
              key={p.title}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay }}
              className={`group relative overflow-hidden rounded-2xl ${pos} border border-cyan-400/30 bg-[rgba(10,15,28,0.45)] backdrop-blur-xl`}
            >
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-cyan-300/0 group-hover:ring-cyan-300/40 transition-all" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors" />
              <div className="absolute inset-x-0 bottom-0 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 p-5">
                <div className="flex items-end justify-between gap-3">
                  <div>
                    <div className="text-xs uppercase tracking-widest text-cyan-200/80">{p.category} • {p.year}</div>
                    <h3 className="mt-1 text-base md:text-lg font-semibold">{p.title}</h3>
                  </div>
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/90 text-primary-foreground text-xs neon-shadow">
                    Ver sitio
                  </span>
                </div>
              </div>
            </motion.a>
          );
        })}
      </div>
    </div>
  );
}


function Footer() {
  return (
    <footer className="relative mt-24">
      <div className="absolute -top-[1px] inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full border border-cyan-300/50 bg-cyan-500/10" />
          <span className="text-sm text-foreground/70">© OrviumStudio - Todos los derechos reservados</span>
        </div>
        <nav className="flex items-center gap-6 text-sm">
          <a href="#inicio" className="hover:text-primary">Inicio</a>
          <a href="#proyectos" className="hover:text-primary">Proyectos</a>
          <a href="#contacto" className="hover:text-primary">Contacto</a>
        </nav>
      </div>
    </footer>
  );
}


function BackgroundSpace() {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const farRef = useRef<HTMLCanvasElement | null>(null);
  const nearRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const starsFar = useRef<{ x: number; y: number; r: number; s: number }[]>([]);
  const starsNear = useRef<{ x: number; y: number; r: number; s: number }[]>([]);

  const resize = () => {
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    const w = window.innerWidth;
    const h = window.innerHeight;
    [farRef.current, nearRef.current].forEach((c) => {
      if (!c) return;
      c.width = Math.floor(w * dpr);
      c.height = Math.floor(h * dpr);
      c.style.width = w + "px";
      c.style.height = h + "px";
      const ctx = c.getContext("2d");
      if (ctx) ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    });
    genStars();
  };

  const genStars = () => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    starsFar.current = Array.from({ length: Math.max(120, Math.floor((w * h) / 15000)) }).map(() => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.2 + 0.2,
      s: Math.random() * 0.2 + 0.05,
    }));
    starsNear.current = Array.from({ length: Math.max(60, Math.floor((w * h) / 24000)) }).map(() => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.8 + 0.4,
      s: Math.random() * 0.4 + 0.12,
    }));
  };

  const draw = () => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const ctxF = farRef.current?.getContext("2d");
    const ctxN = nearRef.current?.getContext("2d");
    if (ctxF) {
      ctxF.clearRect(0, 0, w, h);
      ctxF.fillStyle = "rgba(255,255,255,0.6)";
      starsFar.current.forEach((st) => {
        st.y += st.s * 0.3;
        if (st.y > h) st.y = -2;
        ctxF.globalAlpha = 0.4 + Math.sin((st.x + st.y) * 0.02) * 0.1;
        ctxF.beginPath();
        ctxF.arc(st.x, st.y, st.r, 0, Math.PI * 2);
        ctxF.fill();
      });
    }
    if (ctxN) {
      ctxN.clearRect(0, 0, w, h);
      ctxN.fillStyle = "rgba(180,220,255,0.9)";
      starsNear.current.forEach((st) => {
        st.y += st.s * 0.6;
        if (st.y > h) st.y = -2;
        ctxN.globalAlpha = 0.35 + Math.sin((st.x + st.y) * 0.03) * 0.15;
        ctxN.beginPath();
        ctxN.arc(st.x, st.y, st.r, 0, Math.PI * 2);
        ctxN.fill();
      });
    }
    rafRef.current = requestAnimationFrame(draw);
  };

  useEffect(() => {
    resize();
    const onResize = () => resize();
    const onScroll = () => {
      if (wrapRef.current) {
        const y = window.scrollY * 0.06;
        wrapRef.current.style.transform = `translateY(${y}px)`;
      }
    };
    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onScroll, { passive: true });
    rafRef.current = requestAnimationFrame(draw);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10" aria-hidden ref={wrapRef}>
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_10%_10%,rgba(0,170,255,0.06),transparent_60%),radial-gradient(800px_400px_at_90%_20%,rgba(0,170,255,0.05),transparent_60%)] bg-[#0a0f1c]" />
      <canvas ref={farRef} className="absolute inset-0" />
      <canvas ref={nearRef} className="absolute inset-0" />
    </div>
  );
}

export default function Index() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="relative min-h-screen z-10">
      <Header />
      <BackgroundSpace />

      {/* HERO */}
      <section id="inicio" className="relative pt-28 md:pt-32">
        <div className="absolute inset-0 -z-10 grid-bg animate-gridmove opacity-40" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-background/60 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight"
          >
            OrviumStudio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-5 text-lg md:text-xl text-foreground/75 max-w-2xl"
          >
            Diseño, Futuro y Tecnología en cada proyecto
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <a href="#proyectos" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground neon-shadow hover:bg-primary/90 transition-colors">
              Explorar proyectos <ArrowRight className="h-5 w-5" />
            </a>
            <a href="#servicios" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-cyan-300/40 text-cyan-200 bg-cyan-500/10 hover:bg-cyan-500/15 transition-colors">
              Nuestros servicios
            </a>
          </motion.div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {["Interfaces visionarias", "Branding digital", "Rendimiento y SEO"].map((txt) => (
              <motion.div key={txt} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-xl border border-cyan-400/30 p-4 bg-gradient-to-b from-white/5 to-white/0">
                <div className="text-sm text-foreground/70">{txt}</div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* PROYECTOS */}
      <section id="proyectos" className="relative py-24">
        <SectionTitle
          eyebrow="Portfolio"
          title="Proyectos destacados"
          subtitle="Creamos experiencias visuales y tecnológicas con un toque futurista y elegante."
        />
        <ProyectosDestacados />
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="relative py-24">
        <SectionTitle
          eyebrow="Servicios"
          title="Lo que hacemos"
          subtitle="Soluciones de alto impacto: tecnología, diseño y rendimiento."
        />
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceCard
            icon={<svg className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 7h18M3 12h18M3 17h18"/></svg>}
            title="Desarrollo Web"
            desc="Aplicaciones modernas, rápidas y seguras. PWA, SSR y rendimiento de élite."
          />
          <ServiceCard
            icon={<svg className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="9"/><path d="M8 12h8"/></svg>}
            title="Branding Digital"
            desc="Identidades visuales futuristas: logos, sistemas y estilos coherentes."
          />
          <ServiceCard
            icon={<svg className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 3h18v18H3z"/><path d="M3 9h18"/></svg>}
            title="SEO & Marketing"
            desc="Posicionamiento orgánico, performance y estrategias data-driven."
          />
          <ServiceCard
            icon={<svg className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="4" y="4" width="16" height="16" rx="4"/><path d="M8 12h8M8 16h6"/></svg>}
            title="UI/UX"
            desc="Interfaces limpias, accesibles y con microinteracciones elegantes."
          />
        </div>
      </section>

      {/* NOSOTROS */}
      <section id="nosotros" className="relative py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div className="relative h-72 rounded-3xl overflow-hidden border border-cyan-400/30">
            <img src="https://images.unsplash.com/photo-1520975922284-5a810fda9664?q=80&w=1200&auto=format&fit=crop" alt="Equipo OrviumStudio" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-background/80 to-transparent" />
          </div>
          <div>
            <SectionTitle title="En OrviumStudio creemos en el futuro digital." subtitle="Creamos experiencias visuales y tecnológicas que inspiran." />
            <a href="#contacto" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-cyan-300/40 text-cyan-200 bg-cyan-500/10 hover:bg-cyan-500/15 transition-colors">
              Conocer más
            </a>
          </div>
        </div>
      </section>


      {/* CONTACTO */}
      <section id="contacto" className="relative py-24">
        <SectionTitle eyebrow="Contacto" title="¿Listo para crear algo extraordinario?" subtitle="Escríbenos y planifiquemos tu próximo proyecto." />
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-stretch">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              toast.success("Mensaje enviado. ¡Gracias!");
              (e.currentTarget as HTMLFormElement).reset();
            }}
            className="rounded-2xl border border-cyan-400/30 p-6 bg-gradient-to-b from-white/5 to-white/0 backdrop-blur"
          >
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="text-sm text-foreground/70">Nombre</label>
                <input required name="name" className="mt-1 w-full rounded-lg bg-black/20 border border-cyan-300/30 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400/60" />
              </div>
              <div>
                <label className="text-sm text-foreground/70">Email</label>
                <input required type="email" name="email" className="mt-1 w-full rounded-lg bg-black/20 border border-cyan-300/30 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400/60" />
              </div>
              <div>
                <label className="text-sm text-foreground/70">Mensaje</label>
                <textarea required name="message" rows={5} className="mt-1 w-full rounded-lg bg-black/20 border border-cyan-300/30 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400/60" />
              </div>
              <button type="submit" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground neon-shadow hover:bg-primary/90 transition-colors">
                Enviar
              </button>
            </div>
          </form>
          <div className="rounded-2xl border border-cyan-400/30 p-6 bg-gradient-to-b from-white/5 to-white/0">
            <h3 className="font-semibold text-lg">Conectemos</h3>
            <p className="mt-2 text-foreground/70">Síguenos en redes o escríbenos directamente.</p>
            <div className="mt-6 flex items-center gap-4">
              <a href="#" aria-label="Instagram" className="h-11 w-11 rounded-full grid place-items-center border border-cyan-300/40 bg-cyan-500/10 hover:bg-cyan-500/15 neon-shadow transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" aria-label="LinkedIn" className="h-11 w-11 rounded-full grid place-items-center border border-cyan-300/40 bg-cyan-500/10 hover:bg-cyan-500/15 neon-shadow transition-colors"><Linkedin className="h-5 w-5" /></a>
              <a href="#" aria-label="Behance" className="h-11 w-11 rounded-full grid place-items-center border border-cyan-300/40 bg-cyan-500/10 hover:bg-cyan-500/15 neon-shadow transition-colors"><Palette className="h-5 w-5" /></a>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4 text-sm">
              <div className="rounded-xl border border-cyan-300/30 p-4 bg-black/10">
                <div className="text-foreground/70">Email</div>
                <div className="mt-1 font-medium">contacto@orvium.studio</div>
              </div>
              <div className="rounded-xl border border-cyan-300/30 p-4 bg-black/10">
                <div className="text-foreground/70">Ubicación</div>
                <div className="mt-1 font-medium">Remote • Global</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
