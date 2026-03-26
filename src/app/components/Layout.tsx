import {Outlet} from "react-router-dom";
import {Header} from "./Header";
import {Footer} from "./Footer";
import ScrollToTop from "./ScrollToTop";


export function Layout() {
    return (
        <div className="min-h-screen bg-black text-white">
            <ScrollToTop />

            <Header />

            <main>
                <Outlet />
            </main>

            <Footer />
        </div>
    );
}