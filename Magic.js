
const express = require ('express')

let app =express()

let magicResponse =["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

app.get('/magic/:question', (req,res)=>{
    let random = magicResponse[Math.floor(Math.random() * magicResponse.length)]
    res.send('<h1>'+req.params.question + ': '+ random + '</h1>')
})

app.listen(3000, () => {
  console.log(`Server listening on port 3000`);
});

