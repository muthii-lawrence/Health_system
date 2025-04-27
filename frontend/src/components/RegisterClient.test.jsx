import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import RegisterClient from "./RegisterClient";
import api from "../api";

// Mock the API module
jest.mock("../api", () => ({
  post: jest.fn(),
}));

describe("RegisterClient Component", () => {
  // Before each test, clear all mocks
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders the registration form", () => {
    render(<RegisterClient />);

    // Check if the title is present
    expect(screen.getByText("Register New Client")).toBeInTheDocument();

    // Check if all input fields are present
    expect(screen.getByPlaceholderText("Name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Age")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Gender")).toBeInTheDocument();

    // Check if submit button is present
    expect(
      screen.getByRole("button", { name: /register client/i })
    ).toBeInTheDocument();
  });

  test("allows entering client information", () => {
    render(<RegisterClient />);

    // Get input fields
    const nameInput = screen.getByPlaceholderText("Name");
    const ageInput = screen.getByPlaceholderText("Age");
    const genderInput = screen.getByPlaceholderText("Gender");

    // Simulate user input
    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    fireEvent.change(ageInput, { target: { value: "30" } });
    fireEvent.change(genderInput, { target: { value: "Male" } });

    // Check if inputs have correct values
    expect(nameInput.value).toBe("John Doe");
    expect(ageInput.value).toBe("30");
    expect(genderInput.value).toBe("Male");
  });

  test("submits form with client data", async () => {
    // Mock successful API response
    api.post.mockResolvedValueOnce({ data: { success: true } });

    render(<RegisterClient />);

    // Fill out the form
    fireEvent.change(screen.getByPlaceholderText("Name"), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByPlaceholderText("Age"), {
      target: { value: "30" },
    });
    fireEvent.change(screen.getByPlaceholderText("Gender"), {
      target: { value: "Male" },
    });

    // Submit the form
    fireEvent.click(screen.getByRole("button", { name: /register client/i }));

    // Verify API was called with correct data
    await waitFor(() => {
      expect(api.post).toHaveBeenCalledWith("/clients", {
        name: "John Doe",
        age: "30",
        gender: "Male",
      });
    });
  });
});
