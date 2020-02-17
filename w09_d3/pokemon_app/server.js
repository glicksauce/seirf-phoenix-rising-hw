const express = require('express');
const app     = express();
const port    = 3000;

//db file
const pokemon = require('./models/pokemon.js'
)

app.get('/pokemon', (req, res) =>{
    res.render('index.ejs',
    {pokemon: pokemon})
})

app.get('/', (req, res) =>{
    res.send('Welcome to the Pokemon App!')
})

app.listen(port, () => {
    console.log("serving up Pokemon! on port ", port)
})