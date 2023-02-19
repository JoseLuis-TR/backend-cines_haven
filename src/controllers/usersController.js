const userServices = require("../services/usersServices")

// Llamada desde localhost:3001/havenV1/users
// Recibimos todos los usuarios de la base de datos
const getAllUsers = (req,res,next) => {
    console.log("Get /users Controlador")

    const allUsersData = userServices.getAllUsers();
    if(allUsersData.length === 0){
        res.status(404).send({"mensaje":"No hay usuarios"}).end();
    } else {
        res.status(200).send(allUsersData).end()
    }
}

// Llamada desde localhost:3001/havenV1/users/:nick
// Recibimos un usuario en concreto usando su nick
const getOneUser = (req,res,next) => {
    console.log("Get /users/:nick Controlador")

    // Extramos el nick de la petición
    const { nick } = req.params;

    const userData = userServices.getOneUser(nick);

    if(userData.length > 0){
        res.status(200).send(userData);
    } else {
        res.status(404).send(false).end();
    }
}

// Llamada desde localhost:3001/havenV1/users con body
// Creamos un nuevo usuario
const postNewUser = (req,res,next) => {
    console.log("Post /users Controlador")

    // Extraemos los datos del cuerpo de la petición
    const { body } = req

    // Revisamos que no falten datos
    if(!body.nick || !body.email || !body.password){
        res.status(400).send({"mensaje":"Faltan datos"}).end()
    }

    // Creamos el objeto con los datos a crear
    const newUser = {
        "nick" : body.nick,
        "email" : body.email,
        "password" : body.password,
        "profilePicture" : "static/profilepics/default.svg"
    };

    const createdUser = userServices.postNewUser(newUser);

    // En caso de recibir un mensaje del modelo, es que ha habido un error
    if("message" in createdUser){
        res.status(406).send(createdUser).end()
    } else {
        res.status(200).send(createdUser)
    }
}

// Llamada desde localhost:3001/havenV1/users/updateuser con body
// Actualizamos un usuario
const updateUser = (req,res,next) => {
    console.log("Put /users/updateuser Controlador")

    // Extraemos los datos del cuerpo de la petición
    let { id, nick, email, password } = req.body;

    // Extraemos el archivo de la petición
    let file = req.file;

    // En caso de que no haya archivo, lo ponemos a false
    if(typeof file === "undefined"){
        file = false
    }

    // Revisamos que no falten datos
    if(!nick || !email){
        res.status(400).send({"mensaje":"Faltan datos"}).end()
    }

    // Creamos el objeto con los datos a crear
    const updateUser = {
        "id" : id,
        "nick" : nick,
        "email" : email,
        "password" : password,
        "profilePicture" : "static/profilepics/" + file.filename
    };

    const updatedUser = userServices.updateUser(updateUser);

    // En caso de recibir un mensaje del modelo, es que ha habido un error
    if("message" in updatedUser){
        res.status(406).send(updatedUser).end()
    } else {
        res.status(200).send(updatedUser)
    }
}

module.exports = {
    getAllUsers,
    getOneUser,
    postNewUser,
    updateUser
}