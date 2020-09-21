const gameHanlder = require('express').Router();
const uuid = require('uuid').v4;
const GameEngine = require('../game-engine');

const gameMap = new Map();

gameMap.set("2", new GameEngine(6, 7));

function responseBuilder(data = null, message = null, success = null) {
    return {
        data,
        message,
        success
    }
}

//start game
gameHanlder.post('/start', (req, res) => {
    const userId = uuid();
    const game = new GameEngine(6, 7)
    gameMap.set(userId, game);
    res.send(responseBuilder(userId, "successfull", true));
});

//reset game
gameHanlder.post('/:userId/reset', (req, res) => {
    const userId = req.params.userId || "";

    if (!userId || !gameMap.get(userId)) {
        res.send(responseBuilder(null, "invalid", false));
    } else {
        gameMap.get(userId).reset();
        res.send(responseBuilder(gameMap.get(userId).getJson(), "successfull", true));
    }
});

//get Game
gameHanlder.get('/:userId/game', (req, res) => {
    const userId = req.params.userId || "";
    
    if (!userId || !gameMap.get(userId)) {
        res.send(responseBuilder(null, "invalid", false));
    } else {
        res.send(
            responseBuilder(gameMap.get(userId).getJson(), "successfull", true)
        );
    }
})

//add coin
gameHanlder.post('/:userId/add', (req, res) => {
    const col = req.body.col || 0;
    const userId = req.params.userId || "";

    if (!userId || !gameMap.get(userId)) {
        res.send(responseBuilder(null, "invalid", false));
    } else {
        const response = gameMap.get(userId).add(col);
        if (response) {
            res.send(responseBuilder(gameMap.get(userId).getJson(), "successfull", true));
        } else {
            res.send(responseBuilder(gameMap.get(userId).getJson(), "falied", false));
        }
    }
})

module.exports = gameHanlder;