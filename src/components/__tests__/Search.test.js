import Body from "../Body";
import { render, screen, fireEvent } from "@testing-library/react";
import MOCK_DATA from "../mocks/resCardMockdata.json";
import { BrowserRouter } from "react-router";
import "@testing-library/jest-dom";
//EXAMPLE FOR INTEGRATION TESTING

// here we are writing a fetch function exactly how our browser returns value for fetch fn and how fetch works
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should render body component wihth search", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const searchBtn = screen.getByRole("button", { name: "Search" });

  const searchInput = screen.getByTestId("searchInput");
  fireEvent.change(searchInput, { target: { value: "pizza" } });
  fireEvent.click(searchBtn);

  //   assert

  expect(searchBtn).toBeInTheDocument();
});
