import React, { Component } from 'react';
import Header from './componentes/header';
import Formulario from './componentes/formulario';

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
    return (
      <div className="App">
       <Header titulo='Clima React'/>
       <Formulario datosConsulta={this.datosConsulta}/>
      </div>
    );
  }
}

export default App;
