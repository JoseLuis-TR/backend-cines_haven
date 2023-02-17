const usersModels = require("../database/usersModel")
const {v4: uuid} = require("uuid")

// Llamada desde localhost:3001/havenV1/users
const getAllUsers = () => {
    return usersModels.getAllUsers()
}

// Llamada desde localhost:3001/havenV1/users/:nickname
const getOneUser = (nick) => {
    return usersModels.getOneUser(nick)
}

// Llamada desde localhost:3001/havenV1/users con body
const postNewUser = (newUser) => {

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

const updateUser = (userModificado) => {
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