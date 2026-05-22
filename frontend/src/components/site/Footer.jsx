import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer data-testid="site-footer" className="bg-zinc-950 text-zinc-400">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="font-display text-5xl font-black tracking-tighter text-white sm:text-6xl lg:text-7xl">
              COX JUNK
              <br />
              <span className="text-yellow-400">REMOVAL.</span>
            </p>
            <p className="mt-6 max-w-md text-sm leading-relaxed">
              Owner-operated junk hauling in Springfield, Ohio. Reliable pickups, honest prices,
              real local service.
            </p>
          </div>

          <div className="lg:col-span-3">
            <p className="label-eyebrow text-yellow-400">Reach me</p>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 text-yellow-400" />
                <a
                  data-testid="footer-call-link"
                  href="tel:9372708923"
                  className="hover:text-white"
                >
                  937-270-8923
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 text-yellow-400" />
                <span>Cox.junkremoval937@gmail.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-yellow-400" />
                <span>Springfield, OH 45504</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="label-eyebrow text-yellow-400">Quick links</p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href="#services" data-testid="footer-link-services" className="hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" data-testid="footer-link-about" className="hover:text-white">
                  About the owner
                </a>
              </li>
              <li>
                <a href="#quote" data-testid="footer-link-quote" className="hover:text-white">
                  Get a quote
                </a>
              </li>
              <li>
                <a href="#contact" data-testid="footer-link-contact" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-zinc-800 pt-6 text-xs sm:flex-row sm:items-center">
          <p>© {year} Cox Junk Removal. All rights reserved.</p>
          <p className="label-eyebrow text-zinc-600">Springfield • Ohio • Hustle</p>
        </div>
      </div>
    </footer>
  );
}
