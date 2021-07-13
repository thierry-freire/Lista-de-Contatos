const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:adminfreire8@lista-contatos.ctm1n.mongodb.net/lista-contatos');
 
const contatosSchema = new mongoose.Schema({
    nome: String,
    telefone: Number
}, { collection: 'contatos' }
);
 
module.exports = { Mongoose: mongoose, contatosSchema: contatosSchema }