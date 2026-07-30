import "./FeaturesSection.css";

const features = [
    {
        title: "Route Optimization",
        image: "/screenshots/route-optimization.png",
        description:
            "Automatically build the fastest route in seconds. Spend less time driving and more time getting work done.",
        bullets: [
            "Optimize dozens of stops",
            "Reduce drive time",
            "One-tap navigation",
            "Choose one way or round-trip routes",
            "Save routes for later use"
        ]
    },
    {
        title: "Client Info",
        image: "/screenshots/client-info.png",
        description:
            "Keep every customer organized with addresses, notes, phone numbers and service history.",
        bullets: [
            "Customer notes",
            "Contact information",
            "Service history"
        ]
    },
    {
        title: "Leads",
        image: "/screenshots/leads.png",
        description:
            "Capture new customers and track every opportunity until it becomes a paying client.",
        bullets: [
            "Track opportunities",
            "Convert to clients",
            "Never lose a lead"
        ]
    },
    {
        title: "Break Mode",
        image: "/screenshots/break-mode.png",
        description:
            "Pause your active route whenever you need a break and continue exactly where you left off.",
        bullets: [
            "Pause navigation",
            "Resume instantly",
            "Stay on schedule",
            "Find nearby break locations",
            "Save locations to your favorites"
        ]
    },
    {
        title: "Navigate Your Way",
        image: "/screenshots/navigation-apps.png",
        description:
            "Launch turn-by-turn directions with the navigation app you already know and trust. Route-it! works seamlessly with Google Maps, Apple Maps, and Waze.",
        bullets: [
            "Google Maps",
            "Apple Maps",
            "Waze"
        ]
    }
];

export default function FeaturesSection() {
    return (
        <section className="features-section">

            <div className="container">

                <p className="features-eyebrow">
                    FEATURES
                </p>

                <h2 className="features-title">
                    Everything You Need to Run Your Business Smarter
                </h2>

                <p className="features-intro">
                    Route-it! gives you the tools to plan efficient routes,
                    manage clients, track leads and stay productive
                    throughout your work day.
                </p>

                {features.map((feature, index) => (

                    <div
                        key={feature.title}
                        className={`feature-row ${index % 2 ? "reverse" : ""
                            }`}
                    >

                        <div className="feature-image">

                            <img
                                src={feature.image}
                                alt={feature.title}
                                onError={(e) => {
                                    e.target.style.display = "none";
                                    e.target.nextSibling.style.display = "flex";
                                }}
                            />

                            <div className="placeholder">

                                1080 × 1920

                            </div>

                        </div>

                        <div className="feature-content">

                            <h3>{feature.title}</h3>

                            <p>{feature.description}</p>

                            <ul>

                                {feature.bullets.map(item => (
                                    <li key={item}>
                                        ✓ {item}
                                    </li>
                                ))}

                            </ul>

                        </div>

                    </div>

                ))}

            </div>

        </section>
    );
}