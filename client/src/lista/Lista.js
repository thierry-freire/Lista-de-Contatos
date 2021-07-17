import './Lista.css';
import React from 'react';
import axios from 'axios';

class Lista extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.contatos = [];
    }

    render() {
        this.getDados();

        var listaContatos = this.contatos.map((contato, index) => {
            return(
                <div className="Contato" key={index}>
                    <h3>{contato.nome}</h3>
                </div>
            );
        });

        console.log(listaContatos);

        return(
            <div id="abaLista">
                <h2 id="titleList">Contatos Salvos</h2>
                <div id="listaContatos">
                    {listaContatos}
                </div>
            </div>
        );
    }

    getDados() {
        axios.get('/api/listar').catch(e => {
            alert(e.message);
        }).then(retorno => {
            var data = retorno.data;
            this.contatos = data.data;         
        });
    }
    
}

export default Lista;