import React, {Component} from 'react'
import SingleProduct from './single-product'
import { connect } from 'react-redux';

class ProductMatrix extends Component{
    openPost(id) {
        window.location.href = `http://localhost:3000/products/${id}`
      }

    render(){
        return(
                    <div>
                {this.props.products.map((product)=>{
                        return(
                         <SingleProduct product = {product} />
                        )
                    })
                }
            </div>  
        )
    }
}

function mapStateToProps(state){
    return {
       ...state
    }
}

export default connect(mapStateToProps)(ProductMatrix)