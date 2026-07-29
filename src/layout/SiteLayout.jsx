import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function SiteLayout() {
    return (
        <div className="site-shell">
            <Header />

            <main className="site-main">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
}

export default SiteLayout;