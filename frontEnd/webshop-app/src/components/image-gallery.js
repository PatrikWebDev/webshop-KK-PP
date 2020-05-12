import React, {Component} from 'react';


export default class ImageGallery extends Component{
    constructor(props){
        super(props)
        this.state={
            centralPicture: this.props.img
        }
        this.centralPicChanger = this.centralPicChanger.bind(this);
    }

    centralPicChanger(pmn) {
        // bejövő paraméter alapján megváltoztatja a state-t ami meghatározza a central képet
        this.setState(state => ({
          centralPicture: pmn
        }));
      }

    render(){
        return(
            <div>
                <div>
                    {/* középső kép külön nagyba megjelenítve id alapján a css fileban méretezzük */}
                    <img id="central" alt="central" src={this.state.centralPicture} />
                </div>
                    {/* egy divben hogy rendezve legyenek */}
                <div>
                    {/* class alapján rendezve hogy szépen legyenek megjelenítve kattintásra változik a középső kép arra amire kattintuk ezért functionben átadjuk ugyanazt a képet */}
                    <button type= "button"> Previous</button>
                    <img class="pictures" src={this.props.img} alt="kep1" onClick={()=>{this.centralPicChanger(this.props.img)}}/>
                    <button type="button" >NEXT</button>
                </div>
            </div>
        )
    }
} 