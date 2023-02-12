const userData = require("./users.json");
const fs = require("fs");

const getAllUsers = () => {
    return userData
}

const getOneUser = (nickname) => {
    return userData.filter(user => user.nick === nickname);
}

module.exports = {
    getAllUsers,
    getOneUser
}