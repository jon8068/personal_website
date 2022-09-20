const express = require('express');
const app = express();
const ejsMate = require('ejs-mate');
const path = require('path');

const pages = require('./routes/pages');

app.engine('ejs', ejsMate);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use("/pages", pages);

app.get('/', (req, res) => {
    res.render('pages/homepage');
})

app.use("/public", express.static(__dirname + "/public"));

app.listen(3000, () => {
    console.log("Serving on port 3000");
})