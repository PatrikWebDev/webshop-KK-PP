import React, {Component} from 'react'
import ImageGallery from './image-gallery'

export default class ProductDetail extends Component{
    constructor(){
        super()
        this.state = {
            product: undefined
        }

    }

    componentDidMount() {
        fetch(`http://localhost:3005/products/${this.props.match.params.id}`)
        .then(res => res.json())
        .then(product => {
          this.setState({product: product})
        })
    }
    
    render(){
        return(
           <div>
{this.state.product ? 
                (
                    <div>
               <div>
                <ImageGallery img={this.state.product.image} />
               <p>{this.state.product.name}</p>
               <p>{this.state.product.price}</p>
               <button type="button">Add to cart</button>
               <p>{this.state.product.shortSpecs}</p>
               </div>
               <p>{this.state.product.specs}</p>
               <p>{this.state.product.recommendations}</p>
               </div>)
               : "Loading"}

           </div>
        )
    }
}