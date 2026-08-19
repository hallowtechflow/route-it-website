import { Link, Navigate, useParams } from "react-router-dom";
import Seo from "../components/Seo";
import { industries, industryBySlug } from "../data/industries";
import "./Industries.css";

function openDownloadModal() {
  window.dispatchEvent(new CustomEvent("routeit:open-download-modal"));
}

export default function Industry() {
  const { slug } = useParams();
  const industry = industryBySlug[slug];
  if (!industry) return <Navigate to="/industries" replace />;

  const related = industries.filter((item) => item.slug !== slug).slice(0, 3);
  const path = `/industries/${industry.slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebPage", name: industry.title, description: industry.description, url: `https://routeitusa.com${path}`, isPartOf: { "@type": "WebSite", name: "Route-it!", url: "https://routeitusa.com" } },
      { "@type": "SoftwareApplication", name: "Route-it!", applicationCategory: "BusinessApplication", operatingSystem: "iOS, Android, Web", description: `${industry.name} route optimization and client management software.` },
      { "@type": "FAQPage", mainEntity: industry.faq.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) }
    ]
  };

  return (
    <article className="industry-page">
      <Seo title={`${industry.title} | Route-it!`} description={industry.description} path={path} schema={schema} />
      <section className="industry-hero">
        <div className="container industry-hero-grid">
          <div>
            <nav className="industry-breadcrumb" aria-label="Breadcrumb"><Link to="/industries">Industries</Link><span>/</span><span>{industry.name}</span></nav>
            <p className="industries-eyebrow">{industry.eyebrow}</p>
            <h1>{industry.title}</h1>
            <p className="industry-lede">{industry.intro}</p>
            <div className="industry-actions"><button type="button" onClick={openDownloadModal}>Download Route-it! Free</button><Link to="/features">See all features</Link></div>
          </div>
          <aside className="industry-summary">
            <p>Route-it! for {industry.name}</p>
            <ul>{industry.outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}</ul>
            <div className="industry-platforms"><span>iPhone</span><span>Android</span><span>Web</span></div>
          </aside>
        </div>
      </section>

      <section className="industry-content-section">
        <div className="container industry-two-column">
          <div className="industry-copy"><p className="industries-eyebrow">The routing challenge</p><h2>Why {industry.name.toLowerCase()} routes get complicated</h2><p>Every extra mile between customer locations takes time away from billable work. A clear daily route makes it easier to protect appointment windows, respond to changes, and know what comes next.</p></div>
          <div className="industry-list-cards">{industry.challenges.map((item, index) => <article key={item}><span>{index + 1}</span><p>{item}</p></article>)}</div>
        </div>
      </section>

      <section className="industry-workflow-section">
        <div className="container">
          <div className="industries-section-heading"><p className="industries-eyebrow">How Route-it! helps</p><h2>A simpler {industry.name.toLowerCase()} workflow from first stop to last.</h2></div>
          <div className="industry-workflow-grid">{industry.workflows.map((item, index) => <article key={item}><strong>{String(index + 1).padStart(2, "0")}</strong><p>{item}</p></article>)}</div>
          <p className="industry-detail-copy">Route-it! combines route optimization, client management, lead tracking, client imports, navigation choices, and Break Mode in one focused app. It is built for service professionals who want a straightforward way to organize the field day without adding a complicated enterprise system.</p>
        </div>
      </section>

      <section className="industry-faq-section">
        <div className="container industry-faq-grid">
          <div><p className="industries-eyebrow">Common questions</p><h2>{industry.name} route planning FAQ</h2></div>
          <div>{industry.faq.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div>
        </div>
      </section>

      <section className="industry-related">
        <div className="container"><div className="industry-related-heading"><h2>Explore more service industries</h2><Link to="/industries">View all industries →</Link></div><div className="industry-related-grid">{related.map((item) => <Link key={item.slug} to={`/industries/${item.slug}`}><span>{item.name}</span><small>{item.eyebrow}</small></Link>)}</div></div>
      </section>

      <section className="industry-cta"><div className="container"><p className="industries-eyebrow">Ready for a smarter route?</p><h2>Drive less. Finish more.</h2><p>Start organizing your {industry.name.toLowerCase()} routes and customer stops with Route-it!.</p><button type="button" onClick={openDownloadModal}>Download for Free</button></div></section>
    </article>
  );
}
