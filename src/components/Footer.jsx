import { Link } from "react-router-dom";

function openDownloadModal() {
    window.dispatchEvent(
        new CustomEvent("routeit:open-download-modal")
    );
}

function Footer() {
    return (
        <footer className="site-footer">
            <div className="container footer-inner">
                <div className="footer-brand-column">
                    <Link className="brand-link" to="/" aria-label="Route-it! home">
                        <img
                            className="site-logo footer-logo"
                            src="/branding/route-it-app-icon.png"
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
                        <Link to="/faq">
                            FAQ
                        </Link>
                        <button
                            type="button"
                            className="footer-download-link"
                            onClick={openDownloadModal}
                        >
                            Download Route-it!
                        </button>
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
                        <Link to="/delete-account">
                            Delete Account
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;