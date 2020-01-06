const Cliente = require('../models/Cliente')

module.exports = {
    
    //inserindo dados do cliente no banco
    async store(req, res) {
        const { cpfCliente, nome, telefone, email, senha } = req.body;
        const cliente = await Cliente.create({ cpfCliente, nome, telefone, email, senha });
        return res.json(cliente);
    },

    //buscando todos os dados do cliente no banco
    async index(req, res) {
        const clientes = await Cliente.findAll();
        return res.json(clientes);

    }

}
