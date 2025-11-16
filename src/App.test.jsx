import { render, screen } from "@testing-library/react";
import { BookingForm } from "./pages/Booking";
import { MemoryRouter } from "react-router-dom";
import { expect, test } from "vitest";
import Home from "./pages/Home";

test("Renders the BookingForm button", () => {
    const mockFormData = {
        date: "2025-11-15",
        time: "17:00",
        guests: 1,
        occasion: "Birthday",
        name: "",
        email: "",
        terms: false,
    };
    render(
        <MemoryRouter>
            <BookingForm
                formData={mockFormData}
                setFormData={() => {}}
                availableTimes={["17:00", "18:00"]}
            />
        </MemoryRouter>
    );
    const buttonElement = screen.getByText(
        "Make Your Reservation"
    );
    expect(buttonElement).toBeDefined();
});

test("Renders Reserve a table button at Home page", () => {
    render(
        <MemoryRouter>
            <Home />
        </MemoryRouter>
    );
    const buttonElement = screen.getByText(
        "Reserve a table"
    );
    expect(buttonElement).toBeDefined();
});
