const con = require('../db')

exports.getimages = (req, res) => {
    var category = req.params.category
    var imagetype = req.params.imagetype
    var reference = req.params.reference

    const sqlQuery = `SELECT image.image_path from image 
    INNER JOIN category ON category.name = '${category}' 
    INNER JOIN image_type ON image_type.type_name = '${imagetype}' 
    WHERE image.reference_id = ${reference}`
    console.log(sqlQuery)

    con.query(sqlQuery, (err,result) => {
        if(!err) {
            res.status(200).send(result);
            console.log('image successfull')
        }
        else
        (err) => console.log(err)
    })
}