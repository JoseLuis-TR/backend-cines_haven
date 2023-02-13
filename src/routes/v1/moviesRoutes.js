const express = require("express");
const router = express();
const movieController = require("../../controllers/moviesController")

// localhost:3001/havenV1/movies
router.route("/")
    .get(movieController.getAllMovies)

// localhost:3001/havenV1/movies/:id
router.route("/:id")
    .get(movieController.getOneMovie)


module.exports.router = router;