const express = require('express') //import express
const bodyParser = require('body-parser')
const app = express() //deklarasi variabel express
const port = 8000 //deklarasi port

app.use(bodyParser.urlencoded({extended:true}))

app.get('/', (req,res)=>{
    res.send("sukses tampilkan GET")

})

app.post('/bmi', (req, res) => {
    tinggi = req.body.tinggi
    berat = req.body.berat

    result = berat / (tinggi * tinggi)

    if (result < 18.5){
        var status = "Kekurangan BB"
    } else if ((result > 18.5) && (result <= 25)){
        var status = "BB Normal"
    } else if ((result > 25) && (result <= 30)){
        var status = "Kelebihan BB"
    } else if (result > 30){
        var status = "Obesitas"
    }

    console.log(result)

    res.send({
        'Tinggi': tinggi + 'm',
        'Berat': berat + 'kg',
        'BMI':Math.round(result),
        'Status' : status,
    })
})

    
app.listen(port, () => {
    console.log(`Server di port ${port}`)
    })