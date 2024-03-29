const con = require('../db')



exports.getAllOperators = (req,res)=>{

    var sqlQuery = 'SELECT operator_id From operator WHERE 1'
        
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
            console.log("all operators successfull"); 
        }
        else 
        console.log(err);      
    })

}

exports.operatorCard = (req, res, next) => {
    var operatorId = req.params.operatorId;
    var userId = req.params.userId
    var sqlQuery = `SELECT operator.operator_id, operator.name,operator.is_verified, operator.phone, operator.about,
        operator.email, operator.street_address, operator.description,
        AVG(rating_review.numeric_rating) AS  numeric_rating,
        dp.image_path AS dp, cover.image_path AS cover FROM operator LEFT JOIN
        rating_review ON (rating_review.category_id = (SELECT category_id FROM category WHERE name="operator")) 
        AND (rating_review.reference_id = ${operatorId}) 
        LEFT JOIN image dp ON (dp.category_id = (SELECT category_id FROM category WHERE name="operator")) 
        AND (dp.reference_id=${operatorId}) AND (dp.image_type_id = (SELECT image_type_id FROM image_type WHERE type_name="dp")) 
        LEFT JOIN image cover ON (cover.category_id = (SELECT category_id FROM category WHERE name="operator")) 
        AND (cover.reference_id=${operatorId}) AND (cover.image_type_id = (SELECT image_type_id FROM image_type WHERE type_name="cover"))
        WHERE operator_id=${operatorId}`

    var sqlquery2 = `SELECT followup.followup_id from followup
        WHERE followup.category_id=(SELECT category_id from category WHERE name="operator")
        AND followup.reference_id=${operatorId}
        AND followup.user_id=${userId}`

    var response = null

    con.query(sqlQuery,(err, result) => {

        var response = undefined
    
        if(!err) {
            con.query(sqlquery2, (err, followResult) => {
                if(!err) {
                    if(followResult.length>0) {
                        response = [...result,followResult[0]]
                        res.status(200).send(response)
                        console.log('response has followStatus')
                    }
                    else {
                        response = result
                        res.status(200).send(response)
                        console.log("response doesn't have follow status")
                    }
                }
            })    
        }
        else
        (err) => console.log(err)
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

