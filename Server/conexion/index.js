const express = require("express")
const app = express()

const PORT = 3001;
const RegistroRoutes = require('./routes/registro')//Ruta de la carpeta que se va a usar 

app.use('/registro',RegistroRoutes)

app.listen(PORT, () =>{
    console.log(`Server is listening at http://localhost:${PORT}`)
})


