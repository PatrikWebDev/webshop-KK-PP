import React, {Component} from 'react'
import Footer from './footer'
import LineProduct from './line-product'
import { connect } from 'react-redux';
import {add} from './../Store/action';
import {
    Link,
  } from "react-router-dom";

class Orders extends Component{
    render(){
        let support = 0
        this.props.cartItems.forEach(cartItem=>{
            if(cartItem.pieces===0){
                support = support + 0
            }else{
                support = support +  (cartItem.price * (cartItem.pieces?cartItem.pieces:1))
            }
        })
        return(
            <div>
                <h1>Your Cart</h1>
                <LineProduct />
                <span>Total price: {support}</span><br></br>
                <button>Empty Cart</button>
                <Link to="/checkout"><button>Checkout</button></Link>
                <Footer />
            </div>
        )
    }
}

function mapStateToProps(state){
    return {...state}
}
function mapDispatchToProps(dispatch) {
    return {
        add: (product) => dispatch(add(product))
      }
}

export default connect(mapStateToProps,mapDispatchToProps)(Orders)