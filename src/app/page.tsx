import Hero from "./components/Hero";
import { ServiceSection } from "./components/Service-Section";
import { FinanceSimulator } from "./components/Finance-Simulator";
import AboutSection from "./components/About-Section";
import { SectionProject } from "./components/SectionProject";
import { SectionArticle } from "./components/SectionArticle";
import { Footer } from "./components/Footer";

const projects = [
  {
    id: 1,
    title: "Keur Marieme, Mermoz",
    status: "En cours",
    image: "/assets/images/immeuble.jpg",
  },
  {
    id: 2,
    title: "Buur sine, Point E",
    status: "A venir",
    image: "/assets/images/immeuble.jpg",
  },
];
export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F4F2]">
      <Hero />
      <AboutSection />
      <ServiceSection />
      <SectionProject projects={projects} showTitle={true} />
      <SectionArticle />
      <FinanceSimulator className="mt-60" />
      <Footer />
    </main>
  );
}
