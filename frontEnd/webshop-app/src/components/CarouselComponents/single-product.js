import React, {Component} from 'react'
import {add} from '../../Store/action'
import { connect } from 'react-redux';

class SingleProduct extends Component{
    constructor(props){
        super(props);
        this.state={
            pieces: 0
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState((state) => {
            return {pieces: state.pieces + 1}
          });
      }

    render(){

        if(this.state.pieces === 0 && this.props.product.qty > 0){
            return(
                <div>
                <img src={this.props.product.image} alt={this.props.product.name}/>
        <p>{this.props.product.name}</p>
        {/* <p>{this.props.product.sku}</p> */}
        <p>{this.props.product.price}</p>
                <button  onClick={() => {this.props.add(this.props.product); this.handleClick()}}>Add to Cart </button>
                </div>
            )
        }else if(this.state.pieces > 0 && this.state.pieces<this.props.product.qty){
            return(
                <div>
                    <img src={this.props.product.image} alt={this.props.product.name}/>
        <p>{this.props.product.name}</p>
        {/* <p>{this.props.product.sku}</p> */}
        <p>{this.props.product.price}</p>
                    <button>Remove One</button>
                    <p>{this.state.pieces}</p>
                    <button>Add Another One</button>
                </div>
            )
        }else{
            return(
                <div>
                    <img src={this.props.product.img} alt={this.props.product.name}/>
        <p>{this.props.product.name}</p>
        {/* <p>{this.props.product.sku}</p> */}
        <p>{this.props.product.price}</p>
                    Out of Stock
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

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct)