import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "../components/NavBar";
describe("Button Component", () => {
  render(<NavBar />, { wrapper: BrowserRouter });
  const link = screen.getByTestId("link");

  test("link Rendering", () => {
    expect(link).toBeInTheDocument();
  });

  test("Button Text", () => {
    expect(link).toHaveTextContent("Posts");
  });
});
