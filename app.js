const express = require('express');
const app = express();
const ejsMate = require('ejs-mate');
const path = require('path');

app.engine('ejs', ejsMate);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use("/public", express.static(__dirname + "/public"));

app.get('/', (req, res) => {
    res.render('pages/homepage');
})

app.get('/pages/homepage', (req, res) => {
    res.render('pages/homepage');
})

app.get('/pages/aboutmepage', (req, res) => {
    res.render('pages/aboutmepage');
})

app.get('/pages/portfoliopage', (req, res) => {
    res.render('pages/portfoliopage');
})

app.listen(3000, () => {
    console.log("Serving on port 3000");
})