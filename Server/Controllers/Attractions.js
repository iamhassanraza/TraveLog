const con = require("../db");

exports.getAllAttractions = (req, res, next) => {
  console.log("arha isme");

  var sqlQuery = `SELECT attractions.name , image.image_path from attractions INNER JOIN image ON ( attractions.attraction_id = image.reference_id AND image.category_id = (SELECT category_id FROM category WHERE name = 'attraction') AND image.image_type_id = 2) `;
  console.log("arha isme");

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
  console.log("arha isme");

  con.query(sqlQuery, (err, result) => {
    if (!err) {
      res.status(200).send(result);
      console.log("successfull");
    } else console.log(err);
  });
};