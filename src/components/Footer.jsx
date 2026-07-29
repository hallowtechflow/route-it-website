import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="site-footer">
            <div className="container footer-inner">
                <div className="footer-brand-column">
                    <Link className="brand-link" to="/" aria-label="Route-it! home">
                        <img
                            className="site-logo footer-logo"
                            src="/branding/route-it-logo-dark.webp"
                            alt="Route-it!"
                        />
                    </Link>

                    <p>
                        Smart route planning, client management, and workflow tools built
                        for service businesses.
                    </p>

                    <p className="footer-copyright">
                        © {new Date().getFullYear()} HALLOWTECH. All rights reserved.
                    </p>
                </div>

                <div className="footer-navigation">
                    <div className="footer-link-group">
                        <p className="footer-link-heading">Product</p>
                        <Link to="/features">Features</Link>
                        <Link to="/pricing">Pricing</Link>
                        <a href="#download">Download</a>
                    </div>

                    <div className="footer-link-group">
                        <p className="footer-link-heading">Company</p>
                        <Link to="/about">About</Link>
                        <Link to="/contact">Contact</Link>
                    </div>

                    <div className="footer-link-group">
                        <p className="footer-link-heading">Legal</p>
                        <Link to="/privacy">Privacy</Link>
                        <Link to="/terms">Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;