import './Cadastro.css'
import React from 'react';
import axios from 'axios';

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

    handleCLick = async() => {
        if (this.state.nomeValue === '') {
            alert("Campo nome não preenchido.");
        } else if (this.state.telefoneValue === '') {
            alert("Campo telefone não preenchido.");
        } else {
            var data = ({
                nome: this.state.nomeValue,
                telefone: this.state.telefoneValue
            });
    
            var retorno = await axios.post('/api/cadastro', data);
            var mensagem = retorno.data;

            if (retorno.status === 200 || retorno.status === 304) {
                alert(mensagem.message);
            } else {
                alert(`Erro ${retorno.status}: ${retorno.statusText}`);
            }

        }

    }
}

export default Cadastro;