module.exports = {
    dialect: 'mysql',
    host: 'br562.hostgator.com.br',
    username: 'nr2bco71_Adm',
    password: '@li@nc@$',
    database: 'nr2bco71_Homol',
    port: 3306,
    define: {
        timestamps: true, //todo campo no banco de dados vai ter um created_at, updated_at -> preenchimento de log de alteração
        underscored: true, //definir o nome de tablea no formato Snake case
    },
};
