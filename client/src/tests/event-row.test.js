import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import UserRow from "../components/event-row";

test("it renders the user row component correctly", () => {
    const mockUser = {
        firstName: "John",
        lastName: "Johnson",
        email: "jjohnson@gmail.com",
        date: 23 / 10 / 21,
    };

    render(<UserRow user={mockUser} />);
    expect(screen.getByText(/gmail/i)).toBeInTheDocument();
});
