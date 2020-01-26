const Academia = require('../models/Estabelecimento')

module.exports = {
    
    async store(req, res) {
        const { 
            cnpj, 
            nomeFantasia, 
            razaoSocial,
            telefone, 
            cep, 
            cidade, 
            estado, 
            bairro, 
            endereco, 
            numero,
            logo, 
            latitudae, 
            longitude 
        } = req.body;
        const estabelecimento = await Academia.create({ 
            cnpj, 
            nomeFantasia, 
            razaoSocial,
            telefone, 
            cep, 
            cidade, 
            estado, 
            bairro, 
            endereco, 
            numero,
            logo, 
            latitudae, 
            longitude });
        return res.json(estabelecimento);
    },

    async index(req, res) {
        const estabelecimento = await Estabelecimento.findAll();
        return res.json(estabelecimento);

    }

}
