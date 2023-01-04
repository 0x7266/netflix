const { Router } = require("express");
const router = Router();
const movies = require("./movies.route.js");
const series = require("./series.route.js");

router.use("/movies", movies);
router.use("/series", series);

module.exports = router;
