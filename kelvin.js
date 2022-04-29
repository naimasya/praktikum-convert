const express = require('express') //import express
const bodyParser = require('body-parser')
const app = express() //deklarasi variabel express
const port = 8000 //deklarasi port
app.use(bodyParser.urlencoded({extended:true}))

app.get('/', (req,res)=>{
    res.send("sukses tampilkan GET")

})
app.get('/convert/kelvin/:suhu', (req, res) => {
    var suhu = req.params.suhu
    var celcius = suhu - 273
    var reamur = (suhu - 273) * 0.8
    var fahrenheit = 9/5 * (suhu - 273)  + 32

    res.send({
        'kelvin': suhu,
        'result': {
            'celcius': celcius,
            'fahrenheit': fahrenheit,
            'reamur': reamur
        }
    })
})
app.listen(port, () => {
    console.log(`Server di port ${port}`)
    })