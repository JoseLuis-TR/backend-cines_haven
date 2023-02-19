const utils = require("../utils/dateFunctions")
const sessionsData = require("./sessions.json");
const moviesData = require("./movies.json");
const roomsData = require("./rooms.json");

//Llamada desde localhost:3001/havenV1/sessions
// Devolvemos todas las sesiones de la base de datos
const getAllSessions = () => {
    console.log("Get /sessions Model")
    return sessionsData;
}

// Llamada desde localhost:3001/havenV1/sessions/sincetoday
// Devolvemos todas las sesiones desde hoy
const getAllSessionSinceToday = () => {
    console.log("Get /sincetoday AllToday Model")
    // Creamos una copia de las sesiones
    const sessionCopy = JSON.parse(JSON.stringify(sessionsData));
    // Recogemos la fecha de hoy en el formato que necesitamos
    const formattedToday = utils.getTodayFormatted()
    // Creamos el array que devolveremos
    const sessionsSinceToday = []
    // Recorremos la copia de sesiones
    sessionCopy.forEach(session => {
        // Filtramos los datos de peliculas y salas de cada sesión
        if(utils.isSameOrLater(session.date, formattedToday)) {
            // Recogemos datos de la pelicula y la sala de la sesión
            const movieData = moviesData.filter(x => x.id === session.movie_id);
            const roomData = roomsData.filter(y => y.id === session.room_id)
            Object.assign(
                session,
                {
                    // Añadimos los datos de peliculas y salas en la respuesta
                    roomName: roomData[0].name,
                    movieName: movieData[0].title,
                    moviePoster: movieData[0].poster_image
                }
            );
            sessionsSinceToday.push(session)
        }
    })
    return sessionsSinceToday;
}

// Llamada desde localhost:3001/havenV1/sessions/today
// Devolvemos todas las sesiones de hoy
const getTodaySessions = () => {
    console.log("Get /sessions/today AllTday Model")
    // Creamos una copia de las sesiones
    const sessionsCopy = JSON.parse(JSON.stringify(sessionsData));

    // Recogemos la fecha de hoy en formato correcto
    const formattedToday = utils.getTodayFormatted()

    // Creamos el array que devolveremos
    const todaySessionsComplete = []

    // Filtramos las sesiones de hoy
    const todaySessionsIncomplete = sessionsCopy.filter(
        session => session.date === formattedToday);

    // Recorremos las sesiones de hoy
    todaySessionsIncomplete.forEach(session => {
        // Recogemos id de pelicula de la sesión y busc++amos los datos de esta
        // en la tabla de peliculas
        const movieData = moviesData.filter(x => x.id === session.movie_id);
        Object.assign(
            session,
            {
                movieName: movieData[0].title,
                movieScreen: movieData[0].screenshot
            }
        );
        // Añadimos la sesión al array que devolveremos
        todaySessionsComplete.push(session)
    })
    return todaySessionsComplete
}

module.exports = {
    getAllSessions,
    getTodaySessions,
    getAllSessionSinceToday
}