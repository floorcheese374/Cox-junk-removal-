import { MapPin, Phone, Clock, Mail } from "lucide-react";

const TOWNS = [
  "Springfield",
  "Enon",
  "New Carlisle",
  "Urbana",
  "South Charleston",
  "North Hampton",
  "Tremont City",
  "Catawba",
  "Donnelsville",
];

const HOURS = [
  { d: "Mon – Fri", h: "8:00 AM – 7:00 PM" },
  { d: "Saturday", h: "9:00 AM – 5:00 PM" },
  { d: "Sunday", h: "By appointment" },
];

export default function ServiceArea() {
  return (
    <section id="contact" data-testid="contact-section" className="border-b border-zinc-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p className="label-eyebrow text-zinc-500">Service area & contact</p>
            <h2 className="mt-3 font-display text-3xl font-black tracking-tighter text-zinc-950 sm:text-4xl lg:text-5xl">
              Serving Springfield
              <br />& Clark County.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-600">
              Based in Springfield, Ohio. I cover surrounding towns within a reasonable drive —
              if you&rsquo;re nearby and not listed, just ask.
            </p>

            <div
              data-testid="towns-grid"
              className="mt-8 grid grid-cols-2 gap-px border border-zinc-950 bg-zinc-950 sm:grid-cols-3"
            >
              {TOWNS.map((t) => (
                <div
                  key={t}
                  data-testid={`town-${t.toLowerCase().replace(/\s+/g, "-")}`}
                  className="flex items-center gap-2 bg-white p-4 transition-colors hover:bg-yellow-400"
                >
                  <MapPin className="h-4 w-4 text-zinc-950" strokeWidth={2.5} />
                  <span className="font-display text-sm font-bold text-zinc-950">{t}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="border border-zinc-950 bg-zinc-950 p-8 text-white">
              <p className="label-eyebrow text-yellow-400">Call directly</p>
              <a
                data-testid="contact-call-link"
                href="tel:9372708923"
                className="mt-2 block font-display text-4xl font-black tracking-tighter text-white transition-colors hover:text-yellow-400 sm:text-5xl lg:text-6xl"
              >
                937-270-<wbr />8923
              </a>
              <p className="mt-4 text-sm text-zinc-400">
                Text messages welcome. Send photos of items for the fastest quote.
              </p>

              <div className="mt-8 space-y-4 border-t border-zinc-800 pt-6">
                <div className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 text-yellow-400" strokeWidth={2.5} />
                  <div>
                    <p className="label-eyebrow text-zinc-500">Phone / Text</p>
                    <p className="font-display font-bold">937-270-8923</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4 text-yellow-400" strokeWidth={2.5} />
                  <div>
                    <p className="label-eyebrow text-zinc-500">Email</p>
                    <p className="font-display font-bold">Cox.junkremoval937@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 text-yellow-400" strokeWidth={2.5} />
                  <div>
                    <p className="label-eyebrow text-zinc-500">Based in</p>
                    <p className="font-display font-bold">Springfield, OH</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 border border-zinc-950 bg-yellow-400 p-6">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-zinc-950" strokeWidth={2.5} />
                <p className="label-eyebrow text-zinc-950">Hours</p>
              </div>
              <dl className="mt-4 space-y-2">
                {HOURS.map((h) => (
                  <div
                    key={h.d}
                    data-testid={`hours-${h.d.toLowerCase().replace(/\s+/g, "-")}`}
                    className="flex items-center justify-between border-b border-zinc-950/20 pb-2 last:border-0 last:pb-0"
                  >
                    <dt className="font-display font-bold text-zinc-950">{h.d}</dt>
                    <dd className="text-sm font-semibold text-zinc-950">{h.h}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
