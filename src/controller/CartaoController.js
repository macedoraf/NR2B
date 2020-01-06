const Cartao = require('../models/Cartao')

module.exports = {
    
    //inserindo dados do cartao no banco
    async store(req, res) {
        const { numeroCartao, nomeTitular, dataValidade, bandeira } = req.body;
        const cartao = await Cartao.create({ numeroCartao, nomeTitular, dataValidade, bandeira });
        return res.json(cartao);
    },

    //buscando todos os dados do cartao no banco
    async index(req, res) {
        const cartoes = await Cartao.findAll();
        return res.json(cartoes);

    }

}
