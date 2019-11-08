const con = require('../db')



exports.getAllTours = (req,res,next)=>{

    var sqlQuery = 'SELECT * From tours WHERE 1'
        
    if(Object.keys(req.query).length != 0)
    {
                    Object.keys(req.query).map((value,index) => {
                
                        if(value=== 'tour_id'){
                            sqlQuery = sqlQuery.concat(` AND tour_id = '${req.query[value]}'`)
                        }
                        if(value=== 'title'){
                            sqlQuery = sqlQuery.concat(` AND title LIKE '%${req.query[value]}%'`)
                        }
                        
                        if(value=== 'speciality'){
                            sqlQuery = sqlQuery.concat(` AND speciality = '${req.query[value]}'`)
                        }
                        // if(value=== 'duration'){
                        //     sqlQuery = sqlQuery.concat(` AND last_date_of_reg =${req.query[value]}`)
                        // }
                        if(value=== 'last_date_of_reg'){
                            sqlQuery = sqlQuery.concat(` AND last_date_of_reg =${req.query[value]}`)
                        }
                        if(value=== 'date_of_departure'){
                            sqlQuery = sqlQuery.concat(` AND date_of_departure =${req.query[value]}`)
                        }
                        if(value=== 'end_date'){
                            sqlQuery = sqlQuery.concat(` AND end_date =${req.query[value]}`)
                        }
                        if(value=== 'departure_city'){
                            sqlQuery = sqlQuery.concat(` AND departure_city =${req.query[value]}`)
                        }
                        });

             console.log(sqlQuery)
             
        con.query(sqlQuery,(err,result)=> {
        if(!err){
       
        res.status(200).send(result);
        console.log("successfull"); }
        else 
        console.log(err);      
    })
 
                    
    }

  
  

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