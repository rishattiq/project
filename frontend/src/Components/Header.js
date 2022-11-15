import React from 'react'
import './Header.css';
import {
    Link
  } from "react-router-dom";
export default function Header() {
  
  return (
    <div data-testid="comps" className='header'>
    <header class="main-header">
        <div>
         <img className='logo' src="./images/logo.jpg" alt=""/>
        </div>

        <nav class="main-nav">
            <ul class="main-nav__items">
                <li class="main-nav__item main-nav__item--cta">
                <Link to="/form">Add Place</Link>
                </li>
                <li class="main-nav__item ">
                <Link to="/form">Log out</Link>
                </li>
            </ul>
        </nav>
    </header>
    </div>
  )
}
