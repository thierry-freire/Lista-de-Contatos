const database = require("./../../domain/db.js");

module.exports = class Contatos {
    contatos;

    constructor() {
        this.contatos = database.Mongoose.model('contatos', database.contatosSchema, 'contatos');
    }

    async save(nome, telefone) {        
        try {   
            var contato = new contatos({'nome': nome, 'telefone': telefone});
            contato.save();

        } catch (erro) {
            return ("Houve um proble na conexão com o banco de dados.");
        }

        return("Contato Salvo com sucesso");
    }

}