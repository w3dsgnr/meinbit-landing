import Nav from "@/components/Nav/Nav";
import Hero from "@/components/Hero/Hero";
import ContentCard from "@/components/ContentCard/ContentCard";
import Footer from "@/components/Footer/Footer";

export default function HomePage() {
  return (
    <div id="page">
      <Nav />
      <Hero />
      <ContentCard />
      <Footer />
    </div>
  );
}
