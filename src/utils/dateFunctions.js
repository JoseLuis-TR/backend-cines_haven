// Función usada para formatear las fechas en un mismo formato
// para que sea más facil compararlas con las de la base de datos
const getTodayFormatted = () => {
    const today = new Date()
    let dia = today.getDate().toString()
    dia = dia.length === 1 ? "0" + dia : dia;
    let mes = (today.getMonth() + 1).toString()
    mes = mes.length === 1 ? "0" + mes : mes;
    return `${dia}/${mes}/${today.getFullYear()}`
}

// Necesaria para conocer si una fecha es posterior a otra
// Se usa en la petición de peliculas desde el día de hoy, de esta manera
const isSameOrLater = (date1, date2) => {
    date1 = date1.split("/")
    date2 = date2.split("/")

    const dateObject1 = new Date(date1[2], date1[1], date1[0])
    const dateObject2 = new Date(date2[2], date2[1], date2[0])
    return dateObject1 >= dateObject2
}

module.exports = {
    getTodayFormatted,
    isSameOrLater
}