import { Phone, ArrowRight, Star } from "lucide-react";

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="top" data-testid="hero-section" className="relative overflow-hidden border-b border-zinc-200 bg-white">
      <div className="absolute inset-0 bg-grid opacity-60" aria-hidden="true" />
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-8 lg:py-32">
        <div className="relative z-10 lg:col-span-7">
          <div className="mb-6 inline-flex items-center gap-2 border border-zinc-950 bg-white px-3 py-1.5">
            <span className="h-2 w-2 animate-pulse bg-yellow-400" />
            <span className="label-eyebrow text-zinc-950">Now Booking — Springfield, OH</span>
          </div>

          <h1 className="font-display text-4xl font-black leading-[0.95] tracking-tighter text-zinc-950 sm:text-5xl lg:text-7xl">
            Springfield&rsquo;s
            <br />
            <span className="relative inline-block">
              <span className="relative z-10">Hustle-Driven</span>
              <span className="absolute inset-x-0 bottom-1 z-0 h-4 bg-yellow-400 sm:h-5 lg:h-6" />
            </span>
            <br />
            Junk Removal.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-600 sm:text-lg">
            Fast, reliable hauling — owner-operated by a 16-year-old Springfield local building
            something real. Yard waste, garage clutter, appliances, moving leftovers, and more.
            Same-week pickup, honest pricing.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              data-testid="hero-quote-button"
              onClick={() => scrollTo("quote")}
              className="group inline-flex items-center justify-center gap-2 bg-yellow-400 px-6 py-4 font-display text-base font-bold text-zinc-950 transition-all hover:-translate-y-1 hover:shadow-brutal-lg"
            >
              REQUEST A QUOTE
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" strokeWidth={3} />
            </button>
            <a
              data-testid="hero-call-link"
              href="tel:9372708923"
              className="inline-flex items-center justify-center gap-2 border border-zinc-950 bg-white px-6 py-4 font-display text-base font-bold text-zinc-950 transition-all hover:-translate-y-1 hover:shadow-brutal-lg"
            >
              <Phone className="h-5 w-5" strokeWidth={2.5} />
              CALL 937-270-8923
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-zinc-200 pt-8">
            <div>
              <dt className="label-eyebrow text-zinc-500">Response</dt>
              <dd className="mt-1 font-display text-2xl font-black text-zinc-950">{`< 24h`}</dd>
            </div>
            <div>
              <dt className="label-eyebrow text-zinc-500">Pricing</dt>
              <dd className="mt-1 font-display text-2xl font-black text-zinc-950">Upfront</dd>
            </div>
            <div>
              <dt className="label-eyebrow text-zinc-500">Local</dt>
              <dd className="mt-1 font-display text-2xl font-black text-zinc-950">Springfield</dd>
            </div>
          </dl>
        </div>

        <div className="relative lg:col-span-5">
          <div className="relative aspect-[4/5] w-full border border-zinc-950 bg-zinc-100">
            <img
              src="https://images.unsplash.com/photo-1574462233115-1a4a05e33433?auto=format&fit=crop&w=1200&q=80"
              alt="Pickup truck loaded for hauling"
              className="h-full w-full object-cover"
              loading="eager"
            />
            <div className="absolute -bottom-6 -left-6 hidden border border-zinc-950 bg-yellow-400 px-4 py-3 sm:block">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-zinc-950 text-zinc-950" />
                ))}
              </div>
              <p className="mt-1 font-display text-sm font-bold text-zinc-950">
                Local. Reliable. On-time.
              </p>
            </div>
            <div className="absolute -right-4 -top-4 hidden border border-zinc-950 bg-white px-4 py-3 sm:block">
              <p className="label-eyebrow text-zinc-500">Owner</p>
              <p className="font-display text-lg font-black">Age 16, Springfield local</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
