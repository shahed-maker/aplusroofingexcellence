import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Trust } from "@/components/site/Trust";
import { Services } from "@/components/site/Services";
import { WhyUs } from "@/components/site/WhyUs";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { Work } from "@/components/site/Work";
import { Videos } from "@/components/site/Videos";
import { ServiceArea } from "@/components/site/ServiceArea";
import { Contact } from "@/components/site/Contact";
import { FinalCta } from "@/components/site/FinalCta";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aplusroofing Excellence | Roof Repair & Installation in Wesley Chapel, FL" },
      {
        name: "description",
        content:
          "Licensed & insured roofing company in Wesley Chapel, Florida. Honest work, fair prices. Roof repair and installation — call 813-388-0510 for a free estimate.",
      },
      { property: "og:title", content: "Aplusroofing Excellence | Wesley Chapel Roofing" },
      {
        property: "og:description",
        content:
          "Roof repair & installation in Wesley Chapel, FL. Licensed & insured, honest work, fair prices. Call 813-388-0510.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Trust />
        <Services />
        <WhyUs />
        <BeforeAfter />
        <Work />
        <Videos />
        <ServiceArea />
        <Contact />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
