const Imagem = require("../models/Imagem")
const fs = require("fs")

module.exports = {

    async store(req, res) {
        const { file, extension, fileName } = req.body
        const _file = Buffer.from(file, 'utf8')
        await Imagem.create({ image: _file, extension, fileName })
            .then((image) => {
                const file = fs.writeFile("teste.jpg", image.file, (error) => { console.log(error) })
                const buff = fs.read
                const base64Data = buff.toString("base64");
                res.json(base64Data)
            }).catch((error) => {
                console.log(error)
            })
    },

}
