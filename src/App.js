import React, { Component } from 'react';
import Header from './componentes/header';
import Formulario from './componentes/formulario';
import Error from './componentes/error';
class App extends Component {

  state={
    error:''
  }

  componentDidMount() {
    this.setState({
      error:false
    });
  }
  

  datosConsulta= resultado=>{
    if(resultado.ciudad === '' || resultado.pais === '' ){
    this.setState({
      error:true
    });   
   }else{
      console.log('correcto');
    }
  }
  render() {
    const error = this.state.error;
    let resultado;
    if(error){
      resultado = <Error mensaje="Ambos campos son obligatorios"/>
    }else{

    }
    return (
      <div className="App">
       <Header titulo='Clima React'/>
       <Formulario datosConsulta={this.datosConsulta}/>
       {resultado}
      </div>
    );
  }
}

export default App;
