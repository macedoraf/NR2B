const Cliente = require('../models/Cliente')

module.exports = {
    async store(req, res) {
        const {} = req.body;
        const cliente = await Cliente.create({cpf,nome,telefone,email,password});
        return res.json(cliente);
    },

    async index (req, res) {
        const clientes = await Cliente.findAll();
        return res.json(clientes);

    }

 }