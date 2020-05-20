import React, { Component } from 'react'
import {order} from './../Store/action';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';



class Checkout extends Component {
    render() {
        const productIDs = []
        this.props.cartItems.every(product=> productIDs.push(product.id))
        return (
            <div className="form-group" style={{ width: "50%", margin: "auto" }}>
                {this.props.cartItems.map(product => {
                    return (
                        product.pieces > 0 || product.pieces === undefined ?
                            (<div><span>{`${product.pieces === undefined ? 1 : product.pieces}`} x {product.name}</span></div>) :
                            false
                    )
                })}
                <form>
                    <fieldset>
                        <label className="control-label">Name</label>
                        <input id="name" className="form-control" type={Text}></input>
                        <label className="control-label" >Email</label>
                        <input className="form-control" type={Text}></input>
                        <label className="control-label" >Address</label>
                        <input id="address" className="form-control" type={Text}></input>
                        <Link to="/admin" className="checkout" onClick={ () => {
                            const name =document.getElementById("name").value
                            const address = document.getElementById("address").value
                            this.props.order(name,address, productIDs)}}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Order
                        </Link>
                    </fieldset>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { ...state }
}
function mapDispatchToProps(dispatch) {
    return {
        order: (name, address, productID)=>dispatch(order(name, address, productID))
      }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)