import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("Check if component component is getting loaded or not", () => {
  render(<Contact />);

  const heading = screen.getByRole("heading");

  //   Assertion
  expect(heading).toBeInTheDocument();
});

test("Check if there is button component", () => {
  render(<Contact />);

  const button = screen.getByRole("button");

  //   Assertion
  expect(button).toBeInTheDocument();
});

test("Check if there is submit text", () => {
  render(<Contact />);

  const button = screen.getByText("Submit");

  //   Assertion
  expect(button).toBeInTheDocument();
});

test("load 2 input components", () => {
  render(<Contact />);
  // querying
  const inputBoxes = screen.getAllByRole("textbox");
  //use All when u hve multiple components like here there 2 input boxes in this comp so getAllByRole
  console.log(inputBoxes);
  //   Assertion
  expect(inputBoxes.length).toBe(2);
});
