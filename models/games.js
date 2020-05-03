const { Sequelize, Model, DataTypes } = require('sequelize')
const sequelize = new Sequelize({
    host: 'localhost',
    dialect: 'sqlite',
    storage: 'run.db'
})

class Games extends Model { }
Games.init({
    id: {
        type: DataTypes.INTEGER, primaryKey: true
    },
    name: DataTypes.TEXT,
}, { sequelize, modelName: 'games', timestamps: false })

module.exports = Games