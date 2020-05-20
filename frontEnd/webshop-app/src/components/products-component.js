import React, {Component} from 'react'
import { connect } from 'react-redux';
import {Link} from "react-router-dom";

class Products extends Component{
    render(){
        return(
            <div className="productsContainer">
                {this.props.products.length > 1 ? 
                (
                <div>
                    <div>
                        <div>
                        {this.props.products.map((product, index)=>{
                            return(
                                <div>
                                    <Link to = {`/products/${product.id}`} ><img  alt={`${product.name}`} src={product.image}/></Link>
                                    <p>{product.name}</p>
                                    <p>{product.shortSpecs}</p>
                                </div>
                            )
                            })}
                        </div>
                        </div>
                <h3>Site Footer</h3>
                </div>)
                : "Loading"
                }
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
       products: state.products
    }
}

export default connect(mapStateToProps)(Products)