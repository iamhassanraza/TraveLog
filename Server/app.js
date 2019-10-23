const express = require('express');
const app = express();
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database:'travelog'
  });

  app.get('/tours', (req,res) => {
    con.query('Select * from tours', (err,result)=> {
        if(!err){
        console.log(result);
        res.send(result);
        console.log("Tours agaye"); }
        else 
        console.log(err);      
    })
  })

  app.get('/operators', (req,res) => {
    con.query('Select * from operator', (err,result)=> {
        if(!err){
        console.log(result);
        console.log("Operators Agaye"); }
        else 
        console.log(err);      
    })
  })

  app.get('/destinations', (req,res) => {
    con.query('Select * from destination', (err,result)=> {
        if(!err){
        console.log(result);
        console.log("Destinations agaye"); }
        else 
        console.log(err);      
    })
  })

app.listen(3001, ()=>console.log('Server connected successfully'));