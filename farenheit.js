const express = require('express') //import express
const bodyParser = require('body-parser')
const app = express() //deklarasi variabel express
const port = 8000 //deklarasi port
app.use(bodyParser.urlencoded({extended:true}))

app.get('/', (req,res)=>{
    res.send("sukses tampilkan GET")

})
app.get('/convert/fahrenheit/:suhu', (req, res) => {
    var suhu = req.params.suhu
    var celcius = (suhu - 32) / 1.8
    var reamur = (suhu - 32) * 0.44
    var kelvin = (suhu * 1 + 459.67) / 1.8

    res.send({
        'fahrenheit': suhu,
        'result': {
            'celcius': celcius,
            'reamur': reamur,
            'kelvin': kelvin
        }
    })
})
app.listen(port, () => {
    console.log(`Server di port ${port}`)
    })