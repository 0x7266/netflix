const { Router } = require("express");
const {
  getSeries,
  getSerieById,
  getSerieByTitle,
} = require("../controllers/series.controller");
const router = Router();

router.get("/", getSeries);
router.get("/:_id", getSerieById);
router.get("/title/:title", getSerieByTitle);

module.exports = router;
