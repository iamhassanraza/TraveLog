const con = require('../db')



exports.getAllOperators = (req,res)=>{

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

exports.operatorCard = (req, res, next) => {
    var operatorId = req.params.operatorId;
    var sqlQuery = `SELECT operator.name, operator.phone, operator.email, operator.street_address,
        rating_review.numeric_rating, dp.image_path AS dp, cover.image_path AS cover FROM operator INNER JOIN
        rating_review ON (rating_review.category_id = (SELECT category_id FROM category WHERE name="operator")) 
        AND (rating_review.reference_id = ${operatorId}) 
        INNER JOIN image dp ON (dp.category_id = (SELECT category_id FROM category WHERE name="operator")) 
        AND (dp.reference_id=${operatorId}) AND (dp.image_type_id = (SELECT image_type_id FROM image_type WHERE type_name="dp")) 
        INNER JOIN image cover ON (cover.category_id = (SELECT category_id FROM category WHERE name="operator")) 
        AND (cover.reference_id=${operatorId}) AND (cover.image_type_id = (SELECT image_type_id FROM image_type WHERE type_name="cover"))
        WHERE operator_id=${operatorId}`

    con.query(sqlQuery,(err, result) => {
        if(!err) {
            res.status(200).send(result)
            console.log('operator')
        }
        else
            console.log(err)
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

