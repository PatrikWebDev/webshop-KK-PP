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
        fetch(`http://44228aa1.ngrok.io/products/${this.props.match.params.id}`)
        .then(res => res.json())
        .then(product => {
          console.log(product)
          this.setState({product})
        })
    }
    
    render(){
        return(
           <div>
{this.state.product ? 
                (
                    <div>
               <div>
                <ImageGallery />
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