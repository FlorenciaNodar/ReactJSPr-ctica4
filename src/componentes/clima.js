import React, { Component } from 'react';

class Clima extends Component {
    mostrarResultado =()=>{
        //obtener los datos de la consulta
        //dentro de las llaves tengo los atributos que quiero traerme del objeto que recibo
        const {name, weather, main} = this.props.resultado;
        if(!name || !weather || !main)
        return null;

        return(
            <div className="row">
                {name}
            </div>
        )
    }
    render() { 
        // console.log(this.props.resultado);
        return ( 
            <div className="container">
                {this.mostrarResultado}
            </div>
        );
          
    }
}
 
export default Clima;
