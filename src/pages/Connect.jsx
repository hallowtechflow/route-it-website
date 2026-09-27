import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import "./Connect.css";

const links = [
  {
    title: "Download for iPhone",
    description: "Get Route-it! on the Apple App Store",
    href: "https://apps.apple.com/us/app/route-it/id6788199192",
    icon: "apple",
    featured: true
  },
  {
    title: "Join the Google Play beta",
    description: "Follow the steps to test Route-it! on Android",
    href: "https://dev.hallowtech.us/beta",
    icon: "google"
  },
  {
    title: "Explore the Route-it! website",
    description: "Features, pricing, industries, and FAQs",
    href: "/",
    icon: "routeit",
    internal: true
  }
];

const socials = [
  { name: "Facebook", handle: "@RouteItOfficial", href: "https://facebook.com/routeitofficial", image: "/social/facebook.png" },
  { name: "Instagram", handle: "@RouteItOfficial", href: "https://instagram.com/routeitofficial", image: "/social/instagram.png" },
  { name: "TikTok", handle: "@routeitofficial", href: "https://tiktok.com/@routeitofficial", image: "/social/tiktok.png" },
  { name: "YouTube", handle: "@routeitofficial", href: "https://youtube.com/@routeitofficial", image: "/social/youtube.png" }
];

function AppleIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16.7 13.1c0-2.8 2.3-4.1 2.4-4.2-1.3-1.9-3.4-2.2-4.1-2.2-1.7-.2-3.4 1-4.3 1-.9 0-2.3-1-3.8-1-1.9 0-3.7 1.1-4.7 2.8-2 3.5-.5 8.7 1.4 11.5 1 1.4 2.1 2.9 3.6 2.8 1.4-.1 2-1 3.7-1s2.2 1 3.7 1c1.5 0 2.5-1.4 3.4-2.8 1.1-1.6 1.6-3.2 1.6-3.3-.1 0-2.9-1.1-2.9-4.6ZM13.9 4.9c.8-1 1.3-2.3 1.2-3.6-1.2 0-2.6.8-3.4 1.8-.7.8-1.4 2.2-1.2 3.5 1.3.1 2.6-.7 3.4-1.7Z" /></svg>;
}

function GoogleIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#34A853" d="M3 2.8v18.4l10.7-9.2L3 2.8Z"/><path fill="#4285F4" d="m13.7 12 3.1-2.7L5.1 2.7 13.7 12Z"/><path fill="#FBBC04" d="m13.7 12-8.6 9.3 11.8-6.7-3.2-2.6Z"/><path fill="#EA4335" d="m16.8 9.3-3.1 2.7 3.2 2.6 3.7-2.1c1-.6 1-1.5 0-2.1l-3.8-2.1Z"/></svg>;
}

function LinkIcon({ type }) {
  if (type === "apple") return <AppleIcon />;
  if (type === "google") return <GoogleIcon />;
  return <img src="/branding/route-it-app-icon.png" alt="" />;
}

function ConnectLink({ item }) {
  const content = <><span className="connect-link-icon"><LinkIcon type={item.icon} /></span><span className="connect-link-copy"><strong>{item.title}</strong><small>{item.description}</small></span><span className="connect-link-arrow" aria-hidden="true">→</span></>;
  if (item.internal) return <Link className={`connect-link${item.featured ? " featured" : ""}`} to={item.href}>{content}</Link>;
  return <a className={`connect-link${item.featured ? " featured" : ""}`} href={item.href} target="_blank" rel="noopener noreferrer">{content}</a>;
}

export default function Connect() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Connect with Route-it!",
    description: "Download Route-it!, join the Android beta, explore the website, and follow Route-it! on social media.",
    url: "https://routeitusa.com/connect"
  };

  return (
    <main className="connect-page">
      <Seo title="Connect with Route-it! | Download and Social Links" description="Download Route-it! for iPhone, join the Google Play beta, explore the website, and follow Route-it! on social media." path="/connect" schema={schema} />
      <div className="connect-orb connect-orb-one" />
      <div className="connect-orb connect-orb-two" />
      <section className="connect-panel">
        <Link className="connect-brand" to="/" aria-label="Route-it! home">
          <img src="/branding/route-it-words.png" alt="Route-it!" />
        </Link>

        <div className="connect-heading">
          <p className="connect-eyebrow"><span /> Your workday, routed</p>
          <h1>Connect with <em>Route-it!</em></h1>
          <p>Choose where you’d like to go.</p>
        </div>

        <div className="connect-links">
          {links.map((item) => <ConnectLink item={item} key={item.title} />)}
        </div>

        <div className="connect-social-section">
          <p>Follow Route-it!</p>
          <div className="connect-social-grid">
            {socials.map((social) => (
              <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={`Follow Route-it! on ${social.name}`} key={social.name}>
                <img src={social.image} alt="" />
                <span><strong>{social.name}</strong><small>{social.handle}</small></span>
              </a>
            ))}
          </div>
        </div>

        <footer className="connect-footer">
          <a href="mailto:support@hallowtech.us">support@hallowtech.us</a>
          <span>•</span>
          <Link to="/privacy">Privacy</Link>
        </footer>
      </section>
    </main>
  );
}
