const contatosSchema = require("./../models/contatos.js");

module.exports = class Contatos {
    async save(dados) {     
        try {
            await contatosSchema.create(dados.nome, dados.telefone);
        } catch (erro) {
            return(erro.message);
        }  

        return("Contato Salvo com sucesso");
    }

    async getContatos() {
        try {
            var retorno = await contatosSchema.find({});
        } catch (erro) {
            return(erro.message);
        }

        return retorno;

    }

}