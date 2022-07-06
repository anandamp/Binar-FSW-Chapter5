const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');

app.listen(port, () => {
    console.log(`Listening server at http://localhost:${port}`)
})

const main = require('./controller/main');
const games = require('./controller/games')


// Middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));


// Route
app.get('/', (req, res) => {
    res.render('main.ejs')
})

app.get('/main', (req, res) => {
    res.render('main.ejs')
})

app.get('/games', (req, res) => {
    res.render('games.ejs')
})

app.get('/login', (req, res) => {
    res.render('login.ejs')
})








