const express = require("express");
const router = express();
const movieController = require("../../controllers/moviesController")

// localhost:3001/havenV1/movies
// Recibimos todas las peliculas de la base de datos
router.route("/")
    .get(movieController.getAllMovies)

// localhost:3001/havenV1/movies/:id
// Recibimos una pelicula en concreto usando su id
router.route("/:id")
    .get(movieController.getOneMovie)


module.exports.router = router;