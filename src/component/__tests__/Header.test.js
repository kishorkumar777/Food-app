import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom'

it("should render header component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
});

test("should render a header component with a cart 0 ", () => {
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>
    )

    const cart = screen.getByText("Cart (0)");
    expect(cart).toBeInTheDocument();
})

test("should render a header component with cart items", ()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>
    )

    const cart = screen.getByText(/Cart/);
    expect(cart).toBeInTheDocument();
})

test("should change login button to logout button on click ", ()=>{
     render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>
     )

     const logginbtn = screen.getByText("Login")

     fireEvent.click(logginbtn)
     const logoutbtn = screen.getByText("Logout")
     expect(logoutbtn).toBeInTheDocument();
})