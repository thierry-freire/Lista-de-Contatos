const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:adminfreire8@lista-contatos.ctm1n.mongodb.net/lista-contatos');
 
module.exports = { 'Mongoose': mongoose }