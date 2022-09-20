const express = require('express');
const router = express.Router();

router.get('/homepage', (req, res) => {
    res.render('pages/homepage');
})

router.get('/aboutmepage', (req, res) => {
    res.render('pages/aboutmepage');
})

router.get('/portfoliopage', (req, res) => {
    res.render('pages/portfoliopage');
})

module.exports = router;