import { fireEvent, render, screen } from "@testing-library/react";
import RestroMenu from "../RestroMenu";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";

test("Should load Resturant Menu component", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
        <RestroMenu />
      </Provider>
    </BrowserRouter>
  );

  const accordianHeader = screen.getByText("Recommended (20)");

  expect(accordianHeader).toBeInTheDocument();

  const addbtn = screen.getAllByRole("button", { name: "Add" });

  fireEvent.click(addbtn[0]);

  const cartmessage = screen.getByText("Cart (1)");

  expect(cartmessage).toBeInTheDocument();
  fireEvent.click(addbtn[1]);
  expect(screen.getByText("Cart (2)")).toBeInTheDocument();
});
