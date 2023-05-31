const mongoose = require("mongoose");

const ClientesModelsSchema = new mongoose.Schema({
  Id: String,
  Nome: String,
  CPF: String,
  Telefone: String,
  DataNascimento: String,
});

module.exports = mongoose.model("Clientes", ClientesModelsSchema);
