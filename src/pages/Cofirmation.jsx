import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Confirmation() {
    const location = useLocation();
    const { formData } = location.state;
    const [bookingData, setBookingData] = useState(null);
    useEffect(() => {
        setBookingData(formData);
    }, [formData]);

    return (
        <div className="body-container py-5">
            <h1 className=" display-4">
                Booking Confirmed
            </h1>
            <p className="text-green fs-5">
                Thank you for booking a table at Little
                Lemon!
            </p>
            <div className="my-5 py-3">
                <p>
                    We will send you an email with the
                    details of your booking.
                </p>
                <p>
                    If you have any questions, please
                    contact us at{" "}
                    <a
                        className="text-decoration-underline text-green"
                        href="mailto:info@littlelemon.com"
                    >
                        info@littlelemon.com
                    </a>
                    .
                </p>
                <p className="text-decoration-underline">
                    Here are the details of your booking:
                </p>
                {/* <ul> */}
                <li className="d-flex w-25 justify-content-between">
                    <span>Date:</span>{" "}
                    <b>{formData.date ?? "--"}</b>
                </li>
                <li className="d-flex w-25 justify-content-between">
                    <span>Time:</span>{" "}
                    <b>{formData.time ?? "-"}</b>
                </li>
                <li className="d-flex w-25 justify-content-between">
                    <span>Guests:</span>{" "}
                    <b>{formData.guests ?? "-"}</b>
                </li>
                <li className="d-flex w-25 justify-content-between">
                    <span>Occasion:</span>{" "}
                    <b>{formData.occasion ?? "-"}</b>
                </li>
                {/* </ul> */}
            </div>
            <Link
                to="/"
                className="text-primary"
            >
                Back to Home
            </Link>
        </div>
    );
}
