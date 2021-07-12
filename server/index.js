const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json())

app.route("/api/cadastro").post((req, res) => {
  var { nome, telefone } = req.body;    
  res.json({ message: `${nome} cadastrado com o telefone: ${telefone}` });
});

app.route("/api/listar").get((req, res) => {
  res.json({message: "Teste"});
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
