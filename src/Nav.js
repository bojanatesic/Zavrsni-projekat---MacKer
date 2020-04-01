import React from 'react'
import {  Link } from 'react-router-dom';
import './Nav.css'

const Nav = ()=>{

    return (
        <header id="navigation-bar">
        <Link to="/about">About</Link>
        <Link to="/cats">Cats</Link>
        <Link to="/dogs">Dogs</Link>
        <Link to="/logout">Log out</Link>
      </header>

    )
}

export default Nav