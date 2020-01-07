const Cliente = require('../models/Cliente')

module.exports = {
    
    //inserindo dados do cliente no banco
    async store(req, res) {
        const { 
            cpf, 
            nome, 
            telefone, 
            password,
            email
        } = req.body;
        const cliente = await Cliente.create({ 
            cpf, 
            nome, 
            telefone, 
            password,
            email
         });
        return res.json(cliente);
    },

    //buscando todos os dados do cliente no banco
    async index(req, res) {
        const clientes = await Cliente.findAll();
        return res.json(clientes);

    }

}
