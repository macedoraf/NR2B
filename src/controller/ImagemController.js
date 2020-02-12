const Imagem = require("../models/Imagem")

module.exports = {

    async store(req, res) {
        const { file, extension, fileName } = req.body
        const _file = Buffer.from(file, 'utf8')
        await Imagem.create({ image: _file, extension, fileName })


    },

}
