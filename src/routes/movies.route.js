const { Router } = require('express');
const {
  getMovies,
  getMovieById,
  getMovieByTitle,
} = require('../controllers/movies.controller');
const router = Router();

router.get('/', getMovies);
router.get('/:_id', getMovieById);
router.get('/title/:title', getMovieByTitle);

module.exports = router;
