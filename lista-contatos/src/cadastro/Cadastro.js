import './Cadastro.css'

function Cadastro () {
    return (
        <div id="abaCadastro">
            <h2 id="titleCad">Cadastro</h2>
            <label id="labelNome" htmlFor="nome">Nome</label>
            <input id="nome" type="String"/>
            <label id="labelTelefone" htmlFor="telefone">Telefone</label>
            <input id="telefone" pattern="([0-9]{2}) [0-9]{1} [0-9]{4}-[0-9]{4}" type="Number"/>
            <button id="salvar">Salvar</button>
        </div>
    );
}

export default Cadastro;