const Vendas = require("../models/VendasModels");
const Clientes = require("../models/ClientesModels");
const Produtos = require("../models/ProdutosModels");

module.exports = {
  async read(req, res) {
    const vendaList = await Vendas.find().populate("cliente", "nome");
    return res.json(vendaList);
  },

  async create(req, res) {
    const { id, data, produto, valor, cliente } = req.body;

    const obterCliente = Clientes.findOne({ _id: cliente });

    if (!obterCliente) {
      return res.status(400).json({ error: "Cliente não encontrado." });
    }
    const obterProduto = Produtos.findOne({ _id: produto });

    if (!obterProduto) {
      return res.status(400).json({ error: "Produto não encontrado." });
    }

    const vendaCriada = await Vendas.create({
      id,
      Data: data,
      cliente,
      produto,
      Valor, valor,
    });

    return res.json(vendaCriada);
  },

  async delete(req, res) {
    const { idVenda } = req.params;
    const vendaDeletada = await Vendas.findOneAndDelete({ _id: idVenda });

    if (vendaDeletada) {
      return res.json(vendaDeletada);
    }
  },

  async update(req, res) {
    const { idVenda } = req.params;
    const { data, produto, valor, cliente } = req.body;
    const venda = await Vendas.findOne({ _id: idVenda });

    venda.Data = data;
    venda.produto = produto;
    venda.Valor = valor;
    venda.cliente = cliente;

    await venda.save();

    return res.json(venda);
  },
};
