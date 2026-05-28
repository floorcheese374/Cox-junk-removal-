import { Sparkles, Handshake, Clock3, MapPin } from "lucide-react";

const PILLARS = [
  { icon: Handshake, label: "Honest pricing", desc: "Flat quotes. No mystery fees." },
  { icon: Clock3, label: "On time, every time", desc: "When I say I'll be there, I'm there." },
  { icon: MapPin, label: "Springfield local", desc: "Born here. Working here. Reinvesting here." },
  { icon: Sparkles, label: "Old-school work ethic", desc: "I do the job until it's done right." },
];

export default function About() {
  return (
    <section id="about" data-testid="about-section" className="border-b border-zinc-200 bg-zinc-50">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8 lg:py-32">
        <div className="lg:col-span-5">
          <div className="relative">
            <div className="aspect-[4/5] w-full overflow-hidden border border-zinc-950 bg-zinc-100">
              <img
                src="https://images.unsplash.com/photo-1580709839515-54b8991e2813?auto=format&fit=crop&w=1000&q=80"
                alt="Young business owner"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 hidden border border-zinc-950 bg-yellow-400 p-5 sm:block">
              <p className="font-display text-4xl font-black leading-none text-zinc-950">16</p>
              <p className="label-eyebrow mt-1 text-zinc-950">Years old</p>
              <p className="label-eyebrow text-zinc-950">Founder</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <p className="label-eyebrow text-zinc-500">Meet the owner</p>
          <h2 className="mt-3 font-display text-3xl font-black tracking-tighter text-zinc-950 sm:text-4xl lg:text-5xl">
            I&rsquo;m 16, I&rsquo;m from Springfield,
            <br />
            and I work like I mean it.
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-zinc-700">
            <p>
              I started Cox Junk Removal because I saw neighbors stuck with garages full of stuff,
              curbside piles getting passed over, and appliances no one wanted to deal with. I
              figured I could do something about it.
            </p>
            <p>
              So I show up on time, load it up, and haul it out — for fair, upfront prices.
              No contracts, no upsells. You text me, I respond. You book a haul, I show up.
              That&rsquo;s it.
            </p>
            <p>
              I&rsquo;m saving for college, building a real business, and treating every customer
              like they&rsquo;re a neighbor — because in Springfield, you usually are.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {PILLARS.map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={i}
                  data-testid={`about-pillar-${i}`}
                  className="flex gap-4 border border-zinc-950 bg-white p-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-zinc-950 bg-yellow-400">
                    <Icon className="h-5 w-5 text-zinc-950" strokeWidth={2.5} />
                  </div>
                  <div>
                    <p className="font-display font-bold text-zinc-950">{p.label}</p>
                    <p className="text-sm text-zinc-600">{p.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
