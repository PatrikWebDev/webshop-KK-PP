import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import "bootswatch/dist/darkly/bootstrap.min.css";
import './App.css';
import Home from '../src/components/home-component'
import Orders from '../src/components/orders-component'
import ProductDetail from '../src/components/product-detail'
import Header from './components/header';
import Checkout from './components/checkout'
import AdminOrder from './components/admin-order';


function App() {
  return (
    <Router>
      <Header />
      <Switch>
      <Route path="/products/:id">
        <ProductDetail />
      </Route>
      <Route path="/admin">
        <AdminOrder />
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
