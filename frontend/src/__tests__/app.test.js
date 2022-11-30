import {render,screen} from "@testing-library/react"

import '@testing-library/jest-dom'
import App from "../App"

test('Form Page',()=>{
    render(<App/>);
    const linkElement = screen.getByTestId("Apptest");
    expect(linkElement).toBeInTheDocument();
  })
  