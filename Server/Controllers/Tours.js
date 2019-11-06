const con = require('../db')



exports.getAllTours = (req,res,next)=>{
    const pagenumber = parseInt(req.params.from) || 10;
    const count = parseInt(req.params.to);
        
    console.log(count)
    
        con.query('SELECT * FROM tours LIMIT ? OFFSET ?',[count,count * (pagenumber -1 )], (err,result)=> {
        if(!err){
       
        res.status(200).send(result);
        console.log("No error in sending tours"); }
        else 
        console.log(err);      
    })
 
}


// GET tours/sort by price {ascending, decending, from ? to ? , count, pagenumber } ? if we want to get the next 10 tours each time, it is necessary to pass page number and count?

//Get tours / by destination, how do we filter destination? we have not taken destination in tours table

//Get Tours Duration { 10 days, 20 days ya 11 se 20 din k bech }

//GET tours by Tour Operator { all tours of falan operator }

//GET Tour Deals, Discounted Tours

//Get tours / by date { from current by default to next choosen }

//Sort By Tour Type

//Sort by all of abovee selected in a check box


// exports.sortByPrice = (req,res)=>{

    
//     con.query('SELECT * FROM tours ORDER BY  LIMIT ? OFFSET ?',[count,count * (pagenumber -1 )], (err,result)=> {
//         if(!err){
       
//         res.status(200).send(result);
//         console.log("No error in sending tours"); }
//         else 
//         console.log(err);  
    
// }