const Produtos = require("../models/ProdutosModels");



module.exports = {
    async read(req, res){
    const produtosList = await Produtos.find();
    return res.json(produtosList);
    },

    async create(req, res){
        const{id, Codigo, Nome, Marca, Valor} = req.body;
        if(!Codigo && !Nome){
            return res.status(400).json({error: "É necessário preencher o Nome e codigo do produto."});
        }
        const produtoCriado = await Produtos.create({
            id,
            Codigo,
            Nome,
            Marca,
            Valor
            
        });
        return res.json(produtoCriado);    
    },
    async delete(req, res){
        const { id } = req.params;
        const produtoDeletado = await Produtos.findOneAndDelete({_id : id});
        if(produtoDeletado){
            return res.json(produtoDeletado);
        }

    },
    async update(req, res){
        const { id } = req.params;
        const {Codigo, Nome, Marca, Valor} = req.body;
        const produto = await Produtos.findOne({_id : id});

        produto.Codigo = Codigo,        
        produto.Nome = Nome,
        produto.Marca = Marca,
        produto.Valor = Valor
       

                
        await produto.save();
        return res.json(produto);
    }


}