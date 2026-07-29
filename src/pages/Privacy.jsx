function Privacy() {
    return (
        <section className="legal-page">
            <div className="container legal-container">
                <header className="legal-header">
                    <p className="legal-eyebrow">Legal</p>
                    <h1>Privacy Policy</h1>
                    <p className="legal-date">Last Updated: May 24, 2026</p>
                </header>

                <div className="legal-content">
                    <p>
                        This Privacy Policy explains how Route-it! and HALLOWTECH collect,
                        use, and protect your information.
                    </p>

                    <section className="legal-section">
                        <h2>Information We Collect</h2>

                        <ul>
                            <li>Account and profile information</li>
                            <li>Client and route information</li>
                            <li>Saved preferences and settings</li>
                            <li>Device and analytics data</li>
                            <li>Location information, with permission</li>
                        </ul>
                    </section>

                    <section className="legal-section">
                        <h2>How Information Is Used</h2>

                        <ul>
                            <li>Improve route optimization</li>
                            <li>Maintain account functionality</li>
                            <li>Improve app stability and performance</li>
                            <li>Provide support and updates</li>
                        </ul>
                    </section>

                    <section className="legal-section">
                        <h2>Location Services</h2>

                        <p>
                            Route-it! may use your location to optimize routes and locate
                            nearby break locations.
                        </p>
                    </section>

                    <section className="legal-section">
                        <h2>Third-Party Services</h2>

                        <p>
                            Route-it! may integrate with Google Maps, Apple Maps, Waze,
                            Firebase, and other providers.
                        </p>
                    </section>

                    <section className="legal-section">
                        <h2>Contact</h2>

                        <p>
                            Questions about this Privacy Policy may be sent to{" "}
                            <a href="mailto:support@hallowtech.us">
                                support@hallowtech.us
                            </a>
                            .
                        </p>
                    </section>
                </div>
            </div>
        </section>
    );
}

export default Privacy;