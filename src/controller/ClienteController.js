const Cliente = require('../models/Cliente')
const Sequelize = require("sequelize");
const jwt = require('jsonwebtoken');

module.exports = {

    //Cadstro de usuário
    async signIn(req, res) {
        //Possíveis retornos
        const _emailOrCpfAlreadySigned = { errorMessage: "Email ou CPF já cadastrado." }
        const _sucessSign = "Cadastrado com sucesso!."

        //Mapeando os campos
        const { email, name, sbname, telefone, password, cpf } = req.body;

        await Cliente.findAndCountAll({ where: Sequelize.or({ email }, { cpf }) })
            .then((dataSet) => {
                console.log(dataSet.count)
                if (dataSet.count == 0) {
                    return Cliente.create({ cpf, name, sbname, telefone, password, email })
                }
            })
            .then((dataSet) => {
                if (!dataSet) {
                    return res.status(200).json(_emailOrCpfAlreadySigned)
                } else {
                    return res.status(201).send(_sucessSign)
                }
            })
            .catch((error) => {
                return res.status(500).send(error.stack); //Em caso de erro exite o stacktrace
            })

        //Verificar se já existe um e-mail cadastrado .
        //Sim -> Retornar erro de email já cadastrado.
        //Não -> Realizar o cadastro
    },


    //inserindo dados do cliente no banco
    async store(req, res) {
        const {
            cpf,
            name,
            sbname,
            telefone,
            password,
            email
        } = req.body;
        const cliente = await Cliente.create({
            cpf,
            name,
            sbname,
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

    },

    //busca para autenticação
    async authentication(req, res) {
        const {
            email,
            password
        } = req.body;
        const error = {
            errorMessage: "Senha ou email invalido!"
        }
        const cliente = await Cliente.findAll({
            where: {
                email,
                password
            }
        }).catch((error) => { console.log(error) })

        if (cliente != undefined) {
            console.log(cliente)
            const _token = jwt.sign({ cliente }, process.env.SECRET, {
                expiresIn: 300 // Expires in 5m
            })
            res.header({ Auth: _token })
            res.status(200).json(cliente[0])

        } else {
            res.json(error)
        }
    }
}
