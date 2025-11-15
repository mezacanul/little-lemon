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

function BookingForm({
    formData,
    setFormData,
    availableTimes,
}) {
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
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
                    <label>Choose date</label>
                    <Form.Control
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
                    <label>Choose time</label>
                    <Form.Select
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
                    <label>Number of guests</label>
                    <Form.Control
                        className="shadow-sm"
                        type="number"
                        placeholder="1"
                        min="1"
                        max="10"
                        id="guests"
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
                    <label>Occasion</label>
                    <Form.Select
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
            </div>
            <div className="d-flex justify-content-center">
                <Form.Check
                    type="checkbox"
                    label="I agree to the terms and conditions"
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            terms: e.target.checked,
                        })
                    }
                />
            </div>
            <Button
                type="submit"
                onClick={handleSubmit}
                // value="Make Your reservation"
                style={{ width: "20rem" }}
                className="bg-yellow text-black border-0"
            >
                {"Make Your reservation"}
            </Button>
        </form>
    );
}
