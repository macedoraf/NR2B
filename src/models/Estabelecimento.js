const { Model, DataTypes } = require('sequelize');

class Estabelecimento extends Model {
    static init(sequelize){
        super.init({
            cnpj: {
                type: DataTypes.STRING,
                allowNull: false,
                primaryKey: true,

            },
            nomeFantasia: DataTypes.TEXT,
            razaoSocial:DataTypes.TEXT,
            telefone:DataTypes.TEXT,
            cep:DataTypes.TEXT,
            cidade:DataTypes.TEXT,
            estado:DataTypes.TEXT,
            bairro:DataTypes.TEXT,
            endereco:DataTypes.TEXT,
            numero:DataTypes.TEXT,
            logo:DataTypes.TEXT,
            longitude:DataTypes.TEXT,
            latitude:DataTypes.TEXT
        },  {
                sequelize,
                modelName: 'Estabelecimento'
            })
    }
}

module.exports = Estabelecimento;