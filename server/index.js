const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const Contatos = require("./contatos/contatos.js");
const utils = new Contatos();

app.use(express.json());

app.route("/api/cadastro").post(async (req, res) => {
  var { nome, telefone } = req.body;    
  res.json({ message: await utils.save(nome, telefone) });
});

app.route("/api/listar").get((req, res) => {
  res.json({message: "Teste"});
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
