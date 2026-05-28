import { useEffect, useState } from "react";
import { Phone, Menu, X } from "lucide-react";

const NAV = [
  { label: "Services", id: "services" },
  { label: "About", id: "about" },
  { label: "Quote", id: "quote" },
  { label: "Contact", id: "contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <header
      data-testid="site-header"
      className={`sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/85 backdrop-blur-xl transition-shadow ${
        scrolled ? "shadow-[0_1px_0_0_rgba(9,9,11,0.06)]" : ""
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <button
          data-testid="header-logo"
          onClick={() => scrollTo("top")}
          className="flex items-center gap-2 text-left"
        >
          <span className="inline-flex h-9 w-9 items-center justify-center bg-yellow-400 font-display text-lg font-black text-zinc-950">
            C
          </span>
          <span className="font-display text-lg font-black tracking-tight text-zinc-950">
            COX JUNK REMOVAL
          </span>
        </button>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <button
              key={n.id}
              data-testid={`nav-${n.id}`}
              onClick={() => scrollTo(n.id)}
              className="label-eyebrow text-zinc-700 transition-colors hover:text-zinc-950"
            >
              {n.label}
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            data-testid="header-call-link"
            href="tel:9372708923"
            className="group flex items-center gap-2 border border-zinc-950 px-3 py-2 text-sm font-bold text-zinc-950 transition-all hover:-translate-y-0.5 hover:shadow-brutal"
          >
            <Phone className="h-4 w-4" strokeWidth={2.5} />
            937-270-8923
          </a>
          <button
            data-testid="header-quote-button"
            onClick={() => scrollTo("quote")}
            className="bg-yellow-400 px-4 py-2 text-sm font-bold text-zinc-950 transition-all hover:-translate-y-0.5 hover:shadow-brutal"
          >
            GET A QUOTE
          </button>
        </div>

        <button
          data-testid="mobile-menu-toggle"
          onClick={() => setOpen((v) => !v)}
          className="border border-zinc-950 p-2 md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-zinc-200 bg-white md:hidden" data-testid="mobile-menu">
          <div className="mx-auto flex max-w-7xl flex-col px-4 py-4">
            {NAV.map((n) => (
              <button
                key={n.id}
                data-testid={`mobile-nav-${n.id}`}
                onClick={() => scrollTo(n.id)}
                className="border-b border-zinc-100 py-3 text-left font-display text-lg font-bold"
              >
                {n.label}
              </button>
            ))}
            <a
              data-testid="mobile-call-link"
              href="tel:9372708923"
              className="mt-4 flex items-center justify-center gap-2 border border-zinc-950 py-3 font-bold"
            >
              <Phone className="h-4 w-4" /> 937-270-8923
            </a>
            <button
              data-testid="mobile-quote-button"
              onClick={() => scrollTo("quote")}
              className="mt-2 bg-yellow-400 py-3 font-bold text-zinc-950"
            >
              GET A QUOTE
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
