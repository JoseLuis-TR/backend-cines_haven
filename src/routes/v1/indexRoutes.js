const express = require("express");
const router = express.Router();
const sessionsRoutes = require("./sessionsRoutes")
const usersRoutes = require("./usersRoutes")
const moviesRoutes = require("./moviesRoutes")

// localhost:3001/havenV1/
// Llamada a raíz
router.get("/",(req,res,next) => {
    res.send("Llamada a raíz 👍")
})

// localhost:3001/havenV1/sessions
// Llamada a raiz de sesiones
router.use("/sessions", sessionsRoutes.router);
// localhost:3001/havenV1/users
// Llamada a raiz de usuarios
router.use("/users", usersRoutes.router);
// localhost:3001/havenV1/movies
// Llamada a raiz de peliculas
router.use("/movies", moviesRoutes.router)

module.exports.router = router;