const express = require("express");
const app = express();
const cors = require("cors");
const havenRoutes = require("./routes/v1/indexRoutes")

app.use(cors())
app.use(express.json())
app.use("/havenV1", havenRoutes.router)

const path = require('path')
app.use('/static', express.static(path.join(__dirname, 'public')))

app.use((err,req,res,next) => {
    console.log("Se ha recogido algún error");
    console.log(err)
    res.status(500).end();
})

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server escuchando en el puerto ${PORT}`);
});

module.exports = app;