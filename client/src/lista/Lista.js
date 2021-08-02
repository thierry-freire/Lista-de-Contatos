import './Lista.css';
import React from 'react';
import axios from 'axios';
class Lista extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contatos: []
        };
    }
    
    montaLista() {
        axios.get('/api/listar').then(resp => {
            this.setState({
                contatos: resp.data
            });
        }).catch(err => {
            alert(err.message)
        });

        var listaContatos = [];

        listaContatos = this.state.contatos.map((contato, index) => {
            return(
                <div style={{backgroundColor: 'white', color: 'black', marginTop: 10 + 'px'}} key={index}>
                    <div style={{display: 'flex', width: 100 + '%', marginTop: 10 + 'px'}}>
                        <input className='NomeContato' id={'nome' + contato._id} style={{marginLeft: 10 + 'px', borderStyle: 'none', width: 85 + '%'}} readOnly={true} type='String' value={contato.nome}/>
                        <button className='Editar'>Editar</button>
                        <button className='Excluir'>Excluir</button>
                    </div>
                    <input className='TelefoneContato' id={'telefone' + contato._id} style={{marginLeft: 10 + 'px', borderStyle: 'none', width: 85 + '%'}} readOnly={true} type='String' value={contato.telefone}/>
                </div>
            );
        });

        return listaContatos;
    }

    excluirContato(idContato) {
        alert('Contato' + idContato + 'apagado com sucesso.');
    }

    render() {
        return(
            <div id="abaLista">
                <h2 id="titleList">Contatos Salvos</h2>
                <div id="listaContatos">
                    {this.montaLista()}
                </div>
            </div>
        );
    }
    
}

export default Lista;