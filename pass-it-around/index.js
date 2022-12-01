const express =require('express')

let app =express()
app.get('/:numberOfBottles', (req,res)=>{
    
    if(req.params.numberOfBottles>1){
         res.send(req.params.numberOfBottles + " Bottles of beer on the wall, <a href = '" + (req.params.numberOfBottles-1)+ "'>take one down, pass it around</a>")
    }else if (req.params.numberOfBottles =1){
        res.send(req.params.numberOfBottles + " Bottles of beer on the wall, take it and enjoy your time")
    }else {
        res.status(404).send("There is no more beer!!!");
    }
   
})
app.listen(3000,()=>{
console.log('Started listening to port 3000')
})