const express = require("express");
const rotas = express.Router();
//const CadastroClientes = require("./controller/CadastroClientes");
//const CadastroProdutos = require("./controller/CadastroProdutos");
const ControleVenda = require("./controller/ControleVenda");


rotas.get("/produtos", CadastroProdutos.read);
rotas.post("/produtos",CadastroProdutos.create);
rotas.delete("/produtos/:id",CadastroProdutos.delete);
rotas.post("/produtos/:id",CadastroProdutos.update);

rotas.get("/clientes", CadastroClientes.read);
rotas.post("/clientes",CadastroClientes.create);
rotas.delete("/clientes/:id",CadastroClientes.delete);
rotas.post("/clientes/:id",CadastroClientes.update);

rotas.get("/vendas", ControleVenda.read);
rotas.post("/vendas",ControleVenda.create);
rotas.delete("/vendas/:id",ControleVenda.delete);
rotas.post("/vendas/:id",ControleVenda.update);

module.exports = rotas;
