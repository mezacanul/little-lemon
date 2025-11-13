import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import Layout from "./components/Layout";

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
        <div>
            <h2>404 - Page Not Found</h2>
            <Link to="/">Go to Home</Link>
        </div>
    );
}
