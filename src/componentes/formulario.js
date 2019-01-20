import React, { Component } from 'react';  

class Formulario extends Component {

    ciudadRef = React.createRef();
    paisRef = React.createRef();

    BuscarClima =(e)=>{
        e.preventDefault();

        const respuesta = {
            ciudad: this.ciudadRef.current.value,
            pais: this.paisRef.current.value
        }

        // console.log(respuesta);
        this.props.datosConsulta(respuesta);
    }

    render() { 
        return ( 
           
            <div className="contenedor-form">
            <div className="container">
            <div className="row">
                <form onSubmit={this.BuscarClima}>
                    <div className="input-field col s12 m8 l4 offset-m2">
                        <input id="ciudad" ref={this.ciudadRef} type="text"/>
                        <label htmlFor="ciudad">Ciudad:</label>
                    </div>
                    <div className="input-field col s12 m8 l4 offset-m2">
                        <select ref={this.paisRef}>
                            <option value="" defaultValue>Elige un país</option>
                            <option value="AR">Argentina</option>
                            <option value="CO">Colombia</option>
                            <option value="CR">Costa Rica</option>
                            <option value="ES">España</option>
                            <option value="US">Éstados Unidos</option>
                            <option value="MX">México</option>
                            <option value="PE">Perú</option>
                        </select>
                        <label htmlFor="pais">País:</label>
                    </div>
                    <div className="input-field col s12 m8 l4 offset-2 buscador">
                         <input className="waves effect waves-light btn-large yellow accent-4" type="submit" value="Buscar..."/>
                    </div>
                </form>
            </div>
            </div>
            </div>
         );
    }
}
 
export default Formulario;