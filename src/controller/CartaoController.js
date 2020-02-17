const Cartao = require('../models/Cartao')

module.exports = {

    //inserindo dados do cartao no banco
    async store(req, res, clientInfo) {
        const cliente_cpf = clientInfo.cliente[0].cpf
        const telefone = clientInfo.cliente[0].telefone
        const {
            numeroCartao,
            nameTitular,
            dataValidade,
            bandeira
        } = req.body;
        Cartao.create({
            numeroCartao,
            nameTitular,
            dataValidade,
            bandeira,
            cliente_cpf,
            telefone,
        }).then(dataSet => dataSet.toJSON()).then((cardJson) => {
            res.json(cardJson)
        }).catch((error) => { res.status(500).send(error.stack) })
    },

    //buscando todos os dados do cartao no banco
    async index(cliente_cpf, res) {
        Cartao.findAll({ where: { cliente_cpf } })
            .then((jsonCartoes) => {
                res.json(jsonCartoes)
            }).catch((error) => { res.status(500).send(error.stack) })


    },

    async update(req, res, clientInfo) {
        const cliente_cpf = clientInfo.cliente[0].cpf
        const telefone = clientInfo.cliente[0].telefone
        const {
            id,
            numeroCartao,
            nameTitular,
            dataValidade,
            bandeira
        } = req.body;
        await Cartao.update(
            { numeroCartao, nameTitular, dataValidade, bandeira, cliente_cpf, telefone, },
            { where: { id } })
            .then(result => result == 1)
            .then((result) => {
                res.json(result)
            }).catch((error) => { res.status(500).send(error.stack) })

    },


    async delete(id, res) {
        Cartao.destroy({ where: { id } })
            .then((resultBoolean) => { res.json(resultBoolean) })
            .catch((error) => { res.status(500).send(error.stack) })
    }

}
