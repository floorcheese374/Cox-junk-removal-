import { Check } from "lucide-react";

const ITEMS = [
  "Same-week pickup",
  "Upfront flat pricing",
  "Eco-friendly disposal",
  "No hidden fees",
  "Friendly, local service",
  "Free quotes",
  "Cash, Venmo, Cash App",
  "Springfield-based",
];

export default function TrustStrip() {
  return (
    <section data-testid="trust-strip" className="border-b border-zinc-200 bg-zinc-950 text-white">
      <div className="overflow-hidden py-4">
        <div className="flex w-max animate-marquee items-center gap-12 whitespace-nowrap">
          {[...ITEMS, ...ITEMS].map((t, i) => (
            <div key={i} className="flex items-center gap-2">
              <Check className="h-4 w-4 text-yellow-400" strokeWidth={3} />
              <span className="label-eyebrow text-white">{t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
