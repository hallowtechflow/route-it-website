import { Link, NavLink } from "react-router-dom";

function Header() {
    return (
        <header className="site-header">
            <div className="container header-inner">
                <Link className="brand-link" to="/" aria-label="Route-it! home">
                    <img
                        className="header-wordmark"
                        src="/branding/route-it-words.png"
                        alt="Route-it!"
                    />
                </Link>

                <nav className="desktop-nav" aria-label="Main navigation">
                    <NavLink to="/features">Features</NavLink>
                    <NavLink to="/pricing">Pricing</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </nav>

                <a
                    className="header-download-button"
                    href="#download"
                    aria-label="Download Route-it!"
                >
                    Download Free
                </a>
            </div>
        </header>
    );
}

export default Header;