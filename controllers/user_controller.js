const Users = require('../models/users')
const Runs = require('../models/runs')

exports.all_users = (req, res) => {
    Users
        .findAll()
        .then(users => {
            Users
                .count()
                .then(count => {
                    res.render('users', {
                        all_res: count,
                        title: 'Users',
                        all: users
                    })
                })
        })
}

exports.delete_users = (req, res) => {
    // Recupere l'id du jeu que l'on veux supprimer
    Users
        .findAll({
            where: {
                name: req.body.name
            }
        }).then(response => {
            let id = response[0].dataValues.id // Stoque l'id du jeu
            // Supprime tous les runs en relation avec le jeu
            Runs
                .destroy({
                    where: {
                        fk_playerID: id
                    }
                }).then(runDestroyed => {
                    // Supprime le jeu
                    Users
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

exports.create_users = (req, res) => {
    let nameInsert = req.body.name
    Users
        .create({
            name: nameInsert
        })
        .then(users => {
            res.redirect('back');
        })
}

exports.update_users = (req, res) => {
    let nameInsert = req.body.name
    let newNameInsert = req.body.newname
    Users
        .update({
            name: newNameInsert
        }, {
            where: {
                name: nameInsert
            }
        })
        .then(users => {
            res.redirect('back');
        })
}

exports.find_users = (req, res) => {
    let nameFindOne = req.body.name
    Users.findAll({
            where: {
                name: nameFindOne
            }
        })
        .then(result => {
            let search = result[0].dataValues
            res.redirect(`/user/${search.id}`);
        })
        .catch(() => {
            res.status(404).render('404')
        })
}

exports.search_users = (req, res) => {
    let idSearch = req.params.id
    Users
        .findAll({
            where: {
                id: idSearch
            }
        })
        .then(users => {
            Users
                .count()
                .then(count => {
                    res.render('users', {
                        all_res: 1,
                        title: 'Users',
                        all: users
                    })
                })
        })
}