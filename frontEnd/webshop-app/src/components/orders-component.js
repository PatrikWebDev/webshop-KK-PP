import React, {Component} from 'react'
import Footer from './footer'
import classes from './product-box.module.css'
import LineProduct from './line-product'
import { connect } from 'react-redux';
import {add, empty} from './../Store/action';
import {
    Link,
  } from "react-router-dom";

class Orders extends Component{
    render(){
        let priceCalculator = 0
        this.props.cartItems.forEach(cartItem=>{
            if(cartItem.pieces===0){
                priceCalculator = priceCalculator + 0
            }else{
                priceCalculator = priceCalculator +  (cartItem.price * (cartItem.pieces?cartItem.pieces:1))
            }
        })
        if(this.props.cartItems.length > 0){
            return(
                <div>
                    <h1>Your Cart</h1>
                    <div className={classes.unknown}>
                    <LineProduct className={classes.item}/>
                    </div>
                    <span >Total price: {priceCalculator}</span><br></br>
                    <button className="btn btn-success" style={{marginRight: "10px"}}  onClick={ () => {this.props.empty()}} >Empty Cart</button>
                    <Link to="/checkout"><button className="btn btn-success">Checkout</button></Link>
                    <Footer />
                </div>
            )
        }else{
            return(
                <div>
                    <h1>Your Cart</h1>
                    <p>Your cart is empty.</p>
                    <Footer />
                </div>
            )
        }
        
    }
}

function mapStateToProps(state){
    return {...state}
}
function mapDispatchToProps(dispatch) {
    return {
        add: (product) => dispatch(add(product)),
        empty: () => dispatch(empty())
      }
}

export default connect(mapStateToProps,mapDispatchToProps)(Orders)