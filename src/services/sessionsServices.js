const sessionsModel = require("../database/sessionsModel");

// Llamada desde localhost:3001/havenV1/sessions´
// Recibimos todas las sesiones de la base de datos
const getAllSessions = () => {
    console.log("Get /sessions Servicios")
    return sessionsModel.getAllSessions();
}

// Llamada desde localhost:3001/havenV1/sessions/sincetoday
// Recibimos todas las sesiones desde hoy
const getAllSessionsSinceToday = () => {
    console.log("Get /sincetoday Servicios")
    return sessionsModel.getAllSessionSinceToday()
}

// Llamada desde localhost:3001/havenV1/sessions/today
// Recibimos todas las sesiones que tengan como fecha el día de hoy
const getTodaySessions = () => {
    console.log("Get /sessions/today Servicios")
    return sessionsModel.getTodaySessions();
}

module.exports = {
    getAllSessions,
    getTodaySessions,
    getAllSessionsSinceToday
}