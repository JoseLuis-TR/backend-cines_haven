const sessionsModel = require("../database/sessionsModel");

const getAllSessions = () => {
    console.log("Get /sessions Servicios")
    return sessionsModel.getAllSessions();
}

const getAllSessionsSinceToday = () => {
    console.log("Get /sincetoday Servicios")
    return sessionsModel.getAllSessionSinceToday()
}

const getTodaySessions = () => {
    console.log("Get /sessions/today Servicios")
    return sessionsModel.getTodaySessions();
}

module.exports = {
    getAllSessions,
    getTodaySessions,
    getAllSessionsSinceToday
}