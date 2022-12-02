//require express module
const express = require ('express')
//create const app
let app =express()

                    /*Greetings
                    =============*/
//Make a route '/greeting' that sends a generic greeting to the screen like "Hello, stranger".
app.get('/greeting',(req,res)=>{
    res.send('Hello, stranger')
})
app.get('/greeting/:name',(req,res)=>{
    console.log(req.params.name)
    res.send('Wow! Hello there,' +req.params.name)
})
                    /*Tip Calculator
                    ================ */
/*have a route of '/tip' and it should expect 2 params. One should be total and one should be tipPercentage.*/

app.get('/tip/:total/:tipPercentage',(req,res)=>{
    let totatalTip =((0.01 *req.params.tipPercentage)*(req.params.total))
    console.log(totatalTip)
    res.send('From total amount of ' + " " + req.params.total +" bill, " +"your tip is" + " " + totatalTip)
})
//create a port where the server listens to

app.listen(3000, ()=>{
    console.log('start listening to port number 3000 👂') 
})