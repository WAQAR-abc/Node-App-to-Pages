// src/components/LandingPage.test.jsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, test, expect, vi } from "vitest";
import LandingPage from "./LandingPage";

describe("LandingPage Component", () => {
  test("renders title and paragraph", () => {
    render(<LandingPage />);

    expect(screen.getByText(/Welcome to Our Store/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Your one-stop shop for daily essentials/i)
    ).toBeInTheDocument();
  });

  test("renders Shop Now button", () => {
    render(<LandingPage />);
    const button = screen.getByRole("button", { name: /Shop Now/i });
    expect(button).toBeInTheDocument();
  });

  test("shows alert on button click", async () => {
    vi.spyOn(window, "alert").mockImplementation(() => {});
    render(<LandingPage />);

    const button = screen.getByRole("button", { name: /Shop Now/i });
    await userEvent.click(button);

    expect(window.alert).toHaveBeenCalledWith("Shop Now Clicked");
  });
});
