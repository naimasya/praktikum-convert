const express = require('express') //import express
const bodyParser = require('body-parser')
const app = express() //deklarasi variabel express
const port = 8000 //deklarasi port

app.use(bodyParser.urlencoded({extended:true}))

app.get('/', (req,res)=>{
    res.send("sukses tampilkan GET")

})
app.get('/convert/heksadesimal/:bilangan', (req, res) => {
    var bilangan = req.params.bilangan
    var decimal = parseInt(bilangan, 16)
    var biner = parseInt(bilangan, 16).toString(2)
    var oktal = parseInt(bilangan, 16).toString(8)

    res.send({
        'heksadesimal': bilangan,
        'result': {
            'decimal': decimal,
            'biner': biner,
            'oktal': oktal
        }
    })
})
app.listen(port, () => {
    console.log(`Server di port ${port}`)
    })