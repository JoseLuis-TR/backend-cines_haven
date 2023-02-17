const userServices = require("../services/usersServices")

// Llamada desde localhost:3001/havenV1/users
const getAllUsers = (req,res,next) => {
    const allUsersData = userServices.getAllUsers();
    res.status(200).send(allUsersData);
}

// Llamada desde localhost:3001/havenV1/users/:nickname
const getOneUser = (req,res,next) => {
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
const postNewUser = (req,res,next) => {
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
        "password" : body.password
    };

    console.log("Suficientes datos")
    const createdUser = userServices.postNewUser(newUser);

    if(createdUser){
        res.status(200).send(createdUser)
    } else {
        res.status(406).send(createdUser).end()
    }
}

module.exports = {
    getAllUsers,
    getOneUser,
    postNewUser
}