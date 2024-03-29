const con = require('../db')



exports.getAllTours = (req,res)=>{

    var sqlQuery = 'SELECT tour_id From tours WHERE 1'

    
        
    if(Object.keys(req.query).length != 0)
    {
                    Object.keys(req.query).map((value,index) => {
                
                        if(value=== 'tour_id'){
                            sqlQuery = sqlQuery.concat(` AND tour_id = '${req.query[value]}'`)
                        }
                        if(value=== 'operator_id'){
                            sqlQuery = sqlQuery.concat(` AND operator_id = '${req.query[value]}'`)
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
                        if(value=== 'city_id'){
                            sqlQuery = sqlQuery.concat(` AND city_id =${req.query[value]}`)
                        }
                        });
            
    }

   
             
    con.query(sqlQuery,(err,result)=> {
    if(!err){
        res.status(200).send(result);
        console.log("all tours successs"); }
    else 
        (err) => console.log(err);      
})

  

}

exports.getTourById = (req,res) => {

    var tour_id = (req.params.tourID);
    
    var sqlQuery = `SELECT tours.tour_id, tours.last_date_of_reg, tours.overview,operator.phone as operator_phone,operator.email as operator_email,operator.longitude,operator.latitude FROM tours INNER JOIN operator ON operator.operator_id = tours.operator_id WHERE tour_id = ${tour_id}`
    con.query(sqlQuery,(err,result)=> {
        if(!err) {   
            res.status(200).send(result);
            console.log("tour by id successfull") 
        }
        else 
        (err) => console.log(err);      
    })


}


exports.getTourPlan = (req,res)=> {

    var tour_id = (req.params.tourID);
    
    var sqlQuery = `SELECT plan.plan_id, plan.tour_id,plan.date, plan.time, plan.title, plan.description, attractions.name FROM plan INNER JOIN attractions ON plan.attraction_id = attractions.attraction_id WHERE tour_id = ${tour_id} ORDER BY plan.date`

    con.query(sqlQuery,(err,result)=> {
        if(!err){   
            res.status(200).send(result);
            console.log("plan successfull"); 
        }
        else 
        console.log(err);      
    })



}


exports.getTourCard = (req,res) =>{


    const tour_id = (req.params.tourID);
    
    var sqlQuery = `SELECT tours.tour_id, tours.operator_id,tours.title,tours.price,tours.speciality,tours.last_date_of_reg,
    tours.date_of_departure,tours.end_date,operator.name ,rating_review.numeric_rating,
    tourimage.image_path AS tourcover,operatorimage.image_path AS operatordp, operator.is_verified FROM tours INNER JOIN operator ON 
    operator.operator_id = tours.operator_id INNER JOIN category ON category.name = 'tour' LEFT JOIN rating_review
     ON rating_review.reference_id = tours.operator_id AND rating_review.category_id = (SELECT category.category_id FROM category WHERE category.name = 'operator') 
     LEFT JOIN 
     image tourimage ON (tourimage.category_id = (SELECT category.category_id FROM category WHERE category.name = 'tour')
      AND tourimage.image_type_id = (SELECT image_type_id FROM image_type WHERE type_name ='cover') AND 
      tourimage.reference_id = tours.tour_id) LEFT JOIN image operatorimage ON 
      (operatorimage.category_id = (SELECT category.category_id FROM category WHERE category.name = 'operator') 
      AND operatorimage.image_type_id = (SELECT image_type_id FROM image_type WHERE type_name ='dp') AND 
      operatorimage.reference_id = tours.operator_id) WHERE tours.tour_id = ${tour_id}`

    con.query(sqlQuery,(err,result)=> {
        if(!err){  
        res.status(200).send(result);
        console.log("tour card success"); 
    }
        else 
            (err) => console.log(err);      
    })



}


exports.getOperatorCard = (req,res)=> {

    const operator_Id = (req.params.operatorId);
    
    var sqlQuery = `SELECT operator.name, operator.phone, operator.email, 
    operator.is_verified,operator.longitude,operator.latitude, rating_review.numeric_rating 
    FROM operator LEFT JOIN rating_review ON (rating_review.category_id = (SELECT category_id 
    FROM category WHERE name="operator")) AND (rating_review.reference_id = 1) WHERE operator_id= ${operator_Id}`


    con.query(sqlQuery,(err,result)=> {
        if(!err) { 
            res.status(200).send(result);
            console.log("operator data in tours success"); 
        }
        else 
            (err) => console.log(err);      
    })



}


///SELECT tours.tour_id, tours.operator_id,tours.title,tours.speciality,tours.last_date_of_reg,tours.date_of_departure,tours.end_date,operator.name ,rating_review.numeric_rating,category.category_id,tourimage.image_path AS tourcover,operatorimage.image_path AS operatordp FROM tours INNER JOIN operator ON operator.operator_id = tours.operator_id INNER JOIN category ON category.name = 'tour' INNER JOIN rating_review ON rating_review.reference_id = tours.operator_id AND rating_review.category_id = category.category_id INNER JOIN image tourimage ON (tourimage.category_id = (SELECT category.category_id FROM category WHERE category.name = 'tour') AND tourimage.image_type_id = (SELECT image_type_id FROM image_type WHERE type_name ='cover') AND tourimage.reference_id = tours.tour_id) INNER JOIN image operatorimage ON (operatorimage.category_id = (SELECT category.category_id FROM category WHERE category.name = 'operator') AND tourimage.image_type_id = (SELECT image_type_id FROM image_type WHERE type_name ='dp') AND operatorimage.reference_id = tours.operator_id)



// GET tours/sort by price {ascending, decending, from ? to ? , count, pagenumber } ? if we want to get the next 10 tours each time, it is necessary to pass page number and count?

//Get tours / by destination, how do we filter destination? we have not taken destination in tours table

//Get Tours Duration { 10 days, 20 days ya 11 se 20 din k bech }

//GET tours by Tour Operator { all tours of falan operator }

//GET Tour Deals, Discounted Tours




//Sort by all of abovee selected in a check box

//price nahi hai , image kaha se fetch karen image nahi hai, 