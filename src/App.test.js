import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders value for A", () => {
  render(<App />);
  const input = screen.getByLabelText(/Type your letter/);
  fireEvent.change(input, { target: { value: "A" } });

  fireEvent.click(screen.getByText(/Click Here/));
  const p = screen.getByText("K");
  expect(p.textContent).toBe("K");
});

test("renders value for a", () => {
  render(<App />);
  const input = screen.getByLabelText(/Type your letter/);
  fireEvent.change(input, { target: { value: "a" } });

  fireEvent.click(screen.getByText(/Click Here/));
  const p = screen.getByText("k");
  expect(p.textContent).toBe("k");
});

test("renders value for M", () => {
  render(<App />);
  const input = screen.getByLabelText(/Type your letter/);
  fireEvent.change(input, { target: { value: "M" } });

  fireEvent.click(screen.getByText(/Click Here/));
  const p = screen.getByText("W");
  expect(p.textContent).toBe("W");
});
