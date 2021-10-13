import { render, screen, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router";
import App from "../App";

test("it renders App correctly", () => {
    act(() => {
        render(
            <MemoryRouter>
                <App />
            </MemoryRouter>,
        );
    });
    const heading = screen.getByText(/list of events/i);
    expect(heading).toBeInTheDocument();
});
