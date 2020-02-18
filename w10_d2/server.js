const express = require('express');
const app     = express();
const port    = 3000;
app.use(express.static(__dirname + '/public'));

//db file
const Budget = require('./models/budget.js'
)
// ===================
//         Routes
// ===================
app.use((req, res, next) => {
    console.log('I run for all routes')
    next()
  })

//new route
app.get('/budget/new', (req, res) =>{
    res.render('new.ejs')

})

//show route
app.get('/budget/:item', (req, res) =>{
    res.render('show.ejs', {
        budgetItem: Budget[req.params.item]
    })
})

app.get('/', (req, res) =>{
    res.render('index.ejs', {
        Budget: Budget
    })
})

app.listen(port, () => {
    console.log("serving up your budget on port ", port)
})