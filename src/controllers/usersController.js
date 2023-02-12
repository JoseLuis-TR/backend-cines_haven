const userServices = require("../services/usersServices")


const getAllUsers = (req,res,next) => {
    const allUsersData = userServices.getAllUsers();
    res.send(allUsersData);
}


const getOneUser = (req,res,next) => {
    const { username } = req.params;

    const userData = userServices.getOneUser(username);

    if(userData){
        res.send(userData);
    } else {
        res.status(404);
    }
}

module.exports = {
    getAllUsers,
    getOneUser
}