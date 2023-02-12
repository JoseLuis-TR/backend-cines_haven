const usersModels = require("../database/usersModel")

const getAllUsers = () => {
    return usersModels.getAllUsers()
}

const getOneUser = (nickname) => {
    return usersModels.getOneUser(nickname)
}

module.exports = {
    getAllUsers,
    getOneUser
}