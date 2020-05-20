import React, { Component } from 'react'
import classes from './header.module.css'
import Logo from './logo'
import ShoppingCart from './shopping-cart'
import {
  Link,
} from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="collapse navbar-collapse" id="navbarColor02">
          <Logo />
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/orders">Orders</Link>
            </li>
          </ul>
          <p className={classes.header} >MY WEBSHOP</p>
          <Link className="nav-link" to="/orders"><ShoppingCart /></Link>
        </div>
      </nav>
    )
  }
}