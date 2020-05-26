const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");

/* GET home page */
router.get("/", (req, res, next) => {
  console.log("called");
  res.json({ message: "index" });
});

router.get("/movies", async (req, res) => {
  const result = await Movie.find({});
  res.json({ movies: result });
});

router.get("/movies/:id", async (req, res) => {
  const result = await Movie.findById(req.params.id);
  res.json({ movie: result });
});

module.exports = router;
