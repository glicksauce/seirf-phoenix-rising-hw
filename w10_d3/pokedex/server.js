const express = require('express')
const app = express()
const Pokemon = require('./models/pokemon.js')
const port = 3000;
const methodOverride = require("method-override")

app.use(express.static('public'))
app.use(express.urlencoded({extended: false}))
app.use(methodOverride("_method"))



//show
app.get('/pokemon/:id', (req, res) => {
    res.render('show.ejs', {
        Pokemon: Pokemon[req.params.id]
    })
})

//index
app.get('/pokemon', (req, res) =>{
    res.render('index.ejs', {Pokemon: Pokemon})
})

// web server
app.listen(port, () => {
    console.log("listening on port ", port)
})