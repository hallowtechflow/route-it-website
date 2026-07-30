import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import DownloadModal from "./DownloadModal";

function Header() {
    const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

    useEffect(() => {
        const openDownloadModal = () => {
            setIsDownloadModalOpen(true);
        };

        window.addEventListener(
            "routeit:open-download-modal",
            openDownloadModal
        );

        return () => {
            window.removeEventListener(
                "routeit:open-download-modal",
                openDownloadModal
            );
        };
    }, []);

    return (
        <>
            <header className="site-header">
                <div className="container header-inner">
                    <Link
                        className="brand-link"
                        to="/"
                        aria-label="Route-it! home"
                    >
                        <img
                            className="header-wordmark"
                            src="/branding/route-it-words.png"
                            alt="Route-it!"
                        />
                    </Link>

                    <nav
                        className="desktop-nav"
                        aria-label="Main navigation"
                    >
                        <NavLink to="/features">Features</NavLink>
                        <NavLink to="/pricing">Pricing</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                    </nav>

                    <button
                        className="header-download-button"
                        type="button"
                        onClick={() => setIsDownloadModalOpen(true)}
                    >
                        Download Free
                    </button>
                </div>
            </header>

            <DownloadModal
                isOpen={isDownloadModalOpen}
                onClose={() => setIsDownloadModalOpen(false)}
            />
        </>
    );
}

export default Header;