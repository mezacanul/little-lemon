import { useEffect, useState } from "react";
import { fetchAPI } from "../utils/API";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Booking() {
    const [availableTimes, setAvailableTimes] = useState(
        []
    );
    const [formData, setFormData] = useState({
        date: "2025-11-15",
        time: "17:00",
        guests: 1,
        occasion: "Birthday",
        name: "",
        email: "",
        terms: false,
    });

    useEffect(() => {
        setAvailableTimes(
            fetchAPI(new Date(formData.date))
        );
    }, []);

    useEffect(() => {
        setAvailableTimes(
            fetchAPI(new Date(formData.date))
        );
    }, [formData.date]);

    return (
        <div className="body-container py-5">
            <div className="pb-5">
                <h1>Booking</h1>
                <BookingForm
                    formData={formData}
                    setFormData={setFormData}
                    availableTimes={availableTimes}
                />
            </div>
        </div>
    );
}

export function BookingForm({
    formData,
    setFormData,
    availableTimes,
}) {
    const [validationStatus, setValidationStatus] =
        useState({
            name: true,
            email: true,
            terms: true,
        });
    const navigate = useNavigate();

    const validateForm = () => {
        let isValid = true;
        const validation = {
            name: formData.name.length > 0,
            email:
                formData.email.length > 0 &&
                formData.email.includes("@") &&
                formData.email.includes("."),
            terms: formData.terms,
        };
        for (const key in validation) {
            if (!validation[key]) {
                isValid = false;
                break;
            }
        }
        return {
            status: isValid,
            validation,
        };
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { status, validation } = validateForm();
        console.log(status, validation);
        setValidationStatus(validation);
        if (!status) {
            return;
        }
        navigate(`/booking/confirmation`, {
            state: {
                formData: formData,
            },
        });
    };

    return (
        <form className="w-100 d-flex flex-column gap-4 justify-content-center align-items-center">
            <div
                style={{
                    display: "grid",
                    // maxWidth: "200px",
                    width: "100%",
                    gap: "2rem",
                    gridTemplateColumns: "1fr 1fr",
                }}
                className="py-5"
            >
                <div className="d-flex flex-column gap-2">
                    <label htmlFor="date">
                        Choose date
                    </label>
                    <Form.Control
                        id="date"
                        className="shadow-sm"
                        type="date"
                        value={formData.date}
                        onChange={(e) => {
                            setFormData({
                                ...formData,
                                date: e.target.value,
                            });
                            // console.log(
                            //     fetchAPI(new Date(e.target.value))
                            // );
                        }}
                    />
                </div>

                <div className="d-flex flex-column gap-2">
                    <label htmlFor="time">
                        Choose time
                    </label>
                    <Form.Select
                        id="time"
                        className="shadow-sm"
                        value={formData.time}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                time: e.target.value,
                            })
                        }
                    >
                        {availableTimes.map((time) => (
                            <option
                                key={time}
                                value={time}
                            >
                                {time}
                            </option>
                        ))}
                    </Form.Select>
                </div>

                <div className="d-flex flex-column gap-2">
                    <label htmlFor="guests">
                        Number of guests
                    </label>
                    <Form.Control
                        id="guests"
                        className="shadow-sm"
                        type="number"
                        placeholder="1"
                        min="1"
                        max="10"
                        value={formData.guests}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                guests: e.target.value,
                            })
                        }
                    />
                </div>

                <div className="d-flex flex-column gap-2">
                    <label htmlFor="occasion">
                        Occasion
                    </label>
                    <Form.Select
                        id="occasion"
                        className="shadow-sm"
                        value={formData.occasion}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                occasion: e.target.value,
                            })
                        }
                    >
                        <option value="Birthday">
                            Birthday
                        </option>
                        <option value="Anniversary">
                            Anniversary
                        </option>
                    </Form.Select>
                </div>
                <div className="d-flex flex-column gap-2">
                    <label htmlFor="name">{"Name"}</label>
                    <Form.Control
                        id="name"
                        className="shadow-sm"
                        type="text"
                        placeholder="Name"
                        value={formData.name}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                name: e.target.value,
                            })
                        }
                        isInvalid={!validationStatus.name}
                    />
                    <Form.Control.Feedback type="invalid">
                        Please enter a valid name.
                    </Form.Control.Feedback>
                </div>
                <div className="d-flex flex-column gap-2">
                    <label htmlFor="email">{"Email"}</label>
                    <Form.Control
                        id="email"
                        className="shadow-sm"
                        type="email"
                        placeholder="Email"
                        value={formData.email}
                        isInvalid={!validationStatus.email}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                email: e.target.value,
                            })
                        }
                    />
                    <Form.Control.Feedback type="invalid">
                        Please enter a valid email.
                    </Form.Control.Feedback>
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <Form.Check
                    type="checkbox"
                    id="terms"
                    label="I agree to the terms and conditions"
                    onChange={(e) => {
                        setFormData({
                            ...formData,
                            terms: e.target.checked,
                        });
                        setValidationStatus({
                            ...validationStatus,
                            terms: e.target.checked,
                        });
                    }}
                    checked={formData.terms}
                    isInvalid={!validationStatus.terms}
                />
            </div>
            <Button
                id="submit"
                type="submit"
                onClick={handleSubmit}
                // value="Make Your reservation"
                style={{ width: "20rem" }}
                className="bg-yellow text-black border-0"
            >
                {"Make Your Reservation"}
            </Button>
        </form>
    );
}
