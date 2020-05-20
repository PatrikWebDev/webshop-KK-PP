import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import classes from "./CarouselComponents/singleProduct.module.css"


class CarouselGallery extends Component{
    constructor(props){
        super(props)
        this.state={
            centralPicture: this.props.products[0],
            sequence: 0
        }
        this.centralPicChanger = this.centralPicChanger.bind(this);
        this.timedCentralPicChanger = this.timedCentralPicChanger.bind(this);
    }

    componentDidMount(){
       this.timer = setInterval(() => {
            this.timedCentralPicChanger()
        }, 5000)
    }

    componentWillUnmount(){
        clearInterval(this.timer);
        this.timer = null;
    }


    centralPicChanger(pmn) {
        this.setState(state => ({
          centralPicture: pmn
        }));
      }

    timedCentralPicChanger() {
        if(this.state.sequence === (this.props.products.length - 1)){
            this.setState((state) => {
                return {sequence: -1}
              });
        }
            this.setState((state) => {
                return {sequence: state.sequence + 1}
              });

        this.setState(state => ({
            centralPicture: this.props.products[this.state.sequence]
          }));

      }

    render(){
        
        if(this.state.centralPicture != null){
            return(
                <div style={{display:"grid", alignItems:"center", marginBottom:"10px"}}>
                    <div style={{ backgroundImage: `url(${this.state.centralPicture.image})`, height: '450px', width: '500px', margin:"auto", display:"grid", }}>
                    <p style={{backgroundColor:"grey", alignSelf:"start"}}>Get yourself a {this.state.centralPicture.name}</p>
                    <Link style={{backgroundColor:"grey", alignSelf:"end", color:"white"}} to={`/products/${this.state.centralPicture.id}`} >Link to Product</Link>
                    </div>
                    <div style={{margin: "auto"}}>
                        {this.props.products.map(product=>{
                            return(
                                <div key={product.id} style={{display: 'inline-block', paddingLeft:"10px"}}>
                                    <button type="button" style={{borderRadius:"50%"}} className="btn btn-primary disabled" onClick={()=>{this.centralPicChanger(product)}}></button>
                                </div>
                            )
                        })}
                    </div>
                </div>
            )
        }else{
            return(<div className={classes.spinner}>
                <div className={classes.cube1}></div>
                <div className={classes.cube2}></div>
              </div>)
        }
        
    }
} 

function mapStateToProps(state) {
    return { ...state }
}

export default connect(mapStateToProps)(CarouselGallery)