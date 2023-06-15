const mongoose = require("mongoose");

const ClienteModelslSchema = new mongoose.Schema({
  id: Number,
  Nome: String,
  CPF: String,
  Telefone: String,
  DataNascimento: String,
  vendas: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "vendas",
    },
  ],
});

module.exports = mongoose.model("Clientes", ClienteModelslSchema);
