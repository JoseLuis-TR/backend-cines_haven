const express = require("express");
const router = express();
const userController = require("../../controllers/usersController")

router.route("/")
    .get(userController.getAllUsers)

router.route("/:username")
    .get(userController.getOneUser)

module.exports.router = router;