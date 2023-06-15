const Clientes = require("../models/ClientesModels");

module.exports = {
  async read(req, res) {
    const clientesList = await Clientes.find();
    return res.json(clientesList);
  },

  async readOne(req, res) {
    const { id } = req.params;
    const cliente = await Clientes.findOne({ id: id });
    return res.json(cliente);
  },

  async create(req, res) {
    const { id, Nome, CPF, Telefone, DataNascimento } = req.body;
    if (!Nome && !CPF) {
      return res
        .status(400)
        .json({ error: "É necessário preencher o Nome e CPF do cliente." });
    }
    const clienteCriado = await Clientes.create({
      id,
      Nome,
      CPF,
      Telefone,
      DataNascimento,
    });
    return res.json(clienteCriado);
  },
  async delete(req, res) {
    const { id } = req.params;
    const clienteDeletado = await Clientes.findOneAndDelete({ id: id });
    if (clienteDeletado) {
      return res.json(clienteDeletado);
    }
  },
  async update(req, res) {
    const { id } = req.params;
    const { Nome, CPF, Telefone, DataNascimento } = req.body;
    const cliente = await Clientes.findOne({ id: id });

    (cliente.id = id),
      (cliente.Nome = Nome),
      (cliente.CPF = CPF),
      (cliente.Telefone = Telefone),
      (cliente.DataNascimento = DataNascimento),
      await cliente.save();
    return res.json(cliente);
  },
};
