import './App.css';
import React from 'react';
import Cadastro from './cadastro/Cadastro';
import Lista from './lista/Lista';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Lista de Contatos</h1>
        </header>
        <div id="conteudo">
          <div id="cadastro">
            {getCadastroPage()}          
          </div>
          <div id="lista">
            {getListaPage()}
          </div>
        </div>
      </div>
    );
  }

}

function getCadastroPage() {
  return (
    <Cadastro/>
  );
}

function getListaPage() {
  return (
    <Lista/>
  );
}

export default App;
