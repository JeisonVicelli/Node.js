const ProdutosModels = require("./models/ProdutosModels ");

module.exports = {
  async read(req, res) {
    const produtoList = await Produtos.find();
    return res.json(produtoList);
  },

  async create(req, res) {
    const { Codigo, Nome, Marca, Valor } = req.body;
    if (!Codigo && !Nome) {
      return res
        .status(400)
        .json({ error: "É necessário preencher o Nome e codigo do produto." });
    }
    const produtoCriado = await ProdutosModels.create({
      Codigo,
      Nome,
      Marca,
      Valor,
    });
    return res.json(produtoCriado);
  },
  async delete(req, res) {
    const { id } = req.params;
    const produtoDeletado = await Produtos.findOneAndDelete({ _id: id });
    if (produtoDeletado) {
      return res.json(produtoDeletado);
    }
  },
  async update(req, res) {
    const { id } = req.params;
    const { Codigo, Nome, Marca, Valor } = req.body;
    const produto = await Produtos.findOne({ _id: id });

    (produto.codigo = Codigo),
      (produto.Nome = Nome),
      (produto.marca = Marca),
      (produto.valor = Valor);

    await produto.save();
    return res.json(produto);
  },
};
