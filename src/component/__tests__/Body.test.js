import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import Mock_data from "../mock/restromocklist.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(Mock_data);
    },
  });
});

test("Should render the body component with search", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsbeforesearch = screen.getAllByTestId("resCard");

  expect(cardsbeforesearch.length).toBe(8);

  const searchbtn = screen.getByRole("button", { name: "Search" });

  const searchinput = screen.getByPlaceholderText("Search");

  fireEvent.change(searchinput, { target: { value: "burger" } });

  fireEvent.click(searchbtn);

  const cards = screen.getAllByTestId("resCard");
  expect(cards.length).toBe(1);
});

test("Should render the body component with top rated resturent button", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const filterbtn = screen.getByRole("button", {name: "Top rated restaurant"});
  
  fireEvent.click(filterbtn);

  const cards = screen.getAllByTestId("resCard");

  expect(cards.length).toBe(3);

});
