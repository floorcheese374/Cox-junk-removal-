import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import TrustStrip from "@/components/site/TrustStrip";
import ServicesGrid from "@/components/site/ServicesGrid";
import About from "@/components/site/About";
import QuoteForm from "@/components/site/QuoteForm";
import ServiceArea from "@/components/site/ServiceArea";
import Footer from "@/components/site/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-950" data-testid="home-page">
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <ServicesGrid />
        <About />
        <QuoteForm />
        <ServiceArea />
      </main>
      <Footer />
    </div>
  );
}
