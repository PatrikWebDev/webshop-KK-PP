import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Home from '../src/components/home-component'
import Products from '../src/components/products-component'
import Orders from '../src/components/orders-component'
import ProductDetail from '../src/components/product-detail'
import Header from './components/header';
import Checkout from './components/checkout'


function App() {
  return (
    <Router>
      <Header />
      <Switch>
      <Route path="/products/:id"  render={(props) => <ProductDetail {...props}/>} >
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/orders">
          <Orders />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
  </Router>
  );
}

export default App;
