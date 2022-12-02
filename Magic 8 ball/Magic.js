
const express = require ('express')

let app =express()

const magicResponse = require('./hopeResponse.js');

app.get('/magic/:question', (req,res)=>{
    let random = magicResponse[Math.floor(Math.random() * magicResponse.length)]
    res.send('<h1>'+req.params.question + ': '+ random + '</h1>')
})

app.listen(3000, () => {
  console.log(`Server listening on port 3000`);
});

