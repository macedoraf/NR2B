const { Model, DataTypes } = require('sequelize');

class Imagem extends Model {
    static init(sequelize) {
        super.init(
            {
                idImage: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true,

                },
                image: DataTypes.BLOB,
                extension: DataTypes.STRING,
                fileName: DataTypes.STRING
            }, {
            sequelize,
            modelName: 'Imagen'
        }
        )
    }
}

module.exports = Imagem;