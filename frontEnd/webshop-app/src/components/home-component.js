import React, {Component} from 'react'
import Body from './body'
import Footer from './footer'


export default class Home extends Component{
    render(){
        return(
            <div>
                <Body />
                <Footer />
            </div>
        )
    }
}