import './Lista.css';
import React from 'react';
class Lista extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listaContatos: ''
        };
    }
    
    componentDidMount() {
        var contatos = [];

        this.getDados().then(response => {
            contatos = response;
        }).catch(err => {
            alert(err);
        });

        this.setState({
            listaContatos: contatos.map((contato, index) => {
                return(
                    <div className="Contato" key={index}>
                        <h3>{contato.nome}</h3>
                    </div>
                );
            })
        });
    }

    getDados = async () => {
        var request = await fetch('api/listar');
        var response = await request.json();

        if (request.status === 200) {
            return response;
        } else {
            throw Error(request.statusText);
        }
        
    }

    render() {
        return(
            <div id="abaLista">
                <h2 id="titleList">Contatos Salvos</h2>
                <div id="listaContatos">
                    {this.state.listaContatos}
                </div>
            </div>
        );
    }
    
}

export default Lista;