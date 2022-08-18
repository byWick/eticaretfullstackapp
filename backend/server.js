const express = require('express')
const cors = require('cors')
const bodyParser = require("body-parser")
const dotEnv = require('dotenv')
const app = express()
const mysql = require('mysql')
const { response } = require('express')



app.use(
    express.urlencoded({
      extended: true,
    })
  );
  app.use(express.json())
app.use(cors())
dotEnv.config()


var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'frontdb'
})

connection.connect()


app.post('/getmenu', (req,res) => {
    connection.query(`SELECT * FROM kategoriler`, (err,kategoriler) => {
        res.json(kategoriler)
    })  
})

app.post('/getsecondmenu',(req,res) => {
    let topMenuId = req.body.topMenuId
    bigMenuObject = []
    connection.query(`SELECT * FROM kategori WHERE seviye = 1 AND ust_kategori_id = '${topMenuId}' `, (err,res) => {
        if(res){
           for(let ortaMenu of res){
                let ortKategoriId = ortaMenu.id
                let ortaMenuAdi = ortaMenu.baslik
                connection.query(`SELECT * FROM kategori WHERE seviye=2 AND ust_kategori_id = '${ortKategoriId}' `, (err,altMenuler) => {
                    if(altMenuler){
                        kucukMenuObjesi = {
                            ortaMenu:ortaMenu,
                            altMenuler : altMenuler
                        }
                    }

                    res.json(kucukMenuObjesi)
                })
           }   
        }
    })

   

})



app.listen(process.env.PORT, () => {
    console.log(`Server listening on PORT : ${process.env.PORT}`)
})