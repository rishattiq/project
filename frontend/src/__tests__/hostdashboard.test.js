import {render,screen} from "@testing-library/react"

import '@testing-library/jest-dom'
import HostDashboard from "../Pages/HostDashboard"
import { BrowserRouter } from "react-router-dom";

test('HostDashboard',()=>{
    render(<BrowserRouter><HostDashboard/></BrowserRouter>);
    const linkElement = screen.getByTestId("headerimage");
    expect(linkElement).toBeInTheDocument();
  })
  
  test('HostDashboard',()=>{
    render(<BrowserRouter><HostDashboard/></BrowserRouter>);
    const linkElement = screen.getByTestId("placenames");
    expect(linkElement).toBeInTheDocument();
  })


  
  

  

 
  

  
