import './Cadastro.css'
import React from 'react';


class Cadastro extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nomeValue: '',
            telefoneValue: ''
        };
        
    }

    render() {
        return (
            <div id="abaCadastro">
                <h2 id="titleCad">Cadastro</h2>
                <label id="labelNome" htmlFor="nome">Nome</label>
                <input id="nome" name="nomeValue" placeholder="Getúlio Vargas" onChange={this.handleChange} type="String"/>
                <label id="labelTelefone" htmlFor="telefone">Telefone</label>
                <input id="telefone" name="telefoneValue" placeholder="81955555555" maxLength="11" onChange={this.handleChange} type="Number"/>
                <button id="salvar" onClick={this.handleCLick}>Salvar</button>
            </div>
        );
    }

    handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        });
    }

    handleCLick = (event) => {
        alert("Salvo contato " + this.state.nomeValue + " com telefone: " + this.state.telefoneValue);
    }
}

export default Cadastro;