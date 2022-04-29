const express = require('express') //import express
const bodyParser = require('body-parser')
const app = express() //deklarasi variabel express
const port = 8000 //deklarasi port

app.use(bodyParser.urlencoded({extended:true}))

app.get('/', (req,res)=>{
    res.send("sukses tampilkan GET")

})
app.get('/convert/oktal/:bilangan', (req, res) => {
    var bilangan = req.params.bilangan
    var decimal = parseInt(bilangan, 8)
    var biner = parseInt(bilangan, 8).toString(2)
    var heksadesimal = parseInt(bilangan, 8).toString(16)

    res.send({
        'oktal': bilangan,
        'result': {
            'decimal': decimal,
            'biner': biner,
            'heksadesimal': heksadesimal
        }
    })
})
app.listen(port, () => {
    console.log(`Server di port ${port}`)
    })