import React, { Component } from 'react';

class Clima extends Component {
    state = {  }
    render() { 
        console.log(this.props.resultado);
        return ( 
            <div className="container">
            <h1>Desde el clima</h1>
            </div>
        );
          
    }
}
 
export default Clima;
