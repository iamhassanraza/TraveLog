const express = require('express');

const app = express();
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database:'testing'
  });

  con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM names", function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  });


app.listen(3000,()=>console.log('Server connected successfully'));