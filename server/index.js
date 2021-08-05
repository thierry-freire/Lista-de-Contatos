const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const contatosSchema = require("./models/contatos.js");

app.use(express.json());

app.post("/api/cadastro", async (req, res) => {
  var mensagem = '';

  try {
    await contatosSchema.create(req.body);
    mensagem = "Contato Salvo com sucesso";
  } catch (erro) {
    mensagem = erro.message;
  }  

  res.json({ message: mensagem });
});

app.post("/api/editar", async (req, res) => {
  var mensagem = '';
  var query = {_id: req.body._id};
  
  mensagem = 'Contato editado com sucesso!';
  await contatosSchema.updateOne(query, req.body, function(err, res) {  
    if (err) {
      mensagem = err.message;
    }

  });

  res.status(200).json({message: mensagem});
});

app.post("/api/excluir", async (req, res) => {
  var mensagem = '';
  var query = {_id: req.body._id};
  
  await contatosSchema.deleteOne(query, function(err, res) {
    if (err) {
      mensagem = err.message;
    } else {
      mensagem = 'Contato excluído com sucesso!';
    }
  });

  res.status(200).json({message: mensagem});
});

app.get("/api/listar", async (req, res) => {
  var data = await contatosSchema.find({});
  res.status(200).send(data);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
