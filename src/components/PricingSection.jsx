import "./PricingSection.css";

const freeFeatures = [
    "Route planning",
    "Client management",
    "Route optimization",
    "Limited free usage",
    "Ad-supported experience",
];

const proFeatures = [
    "Unlimited route optimizations",
    "Unlimited break searches",
    "Higher saved route limits",
    "Lead Tracker access",
    "Convert leads into clients",
    "No free-plan ads",
    "Future cloud sync features",
];

function openDownloadModal() {
    window.dispatchEvent(
        new CustomEvent("routeit:open-download-modal")
    );
}

function CheckIcon() {
    return (
        <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m5 12 4 4L19 6" />
        </svg>
    );
}

function PricingSection() {
    return (
        <section className="pricing-section" id="pricing">
            <div className="container pricing-container">
                <div className="pricing-heading">
                    <p className="pricing-eyebrow">
                        Simple pricing
                    </p>

                    <h2>
                        Choose the plan that fits your workflow.
                    </h2>

                    <p className="pricing-intro">
                        Start with Route-it! for free and upgrade when
                        you are ready for unlimited tools.
                    </p>
                </div>

                <div className="pricing-grid">
                    <article className="pricing-card">
                        <div className="pricing-card-header">
                            <p className="pricing-plan-label">
                                Free
                            </p>

                            <h3>Get started</h3>

                            <div className="pricing-price">
                                <span className="pricing-dollar">$</span>
                                <span className="pricing-amount">0</span>
                            </div>

                            <p className="pricing-period">
                                Free to use
                            </p>
                        </div>

                        <p className="pricing-description">
                            Explore the core Route-it! workflow and
                            start planning smarter routes.
                        </p>

                        <ul className="pricing-feature-list">
                            {freeFeatures.map((feature) => (
                                <li key={feature}>
                                    <span className="pricing-check">
                                        <CheckIcon />
                                    </span>

                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <button
                            className="pricing-button pricing-button-secondary"
                            type="button"
                            onClick={openDownloadModal}
                        >
                            Start Free
                        </button>
                    </article>

                    <article className="pricing-card pricing-card-featured">
                        <div className="pricing-popular-badge">
                            Most Popular
                        </div>

                        <div className="pricing-card-header">
                            <p className="pricing-plan-label">
                                Route-it! Pro
                            </p>

                            <h3>Monthly</h3>

                            <div className="pricing-price">
                                <span className="pricing-dollar">$</span>
                                <span className="pricing-amount">
                                    9.99
                                </span>
                            </div>

                            <p className="pricing-period">
                                per month
                            </p>
                        </div>

                        <p className="pricing-description">
                            Unlock the complete Route-it! workflow for
                            your service business.
                        </p>

                        <ul className="pricing-feature-list">
                            {proFeatures.map((feature) => (
                                <li key={feature}>
                                    <span className="pricing-check">
                                        <CheckIcon />
                                    </span>

                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <button
                            className="pricing-button pricing-button-primary"
                            type="button"
                            onClick={openDownloadModal}
                        >
                            Choose Monthly
                        </button>
                    </article>

                    <article className="pricing-card pricing-card-annual">
                        <div className="pricing-value-badge">
                            Best Value
                        </div>

                        <div className="pricing-card-header">
                            <p className="pricing-plan-label">
                                Route-it! Pro
                            </p>

                            <h3>Annual</h3>

                            <div className="pricing-price">
                                <span className="pricing-dollar">$</span>
                                <span className="pricing-amount">
                                    99.99
                                </span>
                            </div>

                            <p className="pricing-period">
                                per year
                            </p>
                        </div>

                        <div className="pricing-savings">
                            Save $19.89 every year
                        </div>

                        <p className="pricing-description">
                            Get every Pro feature at the lowest
                            effective monthly price.
                        </p>

                        <ul className="pricing-feature-list">
                            {proFeatures.map((feature) => (
                                <li key={feature}>
                                    <span className="pricing-check">
                                        <CheckIcon />
                                    </span>

                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <button
                            className="pricing-button pricing-button-primary"
                            type="button"
                            onClick={openDownloadModal}
                        >
                            Choose Annual
                        </button>
                    </article>
                </div>

                <p className="pricing-disclaimer">
                    Subscriptions are securely managed through the
                    Apple App Store or Google Play, or Stripe for web-based subscriptions. Cancel anytime.
                </p>
            </div>
        </section>
    );
}

export default PricingSection;