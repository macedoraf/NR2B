const { Model, DataTypes } = require('sequelize');

class Funcionario extends Model {
    static init(sequelize) {
        super.init({
            cpfCliente: {
                type: DataTypes.NUMBER,
                allowNull: false,
                primaryKey: true,

            },
            nome: DataTypes.TEXT,
            telefone: DataTypes.TEXT,
            email: DataTypes.TEXT,
            senha: DataTypes.TEXT,
        }, {
            sequelize,
            modelName: 'Funcionario'
        })
    }
}

module.exports = Funcionario;