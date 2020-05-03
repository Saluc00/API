const { Sequelize, Model, DataTypes } = require('sequelize')
const Games = require('./games')
const Users = require('./users')
const sequelize = new Sequelize({
    host: 'localhost',
    dialect: 'sqlite',
    storage: 'run.db'
})

class Runs extends Model { }
Runs.init({
    id: {
        type: DataTypes.INTEGER, primaryKey: true
    },
    rank: DataTypes.TEXT,
    time: DataTypes.TEXT,
    verified: DataTypes.TEXT,
    plateform: DataTypes.TEXT,
    date: DataTypes.TEXT,
    fk_playerID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Users,
            key: 'fk_playerID'
        }
    },
    fk_gameID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Games,
            key: 'fk_gameID'
        }
    },
}, { sequelize, modelName: 'runs', timestamps: false })

module.exports = Runs