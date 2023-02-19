const express = require("express");
const router = express.Router();
const sessionsController = require("../../controllers/sessionsController")

// localhost:3001/havenV1/sessions
// Recibimos todas las sesiones de la base de datos
router.route("/")
    .get(sessionsController.getAllSessions);

// localhost:3001/havenV1/sessions/today
// Recibimos todas las sesiones que tengan como fecha el día de hoy
router.route("/today")
    .get(sessionsController.getTodaySessions);

// localhost:3001/havenV1/sessions/sincetoday
// Recibimos todas las sesiones que tengan como fecha el día de hoy o una fecha posterior
router.route("/sincetoday")
    .get(sessionsController.getAllSessionsSinceToday);

module.exports.router = router;