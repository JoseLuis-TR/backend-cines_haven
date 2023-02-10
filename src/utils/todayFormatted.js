const getTodayFormatted = () => {
    const today = new Date()
    let dia = today.getDate().toString()
    dia = dia.length === 1 ? "0" + dia : dia;
    let mes = (today.getMonth() + 1).toString()
    mes = mes.length === 1 ? "0" + mes : mes;
    return `${dia}/${mes}/${today.getFullYear()}`
}

module.exports = {
    getTodayFormatted
}