import './Lista.css';
import React from 'react';
import axios from 'axios';

class Lista extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.contatos = this.getDados();
    }

    render() {
        /*const contatos = await this.getDados();

        var listaContatos;

        for (var contato in contatos) {
            listaContatos = (
              <h3>{contato.nome}</h3>
            );
        }*/

        return (
            <div id="abaLista">
                <h2 id="titleList">Contatos Salvos</h2>
                <div id="listaContatos">
                </div>
            </div>
        );
    }

    componentDidMount() {
        var oneSecond = 1000;
        setInterval(async () => {
            await this.render();
        }, oneSecond);
    }

    async getDados() {
        var retorno = await axios.get('/api/listar');
        var dados = retorno.data;

        if (retorno.status === 200 || retorno.status === 304) {
           return(dados.data);
        } else {
            alert(`Erro ${retorno.status}: ${retorno.statusText}`);
        }

    }
    
}

export default Lista;