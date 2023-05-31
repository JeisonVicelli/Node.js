const mongoose = require("mongoose");

const ProdutosModelSchema = new mongoose.Schema({
  Id: String,
  Codigo: String,
  Nome: String,
  Marca: String,
  Valor: String,
});

module.exports = mongoose.model("Produtos", ProdutosModelSchema);
