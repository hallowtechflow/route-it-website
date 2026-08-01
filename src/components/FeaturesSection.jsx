import "./FeaturesSection.css";

const features = [
  {
    title: "Route Optimization",
    image: "/mockups/route-optimization.png",
    description:
      "Automatically build an efficient route in seconds. Spend less time driving and more time getting work done.",
    bullets: [
      "Optimize dozens of stops",
      "Reduce drive time",
      "Choose one-way or round-trip routes",
      "Save routes for later use",
    ],
  },
  {
    title: "Client Management",
    image: "/mockups/client-management.png",
    description:
      "Keep every customer organized with addresses, notes, phone numbers, and the details your team needs in the field.",
    bullets: [
      "Fast client search",
      "Contact information",
      "Addresses ready for routing",
      "One organized client list",
    ],
  },
  {
    title: "Fast Client Imports",
    image: "/mockups/client-imports.png",
    description:
      "Bring an existing customer list into Route-it! in one move instead of rebuilding it one client at a time.",
    bullets: [
      "Import clients in bulk",
      "Move existing records quickly",
      "Clear import summaries",
      "Get route-ready sooner",
    ],
  },
  {
    title: "Lead Tracker",
    image: "/mockups/lead-tracker.png",
    description:
      "Capture new opportunities, keep every quote and contact close, and convert the right leads into paying clients.",
    bullets: [
      "Track every opportunity",
      "Call, text, or email from one place",
      "Keep quotes attached",
      "Convert leads to clients",
    ],
  },
  {
    title: "Break Mode",
    image: "/mockups/break-mode.png",
    description:
      "Pause your active route, find what you need nearby, and continue exactly where you left off when you are ready.",
    bullets: [
      "Find food, fuel, coffee, and restrooms",
      "Save favorite locations",
      "Keep the active route paused",
      "Resume without losing your place",
    ],
  },
  {
    title: "Navigation Your Way",
    image: "/mockups/navigation.png",
    description:
      "Launch turn-by-turn directions with the navigation app you already know and trust.",
    bullets: ["Google Maps", "Apple Maps", "Waze", "Custom start and end locations"],
  },
];

function FeatureRow({ feature, index }) {
  return (
    <article className={`feature-row ${index % 2 ? "reverse" : ""}`}>
      <div className="feature-image">
        <img src={feature.image} alt={`${feature.title} shown on a 3D iPhone`} />
      </div>

      <div className="feature-content">
        <p className="feature-number">0{index + 1}</p>
        <h3>{feature.title}</h3>
        <p>{feature.description}</p>
        <ul>
          {feature.bullets.map((item) => (
            <li key={item}>
              <span aria-hidden="true">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default function FeaturesSection() {
  return (
    <section className="features-section">
      <div className="container">
        <header className="features-heading">
          <p className="features-eyebrow">FEATURES</p>
          <h1 className="features-title">
            Everything You Need to Run Your Business Smarter
          </h1>
          <p className="features-intro">
            Route-it! brings route planning, customer management, lead tracking,
            and the tools that keep a full workday moving into one focused app.
          </p>
        </header>

        <div className="features-list">
          {features.map((feature, index) => (
            <FeatureRow key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
