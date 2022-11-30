import React from 'react'
import './Header.css';
import {
    Link
  } from "react-router-dom";
export default function Header() {
  
  return (
    <div data-testid="comps" className='header'>
    <header className="main-header">
        <div>
         <img data-testid="headerimage" className='logo' src="./images/logo.jpg" alt=""/>
        </div>

        <nav className="main-nav">
            <ul  className="main-nav__items">
                <li data-testid="addplace" className="main-nav__item main-nav__item--cta">
                <Link to="/form">Add Place</Link>
                </li>
                <li data-testid="allplace" className="main-nav__item main-nav__item--cta">
                <a  className ="Allplace" href='/HostDashboard'> 
                 All Place
                </a> 
                </li> 

                <li className="main-nav__item ">
                <Link to="/">Log out</Link>
                </li>
            </ul>
        </nav>
    </header>
    </div>
  )
}
