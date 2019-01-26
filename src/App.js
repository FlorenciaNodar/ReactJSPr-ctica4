import React, { Component } from 'react';
import Header from './componentes/header';
import Formulario from './componentes/formulario';
import Error from './componentes/error';
import Clima from './componentes/clima';

class App extends Component {

  state={
    error:'',
    consulta: {},
    resultado:''
  }

  componentDidMount() {
    this.setState({
      error:false
    });
  }

  componentDidUpdate(prevProps, prevState){
    
    if(prevState.consulta !== this.state.consulta){
      this.consultarApi();      
    }
  }
  
  consultarApi=()=>{
    const {ciudad,pais} = this.state.consulta;
    if(!ciudad || !pais)
    return null;
    
    //leer la URL y agregar el APIKEY

    const appId= '3c9c1497bfc09a0c6b68d74d9f3a2d99';
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&APPID=${appId}`;
    
    console.log(url);
    //query con fetch API
    fetch(url)
      .then(respuesta=>{
        return respuesta.json();
      })
      .then(datos=>{
        // console.log(datos);
        this.setState({
          resultado: datos
        })
      })
      .catch(error=>{
        console.log(error);
      })
  }

  datosConsulta= resultado=>{
    if(resultado.ciudad === '' || resultado.pais === '' ){
    this.setState({
      error:true
    });   
   }else{
    this.setState({
      error:false,
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
      resultado = <Clima resultado={this.state.resultado}/>
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
