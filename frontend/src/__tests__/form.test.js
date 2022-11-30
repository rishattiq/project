import {render,screen} from "@testing-library/react"

import '@testing-library/jest-dom'
import Form from "../Pages/Form"


test('Form Page',()=>{
    render(<Form/>);
    const linkElement = screen.getByTestId("image");
    expect(linkElement).toBeInTheDocument();
  }) 

    
test('Form Page',()=>{
    render(<Form/>);
    const linkElement = screen.getByTestId("placename");
    expect(linkElement).toBeInTheDocument();
  })

test('Form Page',()=>{
    render(<Form/>);
    const linkElement = screen.getByTestId("description");
    expect(linkElement).toBeInTheDocument();
  })


test('Form Page',()=>{
    render(<Form/>);
    const linkElement = screen.getByTestId("noofrooms");
    expect(linkElement).toBeInTheDocument();
  })

    
test('Form Page',()=>{
    render(<Form/>);
    const linkElement = screen.getByTestId("price");
    expect(linkElement).toBeInTheDocument();
  })