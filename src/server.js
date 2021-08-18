//configuraçoes express
const express = require('express')

const app = express()

//configuraão de rotas
const home = require('./rotas/home')

//rota 2

home(app)


//rotas
//app.use('/home', home)

//metodo listen com dois parametros port e arrow fuction
app.listen(3000, () =>{
    console.log('SERVIDO FI DE QUENGA PORT 3000')
})

module.export = app