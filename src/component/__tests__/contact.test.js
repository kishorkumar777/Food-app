import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("testing the contact page", () => {
  test("should load contact us companent", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  test("should load button inside the contact component", () => {
    render(<Contact />);

    const button = screen.getByText("Submit");

    expect(button).toBeInTheDocument();
  });

  test("should load input name inside the contact component", () => {
    render(<Contact />);
    const name = screen.getByPlaceholderText("name");
    expect(name).toBeInTheDocument();
  });

  test("should load all input inside the contact component", () => {
    render(<Contact />);
    const inputbox = screen.getAllByRole("textbox");
    expect(inputbox.length).toBe(2);
  });
});
