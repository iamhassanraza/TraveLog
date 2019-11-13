const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser')

const TourRoutes = require('./Router/Tours')
const  OperatorRoutes = require('./Router/Operator')

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database:'travelog'
  });




  app.use(bodyParser.json()); 

  app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');   //allows access to any client
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');  //define methods like post get put delete or all by *
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type', 'Authorization');  // or you can use * for all
    next();
    });



  app.use('/tours', TourRoutes)
  app.use('/operators', OperatorRoutes)

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