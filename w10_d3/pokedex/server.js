const express = require('express')
const app = express()
const Pokemon = require('./models/pokemon.js')
const port = 3000;
const methodOverride = require("method-override")

app.use(express.static('public'))
app.use(express.urlencoded({extended: false}))
app.use(methodOverride("_method"))

//index
app.get('/pokemon', (req, res) =>{
    res.render('index.ejs', {Pokemon: Pokemon})
})

//new
app.get('/pokemon/new', (req, res) =>{
    res.render('new.ejs',
    {
        Pokemon: Pokemon
    })
})

//create
app.post('/pokemon', (req,res) => {
    let typesArr = req.body.type.split(",")

    let newPok = {
        'name': req.body.name,
        'img': req.body.img,
        'id': req.body.hp,
        'type': typesArr,
        'stats': {'hp': req.body.hp,
                'attack':req.body.attack,
                'defense': req.body.defense}
    }
    console.log(newPok)

    Pokemon.push(newPok)
    res.redirect('/pokemon')
})

//show
app.get('/pokemon/:id', (req, res) => {
    res.render('show.ejs', {
        Pokemon: Pokemon[req.params.id]
    })
})



// web server
app.listen(port, () => {
    console.log("listening on port ", port)
})