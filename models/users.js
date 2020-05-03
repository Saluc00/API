const { Sequelize, Model, DataTypes } = require('sequelize')
const sequelize = new Sequelize({
    host: 'localhost',
    dialect: 'sqlite',
    storage: 'run.db'
})

class Users extends Model { }
Users.init({
    id: {
        type: DataTypes.INTEGER, primaryKey: true
    },
    name: DataTypes.TEXT,
}, { sequelize, modelName: 'users', timestamps: false })

module.exports = Users