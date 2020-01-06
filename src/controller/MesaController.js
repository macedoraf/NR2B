const Mesa = require('../models/Mesa')

module.exports = {
    
    //inserindo dados do mesa no banco
    async store(req, res) {
        const { nome } = req.body;
        const mesa = await Mesa.create({ nome });
        return res.json(mesa);
    },

    //buscando todos os dados do mesa no banco
    async index(req, res) {
        const mesa = await Mesa.findAll();
        return res.json(mesa);

    }

}
