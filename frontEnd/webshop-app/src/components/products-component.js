import React, {Component} from 'react'

export default class Products extends Component{
    constructor(){
        super()
        this.state = {
            products: undefined
        }

    }

    componentDidMount() {
        fetch(`http://localhost:3005/products`)
        .then(res => res.json())
        .then(products => {
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
                <table>
                    <thead></thead>                    
                    <tbody>
                    <tr>
                        {this.state.products.map((product, index)=>{
                            return(
                                <td key={index}>
                                    <img  alt="An imge of a product" src={product.image} onClick={() => this.openPost(product.id)} />
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