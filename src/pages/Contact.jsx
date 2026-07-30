import "./Contact.css";

function Contact() {
    return (
        <main className="contact-page">
            <section className="contact-hero">
                <div className="container contact-container">

                    <p className="contact-eyebrow">
                        GET IN TOUCH
                    </p>

                    <h1>We're here to help.</h1>

                    <p className="contact-intro">
                        Whether you need technical support, have a feature
                        suggestion, or want to discuss Route-it! for your
                        business, we'd love to hear from you.
                    </p>

                    <div className="contact-grid">

                        <article className="contact-card">
                            <h2>Customer Support</h2>

                            <p>
                                Questions, bug reports, account assistance,
                                or general help.
                            </p>

                            <a
                                href="mailto:support@hallowtech.us"
                                className="contact-link"
                            >
                                support@hallowtech.us
                            </a>
                        </article>

                        <article className="contact-card">
                            <h2>Business & Enterprise</h2>

                            <p>
                                Interested in Route-it! for your company,
                                partnerships, fleet management, or enterprise
                                solutions?
                            </p>

                            <a
                                href="mailto:sales@hallowtech.us"
                                className="contact-link"
                            >
                                sales@hallowtech.us
                            </a>
                        </article>

                    </div>

                    <div className="social-card">

                        <h2>Follow Route-it!</h2>

                        <p>
                            Tips, updates, feature announcements,
                            and behind-the-scenes development.
                        </p>

                        <p>
                            Some of these are a little empty, but
                            we are working on it!
                        </p>

                        <div className="social-links">

                            <a
                                href="https://facebook.com/routeitofficial"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                                className="social-button"
                            >
                                <img src="/social/facebook.png" alt="Facebook" />
                                <span>@RouteItOfficial</span>
                            </a>

                            <a
                                href="https://instagram.com/routeitofficial"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="social-button"
                            >
                                <img src="/social/instagram.png" alt="Instagram" />
                                <span>@RouteItOfficial</span>
                            </a>

                            <a
                                href="https://tiktok.com/@routeitofficial"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="TikTok"
                                className="social-button"
                            >
                                <img src="/social/tiktok.png" alt="TikTok" />
                                <span>@RouteItOfficial</span>
                            </a>

                            <a
                                href="https://youtube.com/@routeitofficial"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="YouTube"
                                className="social-button"
                            >
                                <img src="/social/youtube.png" alt="YouTube" />
                                <span>@RouteItOfficial</span>
                            </a>

                        </div>

                    </div>

                </div>
            </section>
        </main>
    );
}

export default Contact;