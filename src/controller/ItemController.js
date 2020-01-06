const Item = require('../models/Item')

module.exports = {
    
    //inserindo dados do item no banco
    async store(req, res) {
        const { nome, valor, descricao } = req.body;
        const item = await Item.create({ nome, valor, descricao });
        return res.json(item);
    },

    //buscando todos os dados do item no banco
    async index(req, res) {
        const item = await Item.findAll();
        return res.json(item);

    }

}
