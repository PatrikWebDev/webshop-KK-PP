import React, {Component} from 'react'
import ProductDetail from './product-detail'

export default class Products extends Component{
    constructor(){
        super()
        this.state = {
            products: undefined
        }

    }

    componentDidMount() {
        fetch(`http://44228aa1.ngrok.io/products`)
        .then(res => res.json())
        .then(products => {
          console.log(products)
          this.setState({products})
        })
    }

    openPost(id) {
        window.location.href = `http://localhost:3000/products/${id}`
      }

    render(){

        return(
            <div className="productsContainer">
                {this.state.products ? 
                (
                <div>
                <h3>Site Header</h3>
                <table>
                    <thead></thead>                    
                    <tbody>
                    <tr>
                        {this.state.products.map((product, index)=>{
                            return(
                                <td key={index}>
                                    <img src={product.image} onClick={() => this.openPost(product.id)} />
                                    <p>{product.name}</p>
                                    <p>{product.shortSpecs}</p>
                                </td>
                            )
                            })}
                    </tr>
                    </tbody>
                </table>

                <h3>Site Footer</h3>
                </div>)
                : "Loading"
                }
            </div>
        )
    }
}