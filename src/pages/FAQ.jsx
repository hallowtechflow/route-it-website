import "./FAQ.css";
import { useState } from "react";

const faqs = [
    {
        question: "What is Route-it!?",
        answer:
            "Route-it! is a route optimization and client management app designed for contractors, technicians, delivery drivers, and other mobile service professionals."
    },
    {
        question: "Which navigation apps are supported?",
        answer:
            "Route-it! works seamlessly with Google Maps, Apple Maps, and Waze, so you can navigate using the app you already know and trust."
    },
    {
        question: "Can I save routes for later?",
        answer:
            "Yes. Save frequently used routes and reload them anytime with a single tap."
    },
    {
        question: "Can I import my existing clients?",
        answer:
            "Absolutely. Route-it! supports CSV imports, making it easy to bring your existing customer database into the app."
    },
    {
        question: "What is Break Mode?",
        answer:
            "Break Mode lets you pause your active route to grab lunch, fuel up, or run errands. When you're ready, simply resume your route exactly where you left off."
    },
    {
        question: "Can I manage leads as well as clients?",
        answer:
            "Yes. Route-it! includes a built-in Lead Tracker so you can organize prospects and convert them into clients when they're ready."
    },
    {
        question: "Can I use Route-it! for my business?",
        answer:
            "Route-it! is built for service businesses of all sizes, including lawn care, pest control, pressure washing, HVAC, pool service, window cleaning, and many other mobile businesses."
    },
    {
        question: "Is there a free version?",
        answer:
            "Yes. You can download Route-it! for free and start organizing your routes. Route-it! Pro unlocks additional features, higher limits, and premium tools."
    },
    {
        question: "Where can I download Route-it!?",
        answer:
            "Route-it! is available on the Apple App Store, and additional download options are available directly from our website."
    }
];

export default function FAQ() {
    const [open, setOpen] = useState(0);

    return (
        <main className="faq-page">
            <section className="faq-section">

                <div className="container faq-container">

                    <p className="faq-eyebrow">
                        FREQUENTLY ASKED QUESTIONS
                    </p>

                    <h1>
                        Everything you need to know.
                    </h1>

                    <p className="faq-intro">
                        Have a question? Here are some of the most common questions
                        about Route-it!.
                    </p>

                    {faqs.map((faq, index) => (

                        <div
                            className={`faq-item ${open === index ? "active" : ""}`}
                            key={faq.question}
                        >

                            <button
                                className="faq-question"
                                onClick={() =>
                                    setOpen(open === index ? -1 : index)
                                }
                            >

                                <span>{faq.question}</span>

                                <span className="faq-icon">
                                    {open === index ? "−" : "+"}
                                </span>

                            </button>

                            <div
                                className={`faq-answer ${open === index ? "show" : ""
                                    }`}
                            >
                                <p>{faq.answer}</p>
                            </div>

                        </div>

                    ))}

                </div>

            </section>
        </main>
    );
}