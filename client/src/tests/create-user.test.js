import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router";

import CreateEvent from "../pages/create-event";

it("should render the basic form fields", () => {
    render(
        <MemoryRouter>
            <CreateEvent />
        </MemoryRouter>,
    );
    expect(screen.getByText(/first name/i)).toBeInTheDocument();
});

it("should render error messages if form errors exist", () => {});
