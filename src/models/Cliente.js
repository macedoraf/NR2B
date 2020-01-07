const { Model, DataTypes } = require('sequelize');

class Cliente extends Model {
    static init(sequelize){
        super.init({
            cpf: {
                type: DataTypes.NUMBER,
                allowNull: false,
                primaryKey: true,

            },
            nome: DataTypes.TEXT,
            telefone:DataTypes.TEXT,
            email:DataTypes.TEXT,
            senha:DataTypes.TEXT,
        },  {
                sequelize,
                modelName: 'Cliente'
            })
    }
}

module.exports = Cliente;