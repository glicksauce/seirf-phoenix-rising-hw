var express = require('express')
var app = express()
var port = 3000

//greeting
app.get('/greeting/:name', (req, res) => {
    res.send('What\'s up ' + req.params.name + ' It\'s so great to see you!');
  });

//tip calculator
app.get('/tip/:total/:tipPercentage', (req, res) => {
    let tip = parseInt(req.params.total) * parseInt(req.params.tipPercentage)/100
    res.send('Tip amount is ' + tip)
});

//magic 8 ball
app.get('/magic/:phrase', (req, res) => {
    let responseArr = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
    let responseNum = Math.floor(Math.random()*responseArr.length)
    let answer = responseArr[responseNum]
    res.send(`
            <html>
            <body>
            ${req.params.phrase}
            <h1>${answer}</h1>
            ${responseNum}
            </body>
            <html`
    )
});

app.get('/magic/phrase',(req, res) =>{
    
})

app.listen(port, () => {
    console.log('app is running on port: ', port)
})