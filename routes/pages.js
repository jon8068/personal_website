const express = require('express');
const router = express.Router(); 
const pages = require('../controllers/pages');

router.get('/homepage', pages.renderHomePage);

router.get('/aboutmepage', pages.renderAboutMePage);

router.get('/portfoliopage', pages.renderPortfolioPage);

module.exports = router;