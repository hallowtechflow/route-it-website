import { useEffect } from "react";

const APP_STORE_URL = "https://apps.apple.com/us/app/route-it/id6788199192";
const GOOGLE_PLAY_TEST_URL = "https://dev.hallowtech.us/beta";
const WEB_APP_URL = "https://app.route-it.com";

function AppleIcon() {
    return (
        <svg
            aria-hidden="true"
            className="download-option-icon"
            viewBox="0 0 24 24"
            fill="currentColor"
        >
            <path d="M16.7 13.1c0-2.8 2.3-4.1 2.4-4.2-1.3-1.9-3.4-2.2-4.1-2.2-1.7-.2-3.4 1-4.3 1-.9 0-2.3-1-3.8-1-1.9 0-3.7 1.1-4.7 2.8-2 3.5-.5 8.7 1.4 11.5 1 1.4 2.1 2.9 3.6 2.8 1.4-.1 2-1 3.7-1s2.2 1 3.7 1c1.5 0 2.5-1.4 3.4-2.8 1.1-1.6 1.6-3.2 1.6-3.3-.1 0-2.9-1.1-2.9-4.6ZM13.9 4.9c.8-1 1.3-2.3 1.2-3.6-1.2 0-2.6.8-3.4 1.8-.7.8-1.4 2.2-1.2 3.5 1.3.1 2.6-.7 3.4-1.7Z" />
        </svg>
    );
}

function GooglePlayIcon() {
    return (
        <svg
            aria-hidden="true"
            className="download-option-icon"
            viewBox="0 0 24 24"
        >
            <path fill="#34A853" d="M3 2.8v18.4l10.7-9.2L3 2.8Z" />
            <path fill="#4285F4" d="m13.7 12 3.1-2.7L5.1 2.7 13.7 12Z" />
            <path fill="#FBBC04" d="m13.7 12-8.6 9.3 11.8-6.7-3.2-2.6Z" />
            <path
                fill="#EA4335"
                d="m16.8 9.3-3.1 2.7 3.2 2.6 3.7-2.1c1-.6 1-1.5 0-2.1l-3.8-2.1Z"
            />
        </svg>
    );
}

function WebIcon() {
    return (
        <svg
            aria-hidden="true"
            className="download-option-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="9" />
            <path d="M3 12h18" />
            <path d="M12 3c2.4 2.5 3.6 5.5 3.6 9S14.4 18.5 12 21" />
            <path d="M12 3c-2.4 2.5-3.6 5.5-3.6 9S9.6 18.5 12 21" />
        </svg>
    );
}

function DownloadModal({ isOpen, onClose }) {
    useEffect(() => {
        if (!isOpen) {
            return undefined;
        }

        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        document.body.classList.add("modal-open");
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.classList.remove("modal-open");
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, onClose]);

    if (!isOpen) {
        return null;
    }

    return (
        <div
            className="download-modal-backdrop"
            role="presentation"
            onMouseDown={onClose}
        >
            <section
                aria-labelledby="download-modal-title"
                aria-modal="true"
                className="download-modal"
                role="dialog"
                onMouseDown={(event) => event.stopPropagation()}
            >
                <button
                    aria-label="Close download options"
                    className="download-modal-close"
                    onClick={onClose}
                    type="button"
                >
                    ×
                </button>

                <div className="download-modal-heading">
                    <img
                        alt=""
                        className="download-modal-logo"
                        src="/branding/route-it-app-icon.png"
                    />

                    <div>
                        <p className="download-modal-eyebrow">Choose your platform</p>
                        <h2 id="download-modal-title">Get Route-it!</h2>
                    </div>
                </div>

                <div className="download-options">
                    <a
                        className="download-option"
                        href={APP_STORE_URL}
                        rel="noreferrer"
                        target="_blank"
                    >
                        <span className="download-option-icon-wrap apple-option-icon">
                            <AppleIcon />
                        </span>

                        <span className="download-option-copy">
                            <span className="download-option-label">
                                Download on the
                            </span>
                            <strong>Apple App Store</strong>
                        </span>

                        <span aria-hidden="true" className="download-option-arrow">
                            →
                        </span>
                    </a>

                    <a
                        className="download-option"
                        href={GOOGLE_PLAY_TEST_URL}
                        rel="noreferrer"
                        target="_blank"
                    >
                        <span className="download-option-icon-wrap">
                            <GooglePlayIcon />
                        </span>

                        <span className="download-option-copy">
                            <span className="download-option-label">
                                Android early access
                            </span>
                            <strong>Become a Google Play Tester</strong>
                        </span>

                        <span aria-hidden="true" className="download-option-arrow">
                            →
                        </span>
                    </a>

                    <a
                        className="download-option"
                        href={WEB_APP_URL}
                        rel="noreferrer"
                        target="_blank"
                    >
                        <span className="download-option-icon-wrap web-option-icon">
                            <img
                                className="download-option-app-icon"
                                src="/branding/route-it-app-icon.png"
                                alt=""
                            />
                        </span>

                        <span className="download-option-copy">
                            <span className="download-option-label">
                                Continue in your browser
                            </span>
                            <strong>Access the Web App</strong>
                        </span>

                        <span aria-hidden="true" className="download-option-arrow">
                            →
                        </span>
                    </a>
                </div>

                <p className="download-modal-note">
                    Route-it! works across mobile and web, so you can use the platform
                    that fits your workflow.
                </p>
            </section>
        </div>
    );
}

export default DownloadModal;