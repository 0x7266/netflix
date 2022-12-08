const { Router } = require('express');
const router = Router();
const movies = require('./movies.route.js');

router.use('/movies', movies);

module.exports = router;
