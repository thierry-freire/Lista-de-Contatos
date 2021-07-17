const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const Contatos = require("./contatos/contatos.js");
const utils = new Contatos();

app.use(express.json());

app.route("/api/cadastro").post(async (req, res) => {
  res.json({ message: await utils.save(req.body) });
});

app.route("/api/listar").get(async (req, res) => {
  var data = await utils.getContatos();
  res.json({'data': data});
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
