const Imagem = require("../models/Imagem")
const fs = require("fs")

module.exports = {
    async store(req, res) {
        try {
            const { file, extension, fileName } = req.body
            const _file = Buffer.from(file, 'ascii')
            await Imagem.create({ image: _file, extension, fileName })
                .then(image => image.idImage)
                .then((idImage) => {
                    res.json({ idImage: idImage })
                }).catch((error) => {
                    res.status(500).json({
                        stackTrace: error
                    })
                    console.log(error)
                })
        } catch (error) {
            res.status(500).json({
                stackTrace: error
            })
        }

    },

    async find(req, res) {
        try {
            const paramId = req.query.id
            Imagem.findByPk(paramId)
                .then((imagem) => {
                    const encodeData = Buffer.from(imagem.image).toString("ascii");
                    const response = {
                        file: encodeData
                    }
                    res.json(response)
                }).catch((error) => {
                    console.log(error)
                    res.status(500).json(
                        { stackTrace: error })
                })
        } catch (error) {
            console.log(error)
            res.status(500).json(
                { stackTrace: error })
        }


    }

}
