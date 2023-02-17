const userData = require("./users.json");
const fs = require("fs");

// Llamada desde localhost:3001/havenV1/users
const getAllUsers = () => {
    console.log("Get /users Model")
    return userData
}

// Llamada desde localhost:3001/havenV1/users/:nickname
const getOneUser = (nick) => {
    // Devolvemos el usuario o lista vacia
    console.log(nick)
    return userData.filter(user => user.nick === nick);
}

// Llamada desde localhost:3001/havenV1/users con body
const postNewUser = (newUser) => {

    // Revisamos que el usuario no existe
    const check = userData.find(function (user){
        return user.nick === newUser.nick
    })
    // Devolvemos falso en caso de existir el usuario
    if(check) return {"message": "Nombre de usuario ya en uso"}

    // Si no, se añade y se modifica la base de datos
    userData.push(newUser)
    fs.writeFileSync(
        "./src/database/users.json",
        JSON.stringify(userData, null, 2),
        "utf8"
    );

    return newUser
}

module.exports = {
    getAllUsers,
    getOneUser,
    postNewUser
}