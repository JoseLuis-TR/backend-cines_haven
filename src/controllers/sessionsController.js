const sessionsServices = require("../services/sessionsServices");

const getAllSessions = (req,res,next) => {
    console.log("Get /sessions Controlador")
    const allSessions = sessionsServices.getAllSessions();
    res.send(allSessions);
}

const getAllSessionsSinceToday = (req,res,next) => {
    console.log("Get /sincetoday Controladorr")
    const sinceToday = sessionsServices.getAllSessionsSinceToday()
    res.send(sinceToday)
}

const getTodaySessions = (req,res,next) => {
    console.log("Get /sessions/today Controlador")
    const todaySessions = sessionsServices.getTodaySessions();
    res.send(todaySessions)
}

module.exports = {
    getAllSessions,
    getTodaySessions,
    getAllSessionsSinceToday
}