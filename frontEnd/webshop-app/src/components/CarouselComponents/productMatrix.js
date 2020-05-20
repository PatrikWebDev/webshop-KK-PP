import React, {Component} from 'react'
import SingleProduct from './single-product'
import { connect } from 'react-redux';
import classes from '../product-box.module.css'

class ProductMatrix extends Component{

    render(){
       return(this.props.products.length > 0 ?
        (
                    <div className={classes.unknown}>
                {this.props.products.map((product)=>
                        <div key={product.id} className={classes.item}>
                         <SingleProduct product = {product} />
                        </div>
                        )
                }
            </div>  
        ) :
        <div className={classes.spinner}>
            <div className={classes.cube1}></div>
            <div className={classes.cube2}></div>
          </div>)
    }
}

function mapStateToProps(state){
    return {
       products: state.products
    }
}

export default connect(mapStateToProps)(ProductMatrix)