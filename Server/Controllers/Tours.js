const con = require('../db')



exports.getAllTours = (req,res,next)=>{

    var sqlQuery = 'SELECT tour.tour_id,tour.title,tour.speciality,tour.last_date_of_reg,tour.date_of_departure,tour.end_date,tour.departure_city From tours tour WHERE 1'
    const operatedBy = {}
    console.log(sqlQuery)
        
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
            
    }

    console.log(sqlQuery)
             
    con.query(sqlQuery,(err,result)=> {
    if(!err){
   
    res.status(200).send(result);
    console.log("successfull"); }
    else 
    console.log(err);      
})

  

}




exports.getTourPlan = (req,res)=> {

    const tour_id = (req.params.tourID);
    
    var sqlQuery = `SELECT plan.plan_id, plan.tour_id,plan.date, plan.time, plan.title, plan.description, attractions.name FROM plan INNER JOIN attractions ON plan.attraction_id = attractions.attraction_id WHERE tour_id = ${tour_id} ORDER BY plan.date`
    var sql
    con.query(sqlQuery,(err,result)=> {
        if(!err){
       
        res.status(200).send(result);
        console.log(result); }
        else 
        console.log(err);      
    })



}

// GET tours/sort by price {ascending, decending, from ? to ? , count, pagenumber } ? if we want to get the next 10 tours each time, it is necessary to pass page number and count?

//Get tours / by destination, how do we filter destination? we have not taken destination in tours table

//Get Tours Duration { 10 days, 20 days ya 11 se 20 din k bech }

//GET tours by Tour Operator { all tours of falan operator }

//GET Tour Deals, Discounted Tours




//Sort by all of abovee selected in a check box

//price nahi hai , image kaha se fetch karen image nahi hai, 