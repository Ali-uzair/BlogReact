import Items from "../components/Items";
import { render, screen } from "@testing-library/react";

describe("Items Component", () => {
  test("link div will be in componenet", () => {
    render(<Items id={1} title={"hello"} description={"discriptin"} />);
    const link = screen.getByTestId("link");
    expect(link).toBeInTheDocument();
  });
  test("data div will be in componenet", () => {
    render(<Items id={1} title={"hello"} description={"discriptin"} />);
    const list = screen.getByTestId("list");
    expect(list).toBeInTheDocument();
  });
  test("props should match snapshot", () => {
    render(<Items id={1} title={"hello"} description={"discriptin"} />);
    const list = screen.getByTestId("list").textContent;
    // expect(list).toBeInTheDocument();
    expect(list).toMatchInlineSnapshot(`"hellodiscriptin"`)
  });
});
