const moviesServices = require("../services/moviesServices")

// Llamada desde localhost:3001/havenV1/movies
// Recibimos todas las peliculas de la base de datos
const getAllMovies = (req, res, next) => {
    console.log("Get /movies Controlador")

    const allMoviesData = moviesServices.getAllMovies()

    if(allMoviesData.length === 0){
        res.status(404).send({"mensaje":"No hay peliculas"}).end();
    } else {
        res.status(200).send(allMoviesData).end();
    }
}

// Llamada desde localhost:3001/havenV1/movies/:id
// Recibimos una pelicula en concreto usando su id
const getOneMovie = (req,res,next) => {
    console.log("Get /movies/:id Controlador")
    
    // Extraemos el id de la petición
    const { id } = req.params;

    const movieData = moviesServices.getOneMovie(id)

    if(movieData.length > 0){
        res.status(200).send(movieData).end();
    } else {
        res.status(404).send({"mensaje":"No existe esa pelicula"}).end();
    }
}

module.exports = {
    getAllMovies,
    getOneMovie
}