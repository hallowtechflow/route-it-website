import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RouteSeo from "../components/RouteSeo";

function SiteLayout() {
    return (
        <div className="site-shell">
            <RouteSeo />
            <Header />

            <main className="site-main">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
}

export default SiteLayout;
