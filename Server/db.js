const mysql = require('mysql');

const con = mysql.createConnection({
    host: "meemz.info",
    user: "dhlzuejg_tours",
    password: "Tours14",
    database:'dhlzuejg_tours'
  });


module.exports = con;