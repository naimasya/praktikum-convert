const express = require('express') //import express
const bodyParser = require('body-parser')
const app = express() //deklarasi variabel express
const port = 8000 //deklarasi port

app.use(bodyParser.urlencoded({extended:true}))

app.get('/', (req,res)=>{
    res.send("sukses tampilkan GET")

})
app.get('/convert/celcius/:suhu', (req, res) => {
    var suhu = req.params.suhu
    var reamur = suhu * 0.8
    var fahrenheit = suhu * 1.8 + 32
    var kelvin = suhu * 1 + 273
    
    res.send({
        'celcius': suhu,
        'result': {
            'reamur': reamur,
            'fahrenheit': fahrenheit,
            'kelvin': kelvin
        }
    })
})
app.listen(port, () => {
    console.log(`Server di port ${port}`)
    })