import React, {Component} from 'react'
import {add, remove} from './../Store/action'
import { connect } from 'react-redux';

class LineProduct extends Component{
    render(){
        return(
                this.props.cartItems.map(cartItem=>{
                    let price
                    if(cartItem.pieces === 0){
                        price = 0
                    }else{
                        price = cartItem.price * (cartItem.pieces?cartItem.pieces:1)
                    }
                    return(
                        <div className="card text-white bg-success mb-3" style={{maxWidth: "20rem", display:"grid", alignItems: "center"}}>
                        <p className="card-header" >{cartItem.name} ({cartItem.sku})</p>
                        <div className="card-body">
                        <img src={cartItem.image} alt={cartItem.name} style={{width: "75px", height: "75px", margin:"10px"}}/><br></br>
                        <button className="btn btn-primary" onClick={ () => {this.props.remove(cartItem)}}> - </button>
                        <span style={{paddingLeft: "5px", paddingRight: "5px"}}>{`${cartItem.pieces === undefined? 1 : cartItem.pieces}`}</span>
                        <button className="btn btn-primary" onClick={ () => {this.props.add(cartItem)}} > + </button>
                        <p>{price}</p>
                        </div>
                        </div>
                    )
                })
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