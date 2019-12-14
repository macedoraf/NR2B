const Cliente = require('../models/Cliente')

module.exports = {
    
    async store(req, res) {
        const { cpfCliente, nome, telefone, email, senha } = req.body;
        const cliente = await Cliente.create({ cpfCliente, nome, telefone, email, senha });
        return res.json(cliente);
    },

    async index(req, res) {
        const clientes = await Cliente.findAll();
        return res.json(clientes);

    }

}
