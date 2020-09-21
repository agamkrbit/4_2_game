const express = require('express');
const app = express();
var cors = require('cors');
const bodyParse = require('body-parser');
const gameHanlder = require('./routers/game');

//cors enabled
app.use(cors());

// json parser
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: true }));

app.use('/game', gameHanlder);


app.listen(5000, () => { console.log('server started at 5000') })