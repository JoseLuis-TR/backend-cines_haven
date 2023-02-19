const sessionsServices = require("../services/sessionsServices");

// Llamada desde localhost:3001/havenV1/sessions
// Recibimos todas las sesiones de la base de datos
const getAllSessions = (req,res,next) => {
    console.log("Get /sessions Controlador")
    const allSessions = sessionsServices.getAllSessions();
    if(allSessions.length === 0){
        res.status(404).send({"mensaje":"No hay sesiones"}).end();
    } else {
        res.status(200).send(allSessions).end();
    }
}

// Llamada desde localhost:3001/havenV1/sessions/sincetoday
// Recibimos todas las sesiones desde hoy
const getAllSessionsSinceToday = (req,res,next) => {
    console.log("Get /sessions/sincetoday Controlador")
    const sinceToday = sessionsServices.getAllSessionsSinceToday()
    if(sinceToday.length === 0){
        res.status(404).send({"mensaje":"No hay sesiones desde hoy"}).end();
    } else {
        res.status(200).send(sinceToday).end();
    }
}

// Llamada desde localhost:3001/havenV1/sessions/today
// Recibimos todas las sesiones que tengan como fecha el día de hoy
const getTodaySessions = (req,res,next) => {
    console.log("Get /sessions/today Controlador")
    const todaySessions = sessionsServices.getTodaySessions();
    if(todaySessions.length === 0){
        res.status(404).send({"mensaje":"No hay sesiones para hoy"}).end();
    } else {
        res.status(200).send(todaySessions).end();
    }
}

module.exports = {
    getAllSessions,
    getTodaySessions,
    getAllSessionsSinceToday
}