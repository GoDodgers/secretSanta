var Sequelize = require("sequelize")

var sqlize = new Sequelize('database', 'password', null, {
    dialect: 'sqlite',
    storage: 'local.sqlite'
});

exports.Santa = sqlize.define('Santa', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
}, {
    underscored: true,
});

sqlize.sync({logging: console.log});
