const con = require("../db");

exports.sendMessage = (req, res, next) => {
  
  
  var sqlQuery = "INSERT INTO `queries` (`id`, `user_id`, `message`) VALUES (NULL, '121', 'ab ye doosra hai') ";
  

  con.query(sqlQuery, (err, result) => {
    if (!err) {
      res.status(200).send(result);
      console.log("Message delivered");
    } else console.log(err);
  });
};