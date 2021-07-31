const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const contatosSchema = require("./models/contatos.js");

app.use(express.json());

app.route("/api/cadastro").post(async (req, res) => {
  var mensagem = '';

  try {
    await contatosSchema.create(req.body);
    mensagem = "Contato Salvo com sucesso";
  } catch (erro) {
    mensagem = erro.message;
  }  

  res.json({ message: mensagem });
});

app.route("/api/listar").get(async (req, res) => {
  var data = await contatosSchema.find({});
  res.status(200).send(data);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
