import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Divisions } from "@/components/Divisions";
import { Ecosystem } from "@/components/Ecosystem";
import { Goals } from "@/components/Goals";
import { Advantage } from "@/components/Advantage";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Divisions />
        <Ecosystem />
        <Advantage />
        <Goals />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
