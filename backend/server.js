const express = require('express')
const cors = require('cors')
const bodyParser = require("body-parser")
const dotEnv = require('dotenv')
const app = express()
const mysql = require('mysql')



app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
dotEnv.config()


var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'frontdb'
})

connection.connect()


app.post('/get-products/', (req,res) => {
    connection.query(`SELECT * FROM kategoriler`, (err,kategoriler) => {
        if(err) throw err;
        res.json(kategoriler)
    })  
})


app.listen(process.env.PORT, () => {
    console.log(`Server listening on PORT : ${process.env.PORT}`)
})