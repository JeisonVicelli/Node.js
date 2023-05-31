const mongoose = require("mongoose");
//const dbConfig = "mongodb+srv://jeisonvicelli1:LojaGaia@cluster0.hi4otxj.mongodb.net/Clientes"
const dbConfig = "mongodb://0.0.0.0:27017/cliente";

const conexao = mongoose.connect(dbConfig,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = conexao;
