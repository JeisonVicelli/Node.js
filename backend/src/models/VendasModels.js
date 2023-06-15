const mongoose = require("mongoose");

const VendaModelSchema = new mongoose.Schema({
  cliente: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Clientes",
  },
  produto: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Produtos",
  },
  id: Number,
  Data: String,
  Valor: String,
});

module.exports = mongoose.model("Vendas", VendaModelSchema);
