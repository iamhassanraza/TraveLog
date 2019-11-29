const con = require('../db')

exports.getAllReviews = (req, res) => { 
        
        var category = req.params.category
        var reference = req.params.reference
        var sqlQuery = `SELECT rating_review.numeric_rating,rating_review.descriptive_review,
        userprofile.name from rating_review 
        INNER JOIN userprofile ON rating_review.user_id = userprofile.userprofile_id 
        INNER JOIN category ON category.name = '${category}' WHERE rating_review.reference_id = ${reference}`

        con.query(sqlQuery, (err,result) => {
            if(!err) {
                res.status(200).send(result);
                console.log('successsfull query')
            }
            else
                console.log(err)
    })
}
