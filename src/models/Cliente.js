const { Model, DataTypes } = require('sequelize');

class Cliente extends Model {
    static init(sequelize){
        super.init({
            cpfCliente: DataTypes.TEXT,
            nome: DataTypes.TEXT,
            telefone:DataTypes.TEXT,
            email:DataTypes.TEXT,
            senha:DataTypes.TEXT,
        },  {
                sequelize
            })
    }
}

module.exports = Cliente;