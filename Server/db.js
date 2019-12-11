const mysql = require('mysql');

const con = mysql.createConnection({
    host: "tourdev.chnpxnk9cd85.us-east-2.rds.amazonaws.com",
    user: "tourMaster",
    password: "tourMaster1234",
    database:'tourDev'
  });


module.exports = con;