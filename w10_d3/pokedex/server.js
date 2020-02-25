const express = require('express')
const app = express()
const Pokemon = require('./models/pokemon.js')
const port = 3000;
const methodOverride = require("method-override")

app.use(express.static('public'))
app.use(express.urlencoded({extended: false}))
app.use(methodOverride("_method"))

//edit
app.get('/pokemon/:id/edit', (req, res) => {
    res.render('edit.ejs', {
        Pokemon: Pokemon[req.params.id],
        index: req.params.id
    })
})

//update
app.put('/pokemon/:id', (req,res) => {
    let typesArr = req.body.type.split(",")

    Pokemon[req.params.id] = {
        'name': req.body.name,
        'img': req.body.img,
        'id': parseInt(req.params.id) + 1,
        'type': typesArr,
        'stats': {'hp': req.body.hp,
                'attack':req.body.attack,
                'defense': req.body.defense}
    }
    res.redirect('/pokemon/' + req.params.id)
})

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
        'id': Pokemon.length + 1,
        'type': typesArr,
        'stats': {'hp': req.body.hp,
                'attack':req.body.attack,
                'defense': req.body.defense}
    }
    console.log(newPok)

    Pokemon.push(newPok)
    res.redirect('/pokemon/' + (newPok.id-1))
})

//show
app.get('/pokemon/:id', (req, res) => {
    res.render('show.ejs', {
        Pokemon: Pokemon[req.params.id],
        index: req.params.id
    })
})



// web server
app.listen(port, () => {
    console.log("listening on port ", port)
})

/* to do:
- show thumbnail image in 'edit page'
- better formatting on index page
- better formatting on new/edit pages. lign up boxes
*/