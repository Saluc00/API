const Games = require('../models/games')
const Runs = require('../models/runs')

exports.all_games = (req, res) => {
    Games
        .findAll()
        .then(games => {
            Games
                .count()
                .then(count => {
                    res.render('games',{
                        all_res: count,
                        title: 'Games',
                        all: games
                    })
                })
        })
}

exports.delete_games = (req, res) => {
    // Recupere l'id du jeu que l'on veux supprimer
    Games.findAll({
        where: {
            name: req.body.name
        }
    }).then( response => {
            let id = response[0].dataValues.id // Stoque l'id du jeu
            // Supprime tous les runs en relation avec le jeu
            Runs
            .destroy({
                where: {
                    fk_gameID: id
                }
            }).then(runDestroyed => {
                // Supprime le jeu
                Games
                    .destroy({
                        where: {
                            name: req.body.name
                        }
                    })
                    .then(games => {
                        // Redirige à la page des jeu
                        res.redirect('back');
                    })
            })

        })

} 

exports.create_games = (req, res) => {
    let nameInsert = req.body.name
    Games
        .create({ name: nameInsert })
        .then(games => {
            res.redirect('back');
        })
} 

exports.update_games = (req, res) => {
    let nameInsert = req.body.name
    let newNameInsert = req.body.newname
    Games
        .update({ name: newNameInsert}, {
            where: {
                name: nameInsert
            }
        })
        .then(games => {
            res.redirect('back');
        })
}

exports.find_games = (req, res) => {
    let nameFindOne = req.body.name
    Games.findAll({
        where: {
            name: nameFindOne
        }
    })
    .then(result => {
        let search = result[0].dataValues
        res.redirect(`/game/${search.id}`);
    })
    .catch(() => {
        res.status(404).render('404')
    })
} 

exports.search_games = (req, res) => {
    let idSearch = req.params.id
    Games
        .findAll({
            where: {
                id: idSearch
            }
        })
        .then(games => {
            Games
                .count()
                .then(count => {
                    res.render('games',{
                        all_res: 1,
                        title: 'Games',
                        all: games
                    })
                })
    })
}