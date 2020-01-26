const Pedido = require('../models/Pedido')

module.exports = {
    
    //inserindo dados do pedido no banco
    async store(req, res) {
        const { 
            dataInicio,
            dataTermino,
            descricao
         } = req.body;
        const pedido = await Pedido.create({ 
            dataInicio,
            dataTermino,
            descricao
        });
        return res.json(pedido);
    },

    //buscando todos os dados do pedido no banco
    async index(req, res) {
        const pedido = await Pedido.findAll();
        return res.json(pedido);

    }

}
