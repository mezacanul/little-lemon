import { Link, Outlet } from "react-router-dom";
import logo from "../assets/logo.svg";

export default function Layout() {
    return (
        <div
            className="d-flex flex-column"
            style={{ height: "100vh", width: "100vw" }}
        >
            <Navbar />

            <div style={{ flex: 1 }}>
                <Outlet />
            </div>

            <Footer />
        </div>
    );
}

function Navbar() {
    const navItems = [
        {
            label: "Home",
            to: "/",
        },
        {
            label: "About",
            to: "/about",
        },
        {
            label: "Menu",
            to: "/menu",
        },
        {
            label: "Reservations",
            to: "/booking",
        },
        {
            label: "Order Online",
            to: "/order-online",
        },
        {
            label: "Login",
            to: "/login",
        },
    ];
    return (
        <div className="d-flex justify-content-center w-100 py-4 px-5">
            <nav
                style={{ width: "65vw" }}
                className="d-flex justify-content-between"
            >
                <div>
                    <img
                        src={logo}
                        alt="Little Lemon"
                        style={{ width: "8rem" }}
                    />
                </div>
                <div className="d-flex gap-3">
                    {navItems.map((item) => (
                        <Link
                            key={item.to}
                            to={item.to}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            </nav>
        </div>
    );
}

function Footer() {
    return (
        <footer className="w-100 py-3 px-5 text-center">
            <p>Copyright 2025 Little Lemon</p>
        </footer>
    );
}
