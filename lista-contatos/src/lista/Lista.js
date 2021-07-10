import './Lista.css';
import React from 'react';

class Lista extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div id="abaLista">
                <h2 id="titleList">Contatos Salvos</h2>
            </div>
        );
    }

    componentDidMount() {
        var oneSecond = 1000;
        setInterval(() => {
        }, oneSecond);
      }
}

export default Lista;