const mongoose = require("mongoose");

const ClienteModelslSchema = new mongoose.Schema({
    id:Number,
    Nome: String,
    CPF: String,
    Telefone: String,
    DataNascimento : String,
   
    });
    
module.exports = mongoose.model("Clientes", ClienteModelslSchema);