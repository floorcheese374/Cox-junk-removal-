import { SERVICES } from "@/lib/services";
import { ArrowUpRight } from "lucide-react";

export default function ServicesGrid() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" data-testid="services-section" className="border-b border-zinc-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
        <div className="mb-12 grid gap-6 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <p className="label-eyebrow text-zinc-500">What we haul</p>
            <h2 className="mt-3 font-display text-3xl font-black tracking-tighter text-zinc-950 sm:text-4xl lg:text-5xl">
              Nine services.
              <br />
              One reliable crew.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="text-base leading-relaxed text-zinc-600">
              If it&rsquo;s clutter, junk, or just-in-the-way — we can probably take it.
              Below is what we specialize in. Don&rsquo;t see your item? Just call.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 border border-zinc-950 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, idx) => {
            const Icon = s.icon;
            const isLastRow = idx >= SERVICES.length - (SERVICES.length % 3 || 3);
            return (
              <div
                key={s.id}
                data-testid={`service-card-${s.id}`}
                className={`group relative flex flex-col gap-4 p-6 lg:p-8
                  ${(idx + 1) % 3 !== 0 ? "lg:border-r" : ""}
                  ${idx % 2 === 0 ? "md:border-r lg:border-r" : ""}
                  ${!isLastRow ? "border-b" : ""}
                  border-zinc-950 transition-colors hover:bg-yellow-400`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center border border-zinc-950 bg-white group-hover:bg-zinc-950 group-hover:text-yellow-400">
                    <Icon className="h-6 w-6" strokeWidth={2} />
                  </div>
                  <span className="label-eyebrow text-zinc-500 group-hover:text-zinc-950">
                    0{idx + 1}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-zinc-950 sm:text-2xl">
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-700 group-hover:text-zinc-900">
                  {s.description}
                </p>
                <button
                  data-testid={`service-cta-${s.id}`}
                  onClick={() => scrollTo("quote")}
                  className="mt-auto inline-flex items-center gap-1 font-display text-sm font-bold text-zinc-950"
                >
                  Get this hauled
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2.5} />
                </button>
              </div>
            );
          })}
        </div>

        <p className="mt-8 text-sm text-zinc-500" data-testid="appliance-note">
          <strong className="font-bold text-zinc-950">Note on appliances:</strong> We pick up
          ONE appliance at a time. Need multiple? Just book back-to-back hauls.
        </p>
      </div>
    </section>
  );
}
