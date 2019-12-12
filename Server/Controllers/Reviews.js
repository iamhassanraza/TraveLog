const con = require('../db')

exports.getAllReviews = (req, res) => { 
        var category = req.params.category
        var reference = req.params.reference
        var sqlQuery = `SELECT rating_review.numeric_rating,rating_review.descriptive_review,
        userprofile.name AS user_name
        FROM rating_review 
        INNER JOIN userprofile ON rating_review.user_id = userprofile.userprofile_id 
        INNER JOIN category ON rating_review.category_id = (SELECT category_id FROM category WHERE name=${category})
        WHERE rating_review.reference_id = ${reference} AND rating_review.category_id = category.category_id `

        con.query(sqlQuery, (err,result) => {
            if(!err) {
                console.log(result)
                res.status(200).send(result);
                console.log('reviews are here')
            }
            else
            (err) => console.log(err)
    })
}
