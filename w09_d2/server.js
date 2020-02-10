var express = require('express')
var app = express()
var port = 3000

app.get('/greeting/:name', (req, res) => {

    res.send('What\'s up ' + req.params.name + ' It\'s so great to see you!');
  });

app.listen(port, () => {
    console.log('app is running on port: ', port)
})