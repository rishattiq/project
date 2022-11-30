import {render,screen} from "@testing-library/react"

import '@testing-library/jest-dom'
import Header from "../Components/Header"
import { BrowserRouter } from "react-router-dom";



test('Header Page',()=>{
    render(<BrowserRouter><Header/></BrowserRouter>);
    const linkElement = screen.getByTestId("headerimage");
    expect(linkElement).toBeInTheDocument();
  })  

test('Header Page',()=>{
    render(<BrowserRouter><Header/></BrowserRouter>);
    
    const linkElement = screen.getByTestId("addplace");
    expect(linkElement).toBeInTheDocument();
  }) 

  
test('Header Page',()=>{
    render(<BrowserRouter><Header/></BrowserRouter>);
    const linkElement = screen.getByTestId("allplace");
    expect(linkElement).toBeInTheDocument();
  }) 