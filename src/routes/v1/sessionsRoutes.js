const express = require("express");
const router = express.Router();
const sessionsController = require("../../controllers/sessionsController")

// localhost:3001/havenV1/sessions
router.route("/")
    .get(sessionsController.getAllSessions);

// localhost:3001/havenV1/sessions/today
router.route("/today")
    .get(sessionsController.getTodaySessions);

// localhost:3001/havenV1/sessions/sincetoday
router.route("/sincetoday")
    .get(sessionsController.getAllSessionsSinceToday);

module.exports.router = router;