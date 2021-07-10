import './Cadastro.css'
import React from 'react';

class Cadastro extends React.Component {
    render() {
        return (
            <div id="abaCadastro">
                <h2 id="titleCad">Cadastro</h2>
                <label id="labelNome" htmlFor="nome">Nome</label>
                <input id="nome" placeholder="Getúlio Vargas" type="String"/>
                <label id="labelTelefone" htmlFor="telefone">Telefone</label>
                <input id="telefone" placeholder="81955555555" maxLength="11" pattern="([0-9]{2}) [0-9]{1} [0-9]{4}-[0-9]{4}" type="Number"/>
                <button id="salvar">Salvar</button>
            </div>
        );
    }
}

export default Cadastro;