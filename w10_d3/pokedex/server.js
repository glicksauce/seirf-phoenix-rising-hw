const express = require('express')
const app = express()
const Pokemon = require('./models/pokemon.js')
const port = 3000;
const methodOverride = require("method-override")

app.use(express.static('public'))
app.use(express.urlencoded({extended: false}))
app.use(methodOverride("_method"))

//index
app.get('/', (req, res) =>{
    res.render('index.ejs', {Pokemon: Pokemon})
})

//show
app.get('/:id'), (req, res) => {
    res.render('show.ejs', {data: Pokemon[req.params.id]})
}

// web server
app.listen(port, () => {
    console.log("listening on port ", port)
})