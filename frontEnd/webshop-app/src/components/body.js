import React, {Component} from 'react'
import Offerings from './CarouselComponents/Offering'
import ProductMatrix from './CarouselComponents/productMatrix'

export default class Body extends Component{
    render(){
        return(
            <div>
                <Offerings />
                <ProductMatrix />
            </div>
        )
    }
}