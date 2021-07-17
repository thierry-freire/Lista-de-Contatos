const database = require('../../domain/db.js');

const contatosSchema = new database.Mongoose.Schema({
    nome: String,
    telefone: Number
}, { collection: 'contatos' });

module.exports = database.Mongoose.model("contatos", contatosSchema);