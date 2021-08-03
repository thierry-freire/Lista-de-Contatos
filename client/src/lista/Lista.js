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
                <div className='Contato' key={index}>
                    <div className="ContatoHeader">
                        <input className='NomeContato' id={'nome' + contato._id} readOnly={true} type='String' value={contato.nome}/>
                        <button className='Editar' id={'editar' + contato._id} onClick={() => {this.editarContato(contato)}}>Editar</button>
                        <button className='Excluir' onClick={() => {this.excluirContato(contato)}}>Excluir</button>
                    </div>
                    <input className='TelefoneContato' id={'telefone' + contato._id} readOnly={true} type='String' value={contato.telefone}/>
                </div>
            );
        });

        return listaContatos;
    }

    excluirContato(contato) {
        alert('Contato ' + contato._id + ' apagado com sucesso.');
    }

    editarContato(contato){
        if (document.getElementById('nome' + contato._id).readOnly) {
            document.getElementById('nome' + contato._id).readOnly = false;
            document.getElementById('telefone' + contato._id).readOnly = false;
            document.getElementById('editar' + contato._id).innerHTML = 'Salvar';
        } else {
            document.getElementById('nome' + contato._id).readOnly = true;
            document.getElementById('telefone' + contato._id).readOnly = true;
            document.getElementById('editar' + contato._id).innerHTML = 'Editar';
            alert('Contato ' + contato.nome + ' com telefone ' + contato.telefone);
        }
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