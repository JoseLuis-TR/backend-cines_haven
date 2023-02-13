const express = require("express");
const router = express();
const userController = require("../../controllers/usersController")

// localhost:3001/havenV1/users
router.route("/")
    .get(userController.getAllUsers)
    .post(userController.postNewUser)

// localhost:3001/havenV1/users/:nickname
router.route("/:nickname")
    .get(userController.getOneUser)

module.exports.router = router;