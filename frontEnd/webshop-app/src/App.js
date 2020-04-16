import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from '../src/components/home-component'
import Products from '../src/components/products-component'
import Orders from '../src/components/orders-component'
import ProductDetail from '../src/components/product-detail'


function App() {
  return (
    <Router>
    <div className="row">
      <h3 className="col-3">WebShop</h3>
      <div className="col-3">
      <nav>
        <ul>
          <li className="px-5">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link className="px-5" to="/products">Products</Link>
          </li>
          <li>
            <Link className="px-5" to="/orders">Orders</Link>
          </li>
        </ul>
      </nav>
      </div>
      </div>
      <div className="row">
        <div className="col-9">
      <Switch>
      <Route path="/products/:id" component={ProductDetail} >
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/orders">
          <Orders />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
        </div>
      </div>
  </Router>
  );
}

export default App;
