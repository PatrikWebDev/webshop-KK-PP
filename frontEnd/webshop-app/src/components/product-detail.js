import React, {Component} from 'react'
import ImageGallery from './image-gallery'
import classes from "./CarouselComponents/singleProduct.module.css"
import {add, remove} from '../Store/action'
import { connect } from 'react-redux';

class ProductDetail extends Component{
    render(){

        if(this.props.products.length > 0){
            const specificItem = this.props.products.find(element => element.id === +window.location.pathname.split('/products/')[1])
            return(
                <div className="jumbotron" style={{display:"grid", justifyItems:"center"}}>
               <p className="display-3" >{specificItem.name}</p>
               <p className="lead" >{specificItem.price}</p>
               <ImageGallery style={{padding: "0"}} img={specificItem.image} />
               <p className="lead" >{specificItem.shortSpecs}</p>
               <button className="btn btn-primary" onClick={() => {this.props.add(specificItem)}}>Add to cart</button>
               <p className="lead" >{specificItem.specs}</p>
               <p className="lead" >{specificItem.recommendations}</p>
               </div>
            )
        }
        return(
               <div className={classes.spinner}>
                <div className={classes.cube1}></div>
                <div className={classes.cube2}></div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail)