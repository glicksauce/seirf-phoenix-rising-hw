var express = require('express')
var app = express()
var port = 3000

//99 bottles of beer
app.get('/', (req, res) => {
    res.send(` 
        <html>
            <body>
            <p>99 little bugs in the code</p>
            <p>99 little bugs</p>
            <p>Take one down</p>
            <p>Patch it Around</p>
            <a href="/98">98 bugs in the code</a>
            </body>
        </html>`);
  });

  app.get('/0', (req, res) => {
    res.send(` 
        <html>
            <body>
            <a href="/99">Start Over?</a>
            </body>
        </html>`);
});

app.get('/:number', (req, res) => {
    let iteration = parseInt(req.params.number)-1
    let randomDraw = Math.random()
    if (randomDraw > .9){
        moreBugs = Math.floor(Math.random()*20)
        iteration += moreBugs
    }
    res.send(` 
        <html>
            <body>
            <p>${req.params.number} little bugs in the code</p>
            <p>${req.params.number} little bugs</p>
            <p>Take one down</p>
            <p>Patch it Around</p>
            <a href="/${iteration}">${iteration} bugs in the code</a>
            </body>
        </html>`);
});

app.listen(port, () => {
    console.log('app is running on port: ', port)
})