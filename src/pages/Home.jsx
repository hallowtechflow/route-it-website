import PricingSection from "../components/PricingSection";

function Home() {
    return (
        <main className="home-page">
            <section className="home-hero">
                <div className="container">
                    <h1>Route-it!</h1>

                    <p>
                        Smarter routes. Less driving. More work
                        completed.
                    </p>
                </div>
            </section>

            <PricingSection />
        </main>
    );
}

export default Home;