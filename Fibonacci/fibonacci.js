const express = require ('express')

let app =express()

let fiboNumber =[0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]
 
app.get('/fibonacci/:item',(req,res)=>{
    const Item = req.params;
    const kbc =fiboNumber.find((g) => g.item === Item)
        //if(fiboNumber.find((g) => g.item === item)){
            if (!isNaN(kbc)) {
                //const filteredStores = supermarkets.filter((s) => s.miles <= parsedMiles);
                res.send('filteredStores');
              } else 
              {res.send('supermarkets');}
            });
        
//         }else{
//         res.send("I can tell this is not a fibonacci number.")
    
// } 
//})


app.listen(3000, ()=>{
    console.log('start listening to port number 3000 👂') 
})
