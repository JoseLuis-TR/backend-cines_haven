const userData = require("./users.json");
const fs = require("fs");
const path = require("path");

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
        return user.nick.toLowerCase() === newUser.nick.toLowerCase()
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

const updateUser = (userModificado) => {
    // Revisamos que el usuario existe
    const userOriginal = userData.find(user => 
        user.id.toString() === userModificado.id
    )
    // Devolvemos falso en caso de no existir el usuario
    if(!userOriginal) return {"message": "Nombre de usuario no encontrado"}

    if(userModificado.profilePicture && userOriginal.profilePicture){
        const filename = userOriginal.profilePicture.split("/")[2];
        const filePath = path.join(__dirname, "..","public", "profilepics", filename);
        fs.unlinkSync(filePath);
    }

    // Si no, se modifica y se modifica la base de datos
    userData.forEach((user, index) => {
        if(user.id.toString() === userModificado.id){
            userData[index] = userModificado
            return
        }
    })

    console.log(userData)

    fs.writeFileSync(
        "./src/database/users.json",
        JSON.stringify(userData, null, 2),
        "utf8"
    );

    return userModificado
}

module.exports = {
    getAllUsers,
    getOneUser,
    postNewUser,
    updateUser
}