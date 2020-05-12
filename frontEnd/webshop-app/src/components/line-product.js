import React, {Component} from 'react'
import classes from './lineProduct.module.css'
import {add, remove} from './../Store/action'
import { connect } from 'react-redux';

class LineProduct extends Component{
    render(){
        return(
            <div>
                {this.props.cartItems.map(cartItem=>{
                    let price
                    if(cartItem.pieces === 0){
                        price = 0
                    }else{
                        price = cartItem.price * (cartItem.pieces?cartItem.pieces:1)
                    }
                    return(
                        <div>
                        <img src={cartItem.image} alt={cartItem.name} />
                        <p>{cartItem.name} ({cartItem.sku})</p>
                        <button className={classes.ovalButton} onClick={ () => {this.props.remove(cartItem)}}> - </button>
                        <span>{`${cartItem.pieces === undefined? 1 : cartItem.pieces}`}</span>
                        <button className={classes.ovalButton} onClick={ () => {this.props.add(cartItem)}} > + </button>
                        <p>{price}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}


 function mapStateToProps(state){
     return {...state}
 }
function mapDispatchToProps(dispatch) {
    return {
        add: (product) => dispatch(add(product)),
        remove: (product) => dispatch(remove(product))
      }
}

export default connect(mapStateToProps,mapDispatchToProps)(LineProduct)