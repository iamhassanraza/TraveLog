const con = require("../db");

exports.getAllAttractions = (req, res, next) => {
  

  var sqlQuery = `SELECT attractions.name , image.image_path from attractions INNER JOIN image ON ( attractions.attraction_id = image.reference_id AND image.category_id = (SELECT category_id FROM category WHERE name = 'attraction') AND image.image_type_id = 2) `;
  

  con.query(sqlQuery, (err, result) => {
    if (!err) {
      res.status(200).send(result);
      console.log("successfull");
    } else console.log(err);
  });
};


exports.getDetailsOfAttraction = (req, res, next) => {
  var id = req.params.id;
  var sqlQuery = `SELECT attractions.attraction_id,attractions.name AS attraction_name,attractions.destination_id,attractions.description,attractions.recommended_season,destination.city_id,city.name AS city_name,image.image_path FROM attractions INNER JOIN destination ON destination.destination_id = attractions.destination_id INNER JOIN city ON destination.city_id = city.city_id INNER JOIN image ON (image.category_id = 4 AND image.image_type_id = 1 AND image.reference_id = ${id}) WHERE attractions.attraction_id =${id} `
  var sqlQuery2 = `SELECT attractions.attraction_id FROM attractions WHERE attractions.destination_id = (SELECT attractions.destination_id FROM attractions WHERE attraction_id = ${id})`


  con.query(sqlQuery,(err, result) => {

    var response = undefined
    
    if(!err) {
        con.query(sqlQuery2, (err, attractionIds) => {
            if(!err) {
                if(attractionIds.length>0) {
                    
                    attractionids = attractionIds.map((item)=>item.attraction_id)
                    response = [...result,attractionids]
                    res.status(200).send(response)
                    console.log('response has attraction Ids')
                }
                else {
                    console.log(err)
                    response = [...result,null]
                    res.status(200).send(response)
                    console.log("response doesn't have follow status")
                }
            }
        })    
    }
    else
        console.log(err)
  });
  };


//   con.query(sqlQuery, (err, result) => {
//     if (!err) {
//       res.status(200).send(result);
//       console.log("successfull");
//     } else console.log(err);
//   });
// };