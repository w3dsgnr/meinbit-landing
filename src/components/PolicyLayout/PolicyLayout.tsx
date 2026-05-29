import { useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "@/components/Nav/Nav";
import Footer from "@/components/Footer/Footer";
import "./PolicyLayout.css";

type Props = {
  title: string;
  updated?: string;
  children: React.ReactNode;
};

export default function PolicyLayout({ title, updated, children }: Props) {
  useEffect(() => {
    window.scrollTo(0, 0);
    const prev = document.title;
    document.title = `${title} — MeinBit`;
    return () => { document.title = prev; };
  }, [title]);

  return (
    <div id="page">
      <Nav />
      <main className="policy-main">
        <Link to="/" className="policy-back">← Back to home</Link>
        <article className="policy-card">
          <h1>{title}</h1>
          {updated && <p className="policy-updated">Last updated {updated}</p>}
          {children}
        </article>
      </main>
      <Footer />
    </div>
  );
}
