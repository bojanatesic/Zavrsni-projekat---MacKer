import React from 'react'
import { Link } from 'react-router-dom';
import './Nav.css'
import { isLogin } from './services/Auth_service';
import logo from './assets/logo.jpg'

const Nav = () => {
  if (isLogin()) {
    return (
      <div className="navbar bg-primary">
        <ul>
        <img src={logo} alt='' />
          <p><Link to="/about">About</Link></p>
          <p><Link to="/cats">Cats</Link></p>
          <p><Link to="/dogs">Dogs</Link></p>
          <p><Link to="/profile">Profile</Link></p>
          <p><Link to="/logout">Log out</Link></p>
        </ul>
      </div>
    )
  } else {
    return (
      <div className="navbar bg-primary">
        <ul>
          <img src={logo} alt='' />
          <p><Link to="/login">Log In</Link></p>
          <p> <Link to="/register">Register</Link></p>
        </ul>
      </div>
    )
  }
}

export default Nav

