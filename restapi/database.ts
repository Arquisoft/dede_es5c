require('dotenv').config()
const mongoose = require('mongoose')

const uri = "mongodb+srv://dede_5c:cuentademongo@dede.irypt.mongodb.net/DeDe_ASW?retryWrites=true&w=majority";

mongoose.connect(uri)
    .then(() => {
            console.log('Conexion a la BD')
    }).catch((err:any) => {
        console.log(err)
    })