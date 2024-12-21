import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us page test cases", () => {
  test("Should load the contact Component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    //   Assertion
    expect(heading).toBeInTheDocument();
  });

  it("Should load button component", () => {
    render(<Contact />);

    const button = screen.getByRole("button");

    //   Assertion
    expect(button).toBeInTheDocument();
  });

  test("Should load Submit text", () => {
    render(<Contact />);

    const button = screen.getByText("Submit");

    //   Assertion
    expect(button).toBeInTheDocument();
  });

  it("Should load 2 input components", () => {
    render(<Contact />);
    // querying
    const inputBoxes = screen.getAllByRole("textbox");
    //use All when u hve multiple components like here there 2 input boxes in this comp so getAllByRole
    console.log(inputBoxes);
    //   Assertion
    expect(inputBoxes.length).toBe(2);
  });
});
