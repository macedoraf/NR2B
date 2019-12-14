const Academia = require('../models/Academia')

module.exports = {
    
    async store(req, res) {
        const { cnpjAcademia, nomefantasia, razaosocial,
             telefone, cep, cidade, estado, bairro, endereco, numero,
              logoAcademia } = req.body;
        const academia = await Academia.create({ cnpjAcademia, nomefantasia,
             razaosocial,
             telefone, cep, cidade, estado, bairro, endereco, numero,
              logoAcademia });
        return res.json(academia);
    },

    async index(req, res) {
        const academia = await Academia.findAll();
        return res.json(academia);

    }

}
