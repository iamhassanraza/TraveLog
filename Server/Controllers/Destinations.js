const con = require("../db");

exports.getAllDestinations = (req, res, next) => {
  var sqlQuery = "SELECT * From destination WHERE 1";
  console.log("arha isme");

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
      console.log("successfull");
    } else console.log(err);
  });
};



exports.getNameOfDestination = (req, res, next) => {

  var id = req.params.id
  var sqlQuery = `SELECT destination_id,name From destination WHERE destination_id = '${id}'`
  console.log("arha isme");

  con.query(sqlQuery, (err, result) => {
    if (!err) {
      res.status(200).send(result);
      console.log("successfull");
    } else console.log(err);
  });
};
