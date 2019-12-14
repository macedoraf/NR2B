const { Model, DataTypes } = require('sequelize');

class Cliente extends Model {
    static init(sequelize){
        super.init({
            cpfCliente: {
                type: DataTypes.TEXT,
                allowNull: false,
                primaryKey: true,

            },
            nome: DataTypes.TEXT,
            telefone:DataTypes.TEXT,
            email:DataTypes.TEXT,
            senha:DataTypes.TEXT,
        },  {
                sequelize,
                modelName: 'cliente'
            })
    }
}

module.exports = Cliente;