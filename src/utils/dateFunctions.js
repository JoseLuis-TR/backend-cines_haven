const getTodayFormatted = () => {
    const today = new Date()
    let dia = today.getDate().toString()
    dia = dia.length === 1 ? "0" + dia : dia;
    let mes = (today.getMonth() + 1).toString()
    mes = mes.length === 1 ? "0" + mes : mes;
    return `${dia}/${mes}/${today.getFullYear()}`
}

const isLater = (date1, date2) => {
    date1 = date1.split("/")
    date2 = date2.split("/")

    const dateObject1 = new Date(date1[2], date1[1], date1[0])
    const dateObject2 = new Date(date2[2], date2[1], date2[0])
    console.log(dateObject1)
    return dateObject1 > dateObject2
}

module.exports = {
    getTodayFormatted,
    isLater
}