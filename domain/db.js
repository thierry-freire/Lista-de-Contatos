const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/lista-contatos');
 
const contatosSchema = new mongoose.Schema({
    nome: String,
    telefone: Number
}, { collection: 'contatos' }
);
 
module.exports = { Mongoose: mongoose, contatosSchema: contatosSchema }