const con = require('../db')



exports.getAllOperators = (req,res,next)=>{

    var sqlQuery = 'SELECT * From operator WHERE 1'
        
    if(Object.keys(req.query).length != 0)
    {
                    Object.keys(req.query).map((value,index) => {
                
                        if(value=== 'operator_id'){
                            sqlQuery = sqlQuery.concat(` AND operator_id = '${req.query[value]}'`)
                        }
                        if(value=== 'name'){
                            sqlQuery = sqlQuery.concat(` AND name LIKE '%${req.query[value]}%'`)
                        }
                        
                        if(value=== 'about'){
                            sqlQuery = sqlQuery.concat(` AND about = '${req.query[value]}'`)
                        }
                        if(value=== 'description'){
                            sqlQuery = sqlQuery.concat(` description =${req.query[value]}`)
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
    }

    con.query(sqlQuery,(err,result)=> {
        if(!err) {
            res.status(200).send(result);
            console.log("successfull"); 
        }
        else 
        console.log(err);      
    })

}

// exports.getReviews = (req, res) => {

//     var category = req.params.category
//     var operatorid = req.params.operatorid
//     var sqlQuery = `SELECT user_id,numeric_rating,descriptive_review from rating_review where id=${operatorid}`

//     con.query(sqlQuery, (err,result) => {
//         if(!err) {
//             res.status(200).send(result);
//             console.log('successsfull query')
//         }
//         else
//             console.log(err)
//     })

// }

