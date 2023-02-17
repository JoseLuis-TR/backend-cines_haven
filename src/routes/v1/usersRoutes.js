const express = require("express");
const router = express();
const userController = require("../../controllers/usersController")
const multer = require("multer");
const path = require("path");

// localhost:3001/havenV1/users
router.route("/")
    .get(userController.getAllUsers)
    .post(userController.postNewUser)

// localhost:3001/havenV1/users/:email
router.route("/:nick")
    .get(userController.getOneUser)


const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null,  __dirname + "/../../public/profilepics")
    },
    filename: (req,file,cb) => {
        cb(null, file.originalname)
    }
});

const uploads = multer({storage: storage});

router.route("/updateuser")
   .put(uploads.single("profilePicture"), userController.updateUser)




module.exports.router = router;

