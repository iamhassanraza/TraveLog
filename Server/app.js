const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser')

const TourRoutes = require('./Router/Tours')
const  OperatorRoutes = require('./Router/Operator')
const DestinationsRouter = require('./Router/Destinations')
const imageRoutes = require('./Router/images')
const AttractionsRoutes = require('./Router/Attractions')
const reviewRoutes = require('./Router/Reviews')

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database:'travelog'
  });



  app.use(express.static('public'))

  app.use(bodyParser.json()); 

  app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');   //allows access to any client
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');  //define methods like post get put delete or all by *
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type', 'Authorization');  // or you can use * for all
    next();
    });



  app.use('/tours', TourRoutes)
  app.use('/operators', OperatorRoutes)
  app.use('/destination', DestinationsRouter)
  app.use('/images', imageRoutes)
  app.use('/attraction', AttractionsRoutes)
  app.use('/reviews', reviewRoutes)

  app.use('operatoricon/:Operatorid', (req,res)=>{
    var operator_id = req.params.operator_id
    var sqlQuery = `SELECT operator.name, rating_review.numeric_rating from operator INNER JOIN rating_review ON rating_review.category = "operator" AND rating_review.reference = ${operator_id}` 
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