import React, {Component} from 'react'
import { connect } from 'react-redux';


class Checkout extends Component{
    render(){
        return(
            <div>
                {this.props.cartItems.map(product=>{
                    return(
                        product.pieces>0 || product.pieces === undefined ? 
                    (<span>{`${product.pieces===undefined? 1 : product.pieces}`} x {product.name}</span>):
                    false
                    )
                })}
                <form>
                    <label>Name</label>
                    <input type={Text}></input>
                    <label>Email</label>
                    <input type={Text}></input>
                    <label>Address</label>
                    <input type={Text}></input>
                    <button type="submit">Order</button>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {...state}
}

export default connect(mapStateToProps)(Checkout)