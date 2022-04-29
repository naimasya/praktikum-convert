const express = require('express') //import express
const bodyParser = require('body-parser')
const app = express() //deklarasi variabel express
const port = 8000 //deklarasi port

app.use(bodyParser.urlencoded({extended:true}))

app.get('/', (req,res)=>{
    res.send("sukses tampilkan GET")

})
app.get('/convert/reamur/:suhu', (req, res) => {
    var suhu = req.params.suhu
    var celcius = suhu / 0.8
    var fahrenheit = suhu * 2.25 + 32
    var kelvin = suhu / 0.8 + 273.15
    
    res.send({
        'reamur': suhu,
        'result': {
            'celcius': celcius,
            'fahrenheit': fahrenheit,
            'kelvin': kelvin
        }
    })
})
app.listen(port, () => {
    console.log(`Server di port ${port}`)
    })