const sessionsModel = require("../database/sessionsModel");

// Llamada desde localhost:3001/havenV1/sessions
const getAllSessions = () => {
    console.log("Get /sessions Servicios")
    return sessionsModel.getAllSessions();
}

// Llamada desde localhost:3001/havenV1/sessions/sincetoday
const getAllSessionsSinceToday = () => {
    console.log("Get /sincetoday Servicios")
    return sessionsModel.getAllSessionSinceToday()
}

// Llamada desde localhost:3001/havenV1/sessions/today
const getTodaySessions = () => {
    console.log("Get /sessions/today Servicios")
    return sessionsModel.getTodaySessions();
}

module.exports = {
    getAllSessions,
    getTodaySessions,
    getAllSessionsSinceToday
}