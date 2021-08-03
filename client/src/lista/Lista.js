import './Lista.css';
import React from 'react';
import axios from 'axios';
class Lista extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contatos: [],
            nomeNovo: '',
            telefoneNovo: ''
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
                        <input className='NomeContato' id={'nome' + contato._id} name='nomeNovo' onChange={this.handleChange} type='String' defaultValue={contato.nome}/>
                        <button className='Editar' id={'editar' + contato._id} onClick={() => {this.editarContato(contato)}}>Editar</button>
                        <button className='Excluir' onClick={() => {this.excluirContato(contato)}}>Excluir</button>
                    </div>
                    <input className='TelefoneContato' id={'telefone' + contato._id} name='telefoneNovo' onChange={this.handleChange} type='String' defaultValue={contato.telefone}/>
                </div>
            );
        });

        return listaContatos;
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    excluirContato = async(contato) => {
        alert('Contato ' + contato._id + ' apagado com sucesso.');
    }

    editarContato = async(contato) => {
        if (this.state.nomeNovo === '' && this.state.telefoneNovo === '') {
            alert('Não existem alterações feitas');
        } else {
            var data = ({
                _id: contato._id,
                nome: this.state.nomeNovo === ''? contato.nome : this.state.nomeNovo,
                telefone: this.state.telefoneNovo === ''? contato.telefone : this.state.telefoneNovo,
            });

            var retorno = await axios.post('/api/editar', data);
            var mensagem = retorno.data;

            if (retorno.status === 200) {
                alert(mensagem.message);
            } else {
                alert(`Erro ${retorno.status}: ${retorno.statusText}`);
            }

            this.setState({
                nomeNovo: '',
                telefoneNovo: ''
            });
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