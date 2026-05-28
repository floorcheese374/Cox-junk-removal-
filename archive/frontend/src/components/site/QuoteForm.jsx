import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Loader2, Send, CheckCircle2 } from "lucide-react";
import { SERVICES } from "@/lib/services";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const INITIAL = {
  name: "",
  phone: "",
  email: "",
  address: "",
  service_type: "",
  description: "",
};

export default function QuoteForm() {
  const [form, setForm] = useState(INITIAL);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const update = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const validate = () => {
    if (!form.name.trim()) return "Please enter your name.";
    if (!/^[\d\s\-+()]{7,}$/.test(form.phone.trim())) return "Please enter a valid phone number.";
    if (!form.address.trim()) return "Please enter a pickup address.";
    if (!form.service_type) return "Please choose a service type.";
    if (!form.description.trim() || form.description.trim().length < 5)
      return "Please briefly describe the items.";
    return null;
  };

  const submit = async (e) => {
    e.preventDefault();
    const err = validate();
    if (err) {
      toast.error(err);
      return;
    }
    setSubmitting(true);
    try {
      await axios.post(`${API}/quotes`, form);
      toast.success("Quote request sent! I'll text or call you back shortly.");
      setForm(INITIAL);
      setDone(true);
    } catch (e) {
      console.error(e);
      toast.error("Couldn't send your request. Please call 937-270-8923 instead.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="quote" data-testid="quote-section" className="border-b border-zinc-200 bg-zinc-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8 lg:py-32">
        <div className="lg:col-span-5">
          <p className="label-eyebrow text-yellow-400">Request a quote</p>
          <h2 className="mt-3 font-display text-3xl font-black tracking-tighter text-white sm:text-4xl lg:text-5xl">
            Tell me what&rsquo;s
            <br />
            <span className="text-yellow-400">in the way.</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-zinc-400">
            Fill this out and I&rsquo;ll get back to you the same day with a fair, flat price.
            Most jobs in Springfield are quoted within a few hours.
          </p>

          <div className="mt-10 space-y-4 border-t border-zinc-800 pt-8">
            <div>
              <p className="label-eyebrow text-zinc-500">Prefer to talk?</p>
              <a
                data-testid="quote-call-link"
                href="tel:9372708923"
                className="mt-1 block font-display text-3xl font-black tracking-tight text-yellow-400 transition-colors hover:text-yellow-300 sm:text-4xl"
              >
                937-270-8923
              </a>
            </div>
            <div>
              <p className="label-eyebrow text-zinc-500">Text or email</p>
              <p className="mt-1 font-display text-lg font-bold text-white">
                Same number works for texts.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          {done ? (
            <div
              data-testid="quote-success"
              className="border border-yellow-400 bg-zinc-900 p-8 sm:p-10"
            >
              <CheckCircle2 className="h-10 w-10 text-yellow-400" strokeWidth={2} />
              <h3 className="mt-4 font-display text-3xl font-black tracking-tighter text-white">
                Got it. Thanks!
              </h3>
              <p className="mt-3 text-zinc-400">
                Your request is in. I&rsquo;ll be in touch shortly with a price and a pickup time.
                If it&rsquo;s urgent, give me a call at{" "}
                <a href="tel:9372708923" className="text-yellow-400 underline">
                  937-270-8923
                </a>
                .
              </p>
              <button
                data-testid="quote-reset-button"
                onClick={() => setDone(false)}
                className="mt-6 border border-white px-5 py-3 font-display text-sm font-bold text-white transition-all hover:bg-white hover:text-zinc-950"
              >
                Submit another request
              </button>
            </div>
          ) : (
            <form
              data-testid="quote-form"
              onSubmit={submit}
              className="space-y-5 border border-zinc-800 bg-zinc-900 p-6 sm:p-10"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <Label htmlFor="name" className="label-eyebrow text-zinc-400">
                    Full name *
                  </Label>
                  <Input
                    id="name"
                    data-testid="quote-input-name"
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    placeholder="Jane Doe"
                    className="mt-2 rounded-none border-zinc-700 bg-zinc-950 text-white placeholder:text-zinc-600 focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-0"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="label-eyebrow text-zinc-400">
                    Phone *
                  </Label>
                  <Input
                    id="phone"
                    data-testid="quote-input-phone"
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    placeholder="(937) 555-0123"
                    className="mt-2 rounded-none border-zinc-700 bg-zinc-950 text-white placeholder:text-zinc-600 focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-0"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <Label htmlFor="email" className="label-eyebrow text-zinc-400">
                    Email (optional)
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    data-testid="quote-input-email"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    placeholder="you@example.com"
                    className="mt-2 rounded-none border-zinc-700 bg-zinc-950 text-white placeholder:text-zinc-600 focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-0"
                  />
                </div>
                <div>
                  <Label htmlFor="address" className="label-eyebrow text-zinc-400">
                    Pickup address *
                  </Label>
                  <Input
                    id="address"
                    data-testid="quote-input-address"
                    value={form.address}
                    onChange={(e) => update("address", e.target.value)}
                    placeholder="123 Main St, Springfield, OH"
                    className="mt-2 rounded-none border-zinc-700 bg-zinc-950 text-white placeholder:text-zinc-600 focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-0"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="service" className="label-eyebrow text-zinc-400">
                  What do you need hauled? *
                </Label>
                <Select
                  value={form.service_type}
                  onValueChange={(v) => update("service_type", v)}
                >
                  <SelectTrigger
                    id="service"
                    data-testid="quote-select-service"
                    className="mt-2 rounded-none border-zinc-700 bg-zinc-950 text-white focus:ring-2 focus:ring-yellow-400 focus:ring-offset-0 data-[placeholder]:text-zinc-600"
                  >
                    <SelectValue placeholder="Choose a service" />
                  </SelectTrigger>
                  <SelectContent className="rounded-none border-zinc-800 bg-zinc-950 text-white">
                    {SERVICES.map((s) => (
                      <SelectItem
                        key={s.id}
                        value={s.title}
                        className="rounded-none focus:bg-yellow-400 focus:text-zinc-950"
                        data-testid={`quote-option-${s.id}`}
                      >
                        {s.title}
                      </SelectItem>
                    ))}
                    <SelectItem
                      value="Other / Not sure"
                      className="rounded-none focus:bg-yellow-400 focus:text-zinc-950"
                      data-testid="quote-option-other"
                    >
                      Other / Not sure
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="description" className="label-eyebrow text-zinc-400">
                  Describe the items *
                </Label>
                <Textarea
                  id="description"
                  data-testid="quote-input-description"
                  rows={5}
                  value={form.description}
                  onChange={(e) => update("description", e.target.value)}
                  placeholder="e.g. Old couch, two end tables, and a stack of cardboard boxes in the garage."
                  className="mt-2 rounded-none border-zinc-700 bg-zinc-950 text-white placeholder:text-zinc-600 focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-0"
                />
              </div>

              <button
                type="submit"
                data-testid="quote-submit-button"
                disabled={submitting}
                className="group inline-flex w-full items-center justify-center gap-2 bg-yellow-400 px-6 py-4 font-display text-base font-bold text-zinc-950 transition-all hover:-translate-y-1 hover:shadow-brutal-lg disabled:opacity-60 sm:w-auto"
              >
                {submitting ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    SEND REQUEST
                    <Send className="h-5 w-5" strokeWidth={2.5} />
                  </>
                )}
              </button>

              <p className="text-xs text-zinc-500">
                By submitting, you agree to be contacted at the number provided.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
