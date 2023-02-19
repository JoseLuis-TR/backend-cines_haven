const express = require("express");
const router = express();
const userController = require("../../controllers/usersController")
const multer = require("multer");
const path = require("path");

// localhost:3001/havenV1/users
// GET -> Recibe todos los usuarios
// POST -> Crea un nuevo usuario
router.route("/")
    .get(userController.getAllUsers)
    .post(userController.postNewUser)

// localhost:3001/havenV1/users/:nick
// Recibe un usuario en concreto
router.route("/:nick")
    .get(userController.getOneUser)

// localhost:3001/havenV1/users/updateuser
// Creamos el middleware para subir la imagen de perfil de usuario
// identificando la ruta que se usara para guardar las imagenes
// y el nombre que se le dara a cada una de ellas
const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null,  __dirname + "/../../public/profilepics")
    },
    filename: (req,file,cb) => {
        cb(null, file.originalname)
    }
});

// Paso necesario para indicar a multer (la libreria que nos ayudará a recibir imagenes)
// la información del anterior middleware
const uploads = multer({storage: storage});

// localhost:3001/havenV1/users/updateuser
// Actualiza un usuario
router.route("/updateuser")
   .put(uploads.single("profilePicture"), userController.updateUser)

module.exports.router = router;