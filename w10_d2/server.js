const express = require('express');
const app     = express();
const port    = 3000;
app.use(express.static(__dirname + '/public'));

//db file
const Budget = require('./models/budget.js'
)

app.get('/', (req, res) =>{
    res.render('index.ejs', {
        Budget: Budget
    })
})

app.listen(port, () => {
    console.log("serving up your budget on port ", port)
})