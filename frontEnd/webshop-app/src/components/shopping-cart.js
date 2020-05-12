import React, {Component} from 'react'
import classes from './header.module.css'
import {add} from './../Store/action'
import { connect } from 'react-redux';

class ShoppingCart extends Component{
    render(){
        if(!(this.props.cartItems.length)){
            return(
                <p>Empty Cart</p>
                ) 
            }else{
                const total = this.props.cartItems.reduce((sum, item)=> sum + (item.price * (item.pieces?item.pieces:1)), 0)
                return(
                    <div className={classes.shoppingCart}>
                        {total}
                        <div className={classes.details}>
                            {this.props.cartItems.map(item=>{
                              return(
                                <div>
                                    {`${item.pieces ? item.pieces : 1 } x ${item.name}    ${item.price}`}
                                </div>
                            )   
                            }
                            )}
                        </div>
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
        add: (product) => dispatch(add(product))
      }
}

export default connect(mapStateToProps,mapDispatchToProps)(ShoppingCart)