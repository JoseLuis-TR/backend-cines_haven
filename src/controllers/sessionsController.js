const sessionsServices = require("../services/sessionsServices");

// Llamada desde localhost:3001/havenV1/sessions
const getAllSessions = (req,res,next) => {
    console.log("Get /sessions Controlador")
    const allSessions = sessionsServices.getAllSessions();
    res.status(200).send(allSessions);
}

// Llamada desde localhost:3001/havenV1/sessions/sincetoday
const getAllSessionsSinceToday = (req,res,next) => {
    console.log("Get /sincetoday Controlador")
    const sinceToday = sessionsServices.getAllSessionsSinceToday()
    res.status(200).send(sinceToday)
}

// Llamada desde localhost:3001/havenV1/sessions/today
const getTodaySessions = (req,res,next) => {
    console.log("Get /sessions/today Controlador")
    const todaySessions = sessionsServices.getTodaySessions();
    res.status(200).send(todaySessions)
}

module.exports = {
    getAllSessions,
    getTodaySessions,
    getAllSessionsSinceToday
}