const moviesServices = require("../services/moviesServices")

// Llamada desde localhost:3001/havenV1/movies
const getAllMovies = (req, res, next) => {
    const allMoviesData = moviesServices.getAllMovies()
    res.status(200).send(allMoviesData)
}

// Llamada desde localhost:3001/havenV1/movies/:id
const getOneMovie = (req,res,next) => {
    // Extraemos el id de la petición
    const { id } = req.params;

    const movieData = moviesServices.getOneMovie(id)

    if(movieData.length > 0){
        res.status(200).send(movieData);
    } else {
        res.status(404).send({"mensaje":"No existe esa pelicula"}).end();
    }
}

module.exports = {
    getAllMovies,
    getOneMovie
}