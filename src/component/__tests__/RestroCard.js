import { render, screen } from "@testing-library/react"
import RestroCard, { withPromotedLabel } from "../RestroCard"
import Mock from '../mock/restromockdata.json'
import '@testing-library/jest-dom'

test("should render restrocard component with props data", ()=>{
    render(<RestroCard restrodata={Mock}/>)

    const name = screen.getByText("Pizza Hut");

    expect(name).toBeInTheDocument();
})

// test("should render restrocard component with promoted label", ()=>{
//     render(withPromotedLabel())
// })