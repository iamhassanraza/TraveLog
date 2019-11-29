const con = require("../db");

exports.getAllDestinations = (req, res, next) => {
  var sqlQuery = "SELECT * From destination WHERE 1";
  

  if (Object.keys(req.query).length != 0) {
    Object.keys(req.query).map((value, index) => {
      if (value === "destination_id") {
        sqlQuery = sqlQuery.concat(
          ` AND destination_id = '${req.query[value]}'`
        );
      }
      if (value === "name") {
        sqlQuery = sqlQuery.concat(` AND name LIKE '%${req.query[value]}%'`);
      }
      if (value === "city_id") {
        sqlQuery = sqlQuery.concat(` AND city_id =${req.query[value]}`);
      }
      if (value === "country_id") {
        sqlQuery = sqlQuery.concat(` AND country_id =${req.query[value]}`);
      }
    });
  }

  console.log(sqlQuery);
  con.query(sqlQuery, (err, result) => {
    if (!err) {
      res.status(200).send(result);
      
    } else console.log(err);
  });
};

exports.getAttractionsCard = (req, res, next) => {
  var id = req.params.id;
  var sqlQuery = `SELECT attractions.name , image.image_path from attractions INNER JOIN image ON ( attractions.attraction_id = image.reference_id AND image.category_id = (SELECT category_id FROM category WHERE name = 'destination') AND image.image_type_id = 1) WHERE attractions.attraction_id = ${id} `;
  

  con.query(sqlQuery, (err, result) => {
    if (!err) {
      res.status(200).send(result);
      
    } else console.log(err);
  });
};




exports.getDestinationCard = (req, res, next) => {
  var id = req.params.id;
  var sqlQuery = `SELECT destination.destination_id, city.name , image.image_path from destination INNER JOIN city ON ( destination.city_id = city.city_id ) INNER JOIN image ON  (image.category_id = (SELECT category_id FROM category WHERE name = 'destination') AND image.image_type_id = 1 AND image.reference_id=${id}) WHERE destination.destination_id =${id} `;


  con.query(sqlQuery, (err, result) => {
    if (!err) {
      res.status(200).send(result);
     
    } else console.log(err);
  });
};




exports.getDetailsOfDestination = (req, res, next) => {
  var id = req.params.id;
  var sqlQuery = `SELECT destination_id,description,recommended_season,city.name,image.image_path From destination INNER JOIN city ON destination.city_id = city.city_id INNER JOIN image ON (image.category_id = 3 AND image.image_type_id = 1 AND image.reference_id = '${id}')  WHERE destination.destination_id = '${id}'`;
  var sqlQuery2 = `SELECT attractions.attraction_id FROM attractions WHERE attractions.destination_id = '${id}' `

//   con.query(sqlQuery, (err, result) => {
//     if (!err) {
//       res.status(200).send(result);
     
//     } else console.log(err);
//   });
// };


con.query(sqlQuery,(err, result) => {

  var response = undefined
  console.log(result);
  console.log(response);
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
                  response = result
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