import { Link, Outlet } from "react-router-dom";
import logo from "../assets/logo.svg";
import { Image, NavDropdown } from "react-bootstrap";

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
            to: "#about",
        },
        {
            label: "Menu",
            to: "#specials",
        },
        {
            label: "Reservations",
            to: "/booking",
        },
        {
            label: "Order Online",
            to: "/booking",
        },
        {
            label: "Login",
            to: "/",
        },
    ];
    return (
        <div className="d-flex justify-content-center w-100 py-4 px-5">
            <nav className="d-flex justify-content-between body-container">
                <div>
                    <img
                        src={logo}
                        alt="Little Lemon"
                        style={{ width: "8rem" }}
                    />
                </div>

                <NavDropdown
                    title="Menu"
                    id="menu-dropdown"
                >
                    {navItems.map((item, index) => {
                        return (
                            <NavDropdown.Item
                                key={index}
                                href={item.to}
                            >
                                {item.label}
                            </NavDropdown.Item>
                        );
                    })}
                </NavDropdown>
                <div
                    className="gap-3"
                    id="menu-full"
                >
                    {navItems.map((item, index) => {
                        if (item.to.startsWith("#")) {
                            return (
                                <a
                                    key={index}
                                    href={item.to}
                                >
                                    {item.label}
                                </a>
                            );
                        } else if (
                            item.to.startsWith("/")
                        ) {
                            return (
                                <Link
                                    key={index}
                                    to={item.to}
                                >
                                    {item.label}
                                </Link>
                            );
                        }
                        return null;
                    })}
                </div>
            </nav>
        </div>
    );
}

function Footer() {
    return (
        <footer className="w-100 py-3 px-5 text-center bg-green">
            <div className="body-container text-white py-5 d-flex justify-content-between">
                <div className="d-flex gap-4">
                    <Image
                        src={
                            "/src/assets/logo-vertical.png"
                        }
                        alt="Little Lemon"
                        style={{
                            width: "6rem",
                            // height: "13rem",
                            objectFit: "contain",
                        }}
                    />
                    <div className="d-flex flex-column align-items-start gap-2 ms-3">
                        <a href="#">Home</a>
                        <a href="#">About</a>
                        <a href="#">Menu</a>
                        <a href="#">Reservations</a>
                        <a href="#">Order Online</a>
                        <a href="#">Login</a>
                    </div>
                </div>
                {/* <div className="d-flex flex-column align-items-center gap-2"></div> */}
                <div className="d-flex flex-column align-items-end gap-2">
                    <a href="#">
                        458 W 3rd St, Chicago, IL 60614
                    </a>
                    <a href="#">info@littlelemon.com</a>
                    <a href="#">+1 234 567 8900</a>
                    <a href="#">Terms of Service</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Contact</a>
                </div>
            </div>
            <p className="text-yellow text-center">
                ® Copyright 2025 Little Lemon
            </p>
        </footer>
    );
}
