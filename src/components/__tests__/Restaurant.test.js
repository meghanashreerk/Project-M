import RestaurantCard from "../RestaurantCard";
import { render, screen, fireEvent } from "@testing-library/react";
import MOCK_DATA from "../mocks/resCardMockdata.json";
import "@testing-library/jest-dom";

it("should render restaurant card component with data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const name = screen.getByText("Chinese Wok");
  expect(name).toBeInTheDocument();
});
