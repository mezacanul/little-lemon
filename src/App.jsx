import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import Layout from "./components/Layout";
import Confirmation from "./pages/Cofirmation";
// import Confirmation from "./pages/Confirmation";

export default function App() {
    return (
        <Routes>
            <Route
                path="/"
                element={<Layout />}
            >
                <Route
                    index
                    element={<Home />}
                />
                <Route
                    path="/booking"
                    element={<Booking />}
                ></Route>
                <Route
                    path="/booking/confirmation"
                    element={<Confirmation />}
                />
            </Route>
            <Route
                path="*"
                element={<NotFound />}
            />
        </Routes>
    );
}

function NotFound() {
    return (
        <div
            className="body-container py-5 d-flex justify-content-center align-items-center flex-column"
            style={{ height: "100vh" }}
        >
            <h2>404 - Page Not Found</h2>
            <Link to="/">Go to Home</Link>
        </div>
    );
}
