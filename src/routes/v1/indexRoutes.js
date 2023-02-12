const express = require("express");
const router = express.Router();
const sessionsRoutes = require("./sessionsRoutes")
const usersRoutes = require("./usersRoutes")

// localhost:3001/havenV1
router.get("/",(req,res,next) => {
    res.send("Llamada a raíz 👍")
})

router.use("/sessions", sessionsRoutes.router);
router.use("/users", usersRoutes.router);

module.exports.router = router;