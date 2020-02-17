const { Model, DataTypes } = require('sequelize');

class Cartao extends Model {
    static init(sequelize) {
        super.init({
            numeroCartao: {
                type: DataTypes.TEXT,
                allowNull: false,
                unique: true,
            },
            nameTitular: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            telefone: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            dataValidade: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            bandeira: {
                type: DataTypes.TEXT,
                allowNull: false,
            },

            cliente_cpf: {
                type: DataTypes.TEXT
            }
        }, {
            sequelize,
            modelName: 'Cartoe'
        })
    }
}

module.exports = Cartao;