import React, {Component} from 'react'
import {add, remove} from '../../Store/action'
import { connect } from 'react-redux';
import {Link} from "react-router-dom";
import classes from "./singleProduct.module.css"

class SingleProduct extends Component{
    constructor(props){
        super(props);
        this.state={
            pieces: 0
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleClickMinus = this.handleClickMinus.bind(this);
    }

    handleClick() {
        this.setState((state) => {
            return {pieces: state.pieces + 1}
          });
      }

      handleClickMinus() {
          if(this.state.pieces !== 0){
              this.setState((state) => {
                  return {pieces: state.pieces - 1}
                });
          }
      }

    render(){
        if(this.state.pieces === 0 && this.props.product.qty > 0){
            return(
                <div className="card text-white bg-success mb-3" style={{maxWidth: "20rem"}}>
                <p className="card-header" style={{height: "75px"}}>{this.props.product.name}</p>
                <div className="card-body" style={{height: "300px"}}>
                <Link to = {`/products/${this.props.product.id}`} ><img src={this.props.product.image} alt={this.props.product.name} style={{width:"65px", height:"65px"}}/></Link>
                {/* <p>{this.props.product.sku}</p> */}
                <p className="card-text">Price: {this.props.product.price}</p>
                <button className="btn btn-primary"  onClick={() => {this.props.add(this.props.product); this.handleClick()}}>Add to Cart </button>
                </div>
                </div>
            )
        }else if(this.state.pieces > 0 && this.state.pieces<this.props.product.qty){
            return(
                <div className="card text-white bg-success mb-3" style={{maxWidth: "20rem"}}>
                <p className="card-header" style={{height: "75px"}}>{this.props.product.name}</p>
                <div className="card-body" style={{height: "300px"}}>
                <Link to = {`/products/${this.props.product.id}`} ><img src={this.props.product.image} alt={this.props.product.name} style={{width:"50px", height:"50px"}}/></Link>
                {/* <p>{this.props.product.sku}</p> */}
                <p className="card-text">{this.props.product.price}</p>
                <button className="btn btn-primary" onClick={ () => {this.props.remove(this.props.product); this.handleClickMinus()}}>Remove One</button>
                <p className="card-text">Pieces: {this.state.pieces}</p>
                <button className="btn btn-primary" onClick={() => {this.props.add(this.props.product); this.handleClick()}}>Add Another One</button>
                </div>
                </div>
            )
        }else if(this.state.pieces===this.props.product.qty){
            return(
                <div className="card text-white bg-success mb-3" style={{maxWidth: "20rem"}}>
                <p className="card-header" >{this.props.product.name}</p>
                <div className="card-body">
                <Link to = {`/products/${this.props.product.id}`} ><img src={this.props.product.image} alt={this.props.product.name} style={{width:"50px", height:"50px"}}/></Link>
                {/* <p>{this.props.product.sku}</p> */}
                <p className="card-text">Price: {this.props.product.price}</p>
                <button className="btn btn-primary" onClick={ () => {this.props.remove(this.props.product); this.handleClickMinus()}}>Remove One</button>
                <p className="card-text">Out of Stock</p>
                </div>
                </div>
            )
        }else{
            return(<div className={classes.spinner}>
            <div className={classes.cube1}></div>
            <div className={classes.cube2}></div>
          </div>)
        }
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

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct)