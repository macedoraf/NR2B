const { Model, DataTypes } = require('sequelize');

class Academia extends Model {
    static init(sequelize){
        super.init({
            cnpjAcademia: {
                type: DataTypes.NUMBER,
                allowNull: false,
                primaryKey: true,

            },
            nomefantasia: DataTypes.TEXT,
            razaosocial:DataTypes.TEXT,
            telefone:DataTypes.TEXT,
            cep:DataTypes.TEXT,
            cidade:DataTypes.TEXT,
            estado:DataTypes.TEXT,
            bairro:DataTypes.TEXT,
            endereco:DataTypes.TEXT,
            numero:DataTypes.TEXT,
            logoAcademia:DataTypes.TEXT
        },  {
                sequelize,
                modelName: 'academia'
            })
    }
}

module.exports = Academia;