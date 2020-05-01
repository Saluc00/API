const express = require('express')
const path = require('path')
const app = express()
const sqlite3 = require('sqlite3')

// Chargement du moteur de views
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

// Connexion à la BDD    
const db = new sqlite3.Database('run.db', (err) => {
    if (err) {
        console.log(error.message)
    }
    console.log('Connecté à la BDD')
})

// Fonction GET
function get(route, request) {
    app.get(route, (req, res) => {
        let r = req.params.id ? request + ` where id = ${req.params.id}` : request
        db.all(r, [], (err, rows) => {
            if (rows.length === 0) {
                res.send('Introuvable..')
            } else {
                console.log('--- ' + route + ' ---')
                res.send({
                    data: rows
                })
            }
        });
    })
}

// Fonction DELETE
function del(route, request) {
    app.get(route, (req, res) => {
        console.log('--- ' + route + ' ---')
        let r = req.params.id ? request + ` where id = ${req.params.id}` : request
        db.run(r)
        res.send('Supprimé !')
    })
}

// =============== Toutes les routes ===============
// GET ===============

// User
get('/users', `SELECT * FROM player`)
get('/user/:id', `SELECT * FROM player`)
// Game
// get('/games', `SELECT * FROM game`)
get('/game/:id', `SELECT * FROM game`)
// Run
get('/runs', `SELECT * FROM run`)
get('/run/:id', `SELECT * FROM run`)

// DELETE ===============
del('/del/user/:id', `DELETE FROM player`)
del('/del/run/:id', `DELETE FROM run`)
del('/del/game/:id', `DELETE FROM game`)

// Route pour faire des tests
app.get('/', function (req, res) {
    let result = []
    db.get('select count(id) from player', [], (err, row) => {
        console.log(1, row)
        result.push(row)
    })
    db.get('select count(id) from game', [], (err, row) => {
        console.log(2, row)
        result.push(row)
    })
    db.get('select count(id) from run', [], (err, row) => {
        console.log(3, row)
        result.push(row)
    })
    setTimeout(() => console.log(4, result), 500)
    setTimeout(() => res.render('home', {
        users: Object.values(result[0]) /* Nombre des users */ ,
        games: Object.values(result[1]) /* Nombre des games */ ,
        runs: Object.values(result[2]) /* Nombre des runs */
    }), 500)
})


app.get('/games', function (req, res) {
    let test = []
    db.all('select * from game', [], (err, rows) => {
        if (rows.length === 0) {
            res.send('Introuvable..')
        } else {
            console.log(rows)
            res.render('games', {
                all: rows
            })
        }
    });

})

// Ecoute du serveur du le port 3000
app.listen(3000, () => console.log('Serveur OK !'))