const moviesData = require("./movies.json");
const sessionsController = require("./sessionsModel")

// Llamada desde localhost:3001/havenV1/movies
// Devolvemos todas las peliculas de la base de datos
const getAllMovies = () => {
    console.log("Get /movies Model")
    return moviesData
}

// Llamada desde localhost:3001/havenV1/movies/:id
// Devolvemos una pelicula en concreto usando su id
const getOneMovie = (id) => {
    console.log("Get /movies/:id Model")

    // Se busca la pelicula en la base de datos por su id
    const selectedMovie = moviesData.filter(function(movie) {
        return movie.id.toString() === id
    })

    // En caso de que se haya encontrado alguna pelicula se añade más info
    // Si no, se devuelve una lista vacia
    if(selectedMovie.length > 0){
        // Recogemos las sesiones desde hoy en adelante
        const sessionsSinceToday = sessionsController.getAllSessionSinceToday()
        selectedMovie[0].sessions = []
        // Filtramos las sesiones con id de la pelicula buscada
        sessionsSinceToday.filter(function(session)  {
            if(session.movie_id === selectedMovie[0].id){
                // Añadimos info sobre fecha y horas de la sesión
                selectedMovie[0].sessions.push({
                    date: session.date,
                    time: session.time
                })
            }
        })
    }
    return selectedMovie
}

module.exports = {
    getAllMovies,
    getOneMovie
}