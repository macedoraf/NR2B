const Funcionario = require('../models/Funcionario')

module.exports = {
    
    //inserindo dados do funcionario no banco
    async store(req, res) {
        const { cpfFuncionario, nome, sobreNome, cargo, telefone, password, email } = req.body;
        const funcionario = await Funcionario.create({ cpfFuncionario, nome, sobreNome, cargo, telefone, password, email });
        return res.json(funcionario);
    },

    //buscando todos os dados do funcionario no banco
    async index(req, res) {
        const funcionarios = await Funcionario.findAll();
        return res.json(funcionarios);

    }

}
