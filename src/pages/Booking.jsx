import { useState } from "react";
import { fetchAPI } from "../utils/API";

export default function Booking() {
    const [formData, setFormData] = useState({
        date: "2025-11-15",
        time: "17:00",
        guests: 1,
        occasion: "Birthday",
    });

    return (
        <div>
            <h1>Booking</h1>
            <BookingForm
                formData={formData}
                setFormData={setFormData}
            />
        </div>
    );
}

function BookingForm({ formData, setFormData }) {
    return (
        <form
            style={{
                display: "grid",
                maxWidth: "200px",
                gap: "20px",
            }}
        >
            <label>Choose date</label>
            <input
                type="date"
                value={formData.date}
                onChange={(e) => {
                    setFormData({
                        ...formData,
                        date: e.target.value,
                    });
                    console.log(
                        fetchAPI(new Date(e.target.value))
                    );
                }}
            />
            <label>Choose time</label>
            <select
                value={formData.time}
                onChange={(e) =>
                    setFormData({
                        ...formData,
                        time: e.target.value,
                    })
                }
            >
                <option value="17:00">17:00</option>
                <option value="18:00">18:00</option>
                <option value="19:00">19:00</option>
                <option value="20:00">20:00</option>
                <option value="21:00">21:00</option>
                <option value="22:00">22:00</option>
            </select>
            <label>Number of guests</label>
            <input
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
            <label>Occasion</label>
            <select
                value={formData.occasion}
                onChange={(e) =>
                    setFormData({
                        ...formData,
                        occasion: e.target.value,
                    })
                }
            >
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">
                    Anniversary
                </option>
            </select>
            <input
                type="submit"
                value="Make Your reservation"
            />
        </form>
    );
}
