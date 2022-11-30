
const express = require ('express')

let app =express()
//Make a route '/greeting' that sends a generic greeting to the screen like "Hello, stranger".
app.get('/greeting',(req,res)=>{
    res.send('Hello, stranger')
})
app.get('/greeting/:name',(req,res)=>{
    console.log(req.params.name)
    res.send('Wow! Hello there,' +req.params.name)
})

app.listen(3000, ()=>{
    console.log('start listening to port number 3000 👂') 
})