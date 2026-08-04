import PricingSection from "../components/PricingSection";
import "./Home.css";

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

function Home() {
    return (
        <main className="home-page">
            <section className="home-hero">
                <div className="container home-hero-inner">
                    <div className="home-hero-content">
                        <p className="home-eyebrow">
                            Built for service businesses
                        </p>

                        <h1>
                            Plan smarter.
                            <span> Drive less.</span>
                            Get more done.
                        </h1>

                        <p className="home-hero-description">
                            Route-it! is the route optimization and client
                            management app built for contractors, technicians,
                            and mobile service professionals.
                        </p>

                        <div className="home-hero-actions">
                            <button
                                className="home-primary-button"
                                type="button"
                                onClick={openDownloadModal}
                            >
                                Download Free

                                <svg
                                    aria-hidden="true"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M12 3v12" />
                                    <path d="m7 10 5 5 5-5" />
                                    <path d="M5 21h14" />
                                </svg>
                            </button>

                            <a
                                className="home-secondary-button"
                                href="/features"
                            >
                                Explore Features
                            </a>
                        </div>

                        <div className="home-platform-list">
                            <span>Available on iPhone</span>
                            <span>Android</span>
                            <span>Web</span>
                            <span>5-star rated</span>
                        </div>
                    </div>

                    <div className="home-hero-visual">
                        <div className="home-phone-glow" />

                        <img
                            className="home-phone-image"
                            src="/screenshots/route-optimization.png"
                            alt="Route-it! active route optimization screen"
                        />

                        <div className="home-floating-card home-floating-card-top">
                            <span className="home-floating-icon">
                                <svg
                                    aria-hidden="true"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <circle cx="6" cy="18" r="2" />
                                    <circle cx="18" cy="6" r="2" />
                                    <path d="M8 18c5 0 3-10 8-10" />
                                </svg>
                            </span>

                            <div>
                                <strong>Optimized routes</strong>
                                <span>Less driving every day</span>
                            </div>
                        </div>

                        <div className="home-floating-card home-floating-card-bottom">
                            <span className="home-floating-icon">
                                <svg
                                    aria-hidden="true"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                    <circle cx="9" cy="7" r="4" />
                                    <path d="M19 8v6" />
                                    <path d="M22 11h-6" />
                                </svg>
                            </span>

                            <div>
                                <strong>Clients organized</strong>
                                <span>Everything in one place</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="home-app-showcase">
                <div className="container home-showcase-inner">
                    <div className="home-showcase-image-wrap">
                        <img
                            className="home-showcase-image"
                            src="/social-preview.png"
                            alt="Route-it! route optimization and client management app"
                        />
                    </div>

                    <div className="home-showcase-content">
                        <p className="home-eyebrow">
                            Your entire workday, organized
                        </p>

                        <h2>
                            One app to manage your routes, clients, and growth.
                        </h2>

                        <p className="home-showcase-description">
                            Route-it! gives service professionals the tools to
                            plan efficient routes, organize customer
                            information, track leads, and stay productive
                            throughout the day.
                        </p>

                        <ul className="home-benefit-list">
                            <li>
                                <span><CheckIcon /></span>
                                Automatically optimize daily routes
                            </li>

                            <li>
                                <span><CheckIcon /></span>
                                Manage client details and service information
                            </li>

                            <li>
                                <span><CheckIcon /></span>
                                Capture leads and convert them into clients
                            </li>

                            <li>
                                <span><CheckIcon /></span>
                                Pause and resume routes with Break Mode
                            </li>

                            <li>
                                <span><CheckIcon /></span>
                                Navigate with Google Maps, Apple Maps, or Waze
                            </li>
                        </ul>

                        <button
                            className="home-showcase-button"
                            type="button"
                            onClick={openDownloadModal}
                        >
                            Get Route-it!
                        </button>
                    </div>
                </div>
            </section>

            <section className="home-industries">
                <div className="container">
                    <p>
                        Built for lawn care, pest control, HVAC, pressure
                        washing, pool service, landscaping, cleaning services,
                        technicians, and other mobile service businesses.
                    </p>
                </div>
            </section>

            <PricingSection />
        </main>
    );
}

export default Home;