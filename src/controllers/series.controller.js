const Movie = require("../models/movie.model");

module.exports = {
  getSeries: async (req, res) => {
    try {
      const page = parseInt(req.query.page) - 1 || 0;
      const limit = parseInt(req.query.limit) || 10;
      const search = req.query.search || "";
      let year = req.query.year || "all";
      let sort = req.query.sort || "year";
      let genre = req.query.genre || "all";
      const years = [
        2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011,
        2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022,
      ];
      const genres = [
        "Action",
        "Adventure",
        "Animation",
        "Biography",
        "Comedy",
        "Crime",
        "Documentary",
        "Drama",
        "Family",
        "Fantasy",
        "History",
        "Horror",
        "Music",
        "Musical",
        "Mystery",
        "News",
        "Romance",
        "Sci-Fi",
        "Short",
        "Sport",
        "Thriller",
        "War",
        "Western",
      ];
      year === "all" ? (year = [...years]) : (year = req.query.year.split(","));
      genre === "all"
        ? (genre = [...genres])
        : (genre = req.query.genre.split(","));
      req.query.sort ? (sort = req.query.sort.split(",")) : (sort = [sort]);
      let sortBy = {};
      if (sort[1]) {
        sortBy[sort[0]] = sort[1];
      } else {
        sortBy[sort[0]] = "asc";
      }
      const series = await Movie.find({
        title: { $regex: search, $options: "i" },
        type: "series",
      })
        .where("genres")
        .in([...genre])
        .where("year")
        .in([...year])
        .sort(sortBy)
        .skip(page * limit)
        .limit(limit);

      const total = await Movie.countDocuments({
        genre: { $in: [...genre] },
        title: { $regex: search, $options: "i" },
      });

      const response = {
        error: false,
        total,
        page: page + 1,
        limit,
        genres,
        series,
      };
      res.json(response);
    } catch (error) {
      console.error(error);
      res.status(404).send(error);
    }
  },
  getSerieById: async (req, res) => {
    try {
      const response = await Movie.findById(req.params._id);
      res.json(response);
    } catch (error) {
      console.error(error);
      res.status(404).send(error);
    }
  },
  getSerieByTitle: async (req, res) => {
    try {
      const response = await Movie.findOne({ title: req.params.title });
      res.json(response);
    } catch (error) {
      console.error(error);
      res.status(404).send(error);
    }
  },
};
