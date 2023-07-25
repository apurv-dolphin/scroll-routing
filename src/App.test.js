import { render, screen } from "@testing-library/react";
import App from "./App";
import React from "react";

test("renders app component", () => {
  render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );

  // Your testing assertions using screen queries and expect
  const headingElement = screen.getByRole("heading", { name: /hello/i });
  expect(headingElement).toBeInTheDocument();
});
