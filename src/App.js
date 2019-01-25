import React, { Component } from 'react';
import Header from './componentes/header';
import Formulario from './componentes/formulario';
import Error from './componentes/error';
class App extends Component {

  state={
    error:'',
    consulta: {}
  }

  componentDidMount() {
    this.setState({
      error:false
    });
  }

  componentDidUpdate(){
    this.consultarApi();
  }
  
  consultarApi=()=>{
    const {ciudad,pais} = this.state.consulta;
    if(!ciudad || !pais)
    return null;
    

    const appId= '3c9c1497bfc09a0c6b68d74d9f3a2d99';
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&APPID=${appId}`;
    
    console.log(url);
    //query con fetch API
    
    //leer la URL y agregar el APIKEY

    //consultar con fetch
  }

  datosConsulta= resultado=>{
    if(resultado.ciudad === '' || resultado.pais === '' ){
    this.setState({
      error:true
    });   
   }else{
    this.setState({
      consulta: resultado
    })
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
