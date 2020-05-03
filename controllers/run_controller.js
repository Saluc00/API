const Runs = require('../models/runs')
const Games = require('../models/games')
const Users = require('../models/users')

Runs.hasOne(Games, {
    foreignKey: 'id'
})
Runs.belongsTo(Games, {
    foreignKey: 'fk_gameID'
})
Runs.hasOne(Users, {
    foreignKey: 'id'
})
Runs.belongsTo(Users, {
    foreignKey: 'fk_playerID'
})

exports.all_runs = (req, res) => {
    Runs
        .findAll({
            include: [{
                model: Games,
                required: true
            }, {
                model: Users,
                required: true
            }]
        })
        .then(runs => {
            Runs
                .count()
                .then(count => {
                    res.render('runs', {
                        all_res: count,
                        title: 'Runs',
                        all: runs
                    })
                })
        })
}

exports.delete_runs = (req, res) => {
    let idRun = req.body.id
    Runs
        .destroy({
            where: {
                id: idRun
            }
        })
        .then(result => {
            res.redirect('back');
        })
}

exports.create_runs = (req, res) => {
    let rankInsert = req.body.rank
    let timeInsert = req.body.time
    let verifiedInsert = req.body.verified
    let plateformInsert = req.body.plateform
    let dateInsert = req.body.date
    let fk_playerIDInsert = req.body.fk_playerID
    let fk_gameIDInsert = req.body.fk_gameID
    Runs
        .create({
            rank: rankInsert,
            time: timeInsert,
            verified: verifiedInsert,
            plateform: plateformInsert,
            date: dateInsert,
            fk_playerID: fk_playerIDInsert,
            fk_gameID: fk_gameIDInsert
        })
        .then(res.redirect('back'))
}

exports.update_runs = (req, res) => {
    let idRun = req.body.id
    let newRankInsert = req.body.newRank
    let newTimeInsert = req.body.newTime
    let newVerifiedInsert = req.body.newVerified
    let newPlateformInsert = req.body.newPlateform
    let newDateInsert = req.body.newDate
    let newFk_playerIDInsert = req.body.newFk_playerID
    let newFk_gameIDInsert = req.body.newFk_gameID
    Runs
        .update({
            rank: newRankInsert,
            time: newTimeInsert,
            verified: newVerifiedInsert,
            plateform: newPlateformInsert,
            date: newDateInsert,
            fk_playerID: newFk_playerIDInsert,
            fk_gameID: newFk_gameIDInsert
        }, {
            where: {
                id: idRun
            }
        })
        .then(runs => {
            res.redirect('back');
        })
}

exports.find_runs = (req, res) => {
    let search = req.body.name
    let type = req.body.type
    let request = ""
    let url = ""
    switch (type) {
        case "id": {
            url = "id"
            request = Runs
                .findAll({
                    where: {
                        id: search
                    }
                })
            break;
        }
        case "rank": {
            url = "rank"
            request = Runs
                .findAll({
                    where: {
                        rank: search
                    }
                })
            break;
        }
        case "plateform": {
            url = "plateform"
            request = Runs
                .findAll({
                    where: {
                        plateform: search
                    }
                })
            break;
        }
        case "playerName": {
            url = "playerName"
            request = Runs
                .findAll({
                    where: {
                        fk_playerID: search
                    }
                })
            break;
        }
        case "gameName": {
            url = "gameName"
            request = Runs
                .findAll({
                    where: {
                        fk_gameID: search
                    }
                })
            break;
        }
    }
    request
        .then(result => {
            res.redirect(`/run/${url}/${search}`);
        })
}

exports.search_runs = (req, res) => {
    let type = req.params.param1
    let search = req.params.param2
    switch (type) {
        case "id": {
            request = Runs
                .findAll({
                    include: [{
                        model: Games,
                        required: true
                    }, {
                        model: Users,
                        required: true
                    }],
                    where: {
                        id: search
                    }
                })
            requestCount = Runs
                .count({
                    include: [{
                        model: Games,
                        required: true
                    }, {
                        model: Users,
                        required: true
                    }],
                    where: {
                        id: search
                    }
                })
            break;
        }
        case "rank": {
            request = Runs
                .findAll({
                    include: [{
                        model: Games,
                        required: true
                    }, {
                        model: Users,
                        required: true
                    }],
                    where: {
                        rank: search
                    }
                })
            requestCount = Runs
                .count({
                    include: [{
                        model: Games,
                        required: true
                    }, {
                        model: Users,
                        required: true
                    }],
                    where: {
                        rank: search
                    }
                })
            break;
        }
        case "plateform": {
            request = Runs
                .findAll({
                    include: [{
                        model: Games,
                        required: true
                    }, {
                        model: Users,
                        required: true
                    }],
                    where: {
                        plateform: search
                    }
                })
            requestCount = Runs
                .count({
                    include: [{
                        model: Games,
                        required: true
                    }, {
                        model: Users,
                        required: true
                    }],
                    where: {
                        plateform: search
                    }
                })
            break;
        }
        case "playerName": {
            request = Runs
                .findAll({
                    include: [{
                        model: Games,
                        required: true
                    }, {
                        model: Users,
                        required: true,
                        where: {
                            name: search
                        }
                    }]
                })
            requestCount = Runs
                .count({
                    include: [{
                        model: Games,
                        required: true
                    }, {
                        model: Users,
                        required: true,
                        where: {
                            name: search
                        }
                    }]
                })
            break;
        }
        case "gameName": {
            request = Runs
                .findAll({
                    include: [{
                        model: Games,
                        required: true,
                        where: {
                            name: search
                        }
                    }, {
                        model: Users,
                        required: true
                    }]
                })
            requestCount = Runs
                .count({
                    include: [{
                        model: Games,
                        required: true,
                        where: {
                            name: search
                        }
                    }, {
                        model: Users,
                        required: true
                    }]
                })
            break;
        }
    }
    request
        .then(runs => {
            requestCount
                .then(count => {
                    if (runs[0] != undefined) {
                        res.render('runs', {
                            all_res: count,
                            title: 'Runs',
                            all: runs
                        })
                    } else {
                        Runs
                            .findAll({
                                include: [{
                                    model: Games,
                                    required: true
                                }, {
                                    model: Users,
                                    required: true
                                }]
                            })
                            .then(allRuns => {
                                Runs
                                    .count()
                                    .then(count => {
                                        res.render('runs', {
                                            error: 'Undiscovered..',
                                            all_res: count,
                                            title: 'Runs',
                                            all: allRuns
                                        })
                                    })
                            })
                    }

                })
        })
}