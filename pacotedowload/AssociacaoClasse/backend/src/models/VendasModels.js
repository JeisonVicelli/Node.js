const mongoose = require("mongoose");

const VendasModelSchema = new mongoose.Schema({
  cliente: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Clientes",
  },
  produto: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Produtos",
  },

  data: String,
  quantidade: String,
  valor: String,
});
module.exports = mongoose.model("Vendas", VendasModelSchema);
