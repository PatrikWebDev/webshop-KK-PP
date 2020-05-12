import React, {Component} from 'react'

const incomingProps = {
    img: 'https://rasamalaysia.com/wp-content/uploads/2018/11/garlic-butter-lobster4.jpg',
    marketing: 'Get Yourself a lobster',
    id: 300
}

export default class Offerings extends Component{
    render(){
        return(
            <div style={{ backgroundImage: `url(${incomingProps.img})` }}>
                <p>{incomingProps.marketing}</p>
                <a href={`/products/${incomingProps.id}`} >Link to Product</a>

            </div>
        )
    }
}