import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { industries } from "../data/industries";
import "./Industries.css";

export default function Industries() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Route Planning Software by Industry",
    url: "https://routeitusa.com/industries",
    description: "Route optimization and client management resources for mobile service businesses.",
    hasPart: industries.map(({ name, slug }) => ({ "@type": "WebPage", name, url: `https://routeitusa.com/industries/${slug}` }))
  };

  return (
    <div className="industries-page">
      <Seo title="Route Planning Software by Industry | Route-it!" description="Explore route optimization, client management, and lead tracking workflows for lawn care, HVAC, pest control, pool service, cleaning, and other mobile service businesses." path="/industries" schema={schema} />
      <section className="industries-hero">
        <div className="container industries-hero-inner">
          <p className="industries-eyebrow">Built for work in the field</p>
          <h1>Route planning for service businesses that keep moving.</h1>
          <p>Route-it! helps mobile professionals spend less time organizing addresses and more time completing profitable work. Explore practical routing workflows for your industry.</p>
        </div>
      </section>

      <section className="industries-directory">
        <div className="container">
          <div className="industries-section-heading">
            <p className="industries-eyebrow">Find your industry</p>
            <h2>One simple app. Many kinds of service routes.</h2>
          </div>
          <div className="industries-grid">
            {industries.map((industry, index) => (
              <Link className="industry-card" to={`/industries/${industry.slug}`} key={industry.slug}>
                <span className="industry-card-number">{String(index + 1).padStart(2, "0")}</span>
                <h3>{industry.name}</h3>
                <p>{industry.description}</p>
                <span className="industry-card-link">Explore {industry.name} <span aria-hidden="true">→</span></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="industries-foundation">
        <div className="container industries-foundation-inner">
          <div><p className="industries-eyebrow">A better field workflow</p><h2>Built around the work every mobile business shares.</h2></div>
          <div className="industries-foundation-list">
            <article><strong>01</strong><h3>Plan the stops</h3><p>Turn customer addresses into a more efficient daily route.</p></article>
            <article><strong>02</strong><h3>Know the customer</h3><p>Keep contact, access, and service details organized before arrival.</p></article>
            <article><strong>03</strong><h3>Keep moving</h3><p>Navigate with familiar maps and use Break Mode without losing progress.</p></article>
          </div>
        </div>
      </section>
    </div>
  );
}
