const express = require('express')
const path = require('path')
const app = express()
const Games = require('./controllers/game_controller')
const Users = require('./controllers/user_controller')
const Runs = require('./controllers/run_controller')
var bodyParser = require('body-parser')
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
    extended: true
}));

app.use(express.json()); // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies

// Chargement du moteur de views
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')


// =============== Toutes les routes ===============
// GET ===============

// Home
app.get('/', function (req, res) {
    res.render('home', {

    })
})

// User
app.get('/users', Users.all_users)
app.get('/user/:id', Users.search_users)
app.post('/del/user', Users.delete_users)
app.post('/create/user', Users.create_users)
app.post('/update/user', Users.update_users)
app.post('/find/user', Users.find_users)

// Game
app.get('/games', Games.all_games)
app.get('/game/:id', Games.search_games)
app.post('/del/game', Games.delete_games)
app.post('/create/game', Games.create_games)
app.post('/update/game', Games.update_games)
app.post('/find/game', Games.find_games)

// Run
app.get('/runs', Runs.all_runs)
app.get('/run/:param1/:param2', Runs.search_runs)
app.post('/test', Runs.find_runs)
// app.get('/runs/:id', Runs.search_runs)
// app.get('/runs/:rank', Runs.search_runs)
// app.get('/runs/:plateform', Runs.search_runs)
// app.get('/runs/:player', Runs.search_runs)
// app.get('/runs/:game', Runs.search_runs)
app.post('/del/run', Runs.delete_runs)
app.post('/create/run', Runs.create_runs)
app.post('/update/run', Runs.update_runs)

// Ecoute du serveur du le port 3000
app.listen(3000, () => console.log('Serveur OK !'))

// Error Handling
app.use((req, res) => {
    res.status(404).render('404')
    // res.status(501).send("Not Implemented, Sorry for that !")
})