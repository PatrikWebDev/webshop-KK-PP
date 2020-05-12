import React, {Component} from 'react'
import classes from './header.module.css'
import Logo from './logo'
import ShoppingCart from './shopping-cart'
import {
    Link,
  } from "react-router-dom";

export default class Header extends Component{
    render(){
        return(
            <div>
                <Logo />
                <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/orders">Orders</Link>
          </li>
        </ul>
      </nav>
                <p className= {classes.header} >MY WEBSHOP</p>
                <Link to="/orders"><ShoppingCart /></Link>
            </div>
        )
    }
}