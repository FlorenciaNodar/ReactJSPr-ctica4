import React, { Component } from 'react';
import Header from './componentes/header';
import Formulario from './componentes/formulario';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header titulo='Clima React'/>
       <Formulario/>
      </div>
    );
  }
}

export default App;
