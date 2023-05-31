const mongoose = require("mongoose");

const ProdutosModelsSchema = new mongoose.Schema({
    id:Number,
    Codigo: String,
    Nome: String,
    Marca: String,
    Valor: String,
   
    });

module.exports = mongoose.model("Produtos", ProdutosModelsSchema);