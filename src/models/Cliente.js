const { Model, DataTypes } = require('sequelize');

class Cliente extends Model {
    static init(sequelize) {
        super.init({
            cpf: {
                type: DataTypes.STRING,
                allowNull: false,
                primaryKey: true,

            },
            name: DataTypes.STRING,
            sbname: DataTypes.STRING,
            password: DataTypes.STRING,
            telefone: DataTypes.STRING,
            email: DataTypes.STRING,
        }, {
            sequelize,
            modelName: 'Cliente'
        })
    }
}

module.exports = Cliente;