const moviesModel = require("../database/moviesModel")

// Llamada desde localhost:3001/havenV1/movies
const getAllMovies = () => {
    console.log("Get /movies Servicios")
    return moviesModel.getAllMovies()
}

// Llamada desde localhost:3001/havenV1/movies/:id
const getOneMovie = (id) => {
    console.log("Get /movies/:id Servicios")
    return moviesModel.getOneMovie(id)
}

module.exports = {
    getAllMovies,
    getOneMovie
}