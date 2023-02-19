const moviesModel = require("../database/moviesModel")

// Llamada desde localhost:3001/havenV1/movies
// Recibimos todas las peliculas de la base de datos
const getAllMovies = () => {
    console.log("Get /movies Servicios")
    return moviesModel.getAllMovies()
}

// Llamada desde localhost:3001/havenV1/movies/:id
// Recibimos una pelicula en concreto usando su id
const getOneMovie = (id) => {
    console.log("Get /movies/:id Servicios")
    return moviesModel.getOneMovie(id)
}

module.exports = {
    getAllMovies,
    getOneMovie
}