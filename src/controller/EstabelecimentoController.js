const Estabelecimento = require("../models/Estabelecimento");

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
      longitude
    });
    return res.json(estabelecimento);
  },

  async index(req, res) {
    const _estabelecimentos = await Estabelecimento.findAll().catch(error => {
      console.error(error);
    });
    return res.json(_estabelecimentos);
  },

  async getDetail(req, res) {
    const { cnpj } = req.query;
    await Estabelecimento.findOne({
      where: {
        cnpj
      }
    })
      .then(detail => {
        res.json(detail.toJSON());
      })
      .catch(error => {
        res.send(error.stack);
      });
  }
};
