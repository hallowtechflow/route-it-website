import { useState } from "react";
import "./DeleteAccount.css";

const SUPPORT_EMAIL = "support@hallowtech.us";

function DeleteAccount() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        reason: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((current) => ({
            ...current,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const subject = "Route-it! Account Deletion Request";

        const body = [
            "Route-it! Account Deletion Request",
            "",
            `Name: ${formData.name}`,
            `Account Email: ${formData.email}`,
            "",
            "Reason:",
            formData.reason || "No reason provided.",
            "",
            "I am requesting that my Route-it! account and associated account data be deleted.",
        ].join("\n");

        const mailtoUrl =
            `mailto:${SUPPORT_EMAIL}` +
            `?subject=${encodeURIComponent(subject)}` +
            `&body=${encodeURIComponent(body)}`;

        window.location.href = mailtoUrl;
    };

    return (
        <main className="delete-account-page">
            <section className="delete-account-hero">
                <div className="container delete-account-container">
                    <div className="delete-account-card">

                        <p className="delete-account-eyebrow">
                            Account Support
                        </p>

                        <h1>Request Account Deletion</h1>

                        <p className="delete-account-subtext">
                            Submit the form below to request deletion of your
                            Route-it! account. Your email application will open
                            with the request information already completed.
                        </p>

                        <div className="delete-account-notice">
                            <strong>Before submitting</strong>

                            <p>
                                Enter the same email address associated with your
                                Route-it! account so our team can locate and
                                verify it.
                            </p>
                        </div>

                        <form
                            className="delete-account-form"
                            onSubmit={handleSubmit}
                        >
                            <div className="delete-account-field">
                                <label htmlFor="delete-name">
                                    Name
                                </label>

                                <input
                                    id="delete-name"
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your name"
                                    autoComplete="name"
                                    required
                                />
                            </div>

                            <div className="delete-account-field">
                                <label htmlFor="delete-email">
                                    Account email address
                                </label>

                                <input
                                    id="delete-email"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="you@example.com"
                                    autoComplete="email"
                                    required
                                />
                            </div>

                            <div className="delete-account-field">
                                <label htmlFor="delete-reason">
                                    Reason
                                    <span>Optional</span>
                                </label>

                                <textarea
                                    id="delete-reason"
                                    name="reason"
                                    value={formData.reason}
                                    onChange={handleChange}
                                    placeholder="Tell us why you are deleting your account..."
                                    rows="5"
                                />
                            </div>

                            <button
                                className="delete-account-submit"
                                type="submit"
                            >
                                Submit Deletion Request

                                <svg
                                    aria-hidden="true"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M5 12h14" />
                                    <path d="m13 6 6 6-6 6" />
                                </svg>
                            </button>
                        </form>

                        <p className="delete-account-support">
                            You may also contact{" "}
                            <a href={`mailto:${SUPPORT_EMAIL}`}>
                                {SUPPORT_EMAIL}
                            </a>
                            .
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default DeleteAccount;