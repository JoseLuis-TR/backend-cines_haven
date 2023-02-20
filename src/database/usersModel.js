const userData = require("./users.json");
const fs = require("fs");
const path = require("path");

// Llamada desde localhost:3001/havenV1/users
// Devolvemos todos los usuarios de la base de datos
const getAllUsers = () => {
    console.log("Get /users Model")
    return userData
}

// Llamada desde localhost:3001/havenV1/users/:nick
// Devolvemos un usuario en concreto
const getOneUser = (nick) => {
    console.log("Get /users/:nick Model")
    // Devolvemos el usuario o lista vacia
    console.log(nick)
    return userData.filter(user => user.nick === nick);
}

// Llamada desde localhost:3001/havenV1/users con body
// Recibimos un usuario nuevo y lo añadimos a la base de datos
const postNewUser = (newUser) => {
    console.log("Post /users Model")

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

// Llamada desde localhost:3001/havenV1/users/updateuser con body
// Recibimos un usuario modificado y lo actualizamos en la base de datos
const updateUser = (userModificado) => {
    console.log("Put /users Model")

    // Revisamos que el usuario que queremos modificar existe
    const userOriginal = userData.find(user => 
        user.id.toString() === userModificado.id
    )

    console.log(userOriginal.nick)

    // En caso de cambio de nick, revisamos que el nuevo nick no este en uso
    if(userModificado.nick !== userOriginal.nick){
        const check = userData.find(function (user){
            return user.nick.toLowerCase() === userModificado.nick.toLowerCase()
        })
        // Devolvemos un mensaje en caso de existir el usuario
        if(check) return {"message": "Nombre de usuario ya en uso"}
    }

    // Devolvemos un mensaje en caso de no existir el usuario
    if(!userOriginal) return {"message": "Nombre de usuario no encontrado"}

    // Si se ha cambiado la foto de perfil, se borra la anterior
    if(userModificado.profilePicture !== "" && userOriginal.profilePicture !== ""){
        const filename = userOriginal.profilePicture.split("/")[2];
        const filePath = path.join(__dirname, "..","public", "profilepics", filename);
        fs.unlinkSync(filePath);
    } else if (userModificado.profilePicture === "" && userOriginal.profilePicture !== "") {
        userModificado.profilePicture = userOriginal.profilePicture
    }

    // Si no se ha cambiado la contraseña, se mantiene la original
    if(userModificado.password === ""){
        userModificado.password = userOriginal.password
    }

    let userModificadoFinal;

    // Se modifica el usuario en el objeto de la base de datos
    userData.forEach((user, index) => {
        if(user.id.toString() === userModificado.id){
            userData[index] = userModificado
            userModificadoFinal = userData[0]
            return
        }
    })

    // Se modifica la base de datos
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