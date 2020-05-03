const Games = require('../models/games')
const Users = require('../models/users')
const Runs = require('../models/runs')
const {
    Sequelize,
    Model,
    DataTypes
} = require('sequelize')
const sequelize = new Sequelize({
    host: 'localhost',
    dialect: 'sqlite',
    storage: 'run.db'
})

function home_page(req, res) {
    Runs.count().then(runsCount => {
        Users.count().then(usersCount => {
            Games.count().then(gamesCount => {
                res.render('home', {
                    allCount: usersCount + gamesCount + runsCount,
                    users: usersCount,
                    games: gamesCount,
                    runs: runsCount
                })
            })
        })
    })

}

module.exports = home_page