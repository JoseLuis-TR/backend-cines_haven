const usersModels = require("../database/usersModel")
const {v4: uuid} = require("uuid")

// Llamada desde localhost:3001/havenV1/users
// Recibimos todos los usuarios de la base de datos
const getAllUsers = () => {
    console.log("Get /users Servicios")
    return usersModels.getAllUsers()
}

// Llamada desde localhost:3001/havenV1/users/:nickname
const getOneUser = (nick) => {
    console.log("Get /users/:nick Servicios")
    return usersModels.getOneUser(nick)
}

// Llamada desde localhost:3001/havenV1/users con body
// Recibimos un usuario nuevo y lo añadimos a la base de datos
const postNewUser = (newUser) => {
    console.log("Post /users Servicios")

    // Añadimos un id al usuario
    const newUserWithId = {
        id: uuid(),
        ...newUser
    }

    const createdUser = usersModels.postNewUser(newUserWithId)

    if(createdUser){
        return createdUser
    } else {
        return false
    }
}

// Llamada desde localhost:3001/havenV1/users con body
// Recibimos un usuario modificado y lo actualizamos en la base de datos
const updateUser = (userModificado) => {
    console.log("Put /users Servicios")

    const modifiedUser = usersModels.updateUser(userModificado)
    
    if(modifiedUser){
        return modifiedUser
    } else {
        return false
    }
}

module.exports = {
    getAllUsers,
    getOneUser,
    postNewUser,
    updateUser
}